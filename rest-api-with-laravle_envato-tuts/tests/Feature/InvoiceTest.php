<?php

namespace Tests\Feature;

use Tests\TestCase;

class InvoiceTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_invoice_filter(): void
    {
        $response = $this->get('/api/v1/invoices?status[ne]=P');

        $response->assertStatus(200);

        $body = $response->json();

        $invoices = $body["data"];
        foreach ($invoices as $invoice) {
            $this->assertArrayHasKey('id', $invoice);
            $this->assertArrayHasKey('customerId', $invoice);
            $this->assertArrayHasKey('amount', $invoice);
            $this->assertArrayHasKey('status', $invoice);
            $this->assertArrayHasKey('billedDate', $invoice);
            $this->assertArrayHasKey('paidDate', $invoice);

            $this->assertNotEquals("P", $invoice["status"]);
        }
    }
}