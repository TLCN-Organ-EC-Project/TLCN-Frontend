import { Route, Routes } from "react-router-dom"
import path from "./ultils/path"
import { useDispatch, useSelector } from 'react-redux'
import { Blog, Contact, DetailCart, DetailProduct, Home, Login, Products, Public, Services } from "./pages"
import { useEffect, useState } from "react";
import ModalChildren from "./components/Modal/ModalChildren";
import Personal from "./pages/member/Personal";
import MemberLayout from "./pages/member/MemberLayout";
import Address from "./pages/member/Address";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/ForgotPassword/Modal";
import ForgotPasswordRentModal from "./components/ForgotPassword/ForgotPasswordRentModal";
import Cart from "./components/Cart/Cart";
import { useProductsByCategory } from "./hooks/useProductsByCategory";
import OrderPage from "./pages/OrderPage";
import ListOrder from "./pages/member/ListOrder";

function App() {

  const { isShowModal, modalChildren } = useSelector(state => state.app)
  return (
    <div className="relative">
      <ForgotPasswordRentModal />
      <Modal />
      {isShowModal && <ModalChildren>{modalChildren}</ModalChildren>}
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.DETAIL__PRODUCT__CATEGORY__PID__TITLE} element={<DetailProduct />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.DETAIL_CART} element={<DetailCart />} />
          <Route path={path.BLOGS} element={<Blog />} />
          <Route path={path.CONTACT_US} element={<Contact />} />
          <Route path={path.MEMBER} element={<MemberLayout />}>
            <Route path={path.PERSINAL} element={<Personal />} />
            <Route path={path.LISTORDER} element={<ListOrder />} />
          </Route>
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.ORDER} element={<OrderPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />
    </div>
  )
}

export default App
