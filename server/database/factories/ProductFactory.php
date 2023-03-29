<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $priceRand = rand(1, 50);
        return [
            'name' => $this->faker->sentence,
            'state' => rand(0, 1),
            "buy_price" => $priceRand,
            "sell_price" => $priceRand + 5,
            "quantity" => rand(1, 400)
        ];
    }
}
