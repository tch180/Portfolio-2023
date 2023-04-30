import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import oneStory from "../../public/images/profile/oneStory.png";
import { motion } from "framer-motion";
import fosterConnect from "../../public/images/profile/fosterConnect.png";
import optum3 from "../../public/images/profile/optum3.png";
import dashboard1 from "../../public/images/profile/dashboard1.png";
import mhr from "../../public/images/profile/MHR.png";
import contactkeeper from "../../public/images/profile/contactkeeper.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-darkSecondary bg-dark shadow-2xl p-12 relative rounded-br-2xl dark:bg-light dark:text-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkSecondary rounded-br-3xl dark:text-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200) 50vw, 50vw
                "
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primaryDark font-medium text-xl dark:text-dark ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-light dark:text-dark">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light  p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-darkSecondary bg-dark p-6 relative dark:bg-light ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-darkSecondary rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primaryDark font-medium text-xl dark:text-dark ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex justify-between items-center ">
          <Link
            href={link}
            target="_blank"
            className="  text-light text-lg font-semibold underline dark:text-dark"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>TR | Projects</title>
        <meta name="description" content="Projects page" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-dark">
        <Layout className="pt-16">
          <AnimatedText text="Bringing ideas to life, one line of code at a time." />
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-16 ">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="oneStory"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                img={oneStory}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project"
                title="Eagle Dashboard"
                img={dashboard1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              
              <Project
                type="Project"
                title="Customer Dashboard"
                img={optum3}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                type="Featured Project"
                title="Foster Connect"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                img={fosterConnect}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type="Project"
                title="Gilded Events"
                img={mhr}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type="Project"
                title="Contact Keeper"
                img={contactkeeper}
                link="https://kepperconnect.herokuapp.com/login"
                github="https://github.com/tch180/contactKeeper"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
