import React,{memo} from 'react'
import  clsx  from 'clsx'


const InputForm = ({label, disabled, register , errors, id , validate, type='text', placeholder,fullWidth,defaultValue, style}) => {
  return (
    <div className={clsx('flex justify-between text-center items-center h-[42px] gap-4', style)}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          id={id}
          {...register(id, validate)}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx('form-input my-auto border-gray-300',fullWidth &&'w-full')}
          defaultValue={defaultValue}
        />
        {errors[id] && <small className='text-xs text-red-500'>{errors[id]?.message}</small>}
    </div>
  )
}

export default memo(InputForm)