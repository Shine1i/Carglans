<script>
	import Image from 'sveltekit-image';
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
<!-- Product List Section: Categories Grid -->
<div class="">
	<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<a
				href="javascript:void(0)"
				class="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
			>
				<Image
				width={400}
					height={600}
					src="/images/gal1.webp"
					alt="Product Image"
					class="transform transition ease-out group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Electronics
					</div>
				</div>
			</a>
			<a
				href="javascript:void(0)"
				class="block group relative transition ease-out active:opacity-75 overflow-hidden"
			>
				<Image
					width={400}
					height={600}
					src="/images/gal2.webp"
					alt="Product Image"
					class="transform transition ease-out group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Computers
					</div>
				</div>
			</a>
			<a
				href="javascript:void(0)"
				class="block group relative transition ease-out active:opacity-75 overflow-hidden"
			>
				<Image
					width={100}
					height={100}
					src="/images/gal10.webp"
					alt="Product Image"
					class="transform transition ease-out group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Clothes
					</div>
				</div>
			</a>
			<a
				href="javascript:void(0)"
				class="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
			>
				<Image
					width={400}
					height={600}
					src="/images/gal4.webp"
					alt="Product Image"
					class="transform transition ease-out group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Smart Home
					</div>
				</div>
			</a>
			<a
				href="javascript:void(0)"
				class="block group relative transition ease-out active:opacity-75 overflow-hidden"
			>
				<Image
					width={400}
					height={600}
					src="/images/gal6.jpg"
					alt="Product Image"
					class="transform h-full w-full object-fill transition ease-out group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Shoes
					</div>
				</div>
			</a>
			<a
				href="javascript:void(0)"
				class="block group relative transition ease-out h-full active:opacity-75 overflow-hidden"
			>
				<Image
					width={400}
					height={600}
					src="/images/gal5.jpg"
					alt="Product Image"
					class="transform transition ease-out object-fill group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"
				/>
				<div class="p-4 flex items-center justify-center absolute inset-0">
					<div
						class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-rose-600"
					>
						Wearables
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
<!-- END Product List Section: Categories Grid -->
