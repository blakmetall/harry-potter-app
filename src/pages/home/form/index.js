import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUniqueId } from '../../../helpers';
import { Button, Input } from '../../../components';
import { CloseIcon } from '../../../components/icons';
import { validateCharacter } from './helpers';
import { addCharacter } from '../../../store/actions/characters';
import { StyledCloseIconWrapper, StyledFormContainer, StyledFormTitle, StyledHouseLabel } from './styled';

const NewCharacterForm = ({ onCloseForm }) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [hairColour, setHairColour] = useState('');
    const [eyeColour, setEyeColour] = useState('');
    const [house, setHouse] = useState('Gryffindor');
    const [gender, setGender] = useState('female');
    const [position, setPosition] = useState('student');

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const dispatch = useDispatch();

    const clearForm = () => {
        setName('');
        setDateOfBirth('');
        setHairColour('');
        setEyeColour('');
        setHouse('Gryffindor');
        setGender('female');
        setPosition('student');
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const item = {
            id: getUniqueId(),
            alive: true,
            name: name.trim(),
            dateOfBirth: dateOfBirth.trim(),
            hairColour: hairColour.trim(),
            eyeColour: eyeColour.trim(),
            house: house,
            gender: gender,
            hogwartsStudent: position === 'student',
            hogwartsStaff: position === 'staff',
            isNewCharacter: true,
        };

        dispatch(addCharacter(item));
        setShowSuccessMsg(true);
        clearForm();
    };

    // form validation
    const formIsValid = () => {
        return validateCharacter({
            name,
            dateOfBirth,
            hairColour,
            eyeColour,
        });
    };

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                <StyledFormContainer>
                    <div className="d-flex justify-content-between align-content-center mb-4">
                        <div className="pe-1">
                            <StyledFormTitle>Agregar un personaje</StyledFormTitle>
                        </div>
                        <div>
                            <StyledCloseIconWrapper onClick={onCloseForm}>
                                <CloseIcon />
                            </StyledCloseIconWrapper>
                        </div>
                    </div>

                    {/* input fields */}
                    <Row className="d-flex flex-column flex-md-row mb-1">
                        <Col>
                            <Input label="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Col>
                        <Col>
                            <Input label="Cumpleaños" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        </Col>
                    </Row>

                    {/* input fields */}
                    <Row className="d-flex flex-column flex-md-row mb-3">
                        <Col>
                            <Input label="Color de ojos" value={eyeColour} onChange={(e) => setEyeColour(e.target.value)} />
                        </Col>
                        <Col>
                            <Input label="Color de pelo" value={hairColour} onChange={(e) => setHairColour(e.target.value)} />
                        </Col>
                    </Row>

                    {/* input fields */}
                    <Row className="d-flex flex-column flex-md-row mb-5">
                        <Col>
                            <StyledHouseLabel>Casa</StyledHouseLabel>
                            <Form.Select aria-label="Casa" onChange={(e) => setHouse(e.target.value)}>
                                <option value="Gryffindor">Gryffindor</option>
                                <option value="Slytherin">Slytherin</option>
                                <option value="Hufflepuff">Hufflepuff</option>
                                <option value="Ravenclaw">Ravenclaw</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    {/* input fields */}
                    <Row className="d-flex flex-column flex-md-row mb-5" style={{ fontSize: '16px' }}>
                        <Col className="mb-3 mb-md-0">
                            <div className="d-flex justify-content-start justify-content-md-between">
                                <div className="d-flex align-content-center me-3">
                                    <Form.Check
                                        id="femaleInput"
                                        type="radio"
                                        value="female"
                                        name="gender"
                                        checked={gender === 'female'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="me-2"
                                    />
                                    <label htmlFor="femaleInput">Mujer</label>
                                </div>

                                <div className="d-flex align-content-center">
                                    <Form.Check
                                        id="maleInput"
                                        type="radio"
                                        value="male"
                                        name="gender"
                                        checked={gender === 'male'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="me-2"
                                    />
                                    <label htmlFor="maleInput">Hombre</label>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-start justify-content-md-between">
                                <div className="d-flex align-content-center me-3">
                                    <Form.Check
                                        id="studentInput"
                                        type="radio"
                                        value="student"
                                        name="position"
                                        checked={position === 'student'}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="me-2"
                                    />
                                    <label htmlFor="studentInput">Estudiante</label>
                                </div>
                                <div className="d-flex align-content-center">
                                    <Form.Check
                                        id="staffInput"
                                        type="radio"
                                        value="staff"
                                        name="position"
                                        checked={position === 'staff'}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="me-2"
                                    />
                                    <label htmlFor="staffInput">Staff</label>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="d-flex justify-content-center">
                            {/* submit */}
                            <Button
                                label="Guardar"
                                type="submit"
                                className="btn-success font-weight-800 w-100"
                                disabled={!formIsValid()}
                            />
                        </Col>
                    </Row>

                    {showSuccessMsg && (
                        <Row className="mb-3">
                            <Col className="d-flex justify-content-center">Nuevo caracter agregado</Col>
                        </Row>
                    )}
                </StyledFormContainer>
            </Form>
        </>
    );
};

NewCharacterForm.propTypes = {
    onCloseForm: PropTypes.func,
};

NewCharacterForm.defaultProps = {
    onCloseForm: () => {},
};

export default NewCharacterForm;
