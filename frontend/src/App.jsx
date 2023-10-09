import { Route,Routes } from "react-router-dom"
import path from "./ultils/path"
import { useDispatch,useSelector } from 'react-redux'
import { Blog, Contact, DetailCart, DetailProduct, Home, Login, Products, Public, Services } from "./pages"
import { useState } from "react";
import ModalChildren from "./components/Modal/ModalChildren";
import Personal from "./pages/member/Personal";
import MemberLayout from "./pages/member/MemberLayout";
import Address from "./pages/member/Address";

function App() {
  const {isShowModal, modalChildren}=useSelector(state=>state.app)  
  return (
    <div className="relative">
        { isShowModal && <ModalChildren>{modalChildren}</ModalChildren> }
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.DETAIL__PRODUCT__CATEGORY__PID__TITLE} element={<DetailProduct/>}/>
          <Route path={path.PRODUCTS} element={<Products/>}/>
          <Route path={path.DETAIL_CART} element={<DetailCart/>}/>
          <Route path={path.BLOGS} element={<Blog/>}/>
          <Route path={path.CONTACT_US} element={<Contact/>}/>
          <Route path={path.MEMBER} element={<MemberLayout/>}>
             <Route path={path.PERSINAL} element={<Personal/>}/>
             <Route path={path.ADDRESS} element={<Address/>}/>
          </Route>
      </Route>
      <Route path={path.LOGIN} element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App
