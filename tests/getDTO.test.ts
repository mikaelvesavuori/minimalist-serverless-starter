import test from 'ava';

import { getDTO } from '../src/index';

test.serial('It should get a provided name from a well-defined object', (t) => {
  const expected = 'Jeremiah';

  const response = getDTO({ name: expected });

  t.is(response, expected);
});

test.serial(
  'It should return an empty string when there is no match in the provided object',
  (t) => {
    const expected = '';

    const response = getDTO({});

    t.is(response, expected);
  }
);
