import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CharacterCard, FavoritesBar } from '../../components';
import { useFavorites } from '../../hooks';
import { loadStaff } from '../../store/actions/staff';
import { loadStudents } from '../../store/actions/students';
import { addFavorite, removeFavorite } from '../../store/actions/favorites';
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

const HomePage = () => {
    const dispatch = useDispatch();

    const characters = useSelector((state) => state.characters.characters);
    const students = useSelector((state) => state.students.students);
    const staff = useSelector((state) => state.staff.staff);
    const favoritesIds = useSelector((state) => state.favorites.favorites);

    const favorites = useFavorites(favoritesIds, students, staff);

    console.log(characters);
    console.log(favorites);

    useEffect(() => {
        // load students on load
        dispatch(loadStudents());
    }, []);

    const handleOnAddCharacter = () => {
        console.log('add character');
    };

    const handleOnDeleteFavorite = (favoriteId) => {
        // remove favorite id from list
        dispatch(removeFavorite(favoriteId));
    };

    const handleOnShowStudents = () => {
        // load students
        dispatch(loadStudents());
    };

    const handleOnShowStaff = () => {
        // load staff
        dispatch(loadStaff());
    };

    const handleOnAddFavorite = (favoriteId) => {
        // add favorite id to list
        dispatch(addFavorite(favoriteId));
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
                                onDeleteFavorite={handleOnDeleteFavorite}
                                onAddCharacter={handleOnAddCharacter}
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
                            <CharacterCard
                                key={index}
                                character={character}
                                favoritesIds={favoritesIds}
                                onAddFavorite={handleOnAddFavorite}
                                onRemoveFavorite={handleOnDeleteFavorite}
                            />
                        ))}
                    </StyledCharactersWrapper>
                </StyledContainer>
            )}

            {/* footer */}
            <StyledFooterContainer>
                <StyledContainer>
                    <div className="d-flex justify-content-center">
                        <FavoritesBar
                            favorites={favorites}
                            onDeleteFavorite={handleOnDeleteFavorite}
                            onAddCharacter={handleOnAddCharacter}
                        />
                    </div>
                </StyledContainer>
            </StyledFooterContainer>
        </>
    );
};

export default HomePage;
