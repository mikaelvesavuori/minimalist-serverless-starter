import { Context, APIGatewayEvent } from 'aws-lambda';
import { getDTO, myUsecase } from '.';

/**
 * @description The AWS Lambda event handler.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  console.log('Event', event);
  console.log('Context', context);

  const body: Record<string, any> =
    event.body && typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

  const input = getDTO(body);
  const result = myUsecase(input);

  return {
    statusCode: 200,
    body: JSON.stringify(result),

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  };
};
