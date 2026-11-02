<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>The Rookie</title>
    <meta name="description" content="The Rookie es un juego de básquet en el navegador. Creá tu jugador, jugá la temporada y llegá a la NBA.">
    <meta name="application-name" content="The Rookie">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/') }}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_AR">
    <meta property="og:site_name" content="The Rookie">
    <meta property="og:title" content="The Rookie">
    <meta property="og:description" content="The Rookie es un juego de básquet en el navegador. Creá tu jugador, jugá la temporada y llegá a la NBA.">
    <meta property="og:url" content="{{ url('/') }}">
    <meta name="theme-color" content="#02040c">
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Press+Start+2P&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/retro.css?v=42">
    <script type="application/ld+json">
        {
            "@@context": "https://schema.org",
            "@@type": "VideoGame",
            "name": "The Rookie",
            "applicationCategory": "Game",
            "operatingSystem": "Web",
            "inLanguage": "es",
            "url": "{{ url('/') }}"
        }
    </script>
</head>
<body>
    <div id="app">
        <h1>The Rookie</h1>
        <p>Juego de básquet en el navegador. Creá tu jugador, jugá la temporada y llegá a la NBA.</p>
    </div>
    <script src="/js/carrera.js?v=43"></script>
    <script src="/js/app.js?v=70"></script>
</body>
</html>
