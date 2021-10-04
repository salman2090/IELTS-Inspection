import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-danger mt-5">404</h1>
            <h3>The page you are searching is unavailable.</h3>
            <img className="w-75 mt-5 mb-5 " src="./banner-error.jpg" alt="" />
        </div>
    );
};

export default NotFound;