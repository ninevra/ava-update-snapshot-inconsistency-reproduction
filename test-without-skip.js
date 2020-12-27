import test from 'ava';

test('the time', t => {
  t.snapshot(Date.now());
});
