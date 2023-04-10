<?php

namespace App\Filters;

use Illuminate\Http\Request;

class Filter
{
    protected $allowedParams = [];
    protected $columnMap = [];
    protected $operatorMap = [
        "eq" => "=",
        "lt" => "<",
        "gt" => ">",
        "lte" => "<=",
        "gte" => ">=",
        "ne" => "!="
    ];

    public function transform(Request $request)
    {
        $eloquentQuery = [];

        foreach ($this->allowedParams as $parm => $operators) {
            $query = $request->query($parm);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$parm] ?? $parm;

            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $eloquentQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }

        }

        return $eloquentQuery;
    }
}