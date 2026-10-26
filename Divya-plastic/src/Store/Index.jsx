import './Web.css'
import D from './images/D.png'
import BucketsImg from './images/Buckets-01.jpg'
import FootImg from './images/Food-c-02.jpg'
import SotrageImg from './images/Storage-Box-03.jpg'
import KitchenImg from './images/Kitchenware-04.jpg'
import StoolsImg from './images/Stools-05.jpg'
import IconImg from './images/icons.jpg'
import LogoImg from './images/logos.png'
import locImg from './images/Location.png'
import mobileImg from './images/mobile.png'
import WhatappImg from './images/whatapp-icon.png'
import InstImg  from './images/inst-icon.png'
import { useEffect } from 'react'


export default function Index(){

  useEffect(() => {
    document.title = "Divya Plastic Shop";

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = LogoImg;
  }, []);
    
    return <>

    <html>

    
  
    
   <body>

    
 

    <div className='top'>


        <div className="nav">
            <img className='nav-icon' src={WhatappImg} alt="" />
     <h5>Whatapp</h5>
  
     <h6>+9123453456</h6>
  
<p>Best Price</p>
     </div>
   


  <div className='imag-top' >
    <img src={D} alt="Divya" />
    
  </div>

  <div>

  </div>

  <div className='products'>
    
  
</div>
  
  <div className='below-details'>
    <div className='products-row' >
      <div className='text-side'>
      <h5 className='b-h5'>OUR PRODUCTS</h5>
      <h3 className='b-h2'>Everything You Need Under One Roof</h3>
      <p className='b-p'> 
        From kitchen essential to home storange solutions, we offer a wide range of high-quality plastic Products for your every needs.
      </p>
      </div>

      <div className='img-div'>
        <div className='p-card'>
          <img className='bins' src={BucketsImg} alt="Buckets & Bins" />
          <p className='p-name' style={{ backgroundColor: '#ec2a7c'}} >Buckets & Bins</p>
           </div>

           <div className='p-card'>
            <img className='bins' src={FootImg} alt="Food-c-02" />
            <p className='p-name' style={{ backgroundColor: '#0a9be0'}}>Food Containers</p>

           </div>
         
         <div className='p-card'>
          <img className='bins' src={SotrageImg} alt="" />
          <p className='p-name' style={{ backgroundColor: '#5aa11e'}}>Storage Boxes</p>
          </div>
         
         <div className='p-card'>
          <img className='bins' src={KitchenImg} alt="" />
          <p className='p-name' style={{ backgroundColor: '#f58a0b'}}>Kitchenware</p>

         </div>
         
         <div className='p-card'>
          <img className='bins' src={StoolsImg} alt="" />
           <p className='p-name' style={{ backgroundColor: '#8a4fe0'}}>Stools & Chairs</p>

         </div>
          
      </div>

    </div>
      
     
    
  </div>
  


  <footer className='footer'>
    
    <div className='logo-div'>
      
         <img className='logo' src={LogoImg} alt="Logo" />
     <div className='logo-text'>
      <h1 className='logo-h1'>DIVYA</h1>
      <h3 className='logo-h3'>PLASTIC SHOP</h3>


     </div>
     
    

     <div className='loc-div'>
      <address>

        <p className='loc-p'>
          <img className='loc-icon' src={locImg} alt="" />
         Shop Location <br />
       
        Sivakasi, Tamil Nadu-626123 
</p>
        <div >
          <img className='mobile-icon' src={mobileImg} alt="" />
  
           <p className='contact-p'>
        Call Us <br />
      +91 98765 43210
      </p>

        </div>
        
        <div className='inst-div'>
           

          <h3 className='inst-h'>Follow Us</h3>
         

          <div className='inst-p'>
            <img className='inst-icon' src={InstImg} alt="" />
            
          <p >divy-aplastics07</p>
         </div>

          </div>

         
      
         

    
   </address>
   
  

     </div>
      
    </div>
    
  <hr />
    
   
   
  </footer>
    

    
  </div>
  
      </body>
     </html>
    </>

    
}


 