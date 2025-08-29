@props(['jobListing'])

<x-panel class="flex gap-x-6">
    <div>
        <x-employer-logo :employer="$jobListing->employer" />
    </div>

    <div class="flex flex-1 flex-col">
        <a href="#"
            class="self-start text-sm text-gray-400 transition-colors duration-300">{{ $jobListing->employer->name }}</a>

        <h3 class="mt-3 text-xl font-bold group-hover:text-blue-800">
            @if ($jobListing->url)
                <a href="{{ $jobListing->url }}" target="_blank">
                    {{ $jobListing->title }}

                </a>
            @else
                {{ $jobListing->title }}
            @endif

        </h3>

        <p class="mt-auto text-sm text-gray-400">{{ $jobListing->employment_type }} - From
            {{ $jobListing->salary }}</p>
    </div>

    <div>
        @foreach ($jobListing->tags as $tag)
            <x-tag :tag="$tag" />
        @endforeach
    </div>
</x-panel>
