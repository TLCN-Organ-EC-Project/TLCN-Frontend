import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer, Header, Navbar, Navigate } from "../components"
import { Outlet } from 'react-router-dom'
import { apiRefreshToken } from "../apis/user";

const Public = () => {
    const { refreshToken } = useSelector(state => state.user);
    const refreshTokenString=JSON.stringify(refreshToken)
    const nice='v2.local.39pvq9wlqhcijR5yD2wuiBujbAeBy5JaqayXjvrHGIM2--ypa2dmmjcQCRQltoc55bFdyMhgmYg0QFaKlScFpAW5vrAOehHeNRwflA0so0yP9b6B63QDDwXVc0mPF7eVrIqMs0qHGYmPphenBkFyAg4yDxpMkndYv8UPiZrKrkdaaWaDXPwGQQjJyD8P_3s1JlYgUHUj2a8PMiBvmxLuxepSUoJzambSR55CZfGGcVqd8WU2Uuk63xqlbolBfaeIIK8ArToNm4o.bnVsbA'
    console.log(refreshTokenString)
    const handleRefreshToken = async () => {
        try {
            const response = await apiRefreshToken(nice)
            console.log(response)
            if (response) {
            }
        } catch (error) {
            console.error('Error refreshing token', error)
        }
    }
    useEffect(() => {
        const delay = 5000;
        const timeoutId = setTimeout(() => {
            handleRefreshToken();
        }, delay);
        return () => clearTimeout(timeoutId);
    }, [nice]);
    
    return (
        <div className="w-full flex flex-col items-center ">
            <Header />
            <div className="w-main">
                <Navbar />
                <Navigate />
            </div>
            <Outlet />
            <Footer />
        </div>

    )
}

export default Public