import React from 'react'
import Qrcode from '../Picture/Qrcode.png';
import Google_play from '../Picture/Google-Play.png';
import Apple_play from '../Picture/Apple-appstore.png'
import facebook from '../Picture/Facebook.png'
import Twitter from '../Picture/Twitter.png'
import instagram from '../Picture/instagram.png'
import Linkedin from '../Picture/Linkedin.png'
import Send from '../Picture/icon-send.png'
import { Link } from 'react-router-dom';

function Fother() {
  return (
    <>
      <div className='Fother'>

        <div className='Fother_1 Fother_all'>
          <h2>OM COMPUTER SOLUTIONS</h2>
          <h3 className='Fother_h3'>Subscribe</h3>
          <h3>Get 10% off your first order</h3>


        </div>

        <div className='Fother_2 Fother_all'>
          <h2>Support</h2>
          <h3>Near Padma City Mall New Karnal Road <br /> (Near STAR INN HOTEL)  <br />Kaithal (136027)Haryana</h3>

          <h3>3rsenterprisesktl@gmail.com</h3>
          <h3>8930896896, 9812902468</h3>
        </div>

        <div className='Fother_3 Fother_all'>
          <h2>Account</h2>
          <h3>My Account</h3>
          <h3>Login/Register</h3>
          <h3>Cart</h3>
          <h3>Wishlist</h3>
          <h3>Shop</h3>
        </div>


        <div className='Fother_4 Fother_all'>
          <h2>Quick Link</h2>
          <h3>Privacy Policy</h3>
          <h3>Terms Of Use</h3>
          <h3>FAQ</h3>
          {/* <Link to="/Contact"><h3>Contact</h3></Link> */}
          <h3>Contact</h3>
        </div>



      </div>


    </>

  )
}

export default Fother;