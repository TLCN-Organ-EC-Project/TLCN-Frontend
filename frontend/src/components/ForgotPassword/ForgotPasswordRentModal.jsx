import React, { useState, useMemo } from 'react'
import useRentModal from '../../hooks/useRentModal'
import Modal from './Modal'
import { useForm } from 'react-hook-form';
import Heading from '../Heading/Heading'
import InputForGot from '../Input/InputForGot';
import axios from 'axios';
import { toast } from 'react-toastify'


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
            password: '',
            confirmpassword: '',
            otp: '',
        },
    });

    const onBack = () => {
        setStep((value) => value - 1)
    }
    const onNext = () => {
        setStep((value) => value + 1)
    }
    const actionLabel = useMemo(() => {
        if (step === STEPS.OTP) {
            return 'Submit'
        }
        return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.EMAIL) {
            return undefined;
        }
        return 'Back'
    }, [step])

    const onSubmit = () => {      
        if (step === STEPS.EMAIL) {
            const email = watch('email');
            const username = watch('username');
            const combinedObject = { email, username };
            axios.post('https://gin-ec-clothing.onrender.com/api/forgotpassword', combinedObject)
                .then(() => {
                    setStep(STEPS.MES)
                })
                .catch(() => {
                    console.log('error')
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        if (step === STEPS.OTP) {
            const username = watch('username');
            const first_password = watch('first_password');
            const otpcode = watch('otpcode');
            const second_password = watch('second_password');
            const combinedObject = { first_password, otpcode,second_password,username };
            setIsLoading(true)
            axios.post('https://gin-ec-clothing.onrender.com/api/resetpassword', combinedObject)
                .then(() => {
                    rentModal.onClose();
                    setStep(STEPS.EMAIL)
                    reset()
                    toast.success('Update success')
                })
                .catch(() => {
                    rentModal.onClose();
                    setStep(STEPS.EMAIL)
                    toast.error('Can not update')
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
        if (step !== STEPS.OTP) {
            return onNext();
        }
    }

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading title=' ' subtitle='' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
            </div>
        </div>
    )

    if (step === STEPS.EMAIL) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Please enter your email address"
                    subtitle="--- Your email and username ---"
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

    if (step === STEPS.MES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Please check your email and write OTPCODE next step "
                    subtitle="--- Check Email ---"
                />
            </div>
        )
    }
    if (step === STEPS.OTP) {
        bodyContent = (
            <div className="flex flex-col gap-4">
                <Heading
                    title="Please enter your email address"
                    subtitle="--- Your email and username ---"
                />
                <InputForGot
                    id="username"
                    label="Username"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <InputForGot
                    id="first_password"
                    label="Password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type='password'
                    required
                />
                <hr />
                <InputForGot
                    id="second_password"
                    label="Confirm password" 
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type='password'
                    required
                />
                <hr />
                <InputForGot
                    id="otpcode"
                    label="OTP HERE"
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
            title='You Forgot PassWord ? '
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    )
}

export default ForgotPasswordRentModal