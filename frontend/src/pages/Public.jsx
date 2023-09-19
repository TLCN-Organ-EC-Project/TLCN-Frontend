import { Footer, Header, Navbar, Navigate } from "../components"
import { Outlet } from 'react-router-dom'

const Public = () => {
    return (
       <div className="w-full flex flex-col items-center ">
            <Header />
            <div className="w-main">
                  <Navbar />
                  <Navigate/>
            </div>
            <Outlet />
            <Footer />
       </div>
       
    )
}

export default Public