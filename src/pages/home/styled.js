import styled from 'styled-components';

const StyledButtonsWrapper = styled.div`
    max-width: 670px;
    margin: 0 auto 80px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        justify-content: space-evenly;
        margin-bottom: 30px;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
`;

const StyledFooterContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`;

const StyledHeadingContainer = styled.div`
    background: url('/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    min-height: 650px;

    @media (max-width: 991px) {
        min-height: 500px;
    }

    @media (max-width: 767px) {
        background: none;
    }
`;

const StyledHeadingWrapper = styled.div`
    margin-bottom: 150px;

    @media (max-width: 991px) {
        margin-bottom: 80px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const StyledLogo = styled.img`
    @media (max-width: 767px) {
        width: 124px;
    }
`;

const StyledLogoWrapper = styled.div`
    margin-bottom: 30px;

    @media (max-width: 767px) {
        padding-top: 30px;
    }
`;

const StyledCharactersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -150px;

    @media (max-width: 991px) {
        margin-top: -90px;
    }

    @media (max-width: 767px) {
        margin-top: -260px;
    }
`;

const StyledSelectFilterLabel = styled.div`
    font-size: 36px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        font-size: 18px;
        margin-bottom: 30px;
    }
`;

export {
    StyledButtonsWrapper,
    StyledContainer,
    StyledFooterContainer,
    StyledHeadingContainer,
    StyledHeadingWrapper,
    StyledLogo,
    StyledLogoWrapper,
    StyledCharactersWrapper,
    StyledSelectFilterLabel,
};
