<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('puntajes', function (Blueprint $table) {
            $table->index(['juego', 'puntaje']);
        });
    }

    public function down(): void
    {
        Schema::table('puntajes', function (Blueprint $table) {
            $table->dropIndex(['juego', 'puntaje']);
        });
    }
};
