import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { EarthCanvas } from "../components/Canvas";
import { motion } from "framer-motion";
import {styles} from '../styles/styles'
import {slideIn} from '../motion/motion'
import {InputField} from '../components/Input'
import { Button } from "../components";
import path from '../ultils/path'

const Login = () => {
 

  const [isRegister, setIsRegister] = useState(false)
  const [invalidFields, setInvalidFields]=useState([])


  const handleSubmit=()=>{

  }

  const handleForgotPassWord=()=>{

  }

  const [payload, setPayload] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
  })

  return (
    <div
    className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-blue-300 h-[706px] relative`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 px-8 rounded-2xl justify-center items-center text-center'
    >
      <h3 className={styles.sectionHeadText}>{isRegister ? 'Register' : 'Login'}</h3>
      <form
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col gap-5'>
          {isRegister &&
            <div className="flex  gap-2">
              <InputField
                value={payload.firstname}
                setValue={setPayload}
                nameKey='firstname'
                invalidFields={invalidFields}
                setInvalidFieds={setInvalidFields}
              />
              <InputField
                value={payload.lastname}
                setValue={setPayload}
                nameKey='lastname'
                invalidFields={invalidFields}
                setInvalidFieds={setInvalidFields}
              />
            </div>
          }
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey='email'
            invalidFields={invalidFields}
            setInvalidFieds={setInvalidFields}
          />
          {isRegister &&
            <InputField
              value={payload.phone}
              setValue={setPayload}
              nameKey='phone'
              invalidFields={invalidFields}
              setInvalidFieds={setInvalidFields}
            />
          }
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey='password'
            type='password'
            invalidFields={invalidFields}
            setInvalidFieds={setInvalidFields}
          />
        </label>

        <Button
          children={isRegister ? ' Register ' : ' Login '}
          handleOnClick={handleSubmit}
        />

        <div className="flex items-center justify-between my-2">
          {!isRegister &&
            <span  onClick={handleForgotPassWord}  className="text-gray-700 hover:underline">Forgot your password ?</span>
          }
          {!isRegister &&
            <span onClick={() => setIsRegister(true)} className="text-gray-700 hover:underline">Create account ?</span>
          }
          {
            isRegister &&
            <span onClick={() => setIsRegister(false)} className="text-gray-700 hover:underline w-full text-center">Go Login ?</span>
          }
          <Link to={`/${path.HOME}`}>
              <span className="hover:underline text-gray-700 ">Go home?</span>
          </Link>
        </div>
      </form>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas />
    </motion.div>
  </div>

  )
}

export default Login