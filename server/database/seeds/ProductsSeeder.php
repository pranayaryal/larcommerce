<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Orange tan structure',
            'sku' => Str::random(12),
            'price' => "42.12",
            'image' => '/wkej/afss',
            'description' => 'You wont find this anywhere',
            
        ]);
        //
    }
}
