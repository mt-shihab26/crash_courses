@props(['width' => 90, 'employer'])

<img src="{{ Str::isUrl($employer->logo) ? $employer->logo : asset('storage/' . $employer->logo) }}"
    alt="" class="rounded-xl" width="{{ $width }}">
