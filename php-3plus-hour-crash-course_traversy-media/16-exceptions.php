<?php

function inverse($x)
{
    if (!$x) {
        throw new Exception("Division by zero");
    }
    return 1 / $x;
}

try {
    echo inverse(10), "<br/>";
    echo inverse(0), "<br/>";
} catch (Exception $e) {
    echo "Caught Exception", $e->getMessage(), "<br/>";
} finally {
    echo "First Finally<br/>";
}
