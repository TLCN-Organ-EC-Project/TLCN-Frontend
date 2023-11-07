import React,{memo} from 'react'
import clsx from 'clsx'

const SelectProvide = ({ defaultValue,setInvalidFieds,validate,fullWidth, id, register, options = [] }) => {
  return (
    <div>
      <select defaultValue={defaultValue} className={clsx('form-select my-auto py-2', fullWidth && 'w-full')} {...register(id, validate)} id={id}
       onFocus={()=> setInvalidFieds && setInvalidFieds([])}
      >
        <option value="">---Provider---</option>
        {options?.map((el, index) => {
          return <option key={index} value={el}>{el}</option>;
        })}
      </select>
     
    </div>
  )
}

export default memo(SelectProvide)