@props(['jobListing'])

<x-panel class="flex flex-col text-center">
    <div class="self-start text-sm">{{ $jobListing->employer->name }}</div>

    <div class="py-8">
        <h3 class="text-xl font-bold transition-colors duration-300 group-hover:text-blue-800">
            @if ($jobListing->url)
                <a href="{{ $jobListing->url }}" target="_blank">
                    {{ $jobListing->title }}

                </a>
            @else
                {{ $jobListing->title }}
            @endif
        </h3>
        <p class="mt-4 text-sm">{{ $jobListing->employment_type }} - From {{ $jobListing->salary }}
        </p>
    </div>

    <div class="flex items-center justify-between">
        <div>
            @foreach ($jobListing->tags as $tag)
                <x-tag :tag="$tag" size="small" />
            @endforeach
        </div>

        <x-employer-logo :width="42" :employer="$jobListing->employer" />
    </div>
</x-panel>
