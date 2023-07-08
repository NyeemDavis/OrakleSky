import React from 'react';

const ErrorBox = ({ status, errorMessage }) => {
    if(status === true) {
        return (
            <div>
                <div className="error-box">
                    <h1>Oops! Something went wrong!</h1>
                    <p>{errorMessage}</p>
                </div>
            </div>
        )
    }
}

export default ErrorBox;