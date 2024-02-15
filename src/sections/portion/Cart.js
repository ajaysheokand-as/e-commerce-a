import React from 'react'
import LcdMonitor from '../Images/monitor.png'
import Cancel from '../Images/icon-cancel.png'
import Game from '../Images/game.png'
import UpArrow from '../Images/uparrow.png'
import DownArrow from '../Images/downarrow (1).png'

import '../css/index.css'

const Cart = () => {
   return (
      <>
         <div className='container'>
            <div className='row'>
               <div className='col-sm-12 product-details'>
                  <div className='cart'>
                     <label><span> Home /</span> Cart</label>
                  </div>
                  <div className='product-list'>
                     <div className='product_1'>
                        <label>Product</label>
                        <label>Price</label>
                        <label>Quantity</label>
                        <label>Subtotal</label>
                     </div>
                     <div className='product_2'>
                        <div className='relative'>
                           <img src={LcdMonitor} alt='Not found'></img>
                           <img className='cancel' src={Cancel} alt='Not found'></img>
                        </div>
                        <label>$650</label>
                        <div className='quantity_btn'>
                           <button><label>01</label>
                              <img className='arrow_up' src={UpArrow} alt='Not Found'></img>
                              <img className='arrow_down' src={DownArrow} alt='Not Found'></img>
                           </button>
                        </div>
                        <label>$650</label>
                     </div>
                     <div className='product_3'>
                        <img src={Game} alt='Not found'></img>
                        <label>$550</label>
                        <div className='quantity_btn'>
                           <button><label>02</label>
                              <img className='arrow_up' src={UpArrow} alt='Not Found'></img>
                              <img className='arrow_down' src={DownArrow} alt='Not Found'></img>
                           </button>
                        </div>
                        <label>$1100</label>
                     </div>
                  </div>

                  <div className='product-btn'>
                     <button className='font-base font-medium'>Return To Shop</button>
                     <button className='font-base font-medium'>Update Cart</button>
                  </div>

                  <div className='cart_total'>
                     <div className='coupon'>
                        <input type="text" placeholder='Coupon code' />
                        <button className='font-base'>Apply Coupon</button>
                     </div>

                     <div className='price'>
                        <h4 className='text-xl font-medium'>Cart Total</h4>
                        <label className='price_span font-normal text-base pt-3'>Subtotal:<span>$1750</span></label>
                        <hr className='mt-3' />
                        <p className='price_span font-normal text-base pt-3'>Shipping: <span>Free</span></p>
                        <hr className='mt-3' />
                        <p className='price_span font-normal text-base pt-3'>Total:  <span>$1750</span></p>
                        <div className='price_btn'><button>Procees to checkout</button></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}
export default Cart