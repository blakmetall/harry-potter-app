import styled from 'styled-components';

const StyledAdd = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding: 5px;
    border-left: 1px solid #403b6d;
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: 11px;
    }
`;

const StyledFavorites = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding: 5px;
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: 11px;
    }
`;

const StyledFavoritesBar = styled.div`
    width: 100%;
    background: #6b63b5;
    border-radius: 0 0 8px 8px;
    display: flex;
    box-shadow: -1px 6px 5px -3px rgba(23, 23, 23, 0.75);

    @media (max-width: 767px) {
        border-radius: 8px 8px 0 0;
    }
`;

const StyledFavoritesBarContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 281px;
`;

const StyledFavoritesDropdown = styled.div`
    position: absolute;
    top: 26px;
    left: 0;
    background: #6b63b5;
    padding: 15px 15px 15px 15px;
    width: 100%;
    border-radius: 0 0 7px 7px;
    display: none;

    ${(props) =>
        props.showFavorites &&
        `
        display:block;
    `}

    @media (max-width: 767px) {
        top: ${(props) => '-' + (props.totalFavorites * 49 + 20) + 'px'};
        border-radius: 8px 8px 0 0;

        ${(props) =>
            props.totalFavorites === 0 &&
            `
            top: -45px;
        `}
    }
`;

export { StyledAdd, StyledFavorites, StyledFavoritesBar, StyledFavoritesBarContainer, StyledFavoritesDropdown };
