<script>
  import "../app.css";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
</script>
<div id="page-container" class="flex flex-col mx-auto w-full min-w-[320px] min-h-screen bg-gray-100 dark:text-gray-100  dark:bg-gray-900">
   <Header />
<slot />
<Footer />
</div>