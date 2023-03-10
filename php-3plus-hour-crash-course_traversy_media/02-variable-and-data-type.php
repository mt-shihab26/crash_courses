<?php

/*
------ PHP Data Types ------

- String      Series of characters surrounded by qoutes
- Integer     Whole numbers
- Float       Decimal numbers
- Boolean     true or false
- Array       Special variable, which can hold more then one value
- Object      A class
- NULL        Empty variable
- Rescource   Special variabler taht holds a resource

 */

$name = "Shihab"; // string
$age = 40; // integer
$has_kids = false; // boolean
$is_programmer = true;
$cash_on_hand = 20.75; // float

echo $name, "\n";
echo $age, "\n";
echo $has_kids, "\n";
var_dump($has_kids, "\n");
echo $is_programmer, "\n";
echo $cash_on_hand, "\n";

echo '$name is $age years old\n', "\n";
echo $name . ' is ' . $age . " years old\n"; // string concatanate
echo "$name is $age years old\n";

// arimethic
$x = 5 + 5;
$y = '5'+'5';
echo $x, " ", $y, "\n";
var_dump($x, $y);

echo 10 - 5, "\n";
echo 5 * 6, "\n";
echo 10 / 2, "\n";
echo 10 % 3, "\n";

// constants
define("HOST", "http://localhost");
define("DB_NAME", "dev_db");
define('INTEGER', 55);

echo HOST, " ", DB_NAME, " ", INTEGER, "\n";
