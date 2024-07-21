<?php

$password = 'password123';

$hashed = password_hash($password, PASSWORD_DEFAULT);
$matches = password_verify($password, $hashed);
$wrong_matches = password_verify('hello', $hashed);

echo "$hashed\n";
echo "$matches\n";
echo "$wrong_matches\n";
