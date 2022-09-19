import React, { Component } from 'react';
import { connect } from 'react-redux';
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
 
class HomePage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            showingStudents: true,
            showModalForm: false,
        };

        this.handleOnAddCharacter = this.handleOnAddCharacter.bind(this);
        this.handleOnDeleteFavorite = this.handleOnDeleteFavorite.bind(this);
        this.handleOnShowStudents = this.handleOnShowStudents.bind(this);
        this.handleOnShowStaff = this.handleOnShowStaff.bind(this);
        this.handleOnAddFavorite = this.handleOnAddFavorite.bind(this);
        this.handleOnRemoveCharacter = this.handleOnRemoveCharacter.bind(this);
    }

    componentDidMount() {
        // load students on load
        this.props.dispatch(loadStudents());
    
        // load new characters
        this.props.dispatch(loadNewCharacters());
    }

    handleOnAddCharacter = () => {
        this.setState({showModalForm: !this.state.showModalForm});
    };

    handleOnDeleteFavorite = (favoriteId) => {
        // remove favorite id from list
        this.props.dispatch(removeFavorite(favoriteId));
    };

    handleOnShowStudents = () => {
        // load students
        this.props.dispatch(loadStudents());

        this.setState({showingStudents: true});
    };

    handleOnShowStaff(){
        // load staff
        this.props.dispatch(loadStaff());
        
        this.setState({showingStudents: false});
    }

    handleOnAddFavorite = (favoriteId) => {
        // add favorite id to list
        this.props.dispatch(addFavorite(favoriteId));
    };

    handleOnRemoveCharacter = (newCharacterId) => {
        this.props.dispatch(removeNewCharacter(newCharacterId));
    };

    render () {
        const favorites = useFavorites(this.props.favoritesIds, this.props.students, this.props.staff, this.props.newCharacters);
        
        const filteredNewCharacters = useFilteredNewCharacters(this.props.newCharacters, this.state.showingStudents);
        
        const allCharacters = useAllCharacters(this.props.characters, filteredNewCharacters);

        return (
            <>
                <StyledHeadingContainer>
                    <StyledContainer>
                        {/* heading */}
                        <StyledHeadingWrapper>
                            <div className="d-flex justify-content-end">
                                <FavoritesBar
                                    favorites={favorites}
                                    onDeleteFavorite={this.handleOnDeleteFavorite}
                                    onAddCharacter={this.handleOnAddCharacter}
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
                                <Button label={'Estudiantes'} onClick={this.handleOnShowStudents} />
                            </div>
    
                            <div className="pe-1" />
    
                            <div>
                                <Button label={'Staff'} onClick={this.handleOnShowStaff} />
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
                                    favoritesIds={this.props.favoritesIds}
                                    onAddFavorite={this.handleOnAddFavorite}
                                    onRemoveFavorite={this.handleOnDeleteFavorite}
                                    onRemoveCharacter={this.handleOnRemoveCharacter}
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
                                onDeleteFavorite={this.handleOnDeleteFavorite}
                                onAddCharacter={this.handleOnAddCharacter}
                            />
                        </div>
                    </StyledContainer>
                </StyledFooterContainer>
    
                {/* modal */}
                <Modal showIf={this.state.showModalForm} onHide={() => this.setState({showModalForm: false})}>
                    <div>
                        <NewCharacterForm onCloseForm={() => this.setState({showModalForm: false})} />
                    </div>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    newCharacters: state.characters.newCharacters,
    students: state.students.students,
    staff: state.staff.staff,
    favoritesIds: state.favorites.favorites
});

export default connect(mapStateToProps)(HomePage);