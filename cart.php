<?php include './partials/header.php';?>
  <div class="flex justify-center border-2 border-red-700 p-28">
    <?php echo "<div class='flex flex-col w-3/4 $cardStyle'>";?> 
      <h2 class="text-5xl p-5">Items in Cart</h2>
      <div id="cart" class="px-10">
        <!-- <div class="flex">
          <img src="assets/images/PlaceholderLC_1.png" width="200">
          <div class="flex flex-col pl-10">
            <h3 class="text-2xl">Item name</h3>
            <p>$price each x $numItems</p>
          </div>
        </div> -->
      </div>
      <div class="px-10">
        <h1 id="cart-total" class="text-4xl"></h1>
      </div>
    </div>
  </div>
<?php include './partials/footer.php';?>