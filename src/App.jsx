import React from "react";
import Contactform from "./components/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "./redux/contacts/selectors";

const HomePage = lazy(() => import("../src/pages/Home/HomePage"));
const RegistrationPage = lazy(()=> import('../src/pages/Registration/RegistrationPage'));
const LoginPage = lazy(() => import("../src/pages/LogIn/LogInPage"));
const AboutUsPage = lazy(() => import('../src/pages/AboutUs/AboutUsPage'));
const ContactPage = lazy(() => import('../src/pages/ContactPage/ContactPage'));
 
function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  
  
  useEffect (() => {
    dispatch(fetchContacts());
  }, [dispatch])
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Contactform />
      <SearchBox />
      {loading && !error && <Loader loading={loading} />}
      <ContactList />
    </div>
  );
}

export default App;
