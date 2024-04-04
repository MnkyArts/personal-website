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
    "Liam Robinson is a German graphic and web designer from Lüneburg. Liam’s work is characterized by its clean and modern aesthetic. He has a deep understanding of both the design process and the latest web technologies, which allows him to create beautiful and user-friendly designs. Liam is a true team player and always puts the needs of his clients first. He is also a highly skilled communicator, which makes him an invaluable asset to any project.",
  ogDescription:
    "Liam Robinson is a German graphic and web designer from Lüneburg. Liam’s work is characterized by its clean and modern aesthetic. He has a deep understanding of both the design process and the latest web technologies, which allows him to create beautiful and user-friendly designs. Liam is a true team player and always puts the needs of his clients first. He is also a highly skilled communicator, which makes him an invaluable asset to any project.",
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
