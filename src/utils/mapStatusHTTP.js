const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  CONFLICT: 409,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;