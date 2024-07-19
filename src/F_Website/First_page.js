import React from 'react'
import Image2 from '../Picture/Frame.jpg'
import '../MYcss/Style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function First_page() {
  return (
    <>
      <div className='First_page'>



        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay="true"
          modules={[Pagination]} className="mySwiper">
          <SwiperSlide><div className='First_page_Right'>
            <img style={{ marginLeft: "auto", marginRight: "auto" }} src={Image2} />
          </div></SwiperSlide>
          <SwiperSlide><div className='First_page_Right'>
            <img style={{ marginLeft: "auto", marginRight: "auto" }} src={Image2} />
          </div></SwiperSlide>

        </Swiper>



      </div>
    </>
  )
}

export default First_page
