import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import SearchBox from "../../pages/Search"


const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://www.svgrepo.com/show/166681/movie.svg" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/form/login" style={{textDecoration: "none"}}><span>Login</span></Link>

                < SearchBox />
            </div>
        </div> 
    )
}

export default Header