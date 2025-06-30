<?php

$fruits = ["apple", "orange", "pear"];

// Get length
$len = count($fruits);
echo $len, "\n";

// Search in array
$is_in_array = in_array("apple", $fruits);
var_dump($is_in_array);

// Add to array
$fruits[] = "grape";
array_push($fruits, "blueberry", "strawberry");
array_unshift($fruits, "mango");
print_r($fruits);

// Remove from array
unset($fruits[2]);
array_pop($fruits);
array_shift($fruits);
print_r($fruits);

// Split into 2's chunks
$chunked_array = array_chunk($fruits, 3);
print_r($chunked_array);

// Merge two array
$arr1 = [1, 2, 3];
$arr2 = [4, 5, 6];

$arr3 = array_merge($arr1, $arr2);
print_r($arr3);

$arr4 = [...$arr1, ...$arr2];
print_r($arr4);

// combine two array
$a = ["green", "red", "yellow"];
$b = ["avocado", "apple", "banana"];

$c = array_combine($a, $b);
print_r($c);

// get keys
$keys = array_keys($c);
print_r($keys);

// flip the array key, value
$flipped = array_flip($c);
print_r($flipped);

// range functions
$numbers = range(1, 20);
print_r($numbers);

// map function
$new_numbers = array_map(fn($number) => "Number $number", $numbers);
print_r($new_numbers);

// filter function
$less_than_10 = array_filter($numbers, fn($number) => $number <= 10);
print_r($less_than_10);

// reduce function
$sum = array_reduce($numbers, fn($carry, $number) => $carry + $number, 5);
echo $sum, "\n";
