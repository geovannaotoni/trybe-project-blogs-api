const checkRequiredFields = (receivedFields, requiredFields) => {
  const isValid = requiredFields.every((property) => receivedFields[property]); 
  if (!isValid) {
      return 'Some required fields are missing';
    }
};

module.exports = checkRequiredFields;
