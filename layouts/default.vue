<template>
  <div class="bg-ci-blue">
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Liam Robinson | Designer & Developer",
  ogTitle: "Liam Robinson | Designer & Developer",
  description:
    "Liam Robinson: German designer crafting clean, modern web and graphic designs from Lüneburg. Expert in design and web technologies.",
  ogDescription:
    "Liam Robinson: German designer crafting clean, modern web and graphic designs from Lüneburg. Expert in design and web technologies.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

::selection {
  background: #553adf;
}

body::-webkit-scrollbar {
  background-color: #0b0f19;
  width: 0.3125rem;
}

body::-webkit-scrollbar-thumb {
  background-color: #202735;
  border-radius: 1rem;
  transition: background-color ease 0.2s;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #3d485e;
}

.blog-content p {
  padding-bottom: 1.5rem;
}
</style>
