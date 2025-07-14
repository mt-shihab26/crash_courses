<?php

namespace App\Http\Controllers;

use App\Models\JobListing;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class JobListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobListings = JobListing::query()
            ->latest()
            ->with("employer")
            ->with("tags")
            ->get()
            ->groupBy("featured");

        return view("jobs.index", [
            "featuredJobListings" => $jobListings[1],
            "jobListings" => $jobListings[0],
            "tags" => Tag::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("jobs.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'salary' => ['required', 'string', 'max:255'],
            'location' => ['required', 'string', 'max:255'],
            'employment_type' => ['nullable', 'string', 'max:255'],
            'url' => ['nullable', 'active_url', 'max:255'],
            'featured' => ['nullable', 'boolean'],
            'tags' => ['nullable', 'string'],
        ]);

        $jobListing = Auth::user()
            ->employer
            ->jobListings()
            ->create(Arr::except($validated, "tags"));

        if ($validated["tags"] ?? false) {
            foreach (explode(",", $validated["tags"]) as $tag) {
                $jobListing->tag($tag);
            }
        }

        return redirect("/");
    }

    /**
     * Display the specified resource.
     */
    public function show(JobListing $jobListing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobListing $jobListing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobListing $jobListing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobListing $jobListing)
    {
        //
    }

    public function search(Request $request)
    {
        $jobListings = JobListing::query()
            ->where("title", "LIKE", "%{$request->q}%")
            ->latest()
            ->with("employer")
            ->with("tags")
            ->get();

        return view("jobs.results", [
            "jobListings" => $jobListings,
        ]);
    }
}
