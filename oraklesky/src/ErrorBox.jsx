import React from 'react';

const ErrorBox = ({ status, errorMessage }) => {
    if(status === true) {
        return (
            <div>
                <div className="error-box">
                    <h3>Oops! Something went wrong!</h3>
                    <p>{errorMessage}</p>
                </div>
            </div>
        )
    }
}

export default ErrorBox;