import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="container text-center mt-3">
                <div className="error-box bg-warning p-4">
                    <h1 className="display-2">Sorry!</h1>
                    <h2 className="display-4">Page not found!</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;