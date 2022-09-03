import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Courses(props) {
  const [Tabs, setTabs] = useState([]);
  const [currentTab, setcurrentTab] = useState({
    tabName: "",
    opportunities: "",
    desc: "",
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch tabs
    fetch("https://62f965f63eab3503d1e45e85.mockapi.io/tabs")
      .then((data) => data.json())
      .then((data) => {
        setTabs(data[0]);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCourses(tab) {
    fetch(`https://62f965f63eab3503d1e45e85.mockapi.io/courses?category=${tab}`)
      .then((data) => data.json())
      .then((data) => {
        setcurrentTab({
          tabName: tab,
          opportunities: Tabs[tab].opportunities,
          desc: Tabs[tab].desc,
        });
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {/* Heading title */}
      <div className="Head-title">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="cources-tab">
        <nav className="cources-nav">
          <ul className="cources-list">
            {Object.keys(Tabs).map((tab, index) => (
              <li
                className={`cources-item ${index === 0 && "active"}`}
                key={tab}
                onClick={() => handleCourses(tab) }
              >
                <a href={`#${tab}`}>{tab}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container courses">
        <div className="main-content__course-desc">
          <h2> {currentTab.opportunities} </h2>
          <p>{currentTab.desc}</p>
          <button className="btn btn-secondry btn-height">
            Explore {currentTab.tabName}
          </button>
        </div>

        <div className="row" style={{ clear: "both" }}>
          <Swiper
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 240,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 568,
                slidesPerView: 2,
              },
            }}
            id="main"
            width="280"
          >
            {/* <div class="swiper-wrapper"> */}
            {courses.map((card) => (
              <SwiperSlide key={card.id}>
                <Card key={card.id} CardData={card} />
              </SwiperSlide>
            ))}
            {/* </div> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
