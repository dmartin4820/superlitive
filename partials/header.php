<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style><?php include "assets/css/tailwind.css";?></style>
  <style><?php include "assets/css/style.css";?></style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>Superlitive</title>
</head>
<body>
  <header>
    <nav class="flex flex-col p-5 items-center justify-between nav-bar-container-default" data-theme="flex flex-col p-5 items-center justify-between bg-black">
      <div class="flex justify-center brand container text-6xl mb-10">
        <h1 class="text-center top-header-default" data-theme="text-center top-header-white">Super<h1 class="top-header-middle-default">lit</h1><h1 class="text-center top-header-default" data-theme="text-center top-header-white">ive</h1>
      </div>
      <div class="flex flex-col container justify-center items-center">
        <div class="nav-bar flex container justify-around md:visible invisible">
          <a href="./index.php" class="nav-link-default" data-theme="nav-link-white">Home</a>
          <a href="./about.php" class="nav-link-default" data-theme="nav-link-white">Community</a> 
          <a href="#" class="nav-link-default" data-theme="nav-link-white">Contact</a>
          <a href="https://store.superlitiveca.com/index.html" class="nav-link-default" data-theme="nav-link-white">Merch</a>
        </div>
        <button type="button">
          <div class="flex flex-col justify-center items-center border rounded-lg w-10 h-10 visible md:invisible">
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
            <div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
          </div>
        </button>
      </div>
     <button id="theme-change-btn" class="theme-change-btn" data-theme="theme-change-btn text-white">Change Theme</button>
    </nav>
  </header>
