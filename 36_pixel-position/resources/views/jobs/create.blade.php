<x-layout>
    <x-heading>Create new Job</x-heading>
    <x-forms.form method="POST" action="/jobs">
        <x-forms.input label="Title" name="title" placeholder="CEO" required />
        <x-forms.input label="Salary" name="salary" placeholder="$90,000 USD" required />
        <x-forms.input label="Location" name="location" placeholder="Alfadang, Faridpur" required />
        <x-forms.select label="Type" name="employment_type" required>
            <option>Part Time</option>
            <option>Full Time</option>
            <option>Remote Time</option>
        </x-forms.select>
        <x-forms.divider />
        <x-forms.input label="URL" name="url"
            placeholder="http://acme.com/jobs/ceo-wanted" />
        <x-forms.checkbox label="Is Feature (Coast Extra)" name="featrued" />
        <x-forms.input label="Tags (comma seperated list)" name="tags"
            placeholder="laracasts, video, education" />
        <x-forms.divider />
        <x-forms.button type="submit">Save</x-forms.button>
    </x-forms.form>
</x-layout>
