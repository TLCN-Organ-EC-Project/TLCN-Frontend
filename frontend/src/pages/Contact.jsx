import ContactLeft from '../components/Contact/ContactLeft'
import ContactRight from '../components/Contact/ContactRight'
const Contact = () => {
  return (
    <div className="w-main h-full">
        <div className='md:flex md:justify-between md:py-2  sm:flex sm:flex-col sm:justify-center sm:text-center sm:items-center sm:w-full'>
          <ContactLeft/>
          <ContactRight/>
        </div>
    </div>
  )
}

export default Contact