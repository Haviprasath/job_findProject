<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('jobtitle');
            $table->string('companyName');
            $table->string('jobType');
            $table->string('companyLogo')->nullable();
            $table->string('location');
            $table->string('salaryRange')->nullable();
            $table->text('jobDescription');
            $table->string('requiredSkills');
            $table->string('experienceLevel')->nullable();
            $table->date('applicationDeadline');
            $table->string('contactInfo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
