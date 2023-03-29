import React from "react";

const Footer = () => {
  const redirect = (url) => {
    window.location = url;
  };

  return (
    <footer className="bg-black py-12" id="footer_section">
      <div className="container mx-auto text-white flex flex-col lg:flex-row gap-y-10 justify-between">
        <h4 className="font-tertiary tracking-[1px]">
          Copyright &copy; 2023. All rights reserved
        </h4>
        <div className="fill-white cursor-pointer">
          <box-icon
            onClick={() => redirect("https://github.com/Santiagogure")}
            type="logo"
            name="github"
          ></box-icon>
          <box-icon
            onClick={() =>
              redirect("https://www.linkedin.com/in/santiago-gurevich/")
            }
            type="logo"
            name="linkedin"
          ></box-icon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
