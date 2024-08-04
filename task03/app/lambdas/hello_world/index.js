exports.handler = async (event) => {
    // TODO implement
    const result = {
        statusCode: 200,
        message: "Hello from Lambda"
    };
    const response = {
        statusCode: 200,
        body: result,
    };
    return response;
};
