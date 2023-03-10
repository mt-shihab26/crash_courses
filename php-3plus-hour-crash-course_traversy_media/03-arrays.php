<?php

// Simple Arrays
$numbers = [1, 2, 3, 4];
print_r($numbers);

$fruits = array("apple", "orange", "pear");
print_r($fruits);

echo $fruits[1], "\n";

// Associative Array
$colors = [
    1 => "red",
    4 => "blue",
];
print_r($colors);

$hex = [
    "red" => "#f00",
    "blue" => "#0f0",
    "green" => "#00f",
];
print_r($hex);
echo $hex["red"], "\n";

$person = [
    "first_name" => "Shihab",
    "last_name" => "Mahamud",
    "email" => "shihab@gmail.com",
];
print_r($person);

// Multidimensional array
$people = [
    [
        "first_name" => "Shihab",
        "last_name" => "Mahamud",
        "email" => "shihab@gmail.com",
    ],
    [
        "first_name" => "Brad",
        "last_name" => "Traversy",
        "email" => "brad@gmail.com",
    ],
    "last" => [
        "first_name" => "John",
        "last_name" => "Doe",
        "email" => "john@gmail.com",
    ],
];
print_r($people);
print_r($people["last"]["email"], "\n");

$json_people = json_encode($people);
var_dump($json_people);

$people2 = json_decode($json_people);
print_r($people2);
