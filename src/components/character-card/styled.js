import styled from 'styled-components';

const StyledAliveStatus = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    color: #999999;

    @media (max-width: 1115px) {
        font-size: 12px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
    }
`;

const StyledBookmarkWrapper = styled.div`
    cursor: pointer;
`;

const StyledCardContainer = styled.div`
    width: 515px;
    min-height: 265px;
    display: flex;
    align-items: stretch;
    margin-bottom: 45px;
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: 1115px) {
        width: 48%;
    }

    @media (max-width: 991px) {
        margin-bottom: 30px;
        flex-direction: column;
    }

    @media (max-width: 767px) {
        margin-bottom: 15px;
        min-height: 0px;
        border-radius: 6px;
    }
`;

const StyledDataHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media (max-width: 1115px) {
        margin-bottom: 20px;
    }

    @media (max-width: 767px) {
        margin-bottom: 0px;
    }
`;

const StyledDataWrapper = styled.div`
    width: 100%;
    background: white;
    padding: 20px;
    color: #374a59;

    ${(props) =>
        props.isNotAlive &&
        `
        background: #CCCCCC;
    `}

    @media (max-width: 767px) {
        padding: 12px;
        height: 100%;
    }
`;

const StyledHeadingName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`;

const StyledImage = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    ${(props) =>
        props.srcUrl &&
        `
        background-image: url(${props.srcUrl});
        
    `};

    ${(props) =>
        !props.srcUrl &&
        `
        background-image: url('https://via.placeholder.com/150');
    `}

    @media (max-width: 1115px) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 767px) {
        width: 80px;
        height: 80px;
    }
`;

const StyledImageWrapper = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 210px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(150deg, #ff0000, #fed482);

    ${(props) =>
        props.house &&
        props.house === 'Slytherin' &&
        `
        background: linear-gradient(150deg, #1C792B, #82E95E);
    `}

    ${(props) =>
        props.house &&
        props.house === 'Hufflepuff' &&
        `
        background: linear-gradient(150deg, #FFC700, #FFF388);
    `}

    ${(props) =>
        props.house &&
        props.house === 'Ravenclaw' &&
        `
        background: linear-gradient(150deg, #0597B7, #66D1FF);
    `}

    @media (max-width: 1115px) {
        width: 160px;
    }

    @media (max-width: 991px) {
        width: 100%;
        padding: 20px 0;
    }

    @media (max-width: 767px) {
        padding: 15px 0;
    }
`;

const StyledInfoRow = styled.div`
    font-size: 18px;
    margin-bottom: 11px;

    @media (max-width: 1115px) {
        font-size: 14px;
        margin-bottom: 7px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const StyledName = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2em;
    color: #081f32;
    margin-bottom: 25px;

    @media (max-width: 1115px) {
        font-size: 22px;
        margin-bottom: 20px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const StyledTrashWrapper = styled.div`
    cursor: pointer;
`;

export {
    StyledAliveStatus,
    StyledBookmarkWrapper,
    StyledCardContainer,
    StyledDataHeading,
    StyledDataWrapper,
    StyledHeadingName,
    StyledImage,
    StyledImageWrapper,
    StyledInfoRow,
    StyledName,
    StyledTrashWrapper,
};
