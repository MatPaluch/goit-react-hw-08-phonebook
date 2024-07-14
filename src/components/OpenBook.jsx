import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const OpenBook = () => {
  return (
    <main className="section">
      <div className="book">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
