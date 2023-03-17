<?php

$str = "hello world";

$len = strlen($str);
$first_occurrence = strpos($str, "o");
$last_occurrence = strrpos($str, 'o');
$reverse = strrev($str);
$all_lower = strtolower($str);
$all_upper = strtoupper($str);
$up_each_word_first = ucwords($str);
$replaced = str_replace("world", "Everyone", $str);
$portion = substr($str, 0, 5);
$portion2 = substr($str, 5);

echo $len, "\n";
echo $first_occurrence, "\n";
echo $last_occurrence, "\n";
echo $reverse, "\n";
echo $all_lower, "\n";
echo $all_upper, "\n";
echo $up_each_word_first, "\n";
echo $replaced, "\n";
echo $portion, "\n";
echo $portion2, "\n";

if (str_starts_with($str, "hello")) {
    echo "YES\n";
}

if (str_ends_with($str, "d")) {
    echo "YES\n";
}

$string2 = "<h1>Hello</h1>";
echo htmlspecialchars($string2);

printf("%s likes to %s\n", "Shihab", "Code");
printf("1+1=%d\n", 1 + 1);
