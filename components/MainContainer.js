import Head from "next/head";
import A from "./A";

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"roma test next js" + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Main"}></A>
        <A href={"/users"} text={"Users"}></A>
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
}

export default MainContainer;
