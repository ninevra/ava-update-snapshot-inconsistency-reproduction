# Issue reproduction for [avajs/ava#2636](https://github.com/avajs/ava/issues/2636)

`snapshot()` assertions always pass in `--update-snapshots` mode, unless any test in their file is `.skip()`ed, in which case they pass or fail as they normally would. This is a little odd.

To reproduce this behavior, clone this repository and execute `npm start`. Alternatively, use `npm test` and `npm test -- --update-snapshots`.
