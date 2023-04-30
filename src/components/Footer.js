import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-light font-mediume text-lg dark:border-darkSecondary sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          <span className="animate-waving-hand inline-block"  >🖖</span>
          <Link className="underline underline-offset-2" href="https://tredner.dev" target={"_blank"}> T/R</Link>
        </div>
        <Link href="/" target={"_blank"} >TEA</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
