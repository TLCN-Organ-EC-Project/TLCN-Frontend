import { useSelector } from "react-redux";
import { Footer, Header, Navbar, Navigate } from "../components"
import { Outlet } from 'react-router-dom'
import { apiRefreshToken } from "../apis/user";
import { useEffect } from "react";
import SelectProvide from "../components/SelectOption/SelectProvide";

const Public = () => {
    const { refreshToken } = useSelector(state => state.user);
    const refreshTokenString=JSON.stringify(refreshToken)
    const handleRefreshToken = async () => {
        try {
            const response = await apiRefreshToken(refreshTokenString)
            if (response) {
            }
        } catch (error) {
            console.error('Error refreshing token', error)
        }
    }
    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
            handleRefreshToken();
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="w-full flex flex-col items-center ">
            <Header />
            <div className="w-main">
                <Navbar />
                <Navigate />
            </div>
            <Outlet />
            <Footer />
            <SelectProvide/>
        </div>

    )
}

export default Public