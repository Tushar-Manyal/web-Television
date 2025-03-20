import React from 'react'
import { NavLink } from 'react-router-dom'
// import "tailwindcss";

const Header = () => {
    const getStyled=({isActive})=>{
        return  {
            color:isActive ? "blue" : "black",
          };
    }
  return (
    <div>
         <header class="section-navbar">
      <section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div class="sing_in_up">
            <NavLink to="# ">SIGN IN</NavLink>
            <NavLink to="# ">SIGN UP</NavLink>
          </div>
        </div>
      </section>
      <div class="container h-90 bg-red-500">
        <div className="container-inside">
            
          <a href="index.html">
            <img
              src="https://illustoon.com/photo/7627.png"
              alt="logo"
              class="logomovies"
              width="60%"
              height="auto"
            />
          </a>
          <p class='para'>WEB <span class="para2">TELEVISION</span></p>
        </div>

        <nav class="navbar h-20 bg-red-500">
          <ul>
            <li class="nav-item">
              <NavLink to="/" style={getStyled} className={({isActive})=>
              isActive ? "nav-link active-link" :" nav-link"
            } 
            >Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/about" style={getStyled}>about</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/movies" style={getStyled} class="nav-link">movies</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contact" style={getStyled} class="nav-link">contact</NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="addToCart.html"
                class="nav-link add-to-cart-button"
                id="cartValue"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    </div>
  )
}

export default Header