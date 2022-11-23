import React from 'react'

function Home() {
  return (
  <>
    <div style={{ 
        backgroundImage: `url("https://assets-news.housing.com/news/wp-content/uploads/2021/09/08210245/Rent-agreement-in-Noida-FB-1200x700-compressed-343x200.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"630px"
      }}>
  
  </div>
  
  
  <div>
    <hr />
 <h3  className='text-center mb-3'> Rental Services are</h3>
<div className=' d-flex justify-content-center'>
<div>
<h6>Equipment Rental Services</h6>
<h6>Camera rental services</h6>
<h6>Laptop rental services</h6>
<h6>Speaker rental services</h6>
<h6>Generator rental services</h6>
<h6>Fast delivery</h6>
<h6>Customer support</h6>
</div>
</div>
  </div>
  </>

  )
}

export default Home