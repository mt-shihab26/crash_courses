<?php

interface Table
{
    public static function save(array $data);
}

interface Log
{
    public static function log(string $meesage);
}

class DBTable implements Table, Log, Countable
{
    public static function save(array $data)
    {
        return 'foo' . "\n";
    }

    public static function log(string $meesage)
    {
        echo $meesage . "\n";
    }

    public function count(): int
    {
        return 100;
    }
}

// echo DBTable::save([]);
// DBTable::log("Hello");

echo (new DBTable)->count();
