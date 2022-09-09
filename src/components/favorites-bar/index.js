import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BookmarkFillIcon, UserFillIcon } from '../icons';
import FavoriteItem from './favorite-item';
import { StyledAdd, StyledFavorites, StyledFavoritesBar, StyledFavoritesBarContainer, StyledFavoritesDropdown } from './styled';

const FavoritesBar = ({ favorites, onAddFavorites, onDeleteFavorite }) => {
    const [showFavorites, setShowFavorites] = useState(false);

    const totalFavorites = favorites.length;

    const handleOnShowFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    const handleOnAddFavorites = () => {
        onAddFavorites();
    };

    return (
        <>
            <StyledFavoritesBarContainer>
                {/* favorites bar */}
                <StyledFavoritesBar>
                    <StyledFavorites onClick={handleOnShowFavorites}>
                        <div className="pe-1">Favoritos</div>
                        <BookmarkFillIcon />
                    </StyledFavorites>

                    <StyledAdd onClick={handleOnAddFavorites}>
                        <div className="pe-1">Agregar</div>
                        <UserFillIcon />
                    </StyledAdd>
                </StyledFavoritesBar>

                {/* favorites dropdown */}
                <StyledFavoritesDropdown showFavorites={showFavorites} totalFavorites={totalFavorites}>
                    {favorites.map((favorite, index) => (
                        <FavoriteItem
                            key={index}
                            favorite={favorite}
                            isLastItem={index === totalFavorites - 1}
                            onDeleteFavorite={onDeleteFavorite}
                        />
                    ))}
                </StyledFavoritesDropdown>
            </StyledFavoritesBarContainer>
        </>
    );
};

FavoritesBar.propTypes = {
    favorites: PropTypes.array,
    onAddFavorites: PropTypes.func,
    onDeleteFavorite: PropTypes.func,
};

FavoritesBar.defaultProps = {
    favorites: [],
    onAddFavorites: () => {},
    onDeleteFavorite: () => {},
};

export default FavoritesBar;
