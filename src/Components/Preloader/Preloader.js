import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Preloader = ({ load }) => {
    return (
        <div id={load ? 'preloader' : 'preloader-none'}></div>
    );
}

export default Preloader;
