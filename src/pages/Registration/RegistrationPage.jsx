import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet-async";
export default function RegistrationPage() {

    return(
        <>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
        </>
    );
}
