import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CharacterCard, FavoritesBar, Modal } from '../../components';
import NewCharacterForm from './form';
import { useAllCharacters, useFavorites, useFilteredNewCharacters } from '../../hooks';
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
import { loadNewCharacters, removeNewCharacter } from '../../store/actions/characters';

const HomePage = () => {
    const [showingStudents, setShowingStudents] = useState(true);
    const [showModalForm, setShowModalForm] = useState(false);

    const dispatch = useDispatch();

    const characters = useSelector((state) => state.characters.characters);
    const newCharacters = useSelector((state) => state.characters.newCharacters);
    const students = useSelector((state) => state.students.students);
    const staff = useSelector((state) => state.staff.staff);
    const favoritesIds = useSelector((state) => state.favorites.favorites);

    const favorites = useFavorites(favoritesIds, students, staff, newCharacters);

    const filteredNewCharacters = useFilteredNewCharacters(newCharacters, showingStudents);
    const allCharacters = useAllCharacters(characters, filteredNewCharacters);

    useEffect(() => {
        // load students on load
        dispatch(loadStudents());

        // load new characters
        dispatch(loadNewCharacters());

        // eslint-disable-next-line
    }, []);

    const handleOnAddCharacter = () => {
        setShowModalForm(!showModalForm);
    };

    const handleOnDeleteFavorite = (favoriteId) => {
        // remove favorite id from list
        dispatch(removeFavorite(favoriteId));
    };

    const handleOnShowStudents = () => {
        // load students
        dispatch(loadStudents());
        setShowingStudents(true);
    };

    const handleOnShowStaff = () => {
        // load staff
        dispatch(loadStaff());
        setShowingStudents(false);
    };

    const handleOnAddFavorite = (favoriteId) => {
        // add favorite id to list
        dispatch(addFavorite(favoriteId));
    };

    const handleOnRemoveCharacter = (newCharacterId) => {
        dispatch(removeNewCharacter(newCharacterId));
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
            {allCharacters && allCharacters.length && (
                <StyledContainer>
                    <StyledCharactersWrapper>
                        {allCharacters.map((character, index) => (
                            <CharacterCard
                                key={index}
                                character={character}
                                favoritesIds={favoritesIds}
                                onAddFavorite={handleOnAddFavorite}
                                onRemoveFavorite={handleOnDeleteFavorite}
                                onRemoveCharacter={handleOnRemoveCharacter}
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

            {/* modal */}
            <Modal showIf={showModalForm} onHide={() => setShowModalForm(false)}>
                <div>
                    <NewCharacterForm onCloseForm={() => setShowModalForm(false)} />
                </div>
            </Modal>
        </>
    );
};

export default HomePage;
