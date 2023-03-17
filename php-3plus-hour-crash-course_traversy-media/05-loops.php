<?php

for ($x = 0; $x < 10; $x++) {
    echo $x, " ";
}
echo "\n";

$y = 1;

while ($y < 10) {
    echo "Number " . $x . "\n";
    $y++;
}

$z = 6;
do {
    echo "Number" . $z . "\n";
    $z++;
} while ($z < 5);

$posts = ["First Post", "Second Post", "Third Post"];

for ($i = 0; $i < count($posts); $i++) {
    echo $posts[$i], "\n";
}

foreach ($posts as $post) {
    echo $post, "\n";
}

foreach ($posts as $index => $post) {
    echo $index . " - " . $post, "\n";
}

$person = [
    "first_name" => "Shihab",
    "last_name" => "Mahamud",
    "email" => "shihab@gmail.com",
];

foreach ($person as $index => $value) {
    echo $index . " - " . $value, "\n";
}
