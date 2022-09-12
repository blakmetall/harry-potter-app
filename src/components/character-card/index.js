import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterStatus, useIsFavorite } from './hooks';
import { BookmarkFillIcon, BookmarkOutlineIcon, TrashIcon } from '../icons';
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
    StyledTrashWrapper,
} from './styled';

const CharacterCard = ({ character, favoritesIds, onAddFavorite, onRemoveFavorite, onRemoveCharacter }) => {
    const {
        id,
        name,
        hairColour,
        eyeColour,
        dateOfBirth,
        gender,
        alive,
        image,
        hogwartsStudent,
        hogwartsStaff,
        house,
        isNewCharacter,
    } = character;

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

    const handleOnRemoveCharacter = () => {
        onRemoveCharacter(id);
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

                    <div className="d-flex align-items-center justify-content-between">
                        {/* delete element if is new character added */}
                        {isNewCharacter && (
                            <div className="me-2">
                                <StyledTrashWrapper data-testid="trashWrapper" onClick={handleOnRemoveCharacter}>
                                    <TrashIcon color={'#999999'} />
                                </StyledTrashWrapper>
                            </div>
                        )}

                        <div>
                            {/* bookmar icon */}
                            <StyledBookmarkWrapper onClick={handleOnAddFavorite}>
                                {isFavorite && <BookmarkFillIcon color={'#333333'} />}
                                {!isFavorite && <BookmarkOutlineIcon />}
                            </StyledBookmarkWrapper>
                        </div>
                    </div>
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
    onRemoveCharacter: PropTypes.func,
};

CharacterCard.defaultProps = {
    character: {},
    favoritesIds: [],
    onAddFavorite: () => {},
    onRemoveFavorite: () => {},
    onRemoveCharacter: () => {},
};

export default CharacterCard;
