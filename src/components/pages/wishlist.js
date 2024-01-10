import React from 'react'
import { productData } from '../data/product';
import { productData2 } from '../data/product';
import '../css/style.css';

function Wishlist() {
    console.log("productData=>", productData)
    return (
        <div className='containerr'>
            <div className='content_box'>

                {/* top line */}
                <div className='headerr'>
                    <div className='text'>
                        <p>Wishlist (4)</p>
                        {/* <ul>
                            <li><Link to='/call'>check out</Link></li>

                        </ul> */}
                    </div>
                    <div className='btn'>
                        <button>Move All To Bag</button>
                    </div>
                </div>

                {/* section1 */}
                <div className='sec'>
                    <div className='row slider_2'>
                        {productData.map((product) => {
                            return (

                                <div className='col'>
                                    <div className='img-box-1'>
                                        <img src={product.img} alt='not found'></img>
                                    </div>
                                    <div className='addcart'>
                                        <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                                    </div>
                                    <div className='price'>
                                        <h6>{product.name}</h6>
                                        <span id='clr'>{product.price}</span>
                                        <s>{product.discount}</s>
                                    </div>
                                </div>)
                        })}


                    </div>
                </div>

                {/* mid part */}
                <div className='mid-part'>
                    <div className='text'>
                        <h5>Just For You</h5>
                    </div>
                    <div className='btn-2'>
                        <button>See All</button>
                    </div>
                </div>

                {/* section 2 */}
                <div className='sec_2'>
                    <div className='row slider'>
                        {productData2.map((item) => {
                            return (
                                <div className='col'>
                                    <div className='img-box-1'>
                                        <img src={item.img} alt='not found'></img>
                                    </div>
                                    <div className='addcart'>
                                        <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                                    </div>
                                    <div className='price'>
                                        <h6>{item.name}</h6>
                                        <span id='clr'>{item.price}</span>
                                        <s>{item.discount}</s>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* section 2 second */}
                {/* <div className='wish'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
export default Wishlist