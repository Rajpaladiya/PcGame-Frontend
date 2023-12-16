import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useDownloadContext } from '../Context/DownloadState';
import Ads from './Ads';
const Download = (props) => {
    const { downloadData } = useDownloadContext()
    const [comments, setcomment] = useState([]);
    const [data, setdata] = useState();
    const navigate = useNavigate()
    console.log('useDownloadContext--', useDownloadContext());
    const { setDownloadData } = useDownloadContext()

    console.log('data---', data);
    console.log('downloadData---', downloadData);
    const getData = async () => {
        console.log('TTTTTTTTTTTTT');
        const json = await axios.get("http://localhost:5000/FetchGame")

        json.data.map((eachdata) => {
            console.log('eachdata--', eachdata._id);
            if (eachdata._id === downloadData) {
                setdata(eachdata)
            }
        })
    }

    useEffect(() => {
        if (downloadData) {
            getData()
        }

    }, [downloadData])

    useEffect(() => {
        window.scrollTo(0,0)

    },[])


    console.log("store----", downloadData)

    const getComment = async () => {

        const json = await axios.get("http://localhost:5000/FetchComment")
        setcomment(json.data)
    }
    useEffect(() => {
        getComment()
    }, [])

     //Gameplay
     const handleButtonClick1 = (id) => {
        setDownloadData(id)


        setTimeout(() => {

            navigate('/gameplay'); // Replace with your actual  page URL

        }, 3000);
    }

    //   Download
    const handleButtonClick2 = (id) => {
        setDownloadData(id)


        setTimeout(() => {

            navigate('/downloadlink'); // Replace with your actual  page URL

        }, 3000);
    }
   
    return (
        <>
            {/* <!-- Breadcrumb Begin --> */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home</a>
                                <a href="/categories">Categories</a>
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}
            {/* <!-- Anime Section Begin --> */}
            <section className="anime-details spad">
                <div className="container">

                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="anime__details__pic set-bg" style={{ backgroundImage: `url(${data?.image})` }}>
                                    <div className="comment"><i className="fa fa-comments"></i> {data?.comment}</div>
                                    <div className="view"><i className="fa fa-download"></i> {data?.download}</div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>{data?.name}</h3>
                                        <span>{data?.type_one}, {data?.type_two} </span>
                                    </div>
                                    <div className="anime__details__rating">
                                        <div className="rating">
                                            <Link to="#"><i className="fa fa-star"></i></Link>
                                            <Link to="#"><i className="fa fa-star"></i></Link>
                                            <Link to="#"><i className="fa fa-star"></i></Link>
                                            <Link to="#"><i className="fa fa-star"></i></Link>
                                            <Link to="#"><i className="fa fa-star-half-o"></i></Link>
                                        </div>
                                        <span>{data?.vote} Votes</span>
                                    </div>
                                    <p>{data?.about}</p>
                                    <div className="anime__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> {data?.categories}</li>
                                                    <li><span>Size:</span>{data?.size} GB</li>
                                                    <li><span>Publish Date:</span> {data?.publishDate}</li>
                                                    <li><span>Genre:</span> {data?.genre_one},{data?.genre_two}</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Scores:</span> {data?.score}/100</li>
                                                    <li><span>Rating:</span> {data?.rating} /10 </li>
                                                    <li><span>Quality:</span> {data?.quality}</li>
                                                    <li><span>Views:</span> {data?.views}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="anime__details__btn">
                                    <a target='_blank' href='https://forgetfulpromptlyappointment.com/ppsntm44dn?key=97c77da3300729e3a45028c8d76e7c83' rel="noreferrer">

                                        <button style={{border:"0px"}}  onClick={() => handleButtonClick1(data?._id)} className="follow-btn"><i className="fa fa-play"></i> Gameplay</button>
                                        <button style={{border:"0px", backgroundColor:"#0b0c2a"}} onClick={() => handleButtonClick2(data?._id)} className="watch-btn"><span>Download Link</span> <i
                                            className="fa fa-angle-right"></i></button>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="anime__details__review">
                                <div className="section-title">
                                    <h5>Reviews</h5>
                                </div>

                                {
                                    comments.map((eachcomment) => {
                                        return (
                                            <>
                                                <div className="anime__review__item">
                                                    <div className="anime__review__item__pic">
                                                        <img src={eachcomment.image} alt="" />
                                                    </div>
                                                    <div className="anime__review__item__text">
                                                        <h6>{eachcomment.name} - <span>{eachcomment.date}</span></h6>
                                                        <p>{eachcomment.comment}</p>
                                                    </div>
                                                </div>




                                            </>
                                        )







                                    })
                                }


                            </div>
                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Your Comment</h5>
                                </div>
                                <form action="#">
                                    <textarea placeholder="Your Comment"></textarea>
                                    <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">

                            <div className="product__sidebar__view">
                                <div className="section-title">
                                    <h5>you might like...</h5>
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
                                        <Ads />
                                        <div className="ep">Free</div>
                                        <div className="view"><i className="fa fa-download"></i> 9141</div>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix month week"

                                    >
                                        <Ads />
                                        <div className="ep">Free</div>
                                        <div className="view"><i className="fa fa-download"></i> 9141</div>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix week years"

                                    >
                                        <Ads />
                                        <div className="ep">Free</div>
                                        <div className="view"><i className="fa fa-download"></i> 9141</div>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix years month"

                                    >
                                        <Ads />
                                        <div className="ep">Free</div>
                                        <div className="view"><i className="fa fa-download"></i> 9141</div>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix day"

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
            </section>
            {/* <!-- Anime Section end --> */}

        </>
    )
}

export default Download
