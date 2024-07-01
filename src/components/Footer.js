import React from 'react';

const CustomFooter = ({ bgColor, className }) => {
  return (
    <footer className={`text-center text-lg-left ${className}`} style={{ backgroundColor: bgColor === 'dark' ? 'rgba(0, 0, 0, 0.8)' : '#27272b'}}>
      <div className='text-center p-3'style={{ color: 'white' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default CustomFooter;
