import test from 'ava';

import { myUsecase } from '../src/index';

test.serial('It should greet a user with empty string input', (t) => {
  const expected = 'Hi there!';

  const response = myUsecase('');

  t.is(response, expected);
});

test.serial('It should greet a user with a provided non-zero digit name', (t) => {
  const name = 'Jeremiah';
  const expected = `Hi ${name}!`;

  const response = myUsecase(name);

  t.is(response, expected);
});
