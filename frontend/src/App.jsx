import { Route,Routes } from "react-router-dom"
import path from "./ultils/path"
import { DetailCart, DetailProduct, Home, Login, Products, Public } from "./pages"

function App() {

  return (
    <>
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.DETAIL__PRODUCT__CATEGORY__PID__TITLE} element={<DetailProduct/>}/>
          <Route path={path.PRODUCTS} element={<Products/>}/>
          <Route path={path.DETAIL_CART} element={<DetailCart/>}/>
      </Route>
      <Route path={path.LOGIN} element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
