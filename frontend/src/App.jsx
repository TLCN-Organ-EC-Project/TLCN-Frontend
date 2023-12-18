import { Route, Routes } from "react-router-dom"
import path from "./ultils/path"
import { useSelector } from 'react-redux'
import { Contact, DetailCart, DetailProduct, Home, Login, Products, Public } from "./pages"
import ModalChildren from "./components/Modal/ModalChildren";
import Personal from "./pages/member/Personal";
import MemberLayout from "./pages/member/MemberLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/ForgotPassword/Modal";
import ForgotPasswordRentModal from "./components/ForgotPassword/ForgotPasswordRentModal";
import OrderPage from "./pages/OrderPage";
import ListOrder from "./pages/member/ListOrder";
import ModalComment from "./components/comment/ModalComment";
import { DetailProductProvider } from "./context/DetailProductContext";

function App() {

  const { isShowModal, modalChildren } = useSelector(state => state.app)
  return (
    <div className="relative">
      <DetailProductProvider>
        <ForgotPasswordRentModal />
        <ModalComment />
        <Modal />
        {isShowModal && <ModalChildren>{modalChildren}</ModalChildren>}
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.DETAIL__PRODUCT__CATEGORY__PID__TITLE} element={<DetailProduct />} />
            <Route path={path.PRODUCTS} element={
                <Products />
            } />
            <Route path={path.DETAIL_CART} element={<DetailCart />} />
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
      </DetailProductProvider>
    </div>
  )
}

export default App
