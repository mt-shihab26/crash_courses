<?php

setcookie("name", "Shihab", time() + 86400 * 30);

if (isset($_COOKIE["name"])) {
    echo $_COOKIE["name"];
}

// setcookie("name", "", time() * -1);
