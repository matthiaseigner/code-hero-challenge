const assert = require('chai').assert;
const sorter = require('./index');

const example1 = [3, 2, 4, 1, 7, 1, 8, 5, 9];
const example2 = [8, 9, 9, 5, 2, 0, 6, 0, 6, 4, 6, 9, 3, 7, 4, 5];
const example3 = [6, 4, 6, 9, 3, 7, 4, 5, 9, 8, 9, 7, 3, 0, 6, 9, 1, 0, 3, 0, 6, 4, 6, 9, 3];

const solution1 = [3, 1, 8, 5, 9, 1, 4, 2, 7];
const solution2 = [8, 2, 6, 3, 7, 4, 5, 9, 0, 5, 9, 9, 0, 4, 6, 6];
const solution3 = [6, 7, 9, 9, 6, 4, 6, 9, 3, 0, 6, 8, 3, 9, 6, 4, 4, 7, 1, 0, 3, 0, 9, 5, 3];

assert.deepEqual(
    sorter(example1),
    solution1
);

assert.deepEqual(
    sorter(example2),
    solution2
);

assert.deepEqual(
    sorter(example3),
    solution3
);
