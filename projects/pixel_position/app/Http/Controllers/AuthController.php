<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function registerCreate()
    {
        return view("auth.register");
    }

    public function registerStore(Request $request)
    {
        $userValidated = $request->validate([
            "name" => ["required", "min:3"],
            "email" => ["required", "email", "unique:users,email"],
            "password" => ["required", "confirmed", Password::min(6)],
        ]);

        $employerValidated = $request->validate([
            "employer_name" => ["required", "min:3"],
            "employer_logo" => ["required", File::types(["png", "jpg", "jpag"])],
        ]);

        $user = User::create($userValidated);

        $logoPath = $request->employer_logo->store("logos");

        $user->employer()->create([
            "name" => $employerValidated["employer_name"],
            "logo" => $logoPath,
        ]);

        Auth::login($user);

        return redirect("/");
    }

    public function loginCreate()
    {
        return view("auth.login");
    }

    public function loginStore(Request $request)
    {
        $validated = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", Password::min(6)],
        ]);

        if (! Auth::attempt($validated)) {
            throw ValidationException::withMessages([
                "email" => "Sorry, those credentials do not match",
                "password" => "Sorry, those credentials do not match",
            ]);
        }

        $request->session()->regenerate();

        return redirect("/");
    }

    public function logout()
    {
        Auth::logout();

        return redirect("/");
    }
}
