import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { MyContext } from '../Context/Download/DownloadState'
import Ads from './Ads';
// import video1 from {data?.video}
// import video2 from 'data?.video


import { useDownloadContext } from '../Context/DownloadState';



const Gameplay = () => {
const { downloadData } = useDownloadContext()
console.log('downloadData---', downloadData);
const [data, setdata] = useState();


const getData = async () => {
        console.log('TTTTTTTTTTTTT');
        const json = await axios.get("http://localhost:5000/FetchGame")

        json.data.map((eachdata) => {
        console.log(eachdata.video)

            console.log('eachdata--', eachdata._id);
            if (eachdata._id === downloadData) {
                setdata(eachdata)

            }

            // a= json.data 


        })

          

    }

    useEffect(() => {
        getData()
    }, [])







  const [comments, setcomment] = useState([]);

  const getComment = async () => {

    const json = await axios.get("http://localhost:5000/FetchComment")
    setcomment(json.data)
  }
  useEffect(() => {
    getComment()
  }, [])
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Anime Section Begin --> */}
              <section className="anime-details spad">
                <h2>{data?.name}</h2>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="anime__video__player">
                        <video id="player" playsInline controls data-poster={data?.image}  src={data?.video}
                           type="video/mp4" width="700" style={{borderRadius:"20px", border:"5px double grey"}}>
                          {/* <!-- Captions are optional --> */}
                        </video>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="anime__details__review">
                        <div className="section-title">
                          <h5>Review</h5>
                        </div>

                        {
                          comments.map((eachcomment) => {
                            return (
                              <>

                                <div className="anime__review__item">
                                  <div className="anime__review__item__pic">
                                    <img src={eachcomment.image} alt={eachcomment.name}/>
                                  </div>

                                  <div className="anime__review__item__text">
                                    <h6>{eachcomment.name}- <span>{eachcomment.date}</span></h6>
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
                          <h5>Your Review</h5>
                        </div>
                        <form action="#">
                          <textarea placeholder="Your Comment"></textarea>
                          <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- Anime Section End --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
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
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default Gameplay
