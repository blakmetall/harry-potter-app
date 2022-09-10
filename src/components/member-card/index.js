import React from 'react';
import PropTypes from 'prop-types';
import { useMemberStatus } from './hooks';
import { BookmarkOutlineIcon } from '../icons';
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

const MemberCard = ({ member, onAddFavorite }) => {
    const { id, image, hairColour, eyeColour, dateOfBirth, gender, alive, name, hogwartsStudent, hogwartsStaff, house } = member;

    const memberStatus = useMemberStatus(hogwartsStudent, hogwartsStaff);

    const aliveStatus = alive ? 'Vivo' : 'Finado';

    const handleOnAddFavorite = () => {
        console.log('add favorite by id: ' + id);
        onAddFavorite(id);
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
                        {aliveStatus} / {memberStatus}
                    </StyledAliveStatus>

                    <StyledBookmarkWrapper onClick={handleOnAddFavorite}>
                        <BookmarkOutlineIcon />
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

MemberCard.propTypes = {
    member: PropTypes.object,
    onAddFavorite: PropTypes.func,
};

MemberCard.defaultProps = {
    member: {},
    onAddFavorite: () => {},
};

export default MemberCard;
