import React from 'react'

import Image from '../Images/africans.png'
import Shop from '../Images/shop.png'
import Dollar from '../Images/dollar.png'
import Shopping_bag from '../Images/shopping_bag.png'
import Money_bag from '../Images/money_bag.png'
import Tom from '../Images/Tom.png'
import Emma from '../Images/Emma.png'
import Smith from '../Images/Smith.png'
import Twitter from '../Images/twitter.png'
import Insta from '../Images/insta.png'
import Linkedin from '../Images/Icon-Linkedin.png'
import Delivery from '../Images/delivery.png'
import Headphones from '../Images/headphones.png'
import Shield_tick from '../Images/tick.png'

import '../css/index.css'



function About() {
   return (
      <>
         <div className='container'>
            <div className='text'>
               <label><span> Home /</span> About</label>
            </div>
            <div className='about'>
               <div>
                  <h2>Our Story</h2>
                  <p>Launced in 2015, Exclusive is South Asia’s premier online shopping<br />
                     makterplace with an active presense in Bangladesh. Supported<br />
                     by wide range of tailored marketing, data and service solutions,<br />
                     Exclusive has 10,500 sallers and 300 brands and serves 3<br />
                     millioons customers across the region.
                  </p>
                  <p>
                     Exclusive has more than 1 Million products to offer, growing at a<br />
                     very fast. Exclusive offers a diverse assotment in categories<br />
                     ranging  from consumer.
                  </p>
               </div>
               <div>
                  <img src={Image} alt="Not found"></img>
               </div>
            </div>


            <div className='sale_detail'>
               <div className='row boxes'>

                  <div className='col-md-3 sale_col_1 border-inherit border-2'>
                     <div className='box_1'>
                        <div className=' justify-center align-center'>
                           <img className='icon_bg px-8' src={Shop} alt='Not Found' />
                         
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>10.5k</h2>
                        <p className='text-base font-normal'>Sellers active our site</p>
                     </div>
                  </div>

                  <div className='doller col-md-3 sale_col_1 bg-red-500 text-white '>
                     <div className='box_2'>
                        <div>
                           <img className='icon_bg px-10' src={Dollar} alt='Not Found' />
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>30k</h2>
                        <p className='text-base font-normal'>Monthly Product Sale</p>
                     </div>
                  </div>

                  <div className='col-md-3 sale_col_1 border-inherit border-2'>
                     <div className='box_3'>
                        <div>
                           <img className='icon_bg relative px-20' src={Shopping_bag} alt='Not Found' />
                          
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>45.5k</h2>
                        <p className='text-base font-normal'>Customer active in our site</p>
                     </div>
                  </div>

                  <div className='col-md-3 sale_col_1 border-inherit border-2'>
                     <div className='box_4'>
                        <div>
                           <img className='icon_bg relative px-12' src={Money_bag} alt='Not Found' />
                           
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>25k</h2>
                        <p className='text-base font-normal'>Anual gross sale in our site</p>
                     </div>
                  </div>
               </div>
            </div>

            {/*----------- Members--------- */}

            <div className='members'>

               <div className='row'>
                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='tom' src={Tom} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Tom Cruise</h2>
                        <p text-base>Founder & Chairman</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='emma' src={Emma} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Emma Watson</h2>
                        <p text-base>Managing Director</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='smith' src={Smith} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Will Smith</h2>
                        <p text-base>Product Designer</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

               </div>
            </div>

            {/* ---------Dots------- */}

            <div className='dots'>
               <div className='black_dot'></div>
               <div className='black_dot'></div>
               <div className='red'>
                  <div className='red_dot'></div>
                  <div className='bg'></div>
               </div>
               <div className='black_dot'></div>
               <div className='black_dot'></div>
            </div>

            {/* -----------Services---------- */}

            <div className='services'>
               <div className='row service_detail'>
                  <div className='col-md-4 delivery'>
                     <div className='services_bg_icon'>
                        <img src={Delivery} alt="Not found" />                       
                     </div>
                     <h3 className='mt-6'>FREE AND FAST DELIVERY</h3>
                     <p className='mt-2'>Free delivery for all orders over $140</p>
                  </div>

                  <div className='col-md-4 customer_service'>
                     <div className=' services_bg_icon'>
                        <img src={Headphones} alt="Not found"></img>
                     </div>
                     <h3 className='mt-6'>24/7 CUSTOMER SERVICE</h3>
                     <p className='mt-2'> Friendly 24/7 customer support</p>
                  </div>

                  <div className='col-md-4 guarantee'>
                     <div className='services_bg_icon'>
                        <img src={Shield_tick} alt="Not found"></img>  
                     </div>
                     <h3 className='mt-6'>MONEY BACK GUARANTEE</h3>
                     <p className='mt-2'>We return money within 30 days</p>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default About
