import React from 'react'
import Reactangle from '../Picture/Rectangle.png'
import { Data2 } from '../Short_Components/Sevnth_Short'



function Sevnth_page() {
    return (
        <>
            <div className='Sevnth_page'>
                <div className='Sevnth_page_1'>
                    <img src={Reactangle} />
                    <h3>Our Products</h3>
                </div>
                <div className='Sevnth_page_2'>
                    <h1>Explore Our More Products </h1>

                    <div className='Sevnth_page_2_imgs' >
                        {/* <button>View All</button> */}

                    </div>

                </div>

            </div>


            <div className='Sevnth_page_3'>{
                Data2.map((product, index) => {
                    return (

                        <div className='Sevnth_page_3_img_text_all' >

                            <div key={index} className='Sevnth_page_3_img_text'>

                                <div className='Sevnth_page_3_imgss'>
                                    <img src={product.img} />
                                </div>

                                <a href={`https://api.whatsapp.com/send/?phone=+919812902468&text=${product?.name} - ${product?.prize}`} target='_blank'> <button>{product.button}</button></a>

                                <div className='Sevnth_page_3_img'>

                                    <h3>{product.name}</h3>

                                </div>

                                <div className='Sevnth_page_3_text'>
                                    <h4>{product.prize}</h4>

                                    <h3>{product.prize2}</h3>
                                </div>


                            </div>









                        </div>
                    )
                })
            }




            </div>


            <div className='Sevnth_page_button'>
                {/* <button>View All Products</button> */}
            </div>


        </>

    )

}

export default Sevnth_page;









