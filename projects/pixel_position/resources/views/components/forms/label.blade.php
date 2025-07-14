@props(['name', 'label'])

<div class="inline-flex items-center gap-x-2">
    <span class="inline-block h-2 w-2 bg-white"></span>
    <label class="font-bold" for="{{ $name }}">{{ $label }}</label>
</div>
