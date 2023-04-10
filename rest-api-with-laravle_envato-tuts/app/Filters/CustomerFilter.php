<?php

namespace App\Filters;

final class CustomerFilter extends Filter
{
    protected $allowedParams = [
        "name" => ["eq"],
        "type" => ["eq"],
        "email" => ["eq"],
        "address" => ["eq"],
        "city" => ["eq"],
        "state" => ["eq"],
        "postalCode" => ["eq", "gt", "lt"],
    ];
    protected $columnMap = [
        "postalCode" => "postal_code"
    ];
}