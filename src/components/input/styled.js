import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const StyledFormInput = styled(Form.Control)`
    background: #f2f3f3;
    border: 0;
    border-bottom: 2px solid #a4aaac;
    border-radius: 5px 5px 0 0;
    font-size: 13px;
    padding: 20px 10px 20px 10px;
`;

const StyledFormLabel = styled(Form.Label)`
    font-size: 14px;
    color: #263238;
    text-transform: uppercase;
    margin-bottom: 6px !important;
`;

export { StyledFormInput, StyledFormLabel };
