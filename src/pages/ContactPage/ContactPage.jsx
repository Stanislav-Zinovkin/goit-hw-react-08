import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox";
import ContactForm from "../../components/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return(
        <>
        <title>Your contacts</title>
        <ContactForm />
        <SearchBox />
        <div>{isLoading && 'In progress...'}</div>
        <ContactList />
        </>
    );
}