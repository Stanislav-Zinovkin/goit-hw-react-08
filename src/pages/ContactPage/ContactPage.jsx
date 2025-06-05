import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox";
import Loader from "../../components/Loader/Loader"
import ContactForm from "../../components/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return(
        <>
        <Helmet>
           <title>Contacts</title>
         </Helmet>
        <ContactForm />
        <SearchBox />
        <>{isLoading && <Loader />}</>
        <ContactList />
        </>
    );
}