import React from 'react'
import Image2 from '../Picture/Frame.jpg'
import Homepage from "../Picture/Laptop-Repair.jpg"
import '../MYcss/Style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slider1 from "../Picture/Slider1.jpg"

function First_page() {
  return (
    <>
      <div className='First_page'>



        <Swiper
          pagination={{
            clickable: true,
          }}
          speed={200}
          autoplay="true"
          modules={[Pagination]} className="mySwiper">
          <SwiperSlide><div className='First_page_Right'>
            <img style={{ marginLeft: "auto", marginRight: "auto", height: "100%" }} src={Slider1} />
          </div></SwiperSlide>
          <SwiperSlide><div className='First_page_Right'>
            <img style={{ marginLeft: "auto", marginRight: "auto" }} src={Homepage} />
          </div></SwiperSlide>

        </Swiper>



      </div>
    </>
  )
}

export default First_page
