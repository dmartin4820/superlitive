<?php include "./vars/index.php"; ?>
<?php include "./partials/header.php";?>

<div class="flex justify-center p-10 md:p-28">
    <?php echo "<div class='flex flex-col items-center $cardStyle'>";?>
      <h2 class="self-start text-6xl inline p-5">Contact us</h2>
      <div class="flex flex-col items-center w-12/12 lg:w-8/12 p-10">
        <img class="contact-image" src="assets/images/IMG_6845.jpg" width="800" alt="superlitive team">
        <div class="flex justify-between items-center pt-10">
          <a href="#">  
            <img class="social-logo" src="assets/images/twitter_blue_logo.svg" alt="twitter logo"/>
          </a>
          <a href="#">
            <img class="social-logo" src="assets/images/facebook_logo.svg" alt="facebook logo"/>
          </a>
        </div>
      </div>
    </div>
  </div>

<?php include "./partials/footer.php";?>