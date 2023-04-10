<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Filters\CustomerFilter;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\CustomerCollection;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customerFilter = new CustomerFilter();
        $queryItems     = $customerFilter->transform($request);

        $customers = null;
        if (count($queryItems) === 0) {
            $customers = Customer::paginate();
        } else {
            $customers = Customer::where($queryItems)
                ->paginate()
                ->appends($request->query());
        }

        return new CustomerCollection($customers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}