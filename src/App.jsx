import React from "react";
import Contactform from "./components/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "./redux/contactsSlice";

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
