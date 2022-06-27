import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>Copyright John Lim {currentYear}</footer>;
}

export default Footer;
