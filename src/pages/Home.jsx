import { Helmet, HelmetProvider } from "react-helmet-async";
import { ClosedBook } from "../components/ClosedBook";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ClosedBook />
    </HelmetProvider>
  );
}
