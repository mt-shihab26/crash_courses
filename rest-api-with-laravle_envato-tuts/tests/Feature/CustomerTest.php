<?php

namespace Tests\Feature;

use Tests\TestCase;

class CustomerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_customer_filter(): void
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
}