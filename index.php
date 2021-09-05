  <?php include "./vars/index.php"; ?>
  <?php include "./partials/header.php";?>
  <div class="index-hero h-5/6">
  </div>



  <div class="flex justify-center p-28">
    <?php echo "<div class='slideshow-container flex items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-6/12  py-20">
        <h2 class="text-4xl inline"> Superlitive is...</h2>
        <p class="p-10">
        a woman owned cannabis brand that encourages life to be experienced at its highest degree
and embodies commUNITY values. Powered by Oakland’s own vertically integrated cannabis company New
Life CA, Superlitive provides high potency, indoor grown cannabis at a budget conscious price point. 
        </p>
      </div>
      <div class="flex justify-content items-center w-5/12 py-10 slideshow-image" data-image="1">
        <button type="button" class="slideshow-arrow-left text-6xl">&#10096;</button>
        <img src="assets/images/IMG_6747.jpg" class="slide-image m-1" data-index="0" width="600">
        <button class="slideshow-arrow-right text-6xl">&#10097;</button> 
      </div>
    </div>
  </div>

  <div class="flex justify-center p-28">
    <?php echo "<div class='flex justify-around items-center $cardStyle'>";?>
      <div class="flex flex-col justify-center items-center w-6/12  py-20 px-10">
        <h2 class="text-4xl inline p-20">Our Mission is... </h2>
        <p class="pt-10 p-20">
        to promote success and growth of a responsible cannabis commUnity
        </p>
      </div>
      <div class="flex flex-initial justify-content items-center w-4/12 py-10">
        <img src="assets/images/PlaceholderLC_1.png" class="w-10/12">
      </div>
    </div>
  </div>


<?php include "./partials/footer.php";?>