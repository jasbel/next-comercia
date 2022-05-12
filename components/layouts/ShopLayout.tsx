import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  description: string;
  urlImg?: string;
  children: ReactNode;
}

export const ShopLayout = ({ title, description, urlImg, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Para las redes sociales */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        {urlImg && <meta name="og:image" content={urlImg} />}
      </Head>
      <nav><Navbar /></nav>
      {/* TODO: Sidebar */}
      <main style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}>{children}</main>
      {/* FOOTER */}
      <footer>{/* TODO: custom footer */}</footer>
    </>
  );
};
