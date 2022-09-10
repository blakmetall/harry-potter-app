import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BookmarkFillIcon, UserFillIcon } from '../icons';
import FavoriteItem from './favorite-item';
import { StyledAdd, StyledFavorites, StyledFavoritesBar, StyledFavoritesBarContainer, StyledFavoritesDropdown } from './styled';

const FavoritesBar = ({ favorites, onAddCharacter, onDeleteFavorite }) => {
    const [showFavorites, setShowFavorites] = useState(false);

    const totalFavorites = favorites.length;

    const handleOnShowFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    const handleOnAddCharacter = () => {
        onAddCharacter();
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

                    <StyledAdd onClick={handleOnAddCharacter}>
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
                    {favorites.length === 0 && <div>No tienes favoritos agregados</div>}
                </StyledFavoritesDropdown>
            </StyledFavoritesBarContainer>
        </>
    );
};

FavoritesBar.propTypes = {
    favorites: PropTypes.array,
    onAddCharacter: PropTypes.func,
    onDeleteFavorite: PropTypes.func,
};

FavoritesBar.defaultProps = {
    favorites: [],
    onAddCharacter: () => {},
    onDeleteFavorite: () => {},
};

export default FavoritesBar;
