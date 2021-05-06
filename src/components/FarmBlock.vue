<template>
		<section class="px-4 md:px-10 mt-24 mx-auto container lg:max-w-screen-lg">
			<div class="grid md:grid-cols-2 items-center">
				<div class="px-8 pt-16 pb-20 flex flex-col rounded-xl bg-black z-10 text-white">
					<h1 class="flex-1 flex items-center font-black text-5xl sm:text-7xl md:leading-tight break-words uppercase">
						{{ currency }}
						<svg v-if="currency == 'BUSD'" class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
							<g id="busd" transform="translate(15 14.62)">
								<circle id="Ellipse_57" data-name="Ellipse 57" cx="295" cy="295" r="295" transform="translate(0 0.38)" stroke="#fff" stroke-width="30"/>
								<path id="Tracé_2403" data-name="Tracé 2403" d="M395.128,445.8,520.927,320l50.16,50.16-125.8,125.8Zm.092,150.327L596.259,395.087l50.16,50.16L445.38,646.286ZM671.448,470.418,470.409,671.457l50.157,50.154L721.612,520.575ZM320,520.912l50.16-50.16,50.16,50.16-50.16,50.16Z" transform="translate(-225.503 -225.419)" fill="#fff" fill-rule="evenodd"/>
							</g>
						</svg>
						<svg v-if="currency == 'Cake'" class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
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
						<svg v-if="currency == 'BNB'" class="w-14 h-14 ml-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 620">
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
							Earn : <span class="font-black">ART</span>
						</li>
						<li class="sm:mt-2">
							APY : {{ apy }}%
						</li>
						<li class="sm:mt-2">
							TVL : {{ tvl }}
						</li>
					</ul>
					<div class="mt-12 flex items-center justify-between">
						<div class="text-5xl font-black">
							{{ earn }}
						</div>
						<button @click="modalAction()" class="ml-5 py-2 px-5 inline-flex justify-center items-center text-xl md:text-xl border-4 border-white rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							{{ stakeButton }}
						</button>
						<!-- <button class="ml-5 py-2 px-5 inline-flex justify-center items-center text-xl md:text-xl border-4 border-white rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							+
						</button> 
						<button class="ml-0 py-2 px-5 inline-flex justify-center items-center text-xl md:text-xl border-4 border-white rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							-
						</button>  -->
					</div>
					<div class="text-sm font-bold">
						{{ currency }} staked
					</div>
				</div>

				<div class="-mt-2 md:mt-8 md:mb-7 mx-2 md:-ml-1 py-8 md:pl-10 border-4 lg:border-l-0 border-gray-100 rounded-xl lg:rounded-r-xl">
					<div class="font-extrabold text-lg sm:text-3xl uppercase">
						<!-- <span class="font-black">ART</span> earned -->
							<svg xmlns="http://www.w3.org/2000/svg" class="w-14 mr-1 inline-block"  viewBox="0 0 1154 1154">
								<g id="art" transform="translate(-2060 -2503)">
									<g id="ellipse" transform="translate(2060 2503)" fill="none" stroke="#000" stroke-width="54">
									<circle cx="577" cy="577" r="577" stroke="none"/>
									<circle cx="577" cy="577" r="550" fill="none"/>
									</g>
									<text id="ART-2" data-name="ART" transform="translate(2637 3223)" font-size="408" font-family="Poppins-ExtraBold, Poppins" font-weight="800" letter-spacing="-0.065em"><tspan x="-385.56" y="0">ART</tspan></text>
								</g>
							</svg>
							earned
					</div>
					<div class="mt-8 mx-auto inline-block font-black text-2xl sm:text-8xl">
						124.98
						<button class="mt-11 mb-3 py-4 px-5 w-full flex justify-center items-center text-xl md:text-4xl border-4 border-black rounded-full font-bold bg-black text-white hover:bg-white hover:text-black focus:outline-none ">
							Claim
						</button>
					</div>
				</div>
			</div>

			<transition name="fade">
				<div v-if="modal" class="fixed bg-black bg-opacity-75 inset-0 flex items-center justify-center z-50">
					<div class="relative bg-white py-16 px-10 md:w-3/5 w-4/5 rounded">
						<h2 class="mb-2 text-5xl font-bold">
							Stake {{ currency }}
						</h2>
						<p class="font-bold text-xl">
							{{ currency }} available: <span class="font-black">2544,001353116453256941</span>
						</p>
						<div class="mt-10 relative">
							<input type="number" wire:model="search" v-model="amount" min="0" placeholder="0.0" class="py-5 px-5 w-full bg-gray-150 text-2xl font-bold rounded-lg focus:outline-none focus:ring-6 focus:ring-black infoPlaceholder">
							<div class="absolute inset-y-0 right-5 flex items-center">
								<button class="py-3 px-6 font-extraboldpy-3 bg-white rounded-lg font-bold uppercase hover:bg-black hover:text-white focus:outline-none">max</button>
							</div>
						</div>
						<div class="flex items-center ">
							<button @click="modalAction()" class="absolute right-10 top-8 text-gray-300 hover:text-gray-600 focus:outline-none">
								<svg class=" w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"/></svg>
							</button>
							<button @click="modalAction()"
								class="mr-2 flex-1 bg-orange-600 g-black font-bold px-4 mt-4 py-4 rounded-lg text-black bg-gray-150 border-4 border-gray-150 hover:border-black focus:outline-none">
								Close
							</button>
							<button
								class="ml-2 px-4 mt-4 py-5 rounded-lg flex-1 font-bold focus:outline-none"
								:class="[validAmount() ? false : 'bg-gray-700 text-gray-300 cursor-not-allowed', 'bg-black text-white']">
								Stake
							</button>
						</div>
					</div>
				</div>
			</transition>

		</section>
</template>

<script>
	export default {
		props: ['currency','apy','tvl','earn','stakeButton'],
		data() {
			return {
			modal: false,
			amount: '',
			amountValid: false,
			}
		},
		methods: {
			modalAction() {
				if (this.modal == false) {
					this.modal = true
				} else {
					this.modal = false
				}
			},
			validAmount() {
				if (this.amount > 0) {
					return true
				} else {
					return false
				}
			},
		}
	}
</script>
