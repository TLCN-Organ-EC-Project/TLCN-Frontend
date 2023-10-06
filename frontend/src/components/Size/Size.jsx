import React, { useState } from 'react'
import { size } from '../../ultils/contants'

const Size = () => {
    const [first, setfirst] = useState(size[0].id)
    return (
        <div className='flex justify-start py-2 gap-3 border border-b-gray-300 border-r-gray-100 border-l-gray-100'>
            {size.map((el) => (
                <div
                onClick={()=>{setfirst(el.id)}} 
                key={el.id}
                className={`${
                    first===el.id ? "bg-gray-800 text-white" : "hover:text-gray-500"
                  } bg-white text-gray border flex text-sm transition font-light items-center justify-center w-10 h-10 cursor-pointer
                  `}
                >
                    {el.size}
                </div>
            ))}
        </div>
    )
}

export default Size