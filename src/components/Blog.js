import React from 'react'
import { Link } from 'react-router-dom'
import Ads2 from './Ads2'


const Blog = () => {
  return (
    <>


{/* <!-- Normal Breadcrumb Begin --> */}
    <section class="normal-breadcrumb set-bg"  style={{background:`url('img/blog-1.jpg')`, backgroundSize: "100% 100%"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2>Our Blog</h2>
                        <p>Welcome To The Official GameWorld Blog.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className='Ads' style={{textAlign:"center", border:"2px solid white"}}><Ads2/></div>
    
    {/* <!-- Normal Breadcrumb End --> */}

{/* <!-- Blog Section Begin --> */}
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog__item set-bg" style={{background:`url('img/blog/blog-1.jpg')`, backgroundSize: "100% 100%"}} >
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 01 March 2023</p>
                                    <h4><Link href="#">GTA 6 Realase Date </Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg" style={{background:`url('img/blog/blog-4.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 01 March 2020</p>
                                    <h4><Link href="#">Introducing New War Map</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg" style={{background:`url('img/blog/blog-7.jpg')`, backgroundSize: "100% 100%"}} >
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 01 March 2020</p>
                                    <h4><Link href="#">WWE 2K23 ICON EDITION</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog__item set-bg"style={{background:`url('img/blog/blog-11.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 24 April 2023</p>
                                    <h4><Link href="#">New Avtar Coming Soon</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg"  style={{background:`url('img/blog/blog-5.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 01 March 2020</p>
                                    <h4><Link href="#">Horizon Zero Dawn Complete Edition free starting today </Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg"  style={{background:`url('img/blog/blog-12.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 01 March 2020</p>
                                    <h4><Link href="#">War Mode</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg"  style={{background:`url('img/blog/blog-6.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 05 May 2020</p>
                                    <h4><Link href="#">Lamborghini The Real Race</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg" style={{background:`url('img/blog/blog-3.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 20 Oct 2023</p>
                                    <h4><Link href="#">Introducing Urzikstan, the Next Big Map Coming to Warzone </Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog__item set-bg" style={{background:`url('img/blog/blog-2.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 12 March 2022</p>
                                    <h4><Link href="#">New Map Added</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg"style={{background:`url('img/blog/blog-8.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 12 jan 2019</p>
                                    <h4><Link href="#">New Weapon</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item small__item set-bg" style={{background:`url('img/blog/blog-10.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 31 March 2022</p>
                                    <h4><Link href="#">‘Horizon Customs’ now available</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog__item set-bg"  style={{background:`url('img/blog/blog-9.jpg')`, backgroundSize: "100% 100%"}}>
                                <div className="blog__item__text">
                                    <p><span className="icon_calendar"></span> 17 July 2017</p>
                                    <h4><Link href="raj">Forza Motorsport 7 Garage opens today </Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}


    
    
    
    </>
  )
}

export default Blog
