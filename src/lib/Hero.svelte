<!-- Hero -->
	<!-- Hero Section: Simple With Logo Dark -->
<script>
	import Image from 'sveltekit-image';
</script>
	<!-- Logo -->
	<div class="absolute inset-x-0 bottom-0 text-gray-700 text-opacity-50">
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150"
			><path
				d="M-0.84,34.03 C187.63,148.52 327.03,-4.44 499.72,40.95 L500.00,150.00 L0.00,150.00 Z"
			/></svg
		>
	</div>
	<!-- END Logo -->

	<!-- Hero Content -->
	<div class="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
		<div class="text-center">
			<a href="javascript:void(0)" class="inline-block mb-10 text-rose-600 hover:text-rose-400">
				<svg
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="hi-outline hi-cube-transparent inline-block w-12 h-12"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
					/></svg
				>
			</a>
			<h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-white" >
				Professionell Bilvård i Karlstad
			</h1>
			<h2 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto">
				Vi levererar en detaljerad och heltäckande bilvårdstjänst som garanterar en skinande ren och
				välskött bil.
			</h2>
		</div>
		<div
			class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16"
		>
			<a
				href="/kontakt"
				class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700"
			>
				<svg
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					class="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
					><path
						d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
					/></svg
				>
				<span>Boka Tid</span>
			</a>
		</div>
		<div class="relative mx-5 lg:mx-32 -mb-5 sm:mb-0 ">
			<div class="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-20 -m-4 transform rotate-2" />
			<div class="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-25 -m-4 transform -rotate-2" />

			<img-comparison-slider>
			<img   slot="first" src="/images/bmw.webp" class="" alt="bmw smutsig" />
				<img  slot="second" src="/images/bmw.png" alt="bmw ren"/>
			</img-comparison-slider>
		</div>
	</div>
	<!-- END Hero Content -->