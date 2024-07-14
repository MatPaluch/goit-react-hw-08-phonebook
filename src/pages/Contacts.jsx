import { Helmet } from "react-helmet";
import ContactForm from "../components/Contacts/ContactForm";
import ContactList from "../components/Contacts/ContactList";

export default function Contacts() {
  return (
    <main className="section">
      <div className="book">
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <ContactForm />
        <ContactList />
      </div>
    </main>
  );
}
