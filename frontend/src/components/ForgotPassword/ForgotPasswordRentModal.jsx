import React, { useState,useMemo } from 'react'
import useRentModal from '../../hooks/useRentModal'
import Modal from './Modal'
import { useForm } from 'react-hook-form';
import Heading from '../Heading/Heading'
import InputForGot from '../Input/InputForGot';


const STEPS = {
    EMAIL: 0,
    MES: 1,
    OTP: 2,
}

const ForgotPasswordRentModal = () => {
    const [step, setStep] = useState(STEPS.EMAIL)
    const rentModal = useRentModal()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            email: '',
            username: '',
        },
    });
    const onBack = () => {
        setStep((value) => value - 1)
    }
    const onNext = () => {
        setStep((value) => value + 1)
    }
    const actionLabel=useMemo(()=>{
        if(step===STEPS.OTP){
          return 'Submit'
        }
        return 'Next'
      },[step])

      const secondaryActionLabel=useMemo(()=>{
        if (step===STEPS.EMAIL){
          return undefined;
        }
        return 'Back'
      },[step])


      const onSubmit=()=>{
        
      }

      let bodyContent=(
        <div className='flex flex-col gap-8'>
            <Heading title='Which of these best describes your place ? ' subtitle='Pick the category'/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
            </div>
        </div>
      )

      if(step===STEPS.EMAIL){
        bodyContent=(
            <div className="flex flex-col gap-8">
            <Heading
              title="How would you describe your place?"
              subtitle="Short and sweet works best!"
            />
            <InputForGot
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <hr />
            <InputForGot
              id="username"
              label="Username"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
        </div>
        )
      }
    return (
        <Modal
        isOpen={rentModal.isOpen}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step===STEPS.EMAIL ? undefined : onBack}
        title='You Forgot PassWord ? !'
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    )
}

export default ForgotPasswordRentModal