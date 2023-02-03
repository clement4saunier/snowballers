import Footer from "./Footer";
import type { JSX, Component } from "solid-js";

type Component<P = {children: JSX.Element, header: JSX.Element}> = (props: P) => JSX.Element;

const Page: Component = ({ children, header}: P) => (
  <div className="page">
    {header}
    <div>{children}</div>
    <Footer />
  </div>
);

export default Page;
