import EmailValidator from 'email-validator';

export default string => EmailValidator.validate(string);
