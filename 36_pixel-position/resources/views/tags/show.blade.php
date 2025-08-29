<x-layout>
    <div class="space-y-10">
        <x-search />
        <x-section-heading><a
                href="/tags/{{ $tag->name }}">#{{ $tag->name }}</a></x-section-heading>
        <div class="space-y-6">
            @foreach ($jobListings as $jobListing)
                <x-job-card-wide :jobListing="$jobListing" />
            @endforeach
        </div>
    </div>
</x-layout>
