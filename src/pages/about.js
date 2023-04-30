import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import iceman from "../../public/images/profile/iceman.png";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const montionValue = useMotionValue(0);

  const springValue = useSpring(montionValue, { duration: 3000 });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      montionValue.set(value);
    }
  }, [isInView, value, montionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span className="inline-block text-8xl font-bold lg:text-md xs:text-base xs:items-center	" ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <Head>
        <title>TR | About</title>
        <meta name="description" content="About page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-dark">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="text-light text-8xl font-semibold mx-16 md:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 mt-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 xs:text-sm">
              <h2 className="mb-4 text-4xl font-bold uppercase text-light/50 dark:text-dark/50">
                Bio
              </h2>
              <p className="font-medium text-3xl xs:text-lg">
                Hi there!
                <br/> My name is Tory Redner, and I'm a highly motivated and
                solutions-oriented software engineer with a passion for creating
                cutting-edge web applications. With experience in both front-end
                and back-end development, I excel in Full Stack Web Development
                roles and have a talent for troubleshooting, custom-built
                systems, software and hardware deployment, remote and onsite
                support, and small network management/cloud setup.
              </p>

              <p className="my-4 font-medium text-3xl  xs:text-lg">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium text-3xl  xs:text-lg">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-light bg-dark p-8 dark:bg-black dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light dark:bg-dark  " />
              <Image
                src={iceman}
                alt="Picture of Tory "
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 xl:!text-sm" >
              <div className="flex flex-col items-end justify-center xl:items-center mx-2 xs:items-center">
                <span className="inline-block text-7xl font-bold md:text-2xl sm:text-2xl xs:text-sm">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-darkSecondary/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center mx-2 xs:items-center">
                <span className="inline-block text-7xl font-bold md:text-2xl sm:text-2xl xs:text-sm" >
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-darkSecondary/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Students taught
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center mx-2 xs:items-center">
                <span className="inline-block text-7xl font-bold md:text-2xl sm:text-2xl xs:text-sm">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-darkSecondary/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Years XP
                </h2>
              </div>

            
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </div>
  );
};

export default about;
