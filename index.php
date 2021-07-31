<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style><?php include "assets/css/tailwind.css";?></style>
	<title>Superlitive</title>
</head>
<body>
	<header>
		<nav class="flex p-10 justify-center items-center">
			<div class="brand container text-4xl">
				<h2>Superlitive</h2>
			</div>
			<div class="flex container justify-center items-center">
				<div class="nav-bar flex justify-center md:visible invisible">
					<a href="./index.php" class="mr-12">Home</a>
					<a href="./about.php" class="mr-12">About</a>
					<a href="./store.php" class="mr-12">Store</a>
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
	<div class="h-full border-2 border-black-800">
		<div class="hero">
			<p class="p-20 z-10 mx-12 border-1 rounded-lg text-2xl"><strong>This is some text</strong></p>
		</div>
	</div>
</body>
</html>