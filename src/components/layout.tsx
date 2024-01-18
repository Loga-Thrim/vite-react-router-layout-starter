import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill">{children}</main>
      <Footer />
    </div>
  );
}
