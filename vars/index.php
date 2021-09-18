<?php 
  $cardStyle = "bg-white shadow-2xl rounded-lg";
  $isCartEmpty = false;
  $storeLink = "";
  $homeLink = "index.php";
  $aboutLink = "about.php";
  $contactLink = "contact.php";


  if ($_SERVER['SERVER_NAME'] === "localhost") {
    $storeLink = 'store_prod.php'; 
  } else {
    $storeLink = 'store.php';
  }
  $location = explode('/', $_SERVER['PHP_SELF']);
  $location = $location[sizeof($location) - 1];


  $navLinkStyle = "nav-link-default my-2 md:my-0 text-3xl text-center md:text-base white";
  $navLinkActive = "gold my-2 md:my-0 text-3xl text-center md:text-base white";

  $homeLinkStyle = $navLinkStyle;
  $aboutLinkStyle = $navLinkStyle;
  $contactLinkStyle = $navLinkStyle;
  $storeLinkStyle = $navLinkStyle;

  switch ($location) {
    case $homeLink:
      $homeLinkStyle = $navLinkActive;
      break;
    case $aboutLink:
      $aboutLinkStyle = $navLinkActive;
      break;
    case $contactLink:
      $contactLinkStyle = $navLinkActive;
      break;
    case $storeLink:
      $storeLinkStyle = $navLinkActive;
    default:
      break;
  }