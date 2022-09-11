import validator from 'validator';

const validateCharacter = ({ name, dateOfBirth, hairColour, eyeColour }) => {
    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateCharacter;
