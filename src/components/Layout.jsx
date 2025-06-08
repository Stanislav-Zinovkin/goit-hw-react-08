import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import GoBackBtn from "./GoBackBtn/GoBackBtn";

const Layout = () => {
return(
    <>
    <AppBar/>
    <GoBackBtn/>
    <main><Outlet/>
    </main>
    </>
)
}
export default Layout;