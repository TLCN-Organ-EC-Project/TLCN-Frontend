import { useState, useCallback, useEffect } from "react";
import { apiResgister, apiLogin } from "../apis/user";
import { useGetListProvider } from "../hooks/useProductsByCategory";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EarthCanvas } from "../components/Canvas";
import { InputField } from '../components/Input'
import { validate } from '../ultils/helper'
import { useForm } from 'react-hook-form';
import { slideIn } from '../motion/motion'
import { motion } from "framer-motion";
import { styles } from '../styles/styles'
import { Button } from "../components";
import { login } from "../store/user/userSlice";
import path from '../ultils/path'
import Swal from 'sweetalert2'
import useRentModal from '../hooks/useRentModal'
import SelectProvide from "../components/SelectOption/SelectProvide";

const Login = () => {
  const { data: listProvider, isLoading: isFetchingData } = useGetListProvider()
  const rentModal = useRentModal()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [invalidFields, setInvalidFields] = useState([])
  const { register, watch, control } = useForm()
  const resetPayload = () => {
    setPayload({
      email: '',
      password: '',
      username: '',
      full_name: '',
      address: '',
      provider: '',
      phone: '+84',
      role: 'Buyer',
    })
  }
  const [payload, setPayload] = useState({
    email: '',
    username: '',
    full_name: '',
    address: '',
    password: '',
    provider: '',
    phone: '+84',
    role: 'Buyer'
  })

  useEffect(() => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      provider: watch('provider'),
    }));
  }, [watch('provider')]);

  const handleSubmit = useCallback(async () => {
    resetPayload()
    const { email, full_name, address, provider, phone, role, ...data } = payload
    const invalids = isRegister ? validate(payload, setInvalidFields) : validate(data, setInvalidFields)
    if (invalids === 0) {
      if (isRegister) { 
        setLoading(true)
        const response = await apiResgister(payload)
        setLoading(false)
        if (response.data) {
          Swal.fire('Congratulation', 'success').then(() => {
            setIsRegister(false)
            navigate(`/${path.LOGIN}`)
          })
        } else {
          Swal.fire('Oops!', 'Error,Please register again')
        }
      } else {
        const response = await apiLogin(data)
        if (response.data) {
          setLoading(true);
          const token = response.headers.get('x-access-token');
          const refreshToken = response.headers.get('x-refresh-token');
          setLoading(false)
          dispatch(login({
            isLoggedIn: true,
            token: token,
            current: response.data,
            refreshToken: refreshToken
          }))
          navigate(`/${path.HOME}`)
        } else Swal.fire('Oops!', 'Error, Please login again')
      }
    } else {
      Swal.fire('Oops!', 'error')
    }
  }, [watch('provider'), payload])



  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-5 overflow-hidden bg-blue-300 h-[734px] relative`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
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
                  value={payload.full_name}
                  setValue={setPayload}
                  nameKey='full_name'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
                <SelectProvide
                  id='provider'
                  register={register}
                  options={listProvider?.map((el) => (el))}
                  setInvalidFieds={setInvalidFields}
                />
                <InputField
                  value={payload.phone}
                  setValue={setPayload}
                  nameKey='phone'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
              </div>
            }

            {isRegister &&
              <div className="flex gap-2">

                <InputField
                  value={payload.email}
                  setValue={setPayload}
                  nameKey='email'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
                <InputField
                  value={payload.address}
                  setValue={setPayload}
                  nameKey='address'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
              </div>
            }
            <InputField
              value={payload.username}
              setValue={setPayload}
              nameKey='username'
              invalidFields={invalidFields}
              setInvalidFieds={setInvalidFields}
            />
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
            btnLogin
            handleOnClick={handleSubmit}
          />

          <div className="flex items-center justify-between my-2">
            {!isRegister &&
              <span onClick={rentModal.onOpen} className="text-gray-700 hover:underline cursor-pointer ">Forgot your password ?</span>
            }
            {!isRegister &&
              <span onClick={() => setIsRegister(true)} className="text-gray-700 hover:underline cursor-pointer">Create account ?</span>
            }
            {
              isRegister &&
              <span onClick={() => setIsRegister(false)} className="text-gray-700 hover:underline w-full text-center">Go Login ?</span>
            }
            <Link to={`/${path.HOME}`}>
              <span className="hover:underline text-gray-700 inline-block mr-3">Go Home ?</span>
            </Link>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className='xl:flex-1 xl:h-auto md:h-[600px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>

  )
}

export default Login