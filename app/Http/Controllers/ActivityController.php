<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class ActivityController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:sanctum');
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return response()->json(Activity::with('user')->get());
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $fields = $this->validate($request, [
      'activity' => 'required|min:3|max:255',
      'user_id' => 'required|exists:users,id'
    ]);

    $activity = Activity::create($fields);
    return response()->json(['message' => 'Activity created successfully!', 'activity' => $activity]);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $fields = $this->validate($request, [
      'activity' => 'required|min:3|max:255',
      'user_id' => 'required|exists:users,id',
      'updator_id' => 'required|exists:users,id',
    ]);
    $activity = Activity::find($id);
    
    // $activity->update($fields);

    return response()->json($request->all());
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
