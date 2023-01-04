/**
 * @description Retrieves the expected input in a well-defined shape.
 */
export function getDTO(event: Record<string, any>): InputDTO {
  return event?.body?.name || '';
}

/**
 * @description The actual business logic.
 *
 * If we get a name, then we'll welcome them, else we'll give a general greeting.
 */
export function myUsecase(name: InputDTO) {
  if (!name) return 'Hi there!';
  return `Hi ${name}!`;
}

/**
 * @description The input data transfer object to use in our business logic.
 */
type InputDTO = string;
