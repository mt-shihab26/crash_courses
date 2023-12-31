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
        $customerFilter   = new CustomerFilter();
        $filterItems      = $customerFilter->transform($request);
        $include_invoices = $request->query("includeInvoices");

        $customers = Customer::where($filterItems);

        if ($include_invoices) {
            $customers = $customers->with("invoices");
        }

        $customers = $customers
            ->paginate()
            ->appends($request->query());

        return new CustomerCollection($customers);
    }
    public function show(Customer $customer)
    {
        $include_invoices = request()->query("includeInvoices");

        if ($include_invoices) {
            $customer = $customer->loadMissing("invoices");
        }

        return new CustomerResource($customer);
    }
    public function store(StoreCustomerRequest $request)
    {
        $customer = Customer::create($request->all());

        return new CustomerResource($customer);
    }

    /**
     * Display the specified resource.
     */


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