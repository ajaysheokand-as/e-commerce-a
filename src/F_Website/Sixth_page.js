import React from "react";



import { catagories } from "../Short_Components/Sixth";
function Sixth_page() {
  return (
    <>
      <div className="Sixth_page">
        <div className="Sixth_page_1">
          <h3>Categories</h3>
          <h1>Buy Best<br /> Products </h1>


          <button>Buy Now!</button>
        </div>


        <div className="Speaker">{
          catagories.map((product, index) => {
            return (
              <div key={index}><img src={product.Img} /></div>
            )
          })

        }


        </div>



      </div>
    </>
  )
}
export default Sixth_page;











