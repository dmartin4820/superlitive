  <?php include "./vars/index.php"; ?>
  <?php include "./partials/header.php";?>
  <div class="index-hero h-5/6">
  </div>



  <div class="flex justify-center p-28">
    <?php echo "<div class='slideshow-container flex justify-around items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-6/12  py-20 px-10">
        <h2 class="text-4xl inline"> Superlitive is...</h2>
        <p class="p-10">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>
      </div>
      <div class="flex justify-content items-center w-5/12 py-10 slideshow-image" data-image="1">
        <button type="button" class="slideshow-arrow-left text-6xl">&#10096;</button>
        <img src="assets/images/IMG_6747.jpg" class="slide-image w-10/12 m-1" data-index="0">
        <button class="slideshow-arrow-right text-6xl">&#10097;</button> 
      </div>
    </div>
  </div>

  <div class="flex justify-center p-28">
    <?php echo "<div class='flex justify-around items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-6/12  py-20 px-10">
        <h2 class="text-4xl inline p-20">Our Mission</h2>
        <p class="pt-10 p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis facilis est soluta debitis labore amet distinctio asperiores illum quasi reprehenderit corrupti vel atque fugiat excepturi, aliquam harum iste molestiae.
        </p>
      </div>
      <div class="flex flex-initial justify-content items-center w-4/12 py-10">
        <img src="assets/images/PlaceholderLC_1.png" class="w-10/12">
      </div>
    </div>
  </div>


<?php include "./partials/footer.php";?>