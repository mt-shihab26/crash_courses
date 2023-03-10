<?php

// echo - Output strings, numbers, html, etc
echo 123, "hello", 10.5, "\n";

// print - works like echo, but can only take in a single argument
print 123; print "\n";

// print_r() - print single values and arrays
print_r([1, 2, 3]);

// var_dump() - Returns more info info data type and length
var_dump("Hello");
var_dump(true);

// var_export() - Similar to var_dump(). Outputs a string representation of a variable
var_export("hello");
var_export(1234);
?>

<h1><?php echo "Post One" ?></h1>
<h1><?= "Post Two" ?></h1>