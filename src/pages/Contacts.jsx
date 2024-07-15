import { Helmet } from "react-helmet";
import ContactForm from "../components/Contacts/ContactForm";
import ContactList from "../components/Contacts/ContactList";
import { OpenBook } from "../components/OpenBook";

export default function Contacts() {
  return (
    <OpenBook>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <ContactList />
    </OpenBook>
  );
}
