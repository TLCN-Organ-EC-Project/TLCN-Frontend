export const validate = (payload, setInvalidFields) => {
    let invalids = 0
    const formatPayload = Object.entries(payload)
    for (let arr of formatPayload) {
        if (arr[1]?.trim() === '') {
            invalids++
            setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Require this field .' }])
        }
    }
    for (let arr of formatPayload) {
        if (arr[1] === undefined) {
            invalids++
            setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Require this field .' }])
        }
    }
    for (let arr of formatPayload) {
        switch (arr[0]) {
            case 'email':
                const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
                if (!arr[1].match(regex)) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Email invalid.' }])
                }
                break;
            case 'password':
                if (arr[1].lenght < 6) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Password minimum 6 characters.' }])
                }
                break;
            default:
                break;
        }
    }
    return invalids
}


export const formatNumber = number => {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const truncateString = (originalString, maxWords) => {
    let truncatedString = originalString;
    const words = originalString.split(" ");

    if (words.length > maxWords) {
        truncatedString = words.slice(0, maxWords).join(" ") + " ...";
    }
    return truncatedString;
}