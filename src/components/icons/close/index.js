import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const CloseIcon = ({ size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                className={className}
                style={style}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="34" height="34" fill="white" />
                <circle cx="17" cy="17" r="12.75" stroke="#333333" />
                <path d="M12.75 21.2495L21.25 12.7495" stroke="#333333" />
                <path d="M21.25 21.25L12.75 12.75" stroke="#333333" />
            </svg>
        </StyledIcon>
    );
};

CloseIcon.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

CloseIcon.defaultProps = {
    size: undefined,
    className: undefined,
    style: undefined,
};

export default CloseIcon;
