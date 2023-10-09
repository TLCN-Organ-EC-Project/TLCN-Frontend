import ContactLeft from '../components/Contact/ContactLeft'
import ContactRight from '../components/Contact/ContactRight'


const Contact = () => {
  return (
    <div className="w-main h-full">
        <div className='flex justify-between py-2 '>
          <ContactLeft/>
          <ContactRight/>
        </div>
    </div>
  )
}

export default Contact