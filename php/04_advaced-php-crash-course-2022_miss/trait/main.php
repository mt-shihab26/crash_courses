<?php

trait Log
{
    protected function log($message)
    {
        echo "$message\n";
    }
}

class Table
{
    use Log;

    public function save()
    {
        $this->log("Save Start");
        $this->log("Save Done");
    }
}

(new Table)->save();
