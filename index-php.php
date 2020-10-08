<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dischi php</title>
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>
    <!-- Page wrapper -->
    <div class="page-wrapper">
      <!-- HEADER -->
      <header>
        <!-- Header container -->
        <div class="container">
          <!-- Logo -->
          <div class="header-logo">
            <img src="img/logo.png" alt="Logo Spotify">
          </div>
          <!-- /Logo -->
        </div>
        <!-- /Header container -->
      </header>
      <!-- /HEADER -->

      <!-- MAIN -->
      <main>
        <!-- Main container -->
        <div class="container">
          <!-- Disks -->
          <?php include 'disk.php' ?>
          <!-- /Disks -->
        </div>
        <!-- /Main container -->
      </main>
      <!-- /MAIN -->
    </div>
    <!-- /Page wrapper -->
  </body>
</html>
