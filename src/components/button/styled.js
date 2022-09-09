import styled from 'styled-components';

const StyledButton = styled.button`
    width: 288px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    padding: 20px;
    border: 4px solid #6b63b5;

    &:hover {
        background: rgba(107, 99, 181, 0.6);
    }

    &:focus,
    &:active {
        background: #6b63b5;
    }

    @media (max-width: 767px) {
        width: 140px;
        font-size: 13px;
        padding: 10px 5px;
    }

    @media (max-width: 350px) {
        width: 120px;
    }
`;

export { StyledButton };
