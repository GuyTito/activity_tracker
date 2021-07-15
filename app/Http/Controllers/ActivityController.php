<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityUpdate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
    return response()->json(Activity::with('user', 'activity_updates')->get());
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
      'status' => 'in:Pending,Done',
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
      'remark' => 'max:255',
      'user_id' => 'required|exists:users,id',
      'status' => 'in:Pending,Done',
      'updator_id' => 'required|exists:users,id',
    ]);

    $activity = Activity::find($id);
    $activity_update = null;


    DB::transaction(function () use ($activity, $fields, $id, &$activity_update) {
      if ($fields['status'] != $activity['status']) {
        $stmt = "Activity status changed from  {$activity['status']} to  {$fields['status']}";
        
        $activity_update = ActivityUpdate::create([
          'update' => $stmt,
          'activity_id' => $id,
          'user_id' => $fields['updator_id']
        ]);
      }
        
      $activity->update($fields);
    });

    return response()->json(['activity' => $request->all(), 'updates' => $activity_update]);
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
