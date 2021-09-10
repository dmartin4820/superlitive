<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=630, initial-scale=1, maximum-scale=1.0">
  <style><?php include "assets/css/tailwind.css";?></style>
  <style><?php include "assets/css/style.css";?></style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>Superlitive</title>
</head>

<body>
  <header class="bg-white">
    <nav class="flex flex-col p-5 items-center sm:justify-between nav-bar-container-default" data-theme="flex flex-col p-5 items-center justify-between bg-black">
      <div class="flex justify-center items-center brand container text-6xl">
        <img class="superlitive-logo" src="assets/images/superlitive_logos/superlitive_black.svg" data-img="assets/images/superlitive_logos/White Superlitive Logo.png" width="80" alt="superlitive logo"/>
        <h1 class="text-center gold" data-theme="text-center white">Super<h1 class="black" data-theme="white">lit</h1><h1 class="text-center gold" data-theme="text-center white">ive</h1>
        <button class="nav-btn visible ml-10 md:hidden" type="button">
          <div class="flex flex-col justify-center items-center border-black border-2 rounded-lg w-14 h-14 sm:w-10 sm:h-10 visible md:hidden">
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
          </div>
        </button> 
      </div>
      <div class="flex flex-col md:container mt-4 justify-center items-center">
        <div class="nav-bar flex container justify-around">
          <a href="./index.php" class="nav-link-default my-2 md:my-0 text-3xl text-center md:text-base" data-theme="nav-link-white">Home</a>
          <a href="./about.php" class="nav-link-default my-2 md:my-0 text-3xl text-center md:text-base" data-theme="nav-link-white">Community</a> 
          <a href="./contact.php" class="nav-link-default my-2 md:my-0 text-3xl text-center md:text-base" data-theme="nav-link-white">Contact</a>
          <a href="https://store.superlitiveca.com/checkout.html" class="nav-link-default my-2 md:my-0 text-3xl text-center md:text-base" data-theme="nav-link-white">Merch</a>
        </div>
      </div>
    </nav>
    <!-- <button id="theme-change-btn" class="theme-change-btn" data-theme="theme-change-btn text-white">Change Theme</button> -->
  </header>
  
