import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";
import CustemSwiper from "../Swiper/Swiper";
import { useSearchParams } from "react-router-dom";

export default function Courses(props) {
  const [loading, setLoading] = useState(true);
  const [Tabs, setTabs] = useState({});
  const [courses, setCourses] = useState([]);
  const [searchCourses, setSearchCourses] = useState([]);
  const [currentTab, setcurrentTab] = useState({
    tabName: "",
    opportunities: "",
    desc: "",
  });
  const placeholder = [1, 2, 3, 4, 5];
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  
  // Reset Params based on search
  useEffect(() => {
    const param = searchParams.get("search");
    if (param === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [search]);

  // Fetch tabs
  useEffect(() => {
    axios
      .get("https://62f965f63eab3503d1e45e85.mockapi.io/tabs")
      .then((data) => {
        setTabs(data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch defult Tab
  useEffect(() => {
    if (Tabs[Object.keys(Tabs)[0]]) handleCourses(Object.keys(Tabs)[0]);
  }, [Tabs]);

  // Make Search filter
  useEffect(() => {
    const filteredProducts = [];
    courses.map((course) => {
      if (!search || course.title.toLowerCase().includes(search.toLowerCase()))
        filteredProducts.push(course);
    });
    setSearchCourses(filteredProducts);
  }, [search]);

  // Handle Courses when tab clicked
  function handleCourses(tab) {
    setSearchParams({ search: tab });
    setLoading(true);
    axios
      .get(
        `https://62f965f63eab3503d1e45e85.mockapi.io/courses?category=${tab}`
      )
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
        }, 500);

        setcurrentTab({
          tabName: tab,
          opportunities: Tabs[tab].opportunities,
          desc: Tabs[tab].desc,
        });
        setCourses(data.data);
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
            {Object.keys(Tabs).map((tab) => (
              <li
                className={`cources-item ${
                  currentTab.tabName === tab ? "active" : ""
                }`}
                key={tab}
                onClick={() => handleCourses(tab)}
              >
                <span>{tab}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container courses">
        <div className="main-content__course-desc">
          {loading ? (
            <>
              <p aria-hidden="true">
                <span className="placeholder col-6"></span>
              </p>
              <a
                href="#x"
                tabIndex="-1"
                className="btn btn-primary disabled placeholder col-4"
                aria-hidden="true"
              ></a>
            </>
          ) : (
            <>
              <h2> {currentTab.opportunities} </h2>
              <p>{currentTab.desc}</p>
              <button className="btn btn-secondry btn-height">
                Explore {currentTab.tabName}
              </button>
            </>
          )}
        </div>
        <div
          className="row"
          style={{
            clear: "both",
            position: "relative",
          }}
        >
          {loading ? (
            <CustemSwiper>
              {placeholder.map((item) => (
                <SwiperSlide key={item}>
                  <PlaceholderCard />
                </SwiperSlide>
              ))}
            </CustemSwiper>
          ) : (
            <CustemSwiper>
              {courses.map((card) =>
                !search ||
                card.title.toLowerCase().includes(search.toLowerCase()) ? (
                  <SwiperSlide key={card.id}>
                    <Card key={card.id} CardData={card} />
                  </SwiperSlide>
                ) : null
              )}
            </CustemSwiper>
          )}
        </div>
      </div>
    </>
  );
}
