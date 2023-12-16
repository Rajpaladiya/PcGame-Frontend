import React from 'react'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom';
// import { MyContext } from '../Context/Download/DownloadState'
import Ads from './Ads';
import { useEffect, useState } from 'react';
import {useDownloadContext} from '../Context/DownloadState';



const GameAbout = () => {
  const navigate =useNavigate()
  console.log('useDownloadContext--',useDownloadContext());
const {setDownloadData}=useDownloadContext()
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
            {/* <!-- Blog Details Section Begin --> */}
    <section class="blog-details spad">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="blog__details__title">
                        <h6>Action, Magic <span>- March 08, 2020</span></h6>
                        <h2>Gta 5</h2>
                       
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog__details__pic">
                        <img src="img/blog/details/blog-details-pic.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="blog__details__content">
                        <div class="blog__details__text">
                            <p>As a result the last couple of eps haven’t been super exciting for me, because they’ve
                                been more like settling into a familiar and comfortable routine.  We’re seeing character
                                growth here but it’s subtle (apart from Shouyou, arguably).  I mean, Tobio being an
                                asshole is nothing new – it’s kind of the foundation of his entire character arc. 
                                Confronting whether his being an asshole is a problem for the Crows this directly is a
                                bit of an evolution, and probably an overdue one at that, but the overall dynamic with
                            Kageyama is basically unchanged.</p>
                        </div>
                        <div class="blog__details__item__text">
                            <h4>Tobio-Nishinoya showdown:</h4>
                            <img src="img/blog/details/bd-item-1.jpg" alt=""/>
                            <p>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a
                                lot more shocking than it would be in the West, but Tobio calling out teammates in
                                genuinely rude fashion in the middle of a match is what got him isolated in the first
                                place.  It’s better for the Crows to sort this out in practice matches than the real
                                deal, but this is really on Tobio – he has to figure out how to co-exist with others in
                            a team environment.</p>
                        </div>
                        <div class="blog__details__item__text">
                            <h4>Nanatsu no Taizai: Kamigami No Gekirin</h4>
                            <img src="img/blog/details/bd-item-2.jpg" alt=""/>
                            <p>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a
                                lot more shocking than it would be in the West, but Tobio calling out teammates in
                                genuinely rude fashion in the middle of a match is what got him isolated in the first
                                place.  It’s better for the Crows to sort this out in practice matches than the real
                                deal, but this is really on Tobio – he has to figure out how to co-exist with others in
                            a team environment.</p>
                        </div>
                        <div class="blog__details__item__text">
                            <h4>ID:Ianvaded:</h4>
                            <img src="img/blog/details/bd-item-3.jpg" alt=""/>
                            <p>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a
                                lot more shocking than it would be in the West, but Tobio calling out teammates in
                                genuinely rude fashion in the middle of a match is what got him isolated in the first
                                place.  It’s better for the Crows to sort this out in practice matches than the real
                                deal, but this is really on Tobio – he has to figure out how to co-exist with others in
                            a team environment.</p>
                        </div>
                        <div class="blog__details__tags">
                            <Link to="#">Healthfood</Link>
                            <Link to="#">Sport</Link>
                            <Link to="#">Game</Link>
                        </div>
                        <div class="blog__details__btns">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="blog__details__btns__item">
                                        <h5><Link to="#"><span class="arrow_left"></span> Building a Better LiA...</Link>
                                        </h5>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="blog__details__btns__item next__btn">
                                        <h5><Link to="#">Mugen no Juunin: Immortal – 21 <span
                                            class="arrow_right"></span></Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="blog__details__comment">
                                <h4> Comments</h4>
                                {
                                    comments.map((eachcomment)=>{
                                        return(
                                            <>
                                            <div class="blog__details__comment__item">
                                    <div class="blog__details__comment__item__pic">
                                        <img src={eachcomment.image} alt={eachcomment.name}/>
                                    </div>
                                    <div class="blog__details__comment__item__text">
                                        <span>{eachcomment.date}</span>
                                        <h5>{eachcomment.name}</h5>
                                        <p>{eachcomment.comment}</p>
                                    </div>
                                </div>
                                            </>


                                        )
                                    })
                                }
                                
                                
                               
                            </div>
                            <div class="blog__details__form">
                                <h4>Leave A Commnet</h4>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" class="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Blog Details Section End --> */}
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

export default GameAbout
