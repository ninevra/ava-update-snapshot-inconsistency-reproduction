import test from 'ava';

test('the time', t => {
  t.snapshot(Date.now());
});

test.skip('skipping this test', t => {
  t.pass();
});
