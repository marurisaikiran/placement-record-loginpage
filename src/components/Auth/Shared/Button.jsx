import React from 'react';
import './Button.css';
const Button = ({ type = 'button', variant = 'primary', children, onClick, disabled = false, loading = false, className = '' }) => {
    return (
        <button type={type} className={`button button-${variant} ${loading ? 'loading' : ''} ${className}`} onClick={onClick} disabled={disabled || loading}>
            {loading ? (
                <>
                    <span className="spinner"></span>
                    <span className="button-text">{children}</span>
                </>
            ) : (
                children
            )}
        </button>
    );
};
export default Button;