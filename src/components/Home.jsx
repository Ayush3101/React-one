import React from 'react';
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube,AiFillInstagram}from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solutions to all your  problems</p>
        </main>
      
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics"/>

        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum recusandae sed quae cupiditate ad, omnis numquam illo et quos aperiam atque? Repellat placeat at delectus expedita? Unde minima ducimus minus, quos laboriosam perspiciatis ratione laborum nisi nesciunt recusandae, explicabo earum voluptates repellendus atque porro accusantium provident eligendi optio dolor.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deleniti ipsum quasi rem magni repellendus odit veritatis, maxime ipsam, laudantium soluta aperiam, quo dicta. Quos accusantium ex dolorem? Veritatis, modi?</p>
        </div>
    </div>
    <div className="home4" id="brands">
     <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }}
            >
                <AiFillGoogleCircle/>
                <p>
                Google
                </p>
            </div>
    
            <div style={{
                animationDelay:"0.5s",
            }}
            >
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s",
            }}
            >
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"1s",
            }}
            >
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
     </div>   
    </div>
    </>
  )
}

export default Home
