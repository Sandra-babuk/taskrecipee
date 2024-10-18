import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px',background:' rgb(112, 151, 34)'}} className='container mt-5 w-100 text-white'>
      <div className='d-flex justify-content-between'>
        <div className="intro">
          <h5  className='text-white'> <i className="fas fa-utensils me-2"></i>
          Recipe App</h5>
          <p>Design and build with all the love in the world by the luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        
        <div className="links className='text-white'" >
          <h5  className='text-white'>Links</h5>
          <a className='footerlink  text-white' style={{textDecoration:'none'}}>View Pages</a> <br />
          <a className='footerlink text-white' style={{textDecoration:'none'}}>Home Pages</a> <br />
        </div>
        <div className="guides">
          <h5 className='text-white'>Guides</h5>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
        </div>
        <div className="contact">
          <h5  className='text-white'>Contact Us</h5>
  <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email here'/>
           <button className='bg-info rounded p-1'><i class="fa-solid fa-arrow-right"></i></button>
  </div>
     <div className='d-flex flex-row justify-content-evenly mt-4'>
            <i className="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-phone"></i>
     </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; may 2024 Batch,Media Player.Built with React</p>   
      </div>
  )
}

export default Footer