import React from 'react'
import {Link} from 'react-router-dom'
import Ads2 from './Ads2';
const Footer = () => {

    const Homepage =()=>{
        setTimeout(() => {
            
            window.location.href = '/'; // Replace with your actual download page URL
        }, 1000);
    }

    const Categories = () => {

        setTimeout(() => {
            
            window.location.href = '/categories'; // Replace with your actual download page URL
        }, 1000);
    }

    const Blog = () => {

        setTimeout(() => {
            
            window.location.href = '/Blog'; // Replace with your actual download page URL
        }, 1000);
    }







  return (
    <>

   
       
{/* <!-- Footer Section Begin --> */}
<footer className="footer">
    <div className="page-up">
        {/* <button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} id="scrollToTopButton"><span className="arrow_carrot-up"></span></button> */}
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer__logo">
                    <Link to="/"><img src="img/logo.png" alt="Logo"/></Link>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer__nav">
                    <ul>
                        <li className="active"><Link onClick={Homepage}>Home</Link></li>
                        <li><Link  onClick={Categories}>Categories</Link></li>
                        <li><Link onClick={Blog} >Our Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>

              </div>
          </div>
      </div>
      <div className="Ads" style={{textAlign:"center"}}> <Ads2/></div>

  </footer>
  {/* <!-- Footer Section End --> */}






    </>
  )
}

export default Footer
