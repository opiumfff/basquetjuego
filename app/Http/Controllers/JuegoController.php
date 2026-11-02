<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\View\View;

class JuegoController extends Controller
{
    public function index(): View
    {
        return view('juego');
    }

    public function sitemap(): Response
    {
        $loc = e(url('/'));
        $xml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>{$loc}</loc></url>
</urlset>
XML;

        return response($xml, 200, ['Content-Type' => 'application/xml; charset=UTF-8']);
    }

    public function robots(): Response
    {
        $cuerpo = "User-agent: *\nAllow: /\n\nSitemap: ".url('/sitemap.xml')."\n";

        return response($cuerpo, 200, ['Content-Type' => 'text/plain; charset=UTF-8']);
    }
}
