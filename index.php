  <?php include "./vars/index.php"; ?>
  <?php include "./partials/header.php";?>
  <div class="index-hero h-full">
  </div>



  <div class="flex justify-center p-10 md:p-28">
    <?php echo "<div class='card-container flex flex-col lg:flex-row items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-11/12 lg:w-6/12  py-20 lg:px-10">
        <h2 class="text-4xl inline"> Superlitive is...</h2>
        <p class="p-4 text-xl md:text-base">
        a woman owned cannabis brand that encourages life to be experienced at its highest degree
and embodies commUNITY values. Powered by Oakland’s own vertically integrated cannabis company New
Life CA, Superlitive provides high potency, indoor grown cannabis at a budget conscious price point. 
        </p>
      </div>
      <div class="flex justify-center items-center w-8/12 lg:w-5/12 py-10 slideshow-image" data-image="1">
        <button type="button" class="slideshow-arrow-left text-6xl">&#10096;</button>
        <img src="assets/images/IMG_6747.jpg" class="slide-image" data-index="0" width="600">
        <button class="slideshow-arrow-right text-6xl">&#10097;</button> 
      </div>
    </div>
  </div>

  <div class="flex justify-center p-10 md:p-28">
    <?php echo "<div class='card-container flex flex-col lg:flex-row justify-around items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-11/12 md:w-6/12  py-10 lg:py-20 lg:px-10">
        <h2 class="text-3xl xl:text-4xl inline">Our Mission is... </h2>
        <p class="p-4 md:p-8 text-xl md:text-base text-center md:text-left">
        to promote success and growth of a responsible cannabis commUnity
        </p>
      </div>
      <div class="flex flex-initial justify-content items-center py-10">
        <img src="assets/images/IMG_6814.jpg" width="600">
      </div>
    </div>
  </div>


<?php include "./partials/footer.php";?>