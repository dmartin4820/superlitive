<?php include './partials/header.php';?>
  <div class="flex justify-center border-2 border-red-700 p-28">
    <?php echo "<div class='flex flex-col justify-evenly w-3/4 $cardStyle'>";?> 
      <h2 class="text-5xl p-5">Items in Cart</h2>
      <div id="cart" class="px-10">
      </div>
      <div class="px-10">
        <h1 id="cart-total" class="text-4xl"></h1>
      </div>
      <button 
        type="button" 
        class="self-center m-5 w-4/12 border-2 border-black rounded-lg hover:bg-black hover:text-white" 
        id="checkout-btn"
      >
        Checkout
      </button>
    </div>
  </div>
<?php include './partials/footer.php';?>