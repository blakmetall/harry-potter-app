import React from 'react';
import PropTypes from 'prop-types';
import { TrashIcon } from '../../icons';
import {
    StyledFavoriteImgWrapper,
    StyledFavoriteName,
    StyledFavoritePerson,
    StyledFavoriteRow,
    StyledFavoriteTrashWrapper,
} from './styled';

const FavoriteItem = ({ favorite, isLastItem, onDeleteFavorite }) => {
    const handleOnDeleteFavorite = () => {
        onDeleteFavorite(favorite.id);
    };

    return (
        <StyledFavoriteRow isLastItem={isLastItem}>
            <StyledFavoritePerson>
                <StyledFavoriteImgWrapper srcUrl={favorite.image} />
                <StyledFavoriteName>{favorite.name}</StyledFavoriteName>
            </StyledFavoritePerson>

            <StyledFavoriteTrashWrapper onClick={handleOnDeleteFavorite}>
                <TrashIcon />
            </StyledFavoriteTrashWrapper>
        </StyledFavoriteRow>
    );
};

FavoriteItem.propTypes = {
    favorite: PropTypes.object,
    isLastItem: PropTypes.bool,
    onDeleteFavorite: PropTypes.func,
};

FavoriteItem.defaultProps = {
    favorite: {},
    isLastItem: false,
    onDeleteFavorite: () => {},
};

export default FavoriteItem;
