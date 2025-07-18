<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthenticateController extends Controller
{
    public function registerUser(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email'=> 'required|string|email|max:255|unique:users',
            'password'=> 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);

        return response()->json([
            'status'=> true,
            'message'=> 'User registered successfully',
            'user'=> $user,
        ]);
    }

    public function loginUser(Request $request) {
        $credentials = $request->only('email','password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status'=> false,
                'message'=> 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();

        return response()->json([
            'status'=> true,
            'message'=> 'Login successful',
            'user'=> $user,
        ]);
    }
}
