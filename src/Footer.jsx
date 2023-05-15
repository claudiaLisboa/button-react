
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <h4><span className="created-by">Created by Claudia Lisboa</span><span className="studying"> - For studying purpose</span></h4> 
      <div className='container'>
        <span className='text-muted'>© {new Date().getFullYear()}  All rights reserved.</span>
        <a href="https://github.com/claudiaLisboa"> https://github.com/claudiaLisboa </a>
      </div>
    </footer>
  );
};

export default Footer;