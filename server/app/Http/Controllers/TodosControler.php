<?php

namespace App\Http\Controllers;

use App\Models\Todos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodosControler extends Controller
{
    public function getTodo(Request $request) {

        $todos = Auth::user()->Todos;

        return response()->json([
            "status" => "OK",
            "data" => $todos
        ]);
    }

     
    public function addTodo(Request $request){

            $data = $request->input("data");

            $todos = new Todos();
            
            $todos->user_id = $data["user_id"];
            $todos->name = $data["name"];
            $todos->completed = false;
            
            $todos->save();
            
            return response()->json([
                "status" => "OK",
                "data" => $todos
            ]);
    }

    public function changeCompleted(Request $request){

        $id = $request->input("id");

        $todo = Todos::find($id);
        $todo->completed = !$todo->completed;

        $todo->save();

        $todo = Todos::find($id);


        return response()->json([
            "status" => "OK",
            "data" => $id
        ]);
    }

    public function delete(Request $request){

        $id = $request->input("id");

        $todo = Todos::find($id)->delete();

        return response()->json([
            "status" => "OK",
            "id" => $id
        ]);
    }

    public function edit(Request $request){

        $id = $request->input("id");
        $editval = $request->input("editInputVal");

        $todo = Todos::find($id);

        $todo->name = $editval;

        $todo->save();

        return response()->json([
            "status" => "OK",
            "data" => [
                "value" => $editval,
                "id" => $id
            ]
        ]);
    }   
}
