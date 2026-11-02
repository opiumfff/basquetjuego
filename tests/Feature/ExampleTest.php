<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('The Rookie', false);
        $response->assertSee('juego de básquet en el navegador', false);
        $response->assertSee('csrf-token', false);

        $this->get('/jugar.php')->assertOk()->assertSee('The Rookie', false);
        $this->get('/sitemap.xml')->assertOk()->assertSee(url('/'), false);
        $this->get('/robots.txt')->assertOk()->assertSee('Sitemap: '.url('/sitemap.xml'), false);
    }
}
