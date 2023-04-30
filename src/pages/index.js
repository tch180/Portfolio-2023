import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import pic1 from "../../public/images/profile/pic1BgRemoved.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../../src/components/Icons";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/lightbulb.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<T/R>"}</title>
        <meta name="description" content="Portfolio" />
     

      </Head>
      <main className="flex items-center text-light w-full min-h-screen dark:text-dark " >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={pic1}
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                alt="Picture of developer"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200) 50vw, 50vw
                "
              />
            </div>
            <div className="text-light w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center" >
              <AnimatedText text="Your designs into Reality" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                ' />

              <p className="my-4 text-base font-medium dark:text-dark md:text-sm sm:text-xs">
                Maximize your web app's potential with a skilled MERN developer.
                Hire one now and watch your vision come to life.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center" >
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-darkSecondary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base "
                >
                  Resume<LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link className="ml-4 text-lg font-medium capitalize text-light underline rounded-lg p-2.5 px-6 bg-darkSecondary dark:text-light md:text-base " href="mailto:thopstadredner@gmail.com" target={"_blank"}>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightbulb} alt="Picture of developer" className="w-full h-auto md:hidden"/>
        </div>
      </main>
    </>
  );
}
