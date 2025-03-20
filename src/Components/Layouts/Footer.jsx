import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img className='imgFilm' src="https://img.freepik.com/free-vector/creative-cinema-production-logo_23-2149509983.jpg?t=st=1742493594~exp=1742497194~hmac=4fa5797a161a30b36f529fc7e25ce3425de0dfe907186ae9177c115b607e3829&w=826" alt="logo" />
          <p>
            Welcome to Manyal EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input className="emailBox" type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Tushar Manyal</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer