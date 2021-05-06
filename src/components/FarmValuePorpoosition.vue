<template>
		<section class="md:mt-8 px-4">
		<div class="p-8 md:p-16 mx-auto md:container lg:flex lg:items-center lg:max-w-screen-lg relative rounded-3xl bg-afa-bluePastel ">
			<div class="lg:w-5/12 pr-4">
				<h1>	
					<span class="text-4xl font-bold">
							Farming week {{ message }}
					</span>
				</h1>
					<p class="mt-5 md:mb-0.5 text-lg font-medium">
							Stake <span class="font-bold">BUSD, CAKE, BNB</span> to earn <span class="font-black">ART token</span>, our gouvernance token.
					</p>
				</div>

			<div class="lg:w-7/12 pt-5 lg:pt-0 flex">
				<div class="-ml-1 pl-1 sm:-ml-2 sm:pl-2 lg:sm:-ml-4 md:pl-4 lg:pl-4 w-1/4 flex-shrink-0">
					<div class="p-1 py-5 md:py-8 bg-afa-blueSrong rounded-2xl">
						<div id="days" class="text-white font-black sm:text-5xl md:text-6xl flex justify-center items-center">
							{{ days }}
						</div>
						<div class="sm:mt-1 uppercase text-xs sm:text-base text-white text-center font-black opacity-50">
							days
						</div>
					</div>
				</div>
				<div class="pl-1 sm:pl-2 md:pl-4 lg:pl-4 w-1/4 flex-shrink-0">
					<div class="p-1 py-5 md:py-8 bg-afa-blueSrong rounded-2xl">
						<div id="days" class="text-white font-black sm:text-5xl md:text-6xl flex justify-center items-center">
							{{ hours }}
						</div>
						<div class="sm:mt-1 uppercase text-xs sm:text-base text-white text-center font-black opacity-50">
							hours
						</div>
					</div>
				</div>
				<div class="pl-1 sm:pl-2 md:pl-4 lg:pl-4 w-1/4 flex-shrink-0">
					<div class="p-1 py-5 md:py-8 bg-afa-blueSrong rounded-2xl">
						<div id="days" class="text-white font-black sm:text-5xl md:text-6xl flex justify-center items-center">
							{{ minutes }}
						</div>
						<div class="sm:mt-1 uppercase text-xs sm:text-base text-white text-center font-black opacity-50">
							min
						</div>
					</div>
				</div>
				<div class="pl-1 sm:pl-2 md:pl-4 lg:pl-4 w-1/4 flex-shrink-0">
					<div class="p-1 py-5 md:py-8 bg-afa-blueSrong rounded-2xl">
						<div id="days" class="text-white font-black sm:text-5xl md:text-6xl flex justify-center items-center">
							{{ seconds }}
						</div>
						<div class="sm:mt-1 uppercase text-xs sm:text-base text-white text-center font-black opacity-50">
							sec
						</div>
					</div>
				</div>
				
			</div>        
		</div>    
	</section>
</template>

<script>
	export default {
		props: ['starttime','endtime','trans'],
		data() {
			return {
				timer:"",
				wordString: {},
				start: "",
				end: "",
				interval: "",
				days:"0",
				minutes:"0",
				hours:"0",
				seconds:"0",
				message:"",
				statusType:"",
				statusText: "",
			}
		},
		created: function () {
					this.wordString = JSON.parse(this.trans);
			},
		mounted(){
			this.start = new Date(this.starttime).getTime();
			this.end = new Date(this.endtime).getTime();
			// Update the count down every 1 second
			this.timerCount(this.start,this.end);
			this.interval = setInterval(() => {
					this.timerCount(this.start,this.end);
			}, 1000);
		},
		methods: {
			timerCount: function(start,end){
					// Get todays date and time
					var now = new Date().getTime();

					// Find the distance between now an the count down date
					var distance = start - now;
					var passTime =  end - now;

					if(distance < 0 && passTime < 0){
							this.message = this.wordString.expired;
							this.statusType = "expired";
							this.statusText = this.wordString.status.expired;
							clearInterval(this.interval);
							return;

					}else if(distance < 0 && passTime > 0){
							this.calcTime(passTime);
							this.message = this.wordString.running;
							this.statusType = "running";
							this.statusText = this.wordString.status.running;

					} else if( distance > 0 && passTime > 0 ){
							this.calcTime(distance); 
							this.message = this.wordString.upcoming;
							this.statusType = "upcoming";
							this.statusText = this.wordString.status.upcoming;
					}
			},
			calcTime: function(dist){
				// Time calculations for days, hours, minutes and seconds
					this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
					this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
					this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
			}
		}
	}
</script>