<?php

namespace App;

include "project.php";

class Table
{
    public static function get()
    {
        echo "App.Table.get()\n";
    }
}

Table::get();
\Project\Table::get();
