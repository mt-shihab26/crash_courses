<x-layout>
    <div class="space-y-10">
        <x-search />

        <section class="pt-10">
            <x-section-heading>Featured Jobs</x-section-heading>

            <div class="mt-6 grid gap-8 lg:grid-cols-3">
                @foreach ($featuredJobListings as $jobListing)
                    <x-job-card :jobListing="$jobListing" />
                @endforeach
            </div>
        </section>

        <section>
            <x-section-heading>Tags</x-section-heading>

            <div class="mt-6 space-x-1">
                @foreach ($tags as $tag)
                    <x-tag :tag="$tag" />
                @endforeach
            </div>
        </section>

        <section>
            <x-section-heading>Recent Jobs</x-section-heading>

            <div class="mt-6 space-y-6">
                @foreach ($jobListings as $jobListing)
                    <x-job-card-wide :jobListing="$jobListing" />
                @endforeach
            </div>
        </section>
    </div>
</x-layout>
