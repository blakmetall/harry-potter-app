import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CharacterCard, FavoritesBar } from '../../components';
import { loadStaff } from '../../store/actions/staff';
import { loadStudents } from '../../store/actions/students';
import {
    StyledButtonsWrapper,
    StyledCharactersWrapper,
    StyledContainer,
    StyledFooterContainer,
    StyledHeadingContainer,
    StyledHeadingWrapper,
    StyledLogo,
    StyledLogoWrapper,
    StyledSelectFilterLabel,
} from './styled';

// favorites dummy
const favorites = [
    {
        id: 1,
        name: 'Luna Lovegood',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
    },
    {
        id: 2,
        name: 'Luna Lovegood',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
    },
    {
        id: 3,
        name: 'Luna Lovegood',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
    },
    {
        id: 4,
        name: 'Luna Lovegood',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
    },
    {
        id: 5,
        name: 'Luna Lovegood',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
    },
];

const HomePage = () => {
    const dispatch = useDispatch();

    const characters = useSelector((state) => state.characters.characters);

    console.log(characters);

    useEffect(() => {
        // load students on load
        dispatch(loadStudents());
    }, []);

    const handleOnAddFavorites = () => {
        console.log('add favorites');
    };

    const handleOnDeleteFavorite = (favoriteId) => {
        console.log('delete favorite ' + favoriteId);
    };

    const handleOnShowStudents = () => {
        // load students
        dispatch(loadStudents());
    };

    const handleOnShowStaff = () => {
        // load staff
        dispatch(loadStaff());
    };

    return (
        <>
            <StyledHeadingContainer>
                <StyledContainer>
                    {/* heading */}
                    <StyledHeadingWrapper>
                        <div className="d-flex justify-content-end">
                            <FavoritesBar
                                favorites={favorites}
                                onAddFavorites={handleOnAddFavorites}
                                onDeleteFavorite={handleOnDeleteFavorite}
                            />
                        </div>
                    </StyledHeadingWrapper>

                    {/* logo */}
                    <StyledLogoWrapper>
                        <div className="d-flex justify-content-center">
                            <StyledLogo src="images/logo.svg" alt="" />
                        </div>
                    </StyledLogoWrapper>

                    {/* filter label */}
                    <StyledSelectFilterLabel>Selecciona tu filtro</StyledSelectFilterLabel>

                    {/* buttons */}
                    <StyledButtonsWrapper>
                        <div>
                            <Button label={'Estudiantes'} onClick={handleOnShowStudents} />
                        </div>

                        <div className="pe-1" />

                        <div>
                            <Button label={'Staff'} onClick={handleOnShowStaff} />
                        </div>
                    </StyledButtonsWrapper>
                </StyledContainer>
            </StyledHeadingContainer>

            {/* characters list */}
            {characters && characters.length && (
                <StyledContainer>
                    <StyledCharactersWrapper>
                        {characters.map((character, index) => (
                            <CharacterCard key={index} character={character} />
                        ))}
                    </StyledCharactersWrapper>
                </StyledContainer>
            )}

            <StyledFooterContainer>
                <StyledContainer>
                    <div className="d-flex justify-content-center">
                        <FavoritesBar
                            favorites={favorites}
                            onAddFavorites={handleOnAddFavorites}
                            onDeleteFavorite={handleOnDeleteFavorite}
                        />
                    </div>
                </StyledContainer>
            </StyledFooterContainer>
        </>
    );
};

export default HomePage;
