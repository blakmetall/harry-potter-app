import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { Button, Input } from '../../../components';
import { CloseIcon } from '../../../components/icons';
import { validateCharacter } from './helpers';
import { addCharacter } from '../../../store/actions/characters';
import { StyledCloseIconWrapper, StyledFormContainer, StyledFormTitle } from './styled';

const NewCharacterForm = ({ onCloseForm }) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [hairColour, setHairColour] = useState('');
    const [eyeColour, setEyeColour] = useState('');

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const dispatch = useDispatch();

    const clearForm = () => {
        setName('');
        setDateOfBirth('');
        setHairColour('');
        setEyeColour();
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const item = {
            id: nextId(),
            name: name.trim(),
            dateOfBirth: dateOfBirth.trim(),
            hairColour: hairColour.trim(),
            eyeColour: eyeColour.trim(),
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
                    <Row className="mb-1">
                        <Col className="flex-lg-column">
                            {/* name */}
                            <Input label="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Col>
                        <Col className="flex-lg-column">
                            {/* name */}
                            <Input
                                label="Cumpleaños"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>

                    {/* input fields */}
                    <Row className="mb-3">
                        <Col className="flex-lg-column">
                            {/* name */}
                            <Input
                                label="Color de ojos"
                                value={eyeColour}
                                onChange={(e) => setEyeColour(e.target.value)}
                                required
                            />
                        </Col>
                        <Col className="flex-lg-column">
                            {/* name */}
                            <Input
                                label="Color de pelo"
                                value={hairColour}
                                onChange={(e) => setHairColour(e.target.value)}
                                required
                            />
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
