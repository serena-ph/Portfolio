import SocialMediaIcon from "../components/SocialMediaIcon";

import React from 'react'

const Footer = () => {
  return (
    <footer className="h-54 bg-red pt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcon/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow">Serena Phan</p>
                <p></p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;