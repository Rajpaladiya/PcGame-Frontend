import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadContext } from '../Context/DownloadState';
import axios from 'axios';
import Ads2 from './Ads2';
// import Ads from './Ads';



const DownloadLink = () => {

    // const [genrate, setGenrate] = useState();
    const bottomRef = useRef();






    const { downloadData } = useDownloadContext()
    console.log('downloadData---', downloadData);
    const [data, setdata] = useState();

    // Gentrate Link Button State
    const [buttonText, setButtonText] = useState('Genrate Link');
    const [isButtonVisible, setButtonVisibility] = useState(true);



    //DownloadLink Butoon State
    const [buttonText2, setButtonText2] = useState('Download Link');

    const [isButtonVisible2, setButtonVisibility2] = useState(false);



    const GenrateLink = () => {
        // console.log("DownloadLink")
        setButtonText()
        setTimeout(() => {

            setButtonVisibility(false);
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
            setButtonVisibility2(true)


        }, 3000);


    }
    const Downloadlink = () => {
        setButtonText2()

        setTimeout(() => {

            if (data?.url) {
                window.location.href = data?.url;
                // console.log("URLLLLLLLL")
                // window.location.href='/Success'
 

            } else {
                var file_path = data?.file_path;
                var a = document.createElement('A');
                a.href = file_path;
                a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.location.href = '/Success'


            }



        }, 2000);

    }



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
        window.scrollTo(0, 0)

    }, [])
    return (

        
        <>

         {/* <!-- Breadcrumb Begin --> */}
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="/"><i class="fa fa-home"></i>Home</a>
                        <span>DownloadLink</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}
            {/* <!-- Game Details Section Begin --> */}
            <section className="blog-details spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <Ads2 />
                            {/* <Ads /> */}
                            {
                                isButtonVisible && (
                                    <div className="anime__details__btn" onClick={GenrateLink}>
                                        <Link className="follow-btn" style={{ position: "absolute", left: "37%", top: "73%" }}><i className="fa fa-download " ></i> {buttonText ? 'Genrate Link' : 'Pleae Wait....'} <i className="fa fa-download "></i></Link>
                                    </div>
                                )}

                            <div className="blog__details__title">
                                {/* <h6>Action, Magic <span>- March 08, 2020</span></h6> */}
                                <h2 >{data?.name}</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="blog__details__pic">
                                <img src={data?.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog__details__content">
                                <div className="blog__details__text">
                                    <p>{data?.about}</p>
                                </div>
                                <Ads2 />
                                {/* <Ads /> */}

                                <div className="blog__details__item__text">
                                    <img src={data?.screenshot_one} alt="" />
                                    <p>{data?.about_one}</p>
                                </div>
                                <Ads2 />
                                {/* <Ads /> */}

                                <div className="blog__details__item__text"  >
                                    <img src={data?.screenshot_two} alt="" />
                                    <p>{data?.about_two}</p>
                                </div>
                                <Ads2 />
                                {/* <Ads /> */}


                                <div className="blog__details__item__text" >
                                    <img src={data?.screenshot_three} alt="hii" />

                                    <p>{data?.about_three}</p>
                                </div>
                                <div ref={bottomRef}></div>
                                <Ads2 />

                                <br />
                                <br />

                                {
                                    isButtonVisible2 && (
                                        <div className="anime__details__btn" onClick={Downloadlink}>
                                            <Link className="follow-btn" style={{ position: "absolute", left: "37%" }}><i className="fa fa-link " ></i> {buttonText2 ? 'Download Link' : 'Pleae Wait....'} <i className="fa fa-link "></i></Link>
                                        </div>
                                    )}


                                <br />
                                <br />
                                <br />


                                <br />
                                <Ads2 />




                                <div className="blog__details__btns">

                                    <Ads2 />
                                </div>
                                <div className="blog__details__comment">
                                    <h4>3 Comments</h4>
                                    <div className="blog__details__comment__item">
                                        <div className="blog__details__comment__item__pic">
                                            <img src="img/blog/details/comment-1.png" alt="" />
                                        </div>
                                        <div className="blog__details__comment__item__text">
                                            <span>Sep 08, 2020</span>
                                            <h5>John Smith</h5>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                adipisci velit, sed quia non numquam eius modi</p>
                                            <Link to="#">Like</Link>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                    <div className="blog__details__comment__item blog__details__comment__item--reply">
                                        <div className="blog__details__comment__item__pic">
                                            <img src="img/blog/details/comment-2.png" alt="" />
                                        </div>
                                        <div className="blog__details__comment__item__text">
                                            <span>Sep 08, 2020</span>
                                            <h5>Elizabeth Perry</h5>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                adipisci velit, sed quia non numquam eius modi</p>
                                            <Link to="#">Like</Link>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                    <div className="blog__details__comment__item">
                                        <div className="blog__details__comment__item__pic">
                                            <img src="img/blog/details/comment-3.png" alt="" />
                                        </div>
                                        <div className="blog__details__comment__item__text">
                                            <span>Sep 08, 2020</span>
                                            <h5>Adrian Coleman</h5>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                adipisci velit, sed quia non numquam eius modi</p>
                                            <Link to="#">Like</Link>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details__form">
                                    <h4>Leave A Commnet</h4>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Message"></textarea>
                                                <button type="submit" className="site-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Game Details Section End -- */}


        </>
    )
}

export default DownloadLink
