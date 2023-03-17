<?php

/*

------ Operators -----

<    Less than
>    Greater than
<=   Less than or equal to
>=   Greater than or equal to
==   Equal to
===  Identical to
!=   Not equal to
!==  Not identical to
 */

$age = 17;

if ($age >= 18) {
    echo "You are old enough to vote\n";
} else {
    echo "Sorry, you are not old enough to vote\n";
}

$time = date("H");
if ($time < 12) {
    echo "Good Morning\n";
} elseif ($time < 17) {
    echo "Good Afternoon\n";
} else {
    echo "Good Evening\n";
}

$posts = ["First Post"];
if (!empty($posts)) {
    echo $posts[0], "\n";
} else {
    echo "No posts", "\n";
}

// ternary operator
echo !empty($posts) ? $posts[0] : "No posts", "\n";
echo !empty($posts) ? $posts[0] : null, "\n";
echo $posts[0] ?? null, "\n";

// switch statement
$fav_color = "";

switch ($fav_color) {
    case "red":
        echo "Your favorite color is red\n";
        break;
    case "blue":
        echo "Your favorite color is blue\n";
        break;
    case "green":
        echo "Your favorite color is green\n";
        break;
    default:
        echo "Your favorite color is not red, green or blue\n";
}
