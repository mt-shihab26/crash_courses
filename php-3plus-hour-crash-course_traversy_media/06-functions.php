<?php

$y = 5;

function registerUser()
{
    global $y;
    echo $y;
    echo "User registered\n";
}

registerUser();

function add($n1, $n2 = 2)
{
    return $n1 + $n2;
}

$sum = add(2, 5);
echo $sum, "\n";
echo add(6), "\n";

$sub = function ($n1, $n2) {
    return $n1 - $n2;
};

echo $sub(10, 5), "\n";

$mul = fn($n1, $n2) => $n1 * $n2;
echo $mul(5, 3), "\n";
