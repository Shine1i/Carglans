<!-- Page Container -->
<svelte:head>
	<script defer src="https://unpkg.com/img-comparison-slider@7/dist/index.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/img-comparison-slider@7/dist/styles.css" />
</svelte:head>
<!-- Page Content -->
<main id="page-content" class="flex flex-auto flex-col max-w-full">
	<!-- Hero -->
	<!-- Hero Section: Simple With Logo Dark -->

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
			<h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-white">
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
				href="javascript:void(0)"
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
				<img slot="first" src="/images/bmw-clean.png" />
				<img slot="second" src="/images/bmw.png" class="" />
			</img-comparison-slider>
		</div>
	</div>
	<!-- END Hero Content -->

	<!-- END Hero Section: Simple With Logo Dark -->
	<!-- Section -->
	<div class="bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:bg-opacity-50">
		<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
			<!-- Features Section: Boxes with Icons Dark -->
			<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
          <!-- Heading -->
          <div class="text-center mb-10">
            <div class="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="car-repair-location" class="hi-solid hi-terminal inline-block w-10 h-10 fill-rose-400"><g data-name="Outline"><circle cx="32" cy="57" r="1"></circle><path d="M42.633 45.377a23 23 0 1 0-21.266 0C8.512 46.344 2 49.073 2 53.5 2 60.525 18.314 62 32 62s30-1.475 30-8.5c0-4.427-6.512-7.156-19.367-8.123ZM11 25a21 21 0 1 1 29.72 19.1 1.021 1.021 0 0 0-.292.2l-7.77 7.79a.993.993 0 0 1-1.266.046l-7.82-7.836a1.021 1.021 0 0 0-.292-.2A21.062 21.062 0 0 1 11 25Zm21 35c-17.271 0-28-2.491-28-6.5 0-3.277 7.166-5.553 19.667-6.267l1.943 1.946C19.329 49.532 11 50.555 11 53.5c0 3.328 10.618 4.2 16.948 4.429h.036a1 1 0 0 0 .035-2C18.445 55.588 14 54.214 13.107 53.5c.879-.7 5.19-2.036 14.413-2.408l2.5 2.51a2.964 2.964 0 0 0 1.956.732 3.093 3.093 0 0 0 2.043-.779l2.458-2.463c9.223.372 13.537 1.708 14.416 2.408-.9.714-5.337 2.088-14.91 2.43a1 1 0 0 0 .035 2h.036C42.383 57.7 53 56.828 53 53.5c0-2.944-8.328-3.968-14.609-4.321l1.942-1.946C52.834 47.947 60 50.223 60 53.5c0 4.009-10.729 6.5-28 6.5Z"></path><path d="M51 25a19 19 0 1 0-19 19 19.021 19.021 0 0 0 19-19Zm-36 0a17 17 0 1 1 17 17 17.019 17.019 0 0 1-17-17Z"></path><path d="M36.521 26c1.4.106 4.81.14 6.7-1.748a7.5 7.5 0 0 0 1.852-7.56 1.006 1.006 0 0 0-1.661-.409l-2.641 2.641-2.357-.471-.474-2.353 2.641-2.641a1.007 1.007 0 0 0-.409-1.662 7.507 7.507 0 0 0-7.561 1.853c-1.887 1.888-1.853 5.291-1.747 6.7l-4.5 4.5a18.463 18.463 0 0 1-4.8 3.463 4.961 4.961 0 1 0 7 7A18.422 18.422 0 0 1 32.02 30.5Zm-9.674 8.255a3.071 3.071 0 0 1-4.135-.1 3.005 3.005 0 0 1-.1-4.135 20.414 20.414 0 0 0 5.167-3.758l4.835-4.835a1 1 0 0 0 .286-.827c-.227-1.9.029-4.438 1.128-5.538a5.5 5.5 0 0 1 3.732-1.61l-1.61 1.61a1 1 0 0 0-.273.9l.707 3.536a1 1 0 0 0 .784.784l3.535.707a1 1 0 0 0 .9-.273l1.61-1.61a5.5 5.5 0 0 1-1.61 3.731c-1.1 1.1-3.644 1.356-5.537 1.129a.992.992 0 0 0-.827.285l-4.835 4.835a20.437 20.437 0 0 0-3.757 5.17Z"></path><circle cx="24.833" cy="32.032" r="1"></circle></g></svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
              Våra bilvårdstjänster
            </h2>
            <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300 lg:w-2/3 mx-auto">
              Håll din bil ren och fräsch med våra professionella tjänster
            </h3>
          </div>
          <!-- END Heading -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div
						class="p-5 bg-white bg-opacity-5 shadow-sm hover:bg-opacity-10 transition rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-rose-400 mb-5 hi-outline hi-cube inline-block w-12 h-12 fill-rose-400"
							data-name="Layer 3"
							viewBox="0 0 64 64"
							id="polisher-machine"
							><path
								d="M44,1A18.957,18.957,0,0,0,26.423,27.163l-9.266,9.266A7.306,7.306,0,0,0,15,41.583L5.535,51.05a4.956,4.956,0,0,0-1.459,4.46L1.293,58.292a1,1,0,0,0,0,1.414l3,3a1,1,0,0,0,1.414,0L8.49,59.924A5.192,5.192,0,0,0,9.242,60a5.278,5.278,0,0,0,3.706-1.535L22.417,49a7.306,7.306,0,0,0,5.154-2.154l9.266-9.266A18.992,18.992,0,1,0,44,1ZM32,20A12.076,12.076,0,1,1,42.515,31.9l1.921-1.921A9.994,9.994,0,1,0,34.022,19.564L32.1,21.485A12.038,12.038,0,0,1,32,20Zm5.843-1.429a5.364,5.364,0,0,1,7.586,7.586L41.5,30.086,33.914,22.5Zm-1.26-1.553a8,8,0,1,1,10.4,10.4,7.356,7.356,0,0,0-10.4-10.4Zm-4.083,6.9L40.086,31.5,33,38.586,25.414,31ZM31.586,40,29.5,42.086,21.914,34.5,24,32.414ZM5,60.586,3.414,59l1.423-1.422a5.261,5.261,0,0,0,1.586,1.586Zm6.535-3.535a3.243,3.243,0,0,1-4.585-4.587L15.4,44.013A7.391,7.391,0,0,0,19.987,48.6ZM26.157,45.429a5.364,5.364,0,0,1-7.586-7.586L20.5,35.914,28.086,43.5ZM44,37a16.881,16.881,0,0,1-5.621-.965l2.413-2.413A14.027,14.027,0,1,0,30.378,23.208l-2.413,2.413A16.995,16.995,0,1,1,44,37Z"
							/><path
								d="M41.5,62.356a9.833,9.833,0,0,0,7,0,10,10,0,1,0,0-18.712,9.833,9.833,0,0,0-7,0A9.9,9.9,0,0,0,38,43a10,10,0,0,0,0,20A9.9,9.9,0,0,0,41.5,62.356ZM52,45a8,8,0,1,1-.945,15.939,9.961,9.961,0,0,0,0-15.878A8,8,0,0,1,52,45Zm-7,0a8,8,0,1,1-.945,15.939,9.961,9.961,0,0,0,0-15.878A8,8,0,0,1,45,45ZM30,53a8,8,0,1,1,8,8A8.009,8.009,0,0,1,30,53Z"
							/><rect width="2" height="2" x="37" y="47" /><rect
								width="2"
								height="2"
								x="37"
								y="57"
							/><rect width="2" height="2" x="32" y="52" /><rect
								width="2"
								height="2"
								x="42"
								y="52"
							/><rect width="2" height="2" x="49" y="52" /><rect
								width="2"
								height="2"
								x="56"
								y="52"
							/></svg
						>
						<h4 class="text-lg font-bold text-white mb-2">1. Polering - Återställ bilens glans</h4>
						<p class="leading-relaxed text-white text-opacity-75">
							Vår poleringstjänst ger din bil en professionell finish genom att ta bort repor,
							ojämnheter och smuts från ytan. Vi använder en högkvalitativ polermaskin och
							polermedel för att återställa bilens ursprungliga glans och skydda lacken.
						</p>
					</div>
					<div
						class="p-5 bg-white bg-opacity-5 shadow-sm hover:bg-opacity-10 transition rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="100"
							height="100"
							class="text-rose-400 mb-5 hi-outline hi-cube inline-block w-12 h-12 fill-rose-400"
							viewBox="0 0 50 50"
						>
							<path
								d="M 21 2 C 19.35499 2 18 3.3549904 18 5 C 18 6.6450096 19.35499 8 21 8 C 22.64501 8 24 6.6450096 24 5 C 24 3.3549904 22.64501 2 21 2 z M 39 3 C 36.802706 3 35 4.8027056 35 7 C 35 9.1972944 36.802706 11 39 11 C 41.197294 11 43 9.1972944 43 7 C 43 4.8027056 41.197294 3 39 3 z M 21 4 C 21.564129 4 22 4.4358706 22 5 C 22 5.5641294 21.564129 6 21 6 C 20.435871 6 20 5.5641294 20 5 C 20 4.4358706 20.435871 4 21 4 z M 39 5 C 40.116414 5 41 5.8835859 41 7 C 41 8.1164141 40.116414 9 39 9 C 37.883586 9 37 8.1164141 37 7 C 37 5.8835859 37.883586 5 39 5 z M 12 9 C 9.2504209 9 7 11.250421 7 14 C 7 16.749579 9.2504209 19 12 19 C 14.749579 19 17 16.749579 17 14 C 17 11.250421 14.749579 9 12 9 z M 24 9 C 21.679991 9 19.598471 10.546271 19.03125 12.75 A 1.0004882 1.0004882 0 1 0 20.96875 13.25 C 21.289529 12.003729 22.592009 11 24 11 C 24.977659 11 25.824537 11.467713 26.378906 12.197266 A 1.0001 1.0001 0 0 0 28.107422 11.957031 C 28.326405 11.39694 28.856352 11 29.5 11 C 30.340812 11 31 11.659188 31 12.5 C 31 12.337333 30.998047 12.341051 30.998047 12.511719 A 1.0001 1.0001 0 0 0 32.601562 13.308594 C 32.862941 13.11088 33.163682 13 33.5 13 C 34.316718 13 34.955567 13.626638 34.990234 14.435547 A 1.0001 1.0001 0 0 0 36.744141 15.048828 C 37.302732 14.404241 38.093325 14 39 14 C 40.668484 14 42 15.331516 42 17 C 42 17.267096 41.94847 17.543118 41.859375 17.845703 A 1.0001 1.0001 0 0 0 42.544922 19.089844 C 43.032381 19.229022 43.434895 19.538478 43.693359 19.955078 A 1.0001 1.0001 0 0 0 43.730469 20.007812 C 43.952651 20.318469 44.080078 20.678633 44.080078 21.080078 C 44.080078 21.249628 44.046939 21.428865 43.980469 21.640625 A 1.0001 1.0001 0 0 0 44.363281 22.761719 C 45.353085 23.451249 46 24.582622 46 25.880859 C 46 27.014908 45.499316 28.010675 44.703125 28.714844 A 1.0001 1.0001 0 0 0 44.789062 30.28125 C 45.522323 30.798104 46 31.633686 46 32.599609 C 46 33.641478 45.441084 34.530035 44.603516 35.029297 A 1.0001 1.0001 0 0 0 44.353516 36.535156 C 44.782555 37.040486 45.039063 37.662991 45.039062 38.359375 C 45.039062 39.072153 44.781287 39.704064 44.347656 40.199219 A 1.0001 1.0001 0 1 0 45.851562 41.517578 C 46.587933 40.676733 47.039064 39.566597 47.039062 38.359375 C 47.039062 37.492048 46.745784 36.722657 46.345703 36.025391 C 47.295529 35.145007 48 33.995296 48 32.599609 C 48 31.339776 47.415731 30.27873 46.623047 29.417969 C 47.419864 28.430236 48 27.251511 48 25.880859 C 48 24.173062 47.163858 22.719461 45.984375 21.658203 C 46.018955 21.464978 46.080078 21.296591 46.080078 21.080078 C 46.080078 20.251661 45.803448 19.487376 45.365234 18.867188 C 45.008534 18.306504 44.489318 17.894197 43.910156 17.572266 C 43.937705 17.377359 44 17.211362 44 17 C 44 14.250484 41.749516 12 39 12 C 38.060806 12 37.233779 12.328892 36.486328 12.783203 C 35.881416 11.736183 34.788499 11 33.5 11 C 33.214865 11 33.010655 11.18993 32.746094 11.255859 C 32.23841 9.9458509 30.980994 9 29.5 9 C 28.491792 9 27.68597 9.5241021 27.046875 10.212891 C 26.192461 9.5184828 25.18711 9 24 9 z M 12 11 C 13.668699 11 15 12.331301 15 14 C 15 15.668699 13.668699 17 12 17 C 10.331301 17 9 15.668699 9 14 C 9 12.331301 10.331301 11 12 11 z M 19 16 A 1.0001 1.0001 0 1 0 19 18 L 32.927734 18 C 34.09083 18 35.129591 18.702948 35.5625 19.783203 L 35.564453 19.785156 L 38.183594 27.175781 A 1.0001 1.0001 0 0 0 38.419922 27.548828 L 39.613281 28.740234 C 40.506029 29.632982 41.007812 30.843476 41.007812 32.105469 L 41.007812 32.216797 L 34.919922 34.080078 C 34.919922 35.141078 35.778844 36 36.839844 36 L 41.007812 36 L 41.007812 46 L 36.007812 46 L 36.007812 43.537109 A 1.0001 1.0001 0 0 0 34.890625 42.542969 C 32.158203 42.862418 28.998498 43 24.046875 43 C 21.218128 43 18.952979 43.034883 17.066406 42.908203 A 1.0002538 1.0002538 0 1 0 16.933594 44.904297 C 18.949021 45.039626 21.235622 45 24.046875 45 C 28.532994 45 31.365719 44.840369 34.007812 44.576172 L 34.007812 46 C 34.007812 47.093063 34.91475 48 36.007812 48 L 41.007812 48 C 42.100876 48 43.007812 47.093063 43.007812 46 L 43.007812 32.105469 C 43.007812 30.565298 42.478013 29.080747 41.525391 27.888672 L 43.394531 27.089844 A 1.0001 1.0001 0 0 0 43.994141 26.068359 C 43.994141 26.068359 43.936931 25.409708 43.644531 24.703125 C 43.498331 24.349834 43.29089 23.961545 42.935547 23.619141 C 42.58021 23.276799 42.031391 23 41.425781 23 C 41.139115 23 40.709452 22.973556 40.326172 23.003906 C 39.724204 23.050133 39.35228 23.265675 38.992188 23.466797 L 37.435547 19.080078 A 1.0001 1.0001 0 0 0 37.421875 19.042969 C 36.688136 17.206739 34.903679 16 32.927734 16 L 19 16 z M 25.052734 19.001953 C 24.842323 18.997302 24.628058 19.01425 24.414062 19.056641 A 1.0001 1.0001 0 0 0 24.412109 19.056641 L 19.703125 20 L 9.3730469 20 C 6.9372965 20 4.8020296 21.666157 4.2109375 24.029297 L 2.7070312 30.046875 A 1.0001 1.0001 0 0 0 2.7070312 30.048828 C 2.2383709 31.927598 2 33.856984 2 35.792969 L 2 44.5 C 2 46.293543 3.3935255 47.737672 5.140625 47.927734 A 1.0001 1.0001 0 0 0 5.5 48 A 1.0001 1.0001 0 0 0 5.8613281 47.925781 C 6.6941476 47.834609 7.440747 47.453277 8 46.890625 C 8.5597021 47.454316 9.3067776 47.837022 10.140625 47.927734 A 1.0001 1.0001 0 0 0 10.5 48 A 1.0001 1.0001 0 0 0 10.861328 47.925781 C 12.606983 47.734709 14 46.293312 14 44.5 L 14 33.119141 L 15.742188 26 L 17 26 L 20 26 A 1.0001 1.0001 0 0 0 20.099609 25.994141 L 20.490234 25.955078 A 1.0001 1.0001 0 0 0 20.585938 25.941406 L 25.474609 24.962891 C 26.970783 24.663984 28.143012 23.311175 27.988281 21.714844 C 27.838367 20.16917 26.525613 19.03451 25.052734 19.001953 z M 24.802734 21.019531 C 25.392769 20.902652 25.935425 21.282687 25.996094 21.908203 C 26.043364 22.395871 25.63786 22.890896 25.082031 23.001953 L 20.242188 23.970703 L 19.949219 24 L 17 24 L 14.957031 24 A 1.0001 1.0001 0 0 0 13.986328 24.761719 L 12.046875 32.689453 A 1.0001 1.0001 0 0 0 12.009766 32.849609 A 1.0001 1.0001 0 0 0 12 33.158203 L 12 44.5 C 12 45.340812 11.340812 46 10.5 46 C 9.659671 46 9 45.33942 9 44.5 L 9 36 A 1.0001 1.0001 0 1 0 7 36 L 7 44.5 C 7 45.33942 6.340329 46 5.5 46 C 4.659671 46 4 45.33942 4 44.5 L 4 35.792969 C 4 34.021602 4.2174564 32.25379 4.6464844 30.533203 L 4.6464844 30.53125 L 6.1523438 24.515625 L 6.1523438 24.513672 C 6.5238314 23.031809 7.8453766 22 9.3730469 22 L 19.802734 22 A 1.0001 1.0001 0 0 0 19.998047 21.980469 L 24.802734 21.019531 z M 40.484375 24.996094 C 40.505095 24.994494 41.072448 25 41.425781 25 C 41.497171 25 41.481921 24.994104 41.548828 25.058594 C 41.615738 25.123064 41.718576 25.277588 41.796875 25.466797 C 41.819715 25.521997 41.809555 25.528247 41.828125 25.583984 L 40.048828 26.347656 L 39.994141 26.292969 L 39.669922 25.378906 C 39.733973 25.341984 39.728772 25.339804 39.800781 25.300781 C 40.125543 25.12479 40.602158 24.988936 40.480469 24.998047 A 1.0001 1.0001 0 0 0 40.484375 24.996094 z M 17 33 A 1.0001 1.0001 0 0 0 16.09375 34.423828 L 17.96875 38.423828 A 1.0001 1.0001 0 0 0 18.447266 38.904297 C 18.447266 38.904297 20.801012 40 24.5 40 C 28.198988 40 30.552734 38.904297 30.552734 38.904297 A 1.0001 1.0001 0 0 0 31.03125 38.423828 L 32.90625 34.423828 A 1.0001 1.0001 0 0 0 32 33 L 17 33 z M 18.574219 35 L 30.425781 35 L 29.396484 37.195312 C 29.030535 37.353932 27.450634 38 24.5 38 C 21.549366 38 19.969465 37.353932 19.603516 37.195312 L 18.574219 35 z"
							/>
						</svg>
						<h4 class="text-lg font-bold text-white mb-2">Rekond - Fräscha upp din bil</h4>
						<p class="leading-relaxed text-white text-opacity-75">
							Vår rekondtjänst ger din bil en grundlig rengöring, både invändigt och utvändigt. Vi
							tvättar, torkar och polerar bilen till perfektion, rengör fönster och dörrar samt
							dammsuger och rengör alla ytor invändigt. Du kommer att känna dig som om du precis
							köpt en ny bil!
						</p>
					</div>
					<div
						class="p-5 bg-white bg-opacity-5 shadow-sm hover:bg-opacity-10 transition rounded-lg sm:col-span-2 lg:col-span-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="100"
							height="100"
							class="text-rose-400 mb-5 hi-outline hi-cube inline-block w-12 h-12 fill-rose-400"
							viewBox="0 0 50 50"
						>
							<path
								d="M 19.441406 1 C 18.153771 1 17.002646 1.8304098 16.595703 3.0527344 L 15.927734 5.0527344 C 15.290522 6.9673297 16.757399 9 18.775391 9 L 20 9 L 20 12 L 17.480469 12 C 14.795974 12 12.422021 13.775887 11.625 16.359375 L 11.625 16.361328 L 9.3046875 23.894531 C 8.1843321 27.532415 7.7621079 29.526442 8.1425781 33.390625 L 8.4042969 36.050781 C 8.1542036 36.021003 7.9027146 36 7.6484375 36 C 5.4671308 36 3.7349509 37.933275 4.0332031 40.085938 L 4.4589844 43.142578 C 4.6203296 44.301203 5.3435291 45.307724 6.3867188 45.84375 L 11.734375 48.591797 C 12.255117 48.859725 12.833043 49 13.419922 49 L 36.580078 49 C 37.166957 49 37.745035 48.860355 38.265625 48.591797 L 43.611328 45.84375 C 44.654518 45.307724 45.37967 44.301203 45.541016 43.142578 L 45.964844 40.085938 C 46.264507 37.933059 44.53287 36 42.351562 36 C 42.097285 36 41.845855 36.021036 41.595703 36.050781 L 41.855469 33.390625 C 42.235939 29.526442 41.813719 27.532415 40.693359 23.894531 L 38.373047 16.361328 C 37.57811 13.776891 35.202073 12 32.517578 12 L 30 12 L 30 9 L 31.224609 9 C 33.242601 9 34.709478 6.9673297 34.072266 5.0527344 L 33.404297 3.0527344 L 33.404297 3.0507812 C 32.997124 1.8300059 31.84568 1 30.558594 1 L 19.441406 1 z M 19.441406 3 L 30.558594 3 C 30.992958 3 31.370524 3.2712213 31.507812 3.6835938 L 32.173828 5.6835938 C 32.398615 6.3589983 31.936618 7 31.224609 7 L 18.775391 7 C 18.063382 7 17.601385 6.3589984 17.826172 5.6835938 L 18.492188 3.6835938 C 18.629245 3.2719184 19.007042 3 19.441406 3 z M 22 9 L 28 9 L 28 12 L 22 12 L 22 9 z M 17.480469 14 L 32.517578 14 C 34.323083 14 35.917875 15.183656 36.460938 16.949219 L 38.78125 24.482422 C 39.886895 28.072538 40.226764 29.523495 39.865234 33.195312 L 39.525391 36.658203 C 39.011374 36.912017 38.531035 37.23601 38.099609 37.625 L 37.601562 38.072266 C 37.199376 38.432976 36.653527 38.579152 36.125 38.460938 L 36.123047 38.460938 C 33.799875 37.942478 29.660297 36.916016 25.001953 36.916016 C 20.343462 36.916016 16.201352 37.94363 13.878906 38.460938 C 13.348156 38.579509 12.80071 38.434448 12.400391 38.074219 L 11.900391 37.623047 L 11.900391 37.625 C 11.468007 37.23591 10.987205 36.912158 10.472656 36.658203 L 10.132812 33.195312 C 9.7712832 29.523495 10.111152 28.072538 11.216797 24.482422 L 13.537109 16.949219 C 14.082088 15.18266 15.674964 14 17.480469 14 z M 25.007812 17 C 22.337225 16.9969 19.607269 17.544212 18.207031 19.369141 C 17.914693 19.750057 17.805838 20.106212 17.667969 20.568359 C 17.530099 21.030507 17.404389 21.579339 17.283203 22.205078 C 17.040832 23.456555 16.82031 25.011917 16.630859 26.667969 C 16.251958 29.980072 16 33.666737 16 36 L 18 36 C 18 33.814263 18.248042 30.140381 18.619141 26.896484 C 18.80469 25.274536 19.021668 23.752882 19.248047 22.583984 C 19.361236 21.999536 19.477713 21.5034 19.585938 21.140625 C 19.694161 20.77785 19.835307 20.530771 19.792969 20.585938 C 20.423731 19.763866 22.687447 18.997328 25.005859 19 C 27.324272 19.0027 29.586931 19.77762 30.207031 20.585938 C 30.164691 20.530767 30.305842 20.77785 30.414062 21.140625 C 30.522288 21.5034 30.638764 21.999536 30.751953 22.583984 C 30.978332 23.752882 31.19531 25.274536 31.380859 26.896484 C 31.751958 30.140381 32 33.814263 32 36 L 34 36 C 34 33.666737 33.748042 29.980072 33.369141 26.667969 C 33.17969 25.011917 32.959168 23.456555 32.716797 22.205078 C 32.595611 21.579339 32.469901 21.030507 32.332031 20.568359 C 32.194162 20.106212 32.085307 19.750057 31.792969 19.369141 C 30.400069 17.553458 27.6784 17.003078 25.007812 17 z M 7.6484375 38 C 8.730273 38 9.7701061 38.398336 10.5625 39.111328 L 10.564453 39.111328 L 11.0625 39.560547 C 11.607217 40.050707 12.289787 40.28597 13 40.388672 L 13 46.898438 C 12.883198 46.867477 12.758159 46.869893 12.650391 46.814453 L 12.648438 46.814453 L 7.3007812 44.066406 C 6.8259709 43.822433 6.5101079 43.374561 6.4394531 42.867188 L 6.0136719 39.810547 C 5.8799241 38.84521 6.6217442 38 7.6484375 38 z M 42.351562 38 C 43.378256 38 44.118712 38.845424 43.984375 39.810547 L 43.558594 42.867188 C 43.487934 43.374561 43.172076 43.822433 42.697266 44.066406 L 37.349609 46.814453 L 37.347656 46.814453 C 37.241037 46.869453 37.11617 46.867558 37 46.898438 L 37 40.386719 C 37.710597 40.284113 38.392207 40.049606 38.9375 39.560547 L 39.439453 39.111328 C 40.229365 38.39916 41.269728 38 42.351562 38 z M 25.001953 38.916016 C 29.03929 38.916016 32.592299 39.728218 35 40.271484 L 35 47 L 15 47 L 15 40.271484 C 17.408247 39.728771 20.96462 38.916016 25.001953 38.916016 z"
							/>
						</svg>
						<h4 class="text-lg font-bold text-white mb-2">
							Inredningsrengöring - Ta bort smuts från bilens interiör
						</h4>
						<p class="leading-relaxed text-white text-opacity-75">
							Vår inredningsrengöringstjänst tar bort smuts och fläckar från bilens säten, mattor,
							instrumentbräda och andra ytor. Vi använder specialrengöringsmedel och tekniker för
							att ta bort svåra fläckar och återställa bilens interiör till ett fräscht och rent
							tillstånd.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- END Features Section: Boxes with Icons Dark -->
	</div>
	<!-- END Section -->

	<!-- Section -->
	<div class="bg-white dark:text-gray-100 dark:bg-gray-900">
		<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
			<div
				class="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-32 dark:bg-gray-800 dark:border-gray-700"
			>
				Section Content
			</div>
		</div>
	</div>
	<!-- END Section -->

	<!-- Section -->
	<div class="bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:bg-opacity-50">
		<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
			<div
				class="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-32 dark:bg-gray-800 dark:border-gray-700"
			>
				Section Content
			</div>
		</div>
	</div>
	<!-- END Section -->

	<!-- Footer -->
	<div class="dark">
		<footer id="page-footer" class="bg-white dark:text-gray-100 dark:bg-gray-900">
			<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
					<div class="space-y-6">
						<h4
							class="text-sm uppercase font-semibold tracking-wider text-gray-400 dark:text-gray-500"
						>
							Products
						</h4>
						<nav class="flex flex-col space-y-3">
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Solutions
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Features
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Pricing Plans
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Analytics
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Support Center
							</a>
						</nav>
					</div>
					<div class="space-y-6">
						<h4
							class="text-sm uppercase font-semibold tracking-wider text-gray-400 dark:text-gray-500"
						>
							Legal
						</h4>
						<nav class="flex flex-col space-y-3">
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Team
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Terms of Service
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Privacy Policy
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Cookies
							</a>
							<a
								href="javascript:void(0)"
								class="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
							>
								Refunds
							</a>
						</nav>
					</div>
					<div class="space-y-6">
						<h4
							class="text-sm uppercase font-semibold tracking-wider text-gray-400 dark:text-gray-500"
						>
							Company Inc
						</h4>
						<div class="text-sm leading-relaxed">
							1080 Sunshine Valley, Suite 2563<br />
							San Francisco, CA 85214<br />
							<abbr title="Phone">P:</abbr> (123) 456-7890
						</div>
						<h4
							class="text-sm uppercase font-semibold tracking-wider text-gray-400 dark:text-gray-500"
						>
							Join Our Newsletter
						</h4>
						<form
							onsubmit="return false;"
							class="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2"
						>
							<div class="sm:grow">
								<label for="email" class="sr-only">Email</label>
								<input
									class="block border placeholder-gray-400 py-2 leading-5 text-sm w-full rounded border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-pink-500"
									type="email"
									id="email"
									name="email"
									placeholder="Email"
								/>
							</div>
							<button
								type="submit"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-pink-700 bg-pink-700 text-white hover:text-white hover:bg-pink-800 hover:border-pink-800 focus:ring focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-700 active:border-pink-700"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<hr class="my-10 dark:border-gray-800" />
				<div
					class="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm"
				>
					<nav class="space-x-4">
						<a href="javascript:void(0)" class="text-gray-400 hover:text-[#1da1f2]">
							<svg
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-twitter inline-block w-5 h-5"
								><path
									d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
								/></svg
							>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-[#1877f2]">
							<svg
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-facebook inline-block w-5 h-5"
								><path
									d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"
								/></svg
							>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-[#405de6]">
							<svg
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-instagram inline-block w-5 h-5"
								><path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
								/></svg
							>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-[#333]">
							<svg
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-github inline-block w-5 h-5"
								><path
									d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
								/></svg
							>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-[#ea4c89]">
							<svg
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-github inline-block w-5 h-5"
								><path
									d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z"
								/></svg
							>
						</a>
					</nav>
					<div class="text-gray-500">
						<span class="font-medium">Company Inc</span> ©
					</div>
				</div>
			</div>
		</footer>
	</div>
	<!-- END Footer -->
</main>

<!-- END Page Content -->
<style>
</style>
