import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { StyledModal } from './styled';

function Modal({ showIf, onHide, children }) {
    const shouldShow = !!showIf;

    return (
        <StyledModal show={shouldShow} onHide={() => onHide()}>
            <BootstrapModal.Body>{children}</BootstrapModal.Body>
        </StyledModal>
    );
}

Modal.propTypes = {
    showIf: PropTypes.any,
    onHide: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Modal.defaultProps = {
    title: '',
    showIf: undefined,
    onHide: () => {},
    children: undefined,
};

export default Modal;
