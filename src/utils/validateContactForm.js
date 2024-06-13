
export const validateContactForm = (values) => {
    const errors = {};
    //validating input for the first name 
    if (!values.firstName) {
        errors.firstName = 'Required';
    }else if (values.firstName.length < 2){
        errors.firstName = 'must be at least 2 characters';
    }else if (values.firstName.length > 15){
        errors.firstName='must be 15 characters or less';
    }

    //validating fot last name
    if (!values.lastName) {
        errors.lastName = 'Required';
    }else if (values.lastName.length < 2){
        errors.lastName = 'must be at least 2 characters';
    }else if (values.lastName.length > 15){
        errors.lasttName='must be 15 characters or less';
    } 

    //validating for phone number
    const reg = /^\d+$/;
    //reg.test() is used to check for the value if its similar to the reg
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    //validating email 
    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
    // returning errors object from our function
    return errors;

}

//AN EXTRA CHALLANGE FOR WHEN YOU SPIRIT IS HIGH
//Although it is not necessary, you could refactor this code to use object destructuring syntax to destructure the firstName, lastName, phoneNum, and email properties from the values object.