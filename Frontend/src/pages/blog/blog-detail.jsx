import React from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/navbar";
import Blogs from "../../components/blogs";
import BlogSidebar from "../../components/blog-sidebar";
import Footer from "../../components/footer";

import blogImg from "../../assets/images/blog/9.jpg";
import { blogData } from "../../data/data";

import { packages } from "../../data/data";
import { FiMapPin } from "../../assets/icons/vander";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

const heroSlides = [
  {
    id: 1,
    imgUrl: "../../assets/images/bg/6.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
  {
    id: 2,
    imgUrl: "../../assets/images/bg/2.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
  {
    id: 3,
    imgUrl: "../../assets/images/bg/1.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
];

export default function BlogDetail() {
  let params = useParams();
  let id = params.id;
  let data = blogData.find((item) => item.id === parseInt(id));
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={true}
        manuclass="justify-end nav-light"
      />
      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:pb-8 text-center lg:mt-10">
            <h3 className="lg:text-4xl text-2xl leading-normal tracking-wider font-semibold text-white">
              {data?.title
                ? data.title
                : "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes"}
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Purulia</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Blog Detail
            </li>
          </ul>
        </div>
      </section>

      <section className="md:py-12 py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:flex-[0.3] flex-1">
              <img
                src={data?.image ? data.image : blogImg}
                alt=""
                className="h-[300px] w-full lg:w-auto object-cover rounded-md"
              />
            </div>
            <div className="lg:flex-[0.7] flex-1 p-6">
              <h1 className="font-bold text-xl text-black ">Heading h1 </h1>
              <p className="text-slate-400">
                The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.
                The advantage of its Latin origin and the relative meaninglessness of Lorem Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.

              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section className="md:pb-16 md:py-6 pb-6 ">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="lg:flex-[0.3] flex-1">
              <img
                src={data?.image ? data.image : blogImg}
                alt=""
                className="h-[300px] w-full lg:w-auto object-cover rounded-md"
              />
            </div>
            <div className="lg:flex-[0.7] flex-1 sm:p-6 md:p-0 p-6 ">
            <h1 className="font-bold text-xl text-black ">Heading h1 </h1>

              <p className="text-slate-400">
                The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.
                The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. 
              </p>
             
            </div>
          </div>
        </div>
      </section>



      <div className="px-4 md:px-36">
        <div className="text-black p-4 rounded-lg mb-9 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold">Heading 1</h2>
          <p className="mt-2 text-sm md:text-base">
            The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          </p>
        </div>
        <div className="shadow-lg text-black p-4 rounded-lg mb-11">
          <h2 className="text-lg md:text-xl font-bold">Heading 2</h2>
          <p className="mt-2 text-sm md:text-base">
            The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 bg-background px-4 md:px-36">
        <div className="flex-1  text-white p-6 rounded-lg shadow-lg m-2">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            width="100%"
            height="100%"
            className="w-full h-full object-cover object-center"
            src="https://www.youtube.com/embed/KV1D_xvYiGQ?autoplay=1"
            id="widget2"
          ></iframe>
        </div>
        <div className="flex-1 bg-white text-zinc-800 p-6 rounded-lg shadow-lg m-2">
          <h2 className="text-lg md:text-xl font-bold">How to Reach</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>By Air:</strong> Lengpui Airport is a domestic airport serving Aizawl, the capital of Mizoram. Air India, from Delhi, Kolkata, Guwahati and Imphal and Agartala.
            </li>
            <li className="mb-2">
              <strong>By Train:</strong> Nearest Railhead is at Bairabi which is about 4 hrs drive from Aizawl, Maxi Cabs are available.
            </li>
            <li>
              <strong>By Road:</strong> NH-306 and NH-54 connects Aizawl with the rest of the country through Silchar. Bus services are available. NH-150 and NH-102B connects the state through Aizawl and NH-108 connects state Capital through Panisagar, Tripura which is about 5 hrs.
            </li>
          </ul>
        </div>
      </div>



      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Tours Packages
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Planning for a trip? We will organize your trip with the best
            places and within best budget!
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          className="tour-packages-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {packages.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-md shadow dark:shadow-gray-700">
                <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                  <img
                    src={item.image}
                    className="scale-125 group-hover:scale-100 duration-500"
                    alt=""
                  />
                  {item.tagText && (
                    <div className="absolute top-0 start-0 p-4">
                      <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                        {item.tagText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="flex items-center text-slate-400 font-medium mb-2">
                    <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                    {item.place}
                  </p>
                  <Link
                    to={`/tour-detail-one/${item.id}`}
                    className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                  >
                    {item.title}
                  </Link>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline text-black dark:text-white text-sm">
                        5.0(30)
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                    <h5 className="text-lg font-medium text-red-500">
                      ₹ 499 / Day
                    </h5>

                    <Link
                      to={`/tour-detail-one/${item.id}`}
                      className="text-slate-400 hover:text-red-500"
                    >
                      Explore Now <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <Link
            to="/grid-left-sidebar"
            className="text-slate-400 hover:text-red-500 inline-block"
          >
            See More Tours{" "}
            <i className="mdi mdi-arrow-right align-middle"></i>
          </Link>
        </div>
      </div>
      <div className="container relative md:mt-24 mt-16 mb-10">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Hotels Packages
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Planning for a trip? We will organize your trip with the best
            places and within best budget!
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          className="tour-packages-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {packages.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-md shadow dark:shadow-gray-700">
                <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                  <img
                    src={item.image}
                    className="scale-125 group-hover:scale-100 duration-500"
                    alt=""
                  />
                  {item.tagText && (
                    <div className="absolute top-0 start-0 p-4">
                      <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                        {item.tagText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="flex items-center text-slate-400 font-medium mb-2">
                    <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                    {item.place}
                  </p>
                  <Link
                    to={`/tour-detail-two/${item.id}`}
                    className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                  >
                    {item.title}
                  </Link>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star align-middle"></i>
                      </li>
                      <li className="inline text-black dark:text-white text-sm">
                        5.0(30)
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                    <h5 className="text-lg font-medium text-red-500">
                      ₹ 499 / Day
                    </h5>

                    <Link
                      to={`/tour-detail-two/${item.id}`}
                      className="text-slate-400 hover:text-red-500"
                    >
                      Explore Now <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <Link
            to="/grid-left-sidebar"
            className="text-slate-400 hover:text-red-500 inline-block"
          >
            See More Tours{" "}
            <i className="mdi mdi-arrow-right align-middle"></i>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
