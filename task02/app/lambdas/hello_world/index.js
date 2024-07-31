exports.handler = async (event) => {
    // TODO implement
    const { method, path } = event?.requestContext?.http;
    const isHelloEndpoint = path === '/hello' && method === 'GET';
    const result = {
        statusCode: isHelloEndpoint ? 200 : 400,
        message: isHelloEndpoint ? "Hello from Lambda" : `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    };
    const response = {
        statusCode: isHelloEndpoint ? 200 : 400,
        body: result
    }
    return response;
};
