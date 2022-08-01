<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PDO;

class UsersControler extends Controller
{
    public function registration(Request $request)
    {

        $name = $request->input("name");
        $email = $request->input("email");
        $password = $request->input("password");


        $users = User::all();
        foreach ($users as $user) {
            if ($user["name"] == $name || $user["email"] == $email) {
                return response()->json([
                    "status" => "error",
                    "error" => "name or email already exist"
                ]);
            }
        }


        $newUser = new User();

        $newUser->name = $name;
        $newUser->email = $email;
        $newUser->password = Hash::make($password);


        if ($newUser->save()) {
            return response()->json([
                "status" => "OK",
                "data" => $newUser
            ]);
        }
    }

    public function authentication(Request $request)
    {

        $email = $request->input("email");
        $password = $request->input("password");

        $users = User::all();

        if (!Auth::attempt($request->only("email", "password"))) {
            return response()->json([
                "status" => "error",
                "error" => "email or password is nte match",
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken(env("JWT_SECRET"))->plainTextToken;

        return response()->json([
            "status" => "OK",
            "data" => $token
        ]);
    }

    public function getUser(Request $request)
    {
        $user = Auth::user();
        $todos = Auth::user()->Todos;
        return response()->json([
            "status" => "OK",
            "data" => [
                "user" => $user,
                "todo" => $todos
            ]
        ]);
    }
}
