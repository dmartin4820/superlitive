<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel='icon' type="image/png" href="assets/images/superlitive_logos/superlitive_white.png"> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <meta name="viewport" content="width=630, initial-scale=0.56, maximum-scale=1.0, minimum-scale=0.46">
  <style><?php include "assets/css/tailwind.css";?></style>
  <style><?php include "assets/css/style.css";?></style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>Superlitive</title>
</head>

<body>
  <?php include "./vars/index.php";?> 
  <header class="bg-white">
    <nav class="flex flex-col p-5 items-center sm:justify-between nav-bar-container-default bg-black" data-theme="flex flex-col p-5 items-center justify-between bg-black">
      <div class="flex justify-center items-center brand container text-6xl">
        <img class="superlitive-logo" src="assets/images/superlitive_logos/superlitive_white.svg" data-img="assets/images/superlitive_logos/White Superlitive Logo.png" width="80" alt="superlitive logo"/>
        <a href="./index.php"><h1 class="text-center gold" data-theme="text-center white">Super<h1 class="white" data-theme="white">lit</h1><h1 class="text-center gold" data-theme="text-center white">ive</h1></a>
        <button class="nav-btn visible ml-10 md:hidden" type="button">
          <div class="flex flex-col justify-center items-center border-white border-2 rounded-lg w-14 h-14 md:w-10 md:h-10 visible md:hidden">
            <div class="bg-white rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-white rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-white rounded-md w-6 h-0.5 my-0.5"></div>
          </div>
        </button> 
      </div>
      <div class="flex flex-col md:container mt-4 justify-center items-center">
        <div class="nav-bar flex container justify-around">
          <?php
            echo "<a href='./index.php' class='" . $homeLinkStyle . "'>Home</a>";
            echo '<a href="./about.php" class="' . $aboutLinkStyle .'">Community</a>';
            echo '<a href="./contact.php" class="' . $contactLinkStyle .'">Contact</a>';
            echo "<a href=$storeLink class='$storeLinkStyle'>Merch</a>";
          ?>
          <?php
            if(!$isCartEmpty) {
              echo "<a href=./$cartLink class='$cartLinkStyle'><i class='fas fa-shopping-cart cart'></i></a>";
            }
          ?> 
          <!-- https://store.superlitiveca.com/checkout.html  -->
        </div>
      </div>
    </nav>
    <!-- <button id="theme-change-btn" class="theme-change-btn" data-theme="theme-change-btn text-white">Change Theme</button> -->
  </header>
  
