import styled from 'styled-components';

const StyledCloseIconWrapper = styled.div`
    cursor: pointer;
`;

const StyledFormContainer = styled.div`
    color: #000000;
`;

const StyledFormTitle = styled.div`
    font-size: 28px;
    font-weight: 600;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

const StyledHouseLabel = styled.div`
    font-size: 14px;
    color: #263238;
    text-transform: uppercase;
    margin-bottom: 6px !important;
`;

export { StyledCloseIconWrapper, StyledFormContainer, StyledFormTitle, StyledHouseLabel };
