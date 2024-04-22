import React, { useEffect, useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FiDownload, FiLinkedin, FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import ProjectsCard from "./ProjectsCard";
import Technologies from "./Technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import { featuredProects, otherProjects } from "../constants/Home";
import SplitType from "split-type";
import gsap from "gsap";

export default function Hero() {
  const myName = useRef(null);
  const myDescription = useRef(null);

  useEffect(() => {
    if (myName.current) {
      const name = SplitType.create(myName.current, { types: "chars" });
      const nameAnimation = name.chars;

      gsap.fromTo(
        nameAnimation,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
        }
      );
    }
    if (myDescription.current) {
      const description = SplitType.create(myDescription.current, {
        types: "lines",
      });
      const descriptionAnimation = description.lines;

      gsap.fromTo(
        descriptionAnimation,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
        }
      );
    }
  }, []);

  return (
    <div className="text-slate-200 px-[1rem] md:px-[4rem] pt-10">
      <div className="flex items-start justify-between flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full lg:sticky top-5">
          <p className="font-normal text-lg text-slate-400">Hello, I'm</p>

          <h2
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            ref={myName}
            className="text-3xl lg:text-4xl font-medium mt-3 tracking-tighter"
          >
            Ladenika Peter.
          </h2>

          <div className="mt-3">
            <p
              ref={myDescription}
              className="font-extralight text-sm max-w-xs lg:max-w-md"
              style={{
                lineHeight: "23px",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              I am an experienced front-end developer and
              <br />I build amazing products for the web.
            </p>
          </div>

          <div className="mt-10 flex lg:hidden">
            <a
              href="https://github.com/LadenikaPeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size="1.4rem" />
            </a>
            <a
              className="mx-8"
              href="https://www.linkedin.com/in/peter-ladenika/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size="1.4rem" />
            </a>
          </div>

          <div className="mt-10 hidden lg:flex items-center">
            <div className="w-16 h-16">
              <img
                src="/memoji.png"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="lg:ml-7 flex items-center">
              <a
                className="mr-10 shadow-xl flex border px-3 py-2 rounded-md border-gray-700 text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="mailto:peterladenika@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMailOutline size="0.8rem" />
                Email
              </a>
              <a
                className="flex text-slate-200 border px-3 py-2 rounded-md border-gray-700 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="https://drive.google.com/file/d/1K2XBSXGzt_Q0WqCrQl90HfEF_6AYIsvz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size="0.8rem" />
                Resume
              </a>
            </div>
          </div>

          <div className="mt-10 hidden lg:block">
            <Technologies />
          </div>
        </div>

        <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
          <p className="text-slate-400 my-4 text-sm flex items-center">
            Featured <IoMdArrowDropright />
          </p>

          <div className="lg:hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".project_prev_button",
                nextEl: ".project_next_button",
              }}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              {featuredProects?.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <ProjectsCard data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex justify-end">
              <button className="project_prev_button mr-7">
                <BsFillArrowLeftCircleFill size="1.7rem" color="#5f6061" />
              </button>

              <button className="project_next_button">
                <BsFillArrowRightCircleFill size="1.7rem" color="#5f6061" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            {featuredProects?.map((item) => {
              return (
                <div key={item.name}>
                  <ProjectsCard data={item} />
                </div>
              );
            })}
          </div>

          <p className="text-slate-400 mb-4 mt-10 text-sm flex items-center">
            Others <IoMdArrowDropright />
          </p>

          <div className="lg:hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".other_project_prev_button",
                nextEl: ".other_project_next_button",
              }}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              {otherProjects?.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <ProjectsCard data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex justify-end">
              <button className="other_project_prev_button mr-7">
                <BsFillArrowLeftCircleFill size="1.7rem" color="#5f6061" />
              </button>

              <button className="other_project_next_button">
                <BsFillArrowRightCircleFill size="1.7rem" color="#5f6061" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            {otherProjects?.map((item) => {
              return (
                <div key={item.name}>
                  <ProjectsCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-14 lg:hidden">
        <Technologies />
      </div>

      <div className="w-14 h-14 mt-20 lg:hidden mx-auto">
        <img src="/memoji.png" className="w-full h-full object-cover" />
      </div>

      <div className="text-center mt-3">
        <a
          href="mailto:peterladenika@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden text-[10px] text-slate-600"
        >
          peterladenika@gmail
        </a>
      </div>
    </div>
  );
}
