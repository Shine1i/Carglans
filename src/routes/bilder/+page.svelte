<script context="module">
	export const load = async ({ fetch, page, props }) => {
		return {
			props,
			//  cache for 10 minutes
			cache: { maxage: 60 }
		};
	};
</script>
<svelte:head>
  <title>Galleri - Carglans</title>
  <meta name="description" content="Våra senaste jobb" />
</svelte:head>
<!-- Heading -->
<div class="text-center">
	<div class="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">Galleri</div>
	<h2 class="text-3xl md:text-4xl font-extrabold mb-4">Våra senaste jobb</h2>
	<h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto">
		inspirenande och motiverande bilder av vad vi gör. Gärna <a
			href="https://www.facebook.com/people/Carglans-i-Karlstad-AB/100085366727420/"
			class="text-blue-600 hover:text-blue-400"
			>Följ oss
		</a>på Facebook för fler bilder.
	</h3>
</div>
<!-- END Heading -->

<div class="container lg:px-32 px-4 py-8 mx-auto items-center ">
	<div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
		<div
			class="w-full row-span-2 relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal1.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110"
			/>
		</div>
		<div
			class="w-full col-span-2 row-span-2  relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 "
		>
			<img
				loading="lazy"
				src="/images/gal3.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110"
			/>
		</div>
		<div
			class="w-full relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 "
		>
			<img
				src="/images/gal4.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110 "
			/>
		</div>
		<div
			class="w-full relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal5.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110 "
			/>
		</div>
		<div
			class="w-full col-span-2 row-span-2 relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal10.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110"
			/>
		</div>

		<div
			class="w-full col-span-2 relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal7.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110 "
			/>
		</div>
		<div
			class="w-full relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal8.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110 "
			/>
		</div>
		<div
			class="w-full relative group rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2"
		>
			<img
				loading="lazy"
				src="/images/gal9.webp"
				alt="Photo by Claudio Schwarz on Unsplash"
				class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 transform transition duration-300 ease-out group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110 "
			/>
		</div>
	</div>
</div>
