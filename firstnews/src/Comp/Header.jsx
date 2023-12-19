import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Blogs from '../Pages/Blogs'
import Details from '../Pages/Details'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://wowally.com/wp-content/themes/wowally/img/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">blog</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cat/:cid' element={<Category/>}/>
                <Route path='/blog/' element={<Blogs/>}/>
                <Route path='/details/:did' element={<Details/>}/>
            </Routes>

        </>
    )
}

export default Header
