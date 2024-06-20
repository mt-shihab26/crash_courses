<?php

namespace Generator;

function fib(int $limit = 1)
{
    $a = 0;
    $b = 1;

    $i = 1;

    yield $i => $b;

    $i++;

    while ($i < $limit) {
        $sum = $a + $b;
        $a = $b;
        $b = $sum;

        yield $i => $b;

        $i++;
    }
}

foreach (fib(10) as $key => $value) {
    echo "{$key} => {$value}\n";
}
