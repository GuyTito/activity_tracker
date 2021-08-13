<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

  <title>Activity Tracker</title>
</head>

<body class="d-flex flex-column min-vh-100">
  <div id="app" class=" wrapper flex-grow-1">
    <app></app>
  </div>

  <footer class="text-center p-2" style="background-color: rgb(240, 239, 239)">
    <a
      class="text-decoration-none text-muted mx-3"
      href="https://twitter.com/QuistKofi"
      target="blank"
      >My Twitter</a
    >
    <a
      class="text-decoration-none text-muted mx-4"
      href="https://github.com/GuyTito/activity_tracker"
      target="blank"
      >Source</a
    >
  </footer>

  <script src="{{ mix('js/app.js') }}" defer></script>
</body>

</html>
