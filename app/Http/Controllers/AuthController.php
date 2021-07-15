<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AuthController extends Controller
{
  public function register(Request $request)
  {
    $fields = $this->validate($request, [
      'name' => 'required|max:255',
      'email' => 'required|email|max:255|unique:users',
      'password' => 'required|confirmed|min:3',
    ]);

    $fields['password'] = Hash::make($request->password);

    $fields['slug'] = Str::slug($request->name);

    $user = User::create($fields);

    $token = $user->createToken('register')->plainTextToken;

    return response()->json([
      'message' => 'Registration successful',
      'user' => $user,
      'token' => $token
    ], 201);
  }

  public function login()
  {
    request()->validate(['email' => 'required', 'password' => 'required']);

    if (!Auth::attempt(request()->only('email', 'password'))) {
      return response()->json(['message' => 'Credentials do not match'], 401);
    }

    $user = User::where(['email' => request()->email])->get()->first();
    $token = $user->createToken('login')->plainTextToken;

    return response()->json(['message' => 'Login successful', 'user' => $user, 'token' => $token]);
  }

  public function logout()
  {
    auth()->user()->tokens()->delete();

    return response()->json(['message' => 'Logged out!']);
  }
}
