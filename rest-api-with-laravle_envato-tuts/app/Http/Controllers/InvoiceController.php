<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Filters\InvoiceFilter;
use App\Http\Resources\InvoiceResource;
use App\Http\Resources\InvoiceCollection;
use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;

class InvoiceController extends Controller
{
    public function index(Request $request): InvoiceCollection
    {
        $invoiceFilter = new InvoiceFilter();
        $queryItems    = $invoiceFilter->transform($request);

        $invoices = null;
        if (count($queryItems) === 0) {
            $invoices = Invoice::paginate();
        } else {
            $invoices = Invoice::where($queryItems)
                ->paginate()
                ->appends($request->query());
            ;
        }
        return new InvoiceCollection($invoices);
    }
    public function store(StoreInvoiceRequest $request)
    {
        //
    }
    public function show(Invoice $invoice): InvoiceResource
    {
        return new InvoiceResource($invoice);
    }
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        //
    }
    public function destroy(Invoice $invoice)
    {
        //
    }
}