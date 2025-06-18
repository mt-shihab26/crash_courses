<?php

namespace Tests\Feature;

use Tests\TestCase;

class CustomerTest extends TestCase
{
    public function test_get_customers_filter(): void
    {
        $response = $this->get('api/v1/customers?postalCode[gt]=30000&type[eq]=I');

        $response->assertStatus(200);

        $customers = $response->json()["data"];

        foreach ($customers as $customer) {
            $this->assertArrayHasKey('id', $customer);
            $this->assertArrayHasKey('name', $customer);
            $this->assertArrayHasKey('type', $customer);
            $this->assertArrayHasKey('email', $customer);
            $this->assertArrayHasKey('address', $customer);
            $this->assertArrayHasKey('city', $customer);
            $this->assertArrayHasKey('state', $customer);
            $this->assertArrayHasKey('postalCode', $customer);

            $this->assertEquals("I", $customer["type"]);
            $this->assertGreaterThan("30000", $customer["postalCode"]);
        }
    }
    public function test_get_customers_with_include_invoices_filter(): void
    {
        $response = $this->get('/api/v1/customers?includeInvoices=true');

        $response->assertStatus(200);

        $customers = $response->json()["data"];

        foreach ($customers as $customer) {
            $this->assertArrayHasKey('id', $customer);
            $this->assertArrayHasKey('name', $customer);
            $this->assertArrayHasKey('type', $customer);
            $this->assertArrayHasKey('email', $customer);
            $this->assertArrayHasKey('address', $customer);
            $this->assertArrayHasKey('city', $customer);
            $this->assertArrayHasKey('state', $customer);
            $this->assertArrayHasKey('postalCode', $customer);
            $this->assertArrayHasKey("invoices", $customer);
            $this->assertIsArray($customer["invoices"]);
        }
    }

    public function test_get_one_customer(): void
    {
        $response = $this->get("/api/v1/customers/1");

        $response->assertStatus(200);

        $customer = $response->json()["data"];

        $this->assertArrayHasKey('id', $customer);
        $this->assertArrayHasKey('name', $customer);
        $this->assertArrayHasKey('type', $customer);
        $this->assertArrayHasKey('email', $customer);
        $this->assertArrayHasKey('address', $customer);
        $this->assertArrayHasKey('city', $customer);
        $this->assertArrayHasKey('state', $customer);
        $this->assertArrayHasKey('postalCode', $customer);
    }

    public function test_get_one_customer_with_include_invoices_filter(): void
    {
        $response = $this->get("/api/v1/customers/1?includeInvoices=true");

        $response->assertStatus(200);

        $customer = $response->json()["data"];

        $this->assertArrayHasKey('id', $customer);
        $this->assertArrayHasKey('name', $customer);
        $this->assertArrayHasKey('type', $customer);
        $this->assertArrayHasKey('email', $customer);
        $this->assertArrayHasKey('address', $customer);
        $this->assertArrayHasKey('city', $customer);
        $this->assertArrayHasKey('state', $customer);
        $this->assertArrayHasKey('postalCode', $customer);
        $this->assertArrayHasKey("invoices", $customer);
        $this->assertIsArray($customer["invoices"]);
    }
}