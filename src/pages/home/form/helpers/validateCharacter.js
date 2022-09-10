import validator from 'validator';

const validateCharacter = ({ name, dateOfBirth, hairColour, eyeColour }) => {
    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!dateOfBirth || validator.isEmpty(dateOfBirth, { ignore_whitespace: true })) {
        return false;
    }

    if (!hairColour || validator.isEmpty(hairColour, { ignore_whitespace: true })) {
        return false;
    }

    if (!eyeColour || validator.isEmpty(eyeColour, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateCharacter;
