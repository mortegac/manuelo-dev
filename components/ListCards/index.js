// import React, {useState} from "react";
// import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "../Card";



const ListCards = ({post}) =>{
  // const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;


    return(
       <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}


        // onSwiper={setSwiperRef}
        slidesPerView={3}
        // centeredSlides={true}
        // pagination={{
        //   type: "fraction",
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >

{
                  post.map((item , index)=>(
                    // eslint-disable-next-line react/jsx-key
                    <SwiperSlide>
                      <Card
                        key={index}
                        image={item.cover_image}
                        likes={item.positive_reactions_count}
                        title={item.title}
                        url={item.url}
                        user={item.user.username}
                        description={item.description}
                      />
                    </SwiperSlide>

                  ))
                }


        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
    )
}


export default ListCards;