import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ads from './Ads';
import {useDownloadContext} from '../Context/DownloadState';



const Categories = () => {
    const navigate =useNavigate()
    console.log('useDownloadContext--',useDownloadContext());
    const {setDownloadData}=useDownloadContext()


    const [data, setdata] = useState([]);

    const [buttonText, setButtonText] = useState('Download');

    const handleButtonClick = (id) => {
        setButtonText(id);
        setDownloadData(id)
    localStorage.setItem("LocalSave",JSON.stringify(id))

        // Simulate a delay before redirecting (e.g., 2 seconds)
        setTimeout(() => {
            navigate('/download'); // Replace with your actual  page URL
        }, 3000);
    };




    const getData = async () => {

        const json = await axios.get("http://localhost:5000/FetchGame")
        setdata(json.data)
    }
    useEffect(() => {
        getData()
    }, [])




    return (
        <>

{/* <!-- Normal Breadcrumb Begin --> */}
    <section class="normal-breadcrumb set-bg" 
    style={{ backgroundImage: `url('img/normal-breadcrumb.jpg')`,backgroundSize:"100% 100%"}}>

        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2 style={{fontWeight:"bold"}}>Categories</h2>
                        <p style={{fontWeight:"bold"}}>Welcome to the official GameWorld</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Normal Breadcrumb End --> */}

{/* <!-- Breadcrumb Begin --> */}
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="./"><i class="fa fa-home"></i> Home</a>
                        <a href="./categories">Categories</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

            {/* <!-- Product Section Begin --> */}
            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            {/* Racing */}
                                            <div className="product__page__content">
                                                <div className="product__page__title">
                                                    <div className="row">
                                                        <div className="col-lg-8 col-md-8 col-sm-6">
                                                            <div className="section-title">
                                                                <h4>Racing</h4>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                {
                                data.map((eachdata) => {
                                    return (
                                    eachdata.categories==="Racing"?
                                        <>



                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="product__item" onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83'>
                                                                        <button className="button" >{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a>
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

                                                    </>:
                                        null
                                    )
                                })
                            }





                                                </div>
                                            </div>



                                            <br />
                                            <br />


                            {/* Action */}
                                            <div className="product__page__content">
                                                <div className="product__page__title">
                                                    <div className="row">
                                                        <div className="col-lg-8 col-md-8 col-sm-6">
                                                            <div className="section-title">
                                                                <h4>Action</h4>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                {
                                data.map((eachdata) => {
                                    return (
                                    eachdata.categories==="Action"?
                                        <>



                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="product__item" onClick={()=>handleButtonClick(eachdata._id)} >
                                                            <div className="product__item__pic set-bg"
                                                                style={{ backgroundImage: `url(${eachdata.image})` }}>
                                                                <div className="ep">{eachdata.tag}</div>
                                                                <div className="button-container">
                                                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83'>
                                                                        <button className="button" >{buttonText === eachdata._id ? 'Please Wait...':'Download'}</button></a>
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

                                                    </>:
                                        null
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
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix month week"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix week years"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix years month"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix day"
                                            data-setbg=""
                                        >
                                            <Ads />
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
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix month week"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix week years"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix years month"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix day"
                                            data-setbg=""
                                        >
                                            <Ads />
                                            <div className="ep">Free</div>
                                            <div className="view"><i className="fa fa-download"></i> 9141</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- Product Section End --> */}


        </>
    )
}

export default Categories
