import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='mb-6 mt-10'>
                <h2 className='text-4xl font-bold text-center text-[#09080F] mb-3'>Gadget Heaven</h2>
                <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
           <footer className="footer bg-base-200 text-base-content p-10 ">
  <nav className='mx-auto'>
     <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;