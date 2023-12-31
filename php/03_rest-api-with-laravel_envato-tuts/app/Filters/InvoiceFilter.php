<?php

namespace App\Filters;

final class InvoiceFilter extends Filter
{
    protected $allowedParams = [
        "customer_id" => ["eq"],
        "amount" => ["eq", "gt", "lt", "lte", "gte"],
        "status" => ["eq", "ne"],
        "billed_date" => ["eq", "gt", "lt", "lte", "gte"],
        "paid_date" => ["eq", "gt", "lt", "lte", "gte"],
    ];
    protected $columnMap = [
        "customerId" => "customer_id",
        "billedDate" => "billed_date",
        "paidDate" => "paid_date"
    ];
}