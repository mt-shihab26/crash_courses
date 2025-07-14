<?php

use App\Models\Employer;
use App\Models\JobListing;

it('belongs to an employer', function () {
    // Arrange
    $employer = Employer::factory()->create();
    $jobListing = JobListing::factory()->create(["employer_id" => $employer->id]);

    // Act

    // Assert
    expect($jobListing->employer->is($employer))->toBeTrue();
});

it("can have tags", function () {
    // Arrange
    $jobListing = JobListing::factory()->create();
    // Act
    $jobListing->tag("Backend");
    // Assert
    expect($jobListing->tags)->toHaveCount(1);
});
