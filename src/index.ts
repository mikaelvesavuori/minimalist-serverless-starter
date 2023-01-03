export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello world'),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  };

  return response;
};
