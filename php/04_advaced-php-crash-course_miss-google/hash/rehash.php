<?php

$password = 'password123';
$hashed = password_hash($password, PASSWORD_DEFAULT);

echo "$hashed\n";

if (password_needs_rehash($hashed, PASSWORD_DEFAULT, ['cost' => 12])) {
    $rehashed = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);

    echo "$rehashed\n";
}
