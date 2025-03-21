<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names=["microwe",
            "detech",
        ];
        $logo=["microwe.jpg","detech.png"];
        $about=["Microwe is used .net","The start up company"];
        foreach ($names as $index => $name) {
            DB::table('companies')->insert([
                'name' => $name,
                'logo' => $logo[$index],
                'about' => $about[$index],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
