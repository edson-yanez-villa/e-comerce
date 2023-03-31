<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->increments("id");
            $table->timestamps();
            $table->integer("user_id")->unsigned();

            $table->unsignedInteger("product_id");
            $table->foreign("product_id")->references("id")->on("products");

            $table->tinyInteger("quantity")->unsigned();
            $table->boolean("state");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
