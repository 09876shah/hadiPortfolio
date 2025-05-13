import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero";
import BG2 from "../../assets/Projects/Project1.png";
import Card_rectangle from "../../assets/Projects/Rectangle.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import AuthContext from "../Auth/Auth";
import { FaPlus } from "react-icons/fa";
import Login from "../Auth/Login";
import AddProject from "./AddProject";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../assets/home/loader.gif";
const Creations = () => {
  const { Authenticated } = useContext(AuthContext);
  const [showLogin, Setshowlogin] = useState(false);
  const [Projects, setproejects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));

        if (querySnapshot.empty) {
          console.log("No documents found!");
          return;
        }

        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setproejects(items);

        console.log("Data First fetched successfully: "); // ✅ Log inside fetchData() after setting state
        console.log("Data Second fetched successfully: "); // ✅ Log inside fetchData() after setting state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="Creations" className="bg-black min-h-screen">
      <Header />
      <Hero>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Projects.length > 0 ? (
            Projects.map((item, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <div className="creation-card-main flex justify-center flex-col">
                  <div className="creation-card w-64 relative overflow-hidden py-5 px-3 flex flex-col gap-10">
                    <div
                      className="absolute inset-0 bg-no-repeat bg-cover blur-lg opacity-50"
                      style={{ backgroundImage: `url(${item.imgurl})` }}
                    ></div>
                    <span className="text-sm text-gray-300 relative z-10">
                      Published 3 months ago
                    </span>
                    <div className="mt-2 relative z-10">
                      <img
                        src={item.imgurl}
                        alt="Project preview"
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="flex justify-end mt-2 relative z-10">
                      <a href={item.gamelink} target="_blank" rel="noreferrer">
                        <button className="uppercase border border-[#E84A4A] text-white px-4 py-1 text-sm rounded-sm">
                          View live
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="card-text w-64 px-1 pt-5">
                    <h2 className="text-[#E84A4A] font-bold leading-[15px]">
                      The project name
                      <br />
                      <span className="text-[#FFFFFF] text-[12px] mt-2 tracking-[2px] leading-[2px] font-normal font-sans">
                        {item.title}
                      </span>
                    </h2>
                    <p className="text-[#7A7A7A] py-3">{item.info}</p>
                    <div>
                      <img src={Card_rectangle} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-white text-5xl w-full flex items-center justify-center ">
              <img className="w-[15rem]" src={Loader} alt="" />
            </p>
          )}

          <button
            onClick={() => Setshowlogin(true)}
            className="text-[#E84A4A] text-[10px]  float-right mr-20   hover:text-2xl transition-all ease-linear "
          >
            <FaPlus />
          </button>
        </Swiper>
      </Hero>
      <Footer />
      {showLogin ? <Login Setshowlogin={Setshowlogin} /> : null}
      {Authenticated ? <AddProject /> : ""}
    </div>
  );
};

export default Creations;
