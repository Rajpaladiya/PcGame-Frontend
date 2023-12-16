// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {

//     const Homepage =()=>{
//         setTimeout(() => {
            
//             window.location.href = '/'; // Replace with your actual download page URL
//         }, 1000);
//     }

//     const Categories = () => {

//         setTimeout(() => {
            
//             window.location.href = '/categories'; // Replace with your actual download page URL
            
//         }, 1000);
//     }

//     const Blog = () => {

//         setTimeout(() => {
            
//             window.location.href = '/Blog'; // Replace with your actual download page URL
//         }, 1000);
//     }





//     return (
//         <>

// {/* <!-- Search model Begin --> */}
//   <div className="search-model">
//     <div className="h-100 d-flex align-items-center justify-content-center">
//         <div className="search-close-switch"><i className="icon_close"></i></div>
//         <form className="search-model-form">
//             <input type="text" id="search-input" placeholder="Search here....."/>
//         </form>
//     </div>
// </div>
// {/* <!-- Search model end --> */}


//             {/* <!-- Page Preloder --> */}
//             <div id="preloder">
//                 <div className="loader"></div>
//             </div>

//             {/* <!-- Header Section Begin --> */}
//             <header className="header_section">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-2">
//                             <div className="header__logo">
//                                 <Link to="./">
//                                     <img src="img/logo.png" alt="" />
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="col-lg-8">
//                             <div className="header__nav">
//                                 <nav className="header__menu mobile-menu">
//                                     <ul>
//                                         <li className="active mx-3"><Link onClick={Homepage}>Homepage</Link></li>
//                                         {/* <li className="active mx-3" onClick={Homepage}>Homepage</li> */}
//                                         <li className='mx-3'><Link  onClick={Categories}>Categories</Link></li>
//                                         <li className='mx-3' ><Link  onClick={Blog}>Our Blog</Link></li>

//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                         <div className="col-lg-2">
//                             <div className="header__right">
                                
//                                 <Link to="#" className="search-switch" ><span className="icon_search"></span></Link>
                               

                                
 
//                             </div>
//                         </div>
//                     </div>
//                     <div id="mobile-menu-wrap"></div>
//                 </div>
//             </header>
//             {/* <!-- Header End --> */}







//         </>
//     )
// }

// export default Navbar




import React from 'react'
import { Link } from 'react-router-dom'
// import './navbar.css';

const Navbar = () => {




    return (
        <>
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to="/">
                                <span>
                                    GameWorld
                                </span>

                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/">Home 
                                            <span className="sr-only">(current)</span>
                                            </Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="categories"> Categories</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="blog">Blog</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="quote_btn-container">
                                    <Link to="">
                                        <span>
                                            Login
                                        </span>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </Link>
                                    <form className="form-inline">
                                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            
        </>
    )
}

export default Navbar
