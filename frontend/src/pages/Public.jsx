import { Footer, Header, Navbar, Navigate } from "../components"
import { Outlet } from 'react-router-dom'

const Public = () => {
    return (
       <div className="w-full flex flex-col items-center ">
            <Header />
            <Navbar />
            <Navigate/>
            <Outlet />
            <Footer />
       </div>
       
    )
}

export default Public