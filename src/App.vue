<template>
	<div id="app">

		<!-- header  -->
		<FarmHeader></FarmHeader>

		<!-- intro -->
		<FarmValuePorpoosition
		starttime="Apr 28, 2021 15:37:25" 
		endtime="May 8, 2021 16:37:25" 
		trans='{  
		"expired":"finished",
		"running":"on going",
		"upcoming":"upcoming",
		"status": {
			"expired":"Expired",
			"running":"Running",
			"upcoming":"Future"
			}}'>
		</FarmValuePorpoosition>

		<!-- Farming blocs -->
	<FarmBlock
		currency="BUSD"
		apy="100"
		tvl="2936.00"
		earn="0.00"
		stakeButton="Unlock to stake">
	</FarmBlock>

<FarmBlock
		currency="Cake"
		apy="150"
		tvl="12875.23"
		earn="0.00"
		stakeButton="Unlock to stake">
	</FarmBlock>

	<FarmBlock
		currency="BNB"
		apy="233"
		tvl="1285.23"
		earn="0.00"
		stakeButton="Unlock to stake">
	</FarmBlock>

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
import FarmValuePorpoosition from './components/FarmValuePorpoosition.vue'
import FarmBlock from './components/FarmBlock.vue'


export default {
	name: 'App',
	components: {
		FarmHeader,
		FarmValuePorpoosition,
		FarmBlock
	}
}
</script>

<style src="./assets/css/tailwind.css"></style>
