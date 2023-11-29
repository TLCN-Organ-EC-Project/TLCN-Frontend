import ContactLeft from '../components/Contact/ContactLeft'
import ContactRight from '../components/Contact/ContactRight'
const Contact = () => {
  return (
    <div className="w-main h-full">
        <div className="lg:flex lg:justify-between sm:grid sm:grid-col-2 sm:justify-center sm:text-center py-2 gap-5 px-10">
           <ContactLeft/>
            <ContactRight/>
        </div>
    </div>
  )
}

export default Contact