import React from 'react'
// import { Link } from 'react-router-dom'
// import Ads2 from './Ads2'
// import Try from './Try.js'
// import Practice from './Practice'
// import 'slicknav';
// import $ from 'jquery';


const Hero = () => {

    //   View All -Trending
  const trending = () => {
    setTimeout(() => {
        window.location.href = '/trending'; // Replace with your actual  page URL   

    }, 1000);
}

//   View All -Popular
const popular = () => {

    setTimeout(() => {
        
        window.location.href = '/popular'; // Replace with your actual  page URL
    }, 1000);
}


//   View All -recent
const recent = () => {

    setTimeout(() => {
        
        window.location.href = '/recent'; // Replace with your actual  page URL
    }, 1000);
}

//   View All -live
const live = () => {

    setTimeout(() => {
        
        window.location.href = '/live'; // Replace with your actual  page URL
    }, 1000);
}








  
  return (
    <>
    {/* <Practice/> */}
   <div className="hero_area">
      <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" >1</li>
                            <li data-target="#customCarousel1" data-slide-to="1">2</li>
                            <li data-target="#customCarousel1" data-slide-to="2">3</li>
                            <li data-target="#customCarousel1" data-slide-to="3">4</li>
                            <li data-target="#customCarousel1" data-slide-to="4">5</li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="detail_box">
                                                <h1> Forza Horizon 5</h1>
                                                <p>Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios.</p>
                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">

                                                <button className='view_all' onClick={trending}>View All<span className="arrow_right"></span></button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="detail_box">
                                                <h1>
                                                Grand Theft Auto V(GTA 5)
                                                </h1>
                                                <p>
                                                Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.   
                                                </p>
                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                <button className='view_all'onClick={trending}>
                                                    View All<span className="arrow_right"></span>
                                                </button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="detail_box">
                                                <h1>
                                                Forza Motorsport 7

                                                </h1>
                                                <p>
                                                Forza Motorsport 7 is a 2017 racing video game developed by Turn 10 Studios and published by Microsoft Studios.</p>
                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">

                                                <button className='view_all'  onClick={recent}>
                                                    View All<span className="arrow_right"></span>
                                                </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="detail_box">
                                                <h1>
                                                Call of Duty: Modern Warfare 3
                                                </h1>
                                                <p>
                                                Call of Duty: Modern Warfare 3 is a 2011 first-person shooter video game, jointly developed by Infinity Ward and Sledgehammer Games and published by Activision. 
                                                </p>
                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">

                                                <button className='view_all'  onClick={live}>
                                                    View All<span className="arrow_right"></span>
                                                </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="detail_box">
                                                <h1>WWE 2K23</h1>
                                                <p>WWE 2K23 is a 2023 professional wrestling sports video game developed by Visual Concepts and published by 2K.</p>
                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                <button className='view_all'  onClick={popular}>
                                                    View All<span className="arrow_right
                                                    "></span>
                                                </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
    </>
  )
}
export default Hero















































// import React from 'react'
// import { swiffyslider } from 'swiffy-slider'
// const Hero = () => {
//   window.swiffyslider = swiffyslider;

// window.addEventListener("load", () => {
//     window.swiffyslider.init();
// });

// // import Swiffy Slider CSS
//   return (
//    <>
//    <div class="swiffy-slider">
//     <ul class="slider-container">
//         <li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900"  alt=''//></li>
//         <li><img src="https://source.unsplash.com/nKAglN6HH8/1600x900"  alt=''//></li>
//         <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900"  alt=''//></li>
//     </ul>

//     <button type="button" class="slider-nav"></button>
//     <button type="button" class="slider-nav slider-nav-next"></button>

//     <div class="slider-indicators">
//         <button class="active"></button>
//         <button></button>
//         <button></button>
//     </div>
// </div>
    
//    </>
//   )
// }

// export default Hero
