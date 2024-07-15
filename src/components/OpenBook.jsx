import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const OpenBook = ({ children }) => {
  return (
    <main className="section">
      <div className="book">{children}</div>
    </main>
  );
};
