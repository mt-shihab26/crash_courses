<?php

namespace Database\Factories;

use App\Models\Employer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobListing>
 */
class JobListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->jobTitle(),
            "salary" => fake()->randomElement(["$50,000 USD", "$90,000 USD", "150,000 USD"]),
            "location" => "remote",
            "employment_type" => "Full Time",
            "url" => fake()->url(),
            "employer_id" => Employer::factory(),
            "featured" => false,
        ];
    }
}
