import { Helmet } from "react-helmet";
import { ClosedBook } from "../components/ClosedBook";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ClosedBook />
    </div>
  );
}
