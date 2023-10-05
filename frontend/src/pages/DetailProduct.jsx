import { useState, useCallback } from "react"
import { useParams } from "react-router-dom"
import Breadcumb from "../components/BreadCumb/Breadcumb"

const DetailProduct = () => {
  const {pid, productname}=useParams()
  console.log(pid,productname)
  return (
    <div className="w-main">
      <div className="border pl-3 h-[50px] flex items-center">
      <Breadcumb title={productname}/>
      </div>
    </div>
  )
}

export default DetailProduct