import React from "react";
import SectionTitle from "./SectionTitle";
import SkillSets from "./SkillSets";
import GIF from "../assets/developer_image.gif";
function About() {
  return (
    <section className="about_me py-20 lg:py-24">
      <div className="mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="flex flex-col md:flex-row justify-items-center items-center text-slate-600 dark:text-slate-400">
          <div className="w-full h-full flex flex-col basis-full sm:basis-1/2">
            <div className="text-lg font-semibold ">
              <p className="mb-3 text-md md:text-lg">
                Hello! My name is Omkar and I pursued my degree in BE. Electronics and cummunication. I started my career in web development started back in 2016. I have 5+ years of experince as a frontend devloper working on various projects and clients. I’ve had the privilege of working at{" "}
                <a href="http://www.darshangroups.in/" target={"_blank"} rel={"noopener noreferrer"} className="font-semibold dark:text-indigo-400">
                  web design agency
                </a>
                ,{" "}
                <a href="https://www.targetclose.com/" target={"_blank"} rel={"noopener noreferrer"} className="font-semibold dark:text-indigo-400">
                  a digital makerting
                </a>
                . Currently i'm working on E-commerce webapp and Business Dashboard at{" "}
                <a href="https://www.v3it.com/" target={"_blank"} rel={"noopener noreferrer"} className="font-semibold dark:text-indigo-400">
                  V3IT
                </a>
              </p>
            </div>
            <SkillSets />
          </div>

          <div className="basis-full text-center max-w-sm md:max-w-none mx-auto sm:basis-1/2 p-4 md:px-8 lg:px-12">
            <img src={GIF} width={400} alt="githubusercontent" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500  min-h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
