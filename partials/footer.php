  <footer class="footer">
    <div class="flex flex-col md:flex-row justify-evenly p-10 footer-content bg-black" data-theme="flex justify-evenly p-10 bg-white">
      <ul class="flex flex-row md:flex-col h-8 md:h-32 justify-between md:pl-20">
        <!-- <li><a class="white" data-theme="white" href="./about.php">About</a></li> -->
        <li><a class="white" data-theme="white" href="./index.php">Home</a></li>
        <li><a class="white" data-theme="white" href="./about.php">Community</a></li>
        <li><a class="white" data-theme="white" href="./contact.php">Contact</a></li>
        <li>
          <?php 
            echo "<a href=$storeLink class='white'>Merch</a>";
          ?>
        </li>
        <li><a class="white" data-theme="white" href="#">Partnerships</a></li>
      </ul>
      <div class="flex justify-center items-center brand text-6xl mt-4 md:mb-10 md: mx-2">
        <img class="superlitive-logo" src="assets/images/superlitive_logos/superlitive_white.svg" data-img="assets/images/superlitive_logos/white Superlitive Logo.png"width="80" />
        <h1 class="text-center gold">Super<h1 class="white" data-theme="white">lit</h1><h1 class="text-center gold">ive</h1>
      </div>  
    </div>
  </footer>

  <script src="assets/js/mobile_nav_action.js"></script>
	<script src="assets/js/theme_change.js"></script>
  <?php  
    switch($location) {
      case $homeLink:
        echo '<script src="assets/js/slideshow.js"></script>';
        break;
      case $storeLink:
        echo '<script src="assets/js/dist/store_stripe.bundle.js"></script>';
        break;
      case $cartLink:
        echo '<script src="assets/js/dist/cart.bundle.js"></script>';
        break;
      default:
        echo '';
    } 
  ?>
</body>
</html>