import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterStatus, useIsFavorite } from './hooks';
import { BookmarkFillIcon, BookmarkOutlineIcon } from '../icons';
import {
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
} from './styled';

const CharacterCard = ({ character, favoritesIds, onAddFavorite, onRemoveFavorite }) => {
    const { id, image, hairColour, eyeColour, dateOfBirth, gender, alive, name, hogwartsStudent, hogwartsStaff, house } =
        character;

    const characterStatus = useCharacterStatus(hogwartsStudent, hogwartsStaff);
    const isFavorite = useIsFavorite(id, favoritesIds);

    const aliveStatus = alive ? 'Vivo' : 'Finado';

    const handleOnAddFavorite = () => {
        if (isFavorite) {
            onRemoveFavorite(id);
        } else {
            onAddFavorite(id);
        }
    };

    return (
        <StyledCardContainer>
            {/* image */}
            <StyledImageWrapper house={house}>
                <StyledImage srcUrl={image} />
            </StyledImageWrapper>

            <StyledDataWrapper isNotAlive={!alive}>
                {/* name */}
                <StyledHeadingName>{name}</StyledHeadingName>

                {/* alive status and bookmark */}
                <StyledDataHeading>
                    <StyledAliveStatus>
                        {aliveStatus} / {characterStatus}
                    </StyledAliveStatus>

                    <StyledBookmarkWrapper onClick={handleOnAddFavorite}>
                        {isFavorite && <BookmarkFillIcon color={'#333333'} />}
                        {!isFavorite && <BookmarkOutlineIcon />}
                    </StyledBookmarkWrapper>
                </StyledDataHeading>

                {/* name */}
                <StyledName>{name}</StyledName>

                {/* info rows */}
                <StyledInfoRow>
                    <b>Cumpleaños:</b> <span className="text-capitalize">{dateOfBirth}</span>
                </StyledInfoRow>
                <StyledInfoRow>
                    <b>Género:</b> <span className="text-capitalize">{gender}</span>
                </StyledInfoRow>
                <StyledInfoRow>
                    <b>Color de ojos:</b> <span className="text-capitalize">{eyeColour}</span>
                </StyledInfoRow>
                <StyledInfoRow>
                    <b>Color de pelo:</b> <span className="text-capitalize">{hairColour}</span>
                </StyledInfoRow>
            </StyledDataWrapper>
        </StyledCardContainer>
    );
};

CharacterCard.propTypes = {
    character: PropTypes.object,
    favoritesIds: PropTypes.array,
    onAddFavorite: PropTypes.func,
    onRemoveFavorite: PropTypes.func,
};

CharacterCard.defaultProps = {
    character: {},
    favoritesIds: [],
    onAddFavorite: () => {},
    onRemoveFavorite: () => {},
};

export default CharacterCard;
