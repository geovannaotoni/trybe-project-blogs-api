const httpErrorMap = {
  SUCCESSFUL: 200,
  BAD_REQUEST: 400,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;