import styled from 'styled-components';

const StyledFavoriteImgWrapper = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 12px;
    flex-shrink: 0;
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
`;

const StyledFavoriteName = styled.div`
    font-size: 18px;
    padding-right: 5px;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

const StyledFavoritePerson = styled.div`
    display: flex;
    align-items: center;
`;

const StyledFavoriteRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
    border-bottom: 1px solid #403b6d;

    ${(props) =>
        props.isLastItem &&
        `
        border-bottom: 0;
    `}
`;

const StyledFavoriteTrashWrapper = styled.div`
    cursor: pointer;
`;

export { StyledFavoriteImgWrapper, StyledFavoriteName, StyledFavoritePerson, StyledFavoriteRow, StyledFavoriteTrashWrapper };
