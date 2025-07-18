<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function getStudents() {
        $student = Student::all();

        $data = [
            "status" => 200,
            "student" => $student,
            "message" => "Data retrieved successfully",
        ];

        return response()->json($data, 200);
    }

    public function createStudent(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            $data = [
                'status'=> 422,
                'message'=> $validator->messages(),
            ];

            return response()->json($data, 422);
        } else {
            $student = new Student;

            $student -> name= $request->name;
            $student -> email= $request->email;
            $student -> phone= $request->phone;

            $student->save();

            $data = [
                'status'=> 200,
                'message'=> 'Student created successfully',
            ];

            return response()->json($data, 200);
        }
    }

    public function updateStudent(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            $data = [
                'status'=> 422,
                'message'=> $validator->messages(),
            ];

            return response()->json($data, 422);
        } else {
            $student = Student::find( $id );

            $student -> name= $request->name;
            $student -> email= $request->email;
            $student -> phone= $request->phone;

            $student->save();

            $data = [
                'status'=> 200,
                'message'=> 'Student updated successfully',
            ];

            return response()->json($data, 200);
        }
    }

    public function deleteStudent($id) {
        $student = Student::find( $id );

        $student -> delete();
        $data = [
            'status'=> 200,
            'message'=> 'Student deleted successfully',
        ];

        return response()->json($data, 200);
    }
}
