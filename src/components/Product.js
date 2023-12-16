import React, { useState, useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import Ads from './Ads'
import {useDownloadContext} from '../Context/DownloadState';
// import Ads3 from './Ads3';
// import Ads2 from './Ads2';
// import { each } from 'jquery';

const Product = () => {
    const navigate =useNavigate()
    console.log('useDownloadContext--',useDownloadContext());
const {setDownloadData}=useDownloadContext()


    // const [data, setdata] = useState([]);
   const [trendingdata, setTrendingdata] = useState([]);
   const [populardata, setPopulardata] = useState([]);
   const [recentdata, setRecentdata] = useState([]);
   const [livedata, setLivedata] = useState([]);
   
   
   const trending_slice= trendingdata.slice(0,3)
   const popular_slice =populardata.slice(0,3)
   const recent_slice=recentdata.slice(0,3)
   const live_slice = livedata.slice(0,3)
   



    const [buttonText, setButtonText] = useState('Download');

  const handleButtonClick = (id) => {
    setButtonText(id);
    localStorage.setItem("LocalSave",JSON.stringify(id))

    setDownloadData(id)
    // Simulate a delay before redirecting (e.g., 2 seconds)
    setTimeout(() => {
      navigate('/download'); // Replace with your actual  page URL
    }, 3000);
  };


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
  

    



    const getData = async () => {

        const json = await axios.get("http://localhost:5000/FetchGame")

        const trendingArr=[]
     
      

        const popularArr=[]
        const recentArr=[]
        const liveArr=[]
        json.data.map((eachdata) => {
            // console.log('eachdata--', eachdata._id);
           
            if (eachdata.Type === 'Trending') {
                trendingArr.push(eachdata)
    
            }else if (eachdata.Type === 'Popular'){
                popularArr.push(eachdata)
            }else if(eachdata.Type ==='Recent'){
                recentArr.push(eachdata)
                
            }else{
                liveArr.push(eachdata)
            }
        })
        setTrendingdata(trendingArr)
        setPopulardata(popularArr)
        setRecentdata(recentArr)
        setLivedata(liveArr)
        // setdata(json.data)
    }
    useEffect(() => {
        getData()
    }, [])





    return (
        <>

            {/* <!-- Product Section Begin --> */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="trending__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Trending Now</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                        <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                            <button style={{border:"0px", backgroundColor:"#0b0c2a"}}  onClick={trending} className="primary-btn">View All <span className="arrow_right"></span></button>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    {
                                        
                                        trending_slice.map((eachdata) => {
                                       
                                            return (

                                                <>

                                                    <div className="col-lg-4 col-md-6 col-sm-6" >
                                                        <div className="product__item"  onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                                    <button className="button">{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a> 
                                                                </div>
                                                                <div className="comment"><i className="fa fa-comments"></i> {eachdata.comment}</div>
                                                                <div className="view"><i className="fa fa-download"></i> {eachdata.download}</div>
                                                            </div>
                                                            <div className="product__item__text">
                                                                <ul>
                                                                    <li>{eachdata.type_one}</li>
                                                                    <li>{eachdata.type_two}</li>
                                                                </ul>
                                                                <h5><Link to="#">{eachdata.name}</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                            
                                        
                                           
                                        })
                                    }


                                </div>
                            </div>
                            <div className="popular__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Popular Game</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                        <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                            <button style={{border:"0px", backgroundColor:"#0b0c2a"}} onClick={popular}  className="primary-btn">View All <span className="arrow_right"></span></button>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="row">

                                    {
                                        popular_slice.map((eachdata) => {
                                            return (
                                                <>

                                                    <div className="col-lg-4 col-md-6 col-sm-6" >
                                                        <div className="product__item" onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                                    <button className="button">{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a> 
                                                                </div>
                                                                <div className="comment"><i className="fa fa-comments"></i> {eachdata.comment}</div>
                                                                <div className="view"><i className="fa fa-download"></i> {eachdata.download}</div>
                                                                
                                                            </div>
                                                            <div className="product__item__text">
                                                                <ul>
                                                                    <li>{eachdata.type_one}</li>
                                                                    <li>{eachdata.type_two}</li>
                                                                </ul>
                                                                <h5><Link to="#">{eachdata.name}</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div className="recent__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Recently Added</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                        <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                            <button  style={{border:"0px", backgroundColor:"#0b0c2a"}} onClick={recent} className="primary-btn">View All <span className="arrow_right"></span></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    {
                                        recent_slice.map((eachdata) => {
                                            return (
                                                <>

                                                    <div className="col-lg-4 col-md-6 col-sm-6" >
                                                        <div className="product__item" onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                                    <button className="button">{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a> 
                                                                </div>
                                                                <div className="comment"><i className="fa fa-comments"></i> {eachdata.comment}</div>
                                                                <div className="view"><i className="fa fa-download"></i> {eachdata.download}</div>
                                                            </div>
                                                            <div className="product__item__text">
                                                                <ul>
                                                                    <li>{eachdata.type_one}</li>
                                                                    <li>{eachdata.type_two}</li>
                                                                </ul>
                                                                <h5><Link to="#">{eachdata.name}</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="live__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Live Action</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                            <button style={{border:"0px", backgroundColor:"#0b0c2a"}} onClick={live} className="primary-btn">View All <span className="arrow_right"></span></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        live_slice.map((eachdata) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 col-sm-6" >
                                                        <div className="product__item" onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">
                                                                    <button className="button">{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a> 
                                                                </div>
                                                                <div className="comment"><i className="fa fa-comments"></i> {eachdata.comment}</div>
                                                                <div className="view"><i className="fa fa-download"></i> {eachdata.download}</div>
                                                            </div>
                                                            <div className="product__item__text">
                                                                <ul>
                                                                    <li>{eachdata.type_one}</li>
                                                                    <li>{eachdata.type_two}</li>
                                                                </ul>
                                                                <h5><Link to="#">{eachdata.name}</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                            <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top Download</h5>
                                    </div>
                                    <ul className="filter__controls">
                                        <li className="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                    <div className="filter__gallery">
                                        <div className="product__sidebar__view__item set-bg mix day years"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix month week"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix week years"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix years month"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix day"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top View</h5>
                                    </div>
                                    <ul className="filter__controls">
                                        <li className="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                    <div className="filter__gallery">
                                        <div className="product__sidebar__view__item set-bg mix day years"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix month week"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix week years"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix years month"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i>9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix day"
                                            
                                        >
                                            <Ads/>
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i>9141</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* <!-- Product Section End --> */}

        </>
    )
}

export default Product
