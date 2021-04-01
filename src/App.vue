<template>
	<div id="app">

	<header class="mx-auto px-4 container lg:max-w-screen-lg relative flex items-center justify-between font-medium md:px-2 md:justify-between">
		<h1 class="flex flex-1 items-center uppercase py-5 text-3xl font-extrabold tracking-tighter">
			art for all
		</h1>

		<div class="absolute top-14 left-4 text-sm tracking-normal font-extrabold baloo2 md:relative md:top-0 md:left-0 md:flex md:flex-1 md:items-center md:justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1 inline-block"  viewBox="0 0 1154 1154">
				<g id="art" transform="translate(-2060 -2503)">
					<g id="ellipse" transform="translate(2060 2503)" fill="none" stroke="#000" stroke-width="54">
					<circle cx="577" cy="577" r="577" stroke="none"/>
					<circle cx="577" cy="577" r="550" fill="none"/>
					</g>
					<text id="ART-2" data-name="ART" transform="translate(2637 3223)" font-size="408" font-family="Poppins-ExtraBold, Poppins" font-weight="800" letter-spacing="-0.065em"><tspan x="-385.56" y="0">ART</tspan></text>
				</g>
				</svg>
			$0.001
		</div>

		<div class="flex-1 text-right">
			<button href="#"
			class="inline-block py-2 px-6 font-bold text-white bg-black rounded-full border-4 border-black hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none cursor-not-allowed" disabled>
				Connect
			</button>
		</div>

	</header>

	<!-- Spacer -->
	<div class="h-20 md:h-20"></div>

	<!-- Valuable proposition -->
	<section class="mx-auto px-4 container xl:max-w-screen-xl">
		<p class="text-5xl md:text-6xl text-center font-black poppins leading-tight md:leading-none">
			Farm your ART tokens<br>
		</p>
		
	</section>

	<!-- Farming blocs -->
	<section class="mt-10 mx-auto px-4 container xlg:max-w-screen-xlg lg:flex lg:justify-center">
		<div class="w-auto xlg:w-350 my-8 lg:-mr-4 p-8 md:p-10 pr-16 border-4 lg:border-r-0 border-gray-100 rounded-xl lg:rounded-r-0">
			<h1 class="text-4xl font-black">BNB</h1>
			<div class="mt-2 font-black flex justify-between items-center">
				<div class="text-2xl">
					0.00
				</div>
				<ButtonGreenSM text="Claim" attribute="disable"></ButtonGreenSM>
				
			</div>
			<div class="-mt-2 text-base font-bold">
				ART earned
			</div>

			<div class="mt-2 font-semibold flex justify-between items-center">
				<div class="text-2xl font-black">
					0.00
				</div>
			</div>
			<div class="-mt-1 text-base font-bold">
				BNB staked
			</div>

			<div class="mt-6 w-full flex-col justify-between items-center">
				<ButtonWhite text="Stake" attribute="normal" class="flex-1"></ButtonWhite>
				<!-- <ButtonWhite text="Unstake" attribute="soon" class="mt-3 flex-1"></ButtonWhite> -->
			</div>

			<div class="mt-6 text-base font-bold text-center lg:text-left">
				APR: 150%
			</div>
		</div>

		<div class="w-auto xlg:w-380 p-8 md:p-10 z-10 bg-black text-white rounded-xl afaShadow">
			<h1 class="text-5xl font-black">CAKE</h1>
			<div class="mt-7 font-semibold flex justify-between items-center">
				<div class="text-2xl font-black">
					0.00
				</div>
				<ButtonGreenSM text="Claim" attribute="disable"></ButtonGreenSM>

			</div>
			<div class="-mt-2 text-base font-bold">
				ART earned
			</div>

			<div class="mt-3 font-semibold md:flex justify-between items-center">
				<div class="text-2xl font-black">
					0.00
				</div>
			</div>
			<div class="-mt-1 text-base font-bold">
				CAKE staked
			</div>

			<div class="mt-8 w-full flex-col justify-between items-center">
				<ButtonBlackOnBlack text="Stake" attribute="normal" class="flex-1"></ButtonBlackOnBlack>
				<!-- <ButtonBlackOnBlack text="Unstake" attribute="soon" class="mt-3 flex-1"></ButtonBlackOnBlack> -->
			</div>

			<div class="mt-6 text-base font-bold text-center lg:text-left">
				APR: 200%
			</div>
		</div>
		
		<div class="w-auto xlg:w-350 my-8 lg:-ml-4 p-8 md:p-10 border-4 lg:border-l-0 border-gray-100 rounded-xl lg:rounded-r-xl">
			<h1 class="text-4xl font-black">BUSD</h1>
			<div class="mt-2 font-semibold flex justify-between items-center">
				<div class="text-2xl font-black">
					0.00
				</div>
				<ButtonGreenSM text="Claim" attribute="disable"></ButtonGreenSM>

			</div>
			<div class="-mt-2 text-base font-bold">
				ART earned
			</div>

			<div class="mt-2 font-semibold md:flex justify-between items-center">
				<div class="text-2xl font-black">
					0.00
				</div>
			</div>
			<div class="-mt-1 text-base font-bold">
				BUSD staked
			</div>

			<div class="mt-6 w-full flex-col justify-between items-center">
				<ButtonWhite text="Stake" attribute="normal" class="flex-1"></ButtonWhite>
				<!-- <ButtonWhite text="Unstake" attribute="soon" class="mt-3 flex-1"></ButtonWhite> -->
			</div>


			<div class="mt-6 text-base font-bold text-center lg:text-left">
				APR: 150%
			</div>
		</div>
	</section>

	<!-- Add Metamask -->
	<!-- <div class="hidden md:block mt-3 text-center">
		<a href="#" class="underline text-sm">
			Add ART to Metamask
		</a>
	</div> -->

	<!-- Social -->
	<footer class="mt-12 mb-8 text-center">

		<a href="https://docs.artforall.io" target="_blank" class="mx-3 my-4 md:my-0 py-2 px-6 w-2/3 md:w-auto inline-flex justify-center items-center border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black  focus:outline-none">
			<svg id="menu_book-24px_1_" data-name="menu_book-24px (1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 201" class="mr-3 w-6 h-6 fill-current">
				<g id="Groupe_3" data-name="Groupe 3">
					<rect id="Rectangle_5" data-name="Rectangle 5" width="201" height="201" fill="none"/>
				</g>
				<g id="Groupe_6" data-name="Groupe 6" transform="translate(8 20)">
					<g id="Groupe_5" data-name="Groupe 5">
					<path id="Tracé_3" data-name="Tracé 3" d="M168.366,8.684A98.785,98.785,0,0,0,139.077,4.5c-16.318,0-33.892,3.347-46.026,12.552C80.917,7.847,63.344,4.5,47.026,4.5S13.134,7.847,1,17.052v122.6a4.5,4.5,0,0,0,4.184,4.184c.837,0,1.255-.418,2.092-.418,11.3-5.439,27.615-9.205,39.749-9.205,16.318,0,33.892,3.347,46.026,12.552,11.3-7.113,31.8-12.552,46.026-12.552,13.808,0,28.034,2.51,39.749,8.787a3.772,3.772,0,0,0,2.092.418,4.5,4.5,0,0,0,4.184-4.184V17.052A57.077,57.077,0,0,0,168.366,8.684Zm0,112.972a97.243,97.243,0,0,0-29.289-4.184c-14.226,0-34.728,5.439-46.026,12.552V33.789c11.3-7.113,31.8-12.552,46.026-12.552a97.243,97.243,0,0,1,29.289,4.184Z" transform="translate(-1 -4.5)"/>
					<g id="Groupe_4" data-name="Groupe 4" transform="translate(100.42 37.657)">
						<path id="Tracé_4" data-name="Tracé 4" d="M50.657,21.552a97.86,97.86,0,0,1,20.921,2.176V11.008A113,113,0,0,0,50.657,9C36.431,9,23.544,11.427,13,15.946V29.837C22.456,24.481,35.594,21.552,50.657,21.552Z" transform="translate(-13 -9)"/>
						<path id="Tracé_5" data-name="Tracé 5" d="M13,18.606V32.5c9.456-5.356,22.594-8.285,37.657-8.285a97.86,97.86,0,0,1,20.921,2.176V13.668A113,113,0,0,0,50.657,11.66C36.431,11.66,23.544,14.17,13,18.606Z" transform="translate(-13 10.6)"/>
						<path id="Tracé_6" data-name="Tracé 6" d="M50.657,14.33c-14.226,0-27.113,2.427-37.657,6.946V35.167c9.456-5.356,22.594-8.285,37.657-8.285a97.86,97.86,0,0,1,20.921,2.176V16.338A106.252,106.252,0,0,0,50.657,14.33Z" transform="translate(-13 30.273)"/>
					</g>
					</g>
				</g>
			</svg>
			<span>White paper</span>
		</a>

		<div class="mt-4 flex justify-center items-center">
			<!-- <a href="https://medium.com/quiet-mx" title="Medium" class="mx-2 text-gray-500 hover:text-black focus:text-black focus:outline-none">
				medium
				<svg height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current"><path d="M22.085 4.733L24 2.901V2.5h-6.634l-4.728 11.768L7.259 2.5H.303v.401L2.54 5.594c.218.199.332.49.303.783V16.96c.069.381-.055.773-.323 1.05L0 21.064v.396h7.145v-.401l-2.52-3.049a1.244 1.244 0 01-.347-1.05V7.806l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831a.556.556 0 01-.214-.534V5.267a.554.554 0 01.213-.534z"/></svg>
			</a> -->
			<a href="https://twitter.com/artforall_bsc" target="_blank" title="Twitter" class="mx-2 text-gray-500 hover:text-black focus:text-black focus:outline-none">
				<!-- twitter -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"/></svg>
			</a>
			<a href="https://discord.gg/JdGBnwj5AR" target="_blank" title="Discord" class="mx-2 text-gray-500 hover:text-black focus:text-black focus:outline-none">
				<!-- discord  -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-6 h-6 fill-current">
					<g id="Discord" transform="translate(-23 -20)">
						<path id="Tracé_1" data-name="Tracé 1" d="M104.4,103.9c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1C114.7,108.9,110.1,103.9,104.4,103.9Zm36.5,0c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1S146.6,103.9,140.9,103.9Z"/>
						<path id="Tracé_2" data-name="Tracé 2" d="M189.5,20H55.5A20.55,20.55,0,0,0,35,40.6V175.8a20.55,20.55,0,0,0,20.5,20.6H168.9l-5.3-18.5,12.8,11.9L188.5,201,210,220V40.6A20.549,20.549,0,0,0,189.5,20ZM150.9,150.6s-3.6-4.3-6.6-8.1c13.1-3.7,18.1-11.9,18.1-11.9a57.223,57.223,0,0,1-11.5,5.9,65.819,65.819,0,0,1-14.5,4.3,70.052,70.052,0,0,1-25.9-.1,83.944,83.944,0,0,1-14.7-4.3,58.6,58.6,0,0,1-7.3-3.4c-.3-.2-.6-.3-.9-.5a1.38,1.38,0,0,1-.4-.3c-1.8-1-2.8-1.7-2.8-1.7s4.8,8,17.5,11.8c-3,3.8-6.7,8.3-6.7,8.3-22.1-.7-30.5-15.2-30.5-15.2,0-32.2,14.4-58.3,14.4-58.3,14.4-10.8,28.1-10.5,28.1-10.5l1,1.2C90.2,73,81.9,80.9,81.9,80.9s2.2-1.2,5.9-2.9a75.1,75.1,0,0,1,22.7-6.3,9.853,9.853,0,0,1,1.7-.2,84.612,84.612,0,0,1,20.2-.2,81.517,81.517,0,0,1,30.1,9.6s-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3,28.1,10.5c0,0,14.4,26.1,14.4,58.3C181.5,135.4,173,149.9,150.9,150.6Z"/>
					</g>
				</svg>
			</a>
			<a href="https://t.me/joinchat/Jhl234enZB8xYjU0" target="_blank" title="Telegram" class="mx-2 text-gray-500 hover:text-black focus:text-black focus:outline-none">
				<!-- telegram -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-6 h-6 fill-current">
					<path id="telegram" d="M100,8A100,100,0,1,0,200,108,99.983,99.983,0,0,0,100,8Zm49.113,68.508L132.7,153.847c-1.21,5.484-4.476,6.815-9.032,4.234l-25-18.427L86.613,151.266c-1.331,1.331-2.46,2.46-5.04,2.46l1.774-25.444,46.331-41.855c2.016-1.774-.444-2.782-3.1-1.008L69.315,121.468l-24.677-7.7c-5.363-1.694-5.484-5.363,1.129-7.944l96.411-37.177C146.653,67.032,150.564,69.734,149.113,76.508Z" transform="translate(0 -8)"/>
				</svg>
			</a>	
		</div>

	</footer>

	</div>
</template>

<script>
import ButtonGreenSM from './components/ButtonGreenSM.vue'
import ButtonWhite from './components/ButtonWhite.vue'
import ButtonBlackOnBlack from './components/ButtonBlackOnBlack.vue'




export default {
	name: 'App',
	components: {
		ButtonGreenSM,
		ButtonWhite,
		ButtonBlackOnBlack,
	}
}
</script>

<style src="./assets/css/tailwind.css"></style>
