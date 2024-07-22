import React from 'react'
import Image from '../Picture/Rectangle.png'
import { Flash } from '../Short_Components/Second';

function Second_page() {
  return (
    <>
      <div className='Third_page'>

        <div className='Third_page_1'>
          <img src={Image} alt='' />
          <h4>Today's</h4>

        </div>

        <div className='Third_page_2'>
          <div className='Third_page_h1' >
            <h1>Flash Sales</h1>
          </div>


          <div className='fifth_page_button' >
            <button>View All</button>
          </div>



        </div>



        <div className='Third_page_row'>{
          Flash.map((product, index) => {
            return (
              <div key={index} className='Third_page_row3'>


                <div className='Third_page_row3_img_text'>
                  <div className='Third_page_row3_img'>
                    <img src={product.img} />
                  </div>
                  <a href={`https://api.whatsapp.com/send/?phone=+919812902468&text=${product.name} - ${product?.prize}`} target='_blank'> <button>{product.button}</button></a>

                  <h1>{product.name}</h1>
                  <h2>{product.prize} <span>{product.prize2}</span></h2>

                </div>


              </div>

            )
          })

        }

        </div>

        <div className='Third_page_row4'>

          <button>View All Products</button>
        </div>


      </div>
    </>
  )
}

export default Second_page;