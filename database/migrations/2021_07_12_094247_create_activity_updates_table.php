<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityUpdatesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('activity_updates', function (Blueprint $table) {
      $table->id();
      $table->string('update');
      $table->unsignedBigInteger('activity_id');
      $table->unsignedBigInteger('user_id');
      $table->timestamps();

      $table->foreign('activity_id')->references('id')->on('activities')->onDelete('cascade');
      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('activity_updates');
  }
}
