<?php

namespace Database\Seeders;

use App\Models\category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Str;
class PostJobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $titles=['larval intern',
            '.net engineer',
            'software intern',
            'backend engineer intern',
            'accountant',
            'Marketing manager',
            'doctor'
            ];

        $companies=['ilabs',
            'microwe',
            '360softy',
            'codelantic','abc','xyz','private hospital'
        ];
        $locations=['colombo',
            'jaffna','vavuniya','jaffna','colombo','colombo','trincomalee'
        ];
        $salaries=[25000,
            20000,15000,20000,200000,120000,180000
        ];
        $job_types=['fulltime',
            'parttime','fulltime','fulltime','contract','fulltime','parttime'
        ];
        $role_overviews=['involving php framework',
            'involve .net framework','php framework','java framework','business','expand the production','caring the patients'
        ];
        $role_requirements=['Bsc(Hons) computer science',
            'knowledge of oop','knowledge of programming and Bsc(Hons) computer science','Bsc(Hons) computer science and java framework','expereice of 2 years',
            '2 years of experience','5 years of expereince'
        ];
        $offers=['no_offers','no_offers','tea and breakfast','no_offers','travelling expense','travelling expense', 'travelling expense', 'travelling expense'];


        $categoryMapping = [
            'Technology' => ['software engineer', 'developer', 'engineer','intern'],
            'Finance' => ['accountant', 'finance', 'analyst'],
            'Marketing' => ['marketing', 'seo', 'advertising'],
            'healthcare' => ['doctor', 'nurse', ],
            'design' => ['frontend', 'ui/ux', ],
        ];
        $category_ids=[];
        $category_names=[];
        foreach ($titles as $index => $title) {

            foreach ($categoryMapping as $key => $value) {
                foreach ($value as $key1 => $value1) {
                    similar_text(strtolower($title), strtolower($value1), $percent);
                    if ($percent >= 50) {
                        $category_names[$index] = $key;
                    }
                }
            }
            $category = category::where('name',$category_names[$index])->first();
            $category_ids[$index]=$category ? $category->id : null;

        }



        foreach ($titles as $index => $title) {
            DB::table('post_jobs')->insert(['title'=>$title,
                'company'=>$companies[$index],
                'location'=>$locations[$index],
                'salary'=>$salaries[$index],
                'job_type'=>$job_types[$index],
                'role_overview'=>$role_overviews[$index],
                'role_requirements'=>$role_requirements[$index],
                'offers'=>$offers[$index],
                'category_id'=>$category_ids[$index],
                'created_at'=>now(),
                'updated_at'=>now(),
                ]);
        }

    }

}
