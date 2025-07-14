<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'employer_id',
        'title',
        'salary',
        'location',
        'employment_type',
        'url',
        'featured',
    ];

    public function employer(): BelongsTo
    {
        return $this->belongsTo(Employer::class);
    }

    public function tag(string $name): Tag
    {
        $tag = Tag::firstOrCreate(["name" => $name]);
        $this->tags()->attach($tag);

        return $tag;
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
