<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style><?php include "assets/css/tailwind.css";?></style>
	<style><?php include "assets/css/style.css";?></style>
	<title>Superlitive</title>
</head>
<body>
	<div class="hero">
		<header>
			<nav class="flex flex-col p-10 justify-between items-center">
				<div class="brand container text-6xl mb-10">
					<h1 class="text-center">Superlitive</h1>
				</div>
				<div class="flex flex-col container justify-center items-center">
					<div class="nav-bar flex container justify-around md:visible invisible">
						<a href="./index.php" class="">Home</a>
						<a href="./about.php" class="">Community</a>
						<a href="#" class="">Contact</a>
						<a href="./store.php" class="">Merch</a>
					</div>
					<button type="button">
						<div class="flex flex-col justify-center items-center border rounded-lg w-10 h-10 visible md:invisible">
							<div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
							<div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
							<div class="bg-black rounded-md w-6 h-0.5 my-0.5"></div>
						</div>
					</button>
				</div>
			</nav>
		</header>
		<div class="slideshow-container flex justify-center w-9/12 mt-20">
			<div class="flex flex-col justify-center items-center w-1/4">
				<!-- <p class="text-4xl inline"> Superlitive is...</p> -->
				<p class="w-full bg-white rounded-md p-10">
					Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
				</p>
			</div>
			<div class="w-4/12 slideshow-image">
				<img src="assets/images/PlaceholderLC.png"">
			</div>
		</div>
			
	</div>
</body>
</html>