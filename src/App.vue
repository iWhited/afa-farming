<template>
	<div id="app">

		<!-- header  -->
		<FarmHeader></FarmHeader>

		<!-- intro -->
		<FarmTimer></FarmTimer>

		<!-- Farming blocs -->
		<section class="px-4 md:px-10 mt-16 mx-auto container lg:max-w-screen-lg">
			<div class="grid md:grid-cols-2 items-center">
				<div class="md:h-full px-8 pt-9 pb-12 flex flex-col rounded-xl bg-black z-10">
					<h1 class="flex-1 flex items-center font-black text-5xl sm:text-7xl text-white md:leading-tight break-words uppercase">
						BUSD
						<svg class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
							<g id="busd" transform="translate(15 14.62)">
								<circle id="Ellipse_57" data-name="Ellipse 57" cx="295" cy="295" r="295" transform="translate(0 0.38)" stroke="#fff" stroke-width="30"/>
								<path id="Tracé_2403" data-name="Tracé 2403" d="M395.128,445.8,520.927,320l50.16,50.16-125.8,125.8Zm.092,150.327L596.259,395.087l50.16,50.16L445.38,646.286ZM671.448,470.418,470.409,671.457l50.157,50.154L721.612,520.575ZM320,520.912l50.16-50.16,50.16,50.16-50.16,50.16Z" transform="translate(-225.503 -225.419)" fill="#fff" fill-rule="evenodd"/>
							</g>
						</svg>
					</h1>
					<ul class="pt-4 sm:pt-6 text-white font-bold text-lg sm:text-2xl">
						<li>
							Earn : ART
						</li>
						<li class="sm:mt-2">
							APY : 100%
						</li>
						<li class="sm:mt-2">
							TVL : 12875.23
						</li>
					</ul>
				</div>

				<div class="-mt-2 md:my-8 mx-2 md:-ml-2 md:mr-0 py-8 px-4 md:pl-10 md:pr-6 border-4 lg:border-l-0 border-gray-100 rounded-xl lg:rounded-r-xl">
					<div class="flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							ART earned
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
						Harvest
					</button>
					</div>
					<div class="mt-8 flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							BUSD staked 
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							Unlock
						</button>
					</div>
					
					</div>
			</div>
		</section>

		<section class="px-4 md:px-10 mt-16 mx-auto container lg:max-w-screen-lg">
			<div class="grid md:grid-cols-2 items-center">
				<div class="md:h-full px-8 pt-9 pb-12 flex flex-col rounded-xl bg-black z-10">
					<h1 class="flex-1 flex items-center font-black text-5xl sm:text-7xl text-white md:leading-tight break-words uppercase">
						cake
						<svg class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
							<g id="Cake" transform="translate(4.744 0.927)">
								<circle id="Ellipse_58" data-name="Ellipse 58" cx="295" cy="295" r="295" transform="translate(10.256 14.073)" stroke="#fff" stroke-width="30"/>
								<g id="Groupe_63" data-name="Groupe 63" transform="translate(124.299 125.662)">
									<path id="Tracé_2398" data-name="Tracé 2398" d="M64.9,57.743a48.283,48.283,0,1,1,95.752-8.87v59.533a288.592,288.592,0,0,1,39.827-.044V48.873a48.283,48.283,0,1,1,95.752,8.87L283.162,127.7c44.838,19.588,78.751,53.59,78.751,96.314v25.856c0,35.125-23.254,64.544-55.734,84.413-32.76,20.017-77.066,31.9-125.216,31.9s-92.47-11.886-125.215-31.9C23.24,314.428,0,285.009,0,249.883V224.027c0-42.5,33.558-76.371,78.027-95.989Zm201.513,79.165L281.7,55.038a33.514,33.514,0,1,0-66.451-6.165v75.75a264.427,264.427,0,0,0-34.3-2.173,273.6,273.6,0,0,0-35.081,2.277V48.873a33.514,33.514,0,1,0-66.451,6.15l15.345,82.151C46.8,154.989,14.783,187.246,14.783,224.027v25.856c0,56.088,74.39,101.562,166.166,101.562s166.2-45.474,166.2-101.562V224.027c0-36.988-32.376-69.364-80.717-87.119Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
									<path id="Tracé_2399" data-name="Tracé 2399" d="M333.361,41.618c0,56.088-74.4,101.562-166.2,101.562S1,97.691,1,41.6V15.747H333.375V41.6Z" transform="translate(13.783 209.266)" fill="#fff7e6"/>
									<path id="Tracé_2400" data-name="Tracé 2400" d="M65.647,41.349A33.514,33.514,0,1,1,132.1,35.184v75.839a272.455,272.455,0,0,1,69.379-.089V35.184a33.514,33.514,0,1,1,66.451,6.15L252.642,123.2C301,140.96,333.36,173.32,333.36,210.323c0,56.088-74.39,101.562-166.166,101.562C75.389,311.885,1,266.412,1,210.323c0-36.811,32.036-69.039,79.978-86.853L65.662,41.349Z" transform="translate(13.77 13.689)" fill-rule="evenodd"/>
									<path id="Tracé_2401" data-name="Tracé 2401" d="M43.549,41.064c0,15.3-8.264,27.7-18.464,27.7S6.62,56.365,6.62,41.079s8.279-27.7,18.479-27.7S43.549,25.778,43.549,41.064Z" transform="translate(91.246 175.571)" fill="#fff"/>
									<path id="Tracé_2402" data-name="Tracé 2402" d="M52.167,41.064c0,15.3-8.264,27.7-18.464,27.7s-18.464-12.4-18.464-27.689,8.279-27.7,18.479-27.7,18.45,12.4,18.45,27.689Z" transform="translate(210.032 175.571)" fill="#fff"/>
								</g>
							</g>
						</svg>
					</h1>
					<ul class="pt-4 sm:pt-6 text-white font-bold text-lg sm:text-2xl">
						<li>
							Earn : ART
						</li>
						<li class="sm:mt-2">
							APY : 100%
						</li>
						<li class="sm:mt-2">
							TVL : 12875.23
						</li>
					</ul>
				</div>

				<div class="-mt-2 md:my-8 mx-2 md:-ml-2 md:mr-0 py-8 px-4 md:pl-10 md:pr-6 border-4 lg:border-l-0 border-gray-100 rounded-xl lg:rounded-r-xl">
					<div class="flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							ART earned
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
						Harvest
					</button>
					</div>
					<div class="mt-8 flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							CAKE staked 
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							Unlock
						</button>
					</div>
					
					</div>
			</div>
		</section>

		<section class="px-4 md:px-10 mt-16 mx-auto container lg:max-w-screen-lg">
			<div class="grid md:grid-cols-2 items-center">
				<div class="md:h-full px-8 pt-9 pb-12 flex flex-col rounded-xl bg-black z-10">
					<h1 class="flex-1 flex items-center font-black text-5xl sm:text-7xl text-white md:leading-tight break-words uppercase">
						BNB
						<svg class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
							<g id="BNB" transform="translate(850.596 -1922)">
								<circle id="Ellipse_59" data-name="Ellipse 59" cx="295" cy="295" r="295" transform="translate(-835.596 1937)" stroke="#fff" stroke-width="30"/>
								<g id="Layer_1" data-name="Layer 1" transform="translate(-750.131 2022.464)">
									<path id="Tracé_2404" data-name="Tracé 2404" d="M128.149,176.1,209.536,94.71l81.426,81.422,47.355-47.355L209.536,0,80.8,128.739l47.353,47.355M0,209.536l47.357-47.363L94.71,209.526,47.353,256.882Zm128.149,33.444,81.387,81.382,81.424-81.421,47.38,47.33-.023.025L209.536,419.071,80.8,290.333l-.067-.067,47.424-47.291m196.208-33.418L371.718,162.2l47.353,47.353-47.355,47.357Z" fill="#fff"/>
									<path id="Tracé_2405" data-name="Tracé 2405" d="M1059.3,1011.242h.02l-48.049-48.052L975.752,998.7h0l-4.08,4.082-8.415,8.417-.067.065.067.069,48.01,48.017,48.052-48.052.024-.027-.044-.024" transform="translate(-801.732 -801.732)" fill="#fff"/>
								</g>
							</g>
						</svg>
					</h1>
					<ul class="pt-4 sm:pt-6 text-white font-bold text-lg sm:text-2xl">
						<li>
							Earn : ART
						</li>
						<li class="sm:mt-2">
							APY : 100%
						</li>
						<li class="sm:mt-2">
							TVL : 12875.23
						</li>
					</ul>
				</div>

				<div class="-mt-2 md:my-8 mx-2 md:-ml-2 md:mr-0 py-8 px-4 md:pl-10 md:pr-6 border-4 lg:border-l-0 border-gray-100 rounded-xl lg:rounded-r-xl">
					<div class="flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							ART earned
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
						Harvest
					</button>
					</div>
					<div class="mt-8 flex justify-between items-center">
						<div class="font-semibold text-sm sm:text-xl">
							<span class="font-black text-2xl sm:text-3xl">
							00.00
							</span>
							<span class="lg:hidden"><br></span>
							BNB staked 
						</div>
						<button class="py-2 px-4 w-32 inline-flex justify-center items-center text-xl md:text-xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							Unlock
						</button>
					</div>
					
					</div>
			</div>
		</section>

		<!-- Add Metamask -->
		<div class="hidden md:block mt-28 md:mt-36 text-center">
			<a href="#" class="underline text-sm">
				Add ART to Metamask
			</a>
		</div>

		<!-- Social -->
		<section class="mt-28 px-4 bg-black">
			<div class="mx-auto xl:max-w-screen-xl">
				<div class="h-60 md:h-80 flex justify-center items-center">
						<a href="https://medium.com/art-for-all-nft-platform" target="_blank" title="Medium" class="mx-3 md:mx-5 text-gray-500 hover:text-white focus:text-white focus:outline-none">
								<svg class="h-9 md:h-12 w-9 md:w-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.085 4.733L24 2.901V2.5h-6.634l-4.728 11.768L7.259 2.5H.303v.401L2.54 5.594c.218.199.332.49.303.783V16.96c.069.381-.055.773-.323 1.05L0 21.064v.396h7.145v-.401l-2.52-3.049a1.244 1.244 0 01-.347-1.05V7.806l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831a.556.556 0 01-.214-.534V5.267a.554.554 0 01.213-.534z"></path></svg>
						</a>
						<a href="https://twitter.com/artforall_nft" target="_blank" title="Twitter" class="mx-3 md:mx-5 text-gray-500 hover:text-white focus:text-white focus:outline-none">
								<svg class="h-9 md:h-12 w-9 md:w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg>
						</a>
						<a href="https://discord.gg/JdGBnwj5AR" target="_blank" title="Discord" class="mx-3 md:mx-5 text-gray-500 hover:text-white focus:text-white focus:outline-none">
								<svg class="h-9 md:h-12 w-9 md:w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
										<g id="Discord" transform="translate(-23 -20)">
												<path id="Tracé_1" data-name="Tracé 1" d="M104.4,103.9c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1C114.7,108.9,110.1,103.9,104.4,103.9Zm36.5,0c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1S146.6,103.9,140.9,103.9Z"></path>
												<path id="Tracé_2" data-name="Tracé 2" d="M189.5,20H55.5A20.55,20.55,0,0,0,35,40.6V175.8a20.55,20.55,0,0,0,20.5,20.6H168.9l-5.3-18.5,12.8,11.9L188.5,201,210,220V40.6A20.549,20.549,0,0,0,189.5,20ZM150.9,150.6s-3.6-4.3-6.6-8.1c13.1-3.7,18.1-11.9,18.1-11.9a57.223,57.223,0,0,1-11.5,5.9,65.819,65.819,0,0,1-14.5,4.3,70.052,70.052,0,0,1-25.9-.1,83.944,83.944,0,0,1-14.7-4.3,58.6,58.6,0,0,1-7.3-3.4c-.3-.2-.6-.3-.9-.5a1.38,1.38,0,0,1-.4-.3c-1.8-1-2.8-1.7-2.8-1.7s4.8,8,17.5,11.8c-3,3.8-6.7,8.3-6.7,8.3-22.1-.7-30.5-15.2-30.5-15.2,0-32.2,14.4-58.3,14.4-58.3,14.4-10.8,28.1-10.5,28.1-10.5l1,1.2C90.2,73,81.9,80.9,81.9,80.9s2.2-1.2,5.9-2.9a75.1,75.1,0,0,1,22.7-6.3,9.853,9.853,0,0,1,1.7-.2,84.612,84.612,0,0,1,20.2-.2,81.517,81.517,0,0,1,30.1,9.6s-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3,28.1,10.5c0,0,14.4,26.1,14.4,58.3C181.5,135.4,173,149.9,150.9,150.6Z"></path>
										</g>
								</svg>
						</a>
						<a href="https://t.me/ArtForAll_NFT" target="_blank" title="Telegram" class="mx-3 md:mx-5 text-gray-500 hover:text-white focus:text-white focus:outline-none">
								<svg class="h-9 md:h-12 w-9 md:w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
										<path id="telegram" d="M100,8A100,100,0,1,0,200,108,99.983,99.983,0,0,0,100,8Zm49.113,68.508L132.7,153.847c-1.21,5.484-4.476,6.815-9.032,4.234l-25-18.427L86.613,151.266c-1.331,1.331-2.46,2.46-5.04,2.46l1.774-25.444,46.331-41.855c2.016-1.774-.444-2.782-3.1-1.008L69.315,121.468l-24.677-7.7c-5.363-1.694-5.484-5.363,1.129-7.944l96.411-37.177C146.653,67.032,150.564,69.734,149.113,76.508Z" transform="translate(0 -8)"></path>
								</svg>
						</a>	
						
				</div>
			</div>    
		</section>

	</div>
</template>

<script>
import FarmHeader from './components/FarmHeader.vue'
import FarmTimer from './components/FarmTimer.vue'

export default {
	name: 'App',
	components: {
		FarmHeader,
		FarmTimer,
	}
}
</script>

<style src="./assets/css/tailwind.css"></style>
