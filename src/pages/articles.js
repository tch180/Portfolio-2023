import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import techArticle from "../../public/images/profile/techArticle.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import article1 from "../../public/images/profile/article1.png"

const FramerImage = motion(Image);

const MovingImage = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handelMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handelMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handelMouse}
      onMouseLeave={handelMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-dark border border-solid border-light rounded-2xl dark:bg-light dark:text-dark ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkSecondary rounded-br-3xl dark:bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-darkSecondary font-semibold dark:text-darkSecondary/75 ">{time}</span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
      


    <motion.li
    initial={{ y:200 }}
    whileInView={{y:0 ,transition:{duration:0.4, "ease":"easeInOut"}}}
    viewport={{once:true}}
    className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
    justify-between bg-dark text-light first:mt-0 border border-solid border-darkSecondary border-r-4 border-b-4 dark:border-dark dark:bg-light dark:text-dark   sm:flex-col ">
      <MovingImage
        img={img}
        title={title}
        link="/"
      />

      <span className="text-darkSecondary font-semibold pl-4 dark:text-dark sm:self-start sm:pl-0 xs:text-sm ">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>TR | Articles</title>
        <meta name="description" content="Articles Page" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-dark">
        <Layout className="pt-16">
          <AnimatedText text="Exploring the world of tech, one article at a time." className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          " />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="Transforming Your Windows Terminal into a Mac-Like Experience"
              time="4 min read"
              summary="If you’re a Windows user who admires the sleek and efficient Mac terminal, you don’t have to envy it any longer. With a few simple steps, you can turn your Windows terminal into a Mac-like experience by installing Clink and Oh My Posh. Additionally, we’ll also guide you through the process of installing Git, which will empower you to use powerful Linux commands"
              link="https://medium.com/@thopstadredner/transforming-your-windows-terminal-into-a-mac-like-experience-1ec95d206114"
            />

            <FeaturedArticle
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              time="5 min read"
              summary="Excepteur id et do labore ad ullamco id do ipsum nostrud aliqua dolor et. Exercitation tempor pariatur laboris nisi deserunt id ut sunt enim commodo enim. Nostrud esse commodo adipisicing in do voluptate deserunt reprehenderit mollit ea consequat ut ea laborum. Dolor Lorem laboris adipisicing dolor laborum mollit est ad anim aliqua pariatur.
            "
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="May 2021"
              link="/"
            />
            <Article
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="May 2021"
              link="/"
            />
            <Article
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="May 2021"
              link="/"
            />
            <Article
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="May 2021"
              link="/"
            />
            <Article
              img={techArticle}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="May 2021"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
