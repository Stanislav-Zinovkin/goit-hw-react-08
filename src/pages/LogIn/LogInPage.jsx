import LoginForm from "../../components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";
export default function LoginPage() {
    return (
        <> 
            <Helmet>
               <title>Login</title>
            </Helmet>
            <LoginForm />
        </>
    );
}

