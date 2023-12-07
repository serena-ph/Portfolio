import React from "react";

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/serenatphan/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/na.ntphan/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/profile.phd?id=100056942423520/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>


    </div>
  );
};

export default SocialMediaIcon;
