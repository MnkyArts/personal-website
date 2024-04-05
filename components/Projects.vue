<template>
  <section
    id="projects"
    data-aos="fade-up"
    class="h-full w-full flex flex-col relative overflow-hidden py-12 md:py-28 md:-mt-16"
  >
    <div class="absolute top-0 bottom-0 left-0 right-0 min-h-full"></div>
    <div class="relative z-10 flex flex-col md:flex-row items-center">
      <div class="flex flex-col px-6 sm:mb-10 sm:px-32">
        <h2
          class="font-geom text-white text-5xl sm:text-5xl md:text-7xl font-bold md:mb-5"
        >
          My Projects
        </h2>
        <p class="text-white md:text-2xl">Latest work i've done</p>
      </div>
      <div
        class="mt-5 md:mt-0 w-full md:w-1/2 h-[1px] bg-gradient-to-r from-ci-purple"
      ></div>
    </div>

    <ProjectItem
      v-for="(project, index) in projects"
      :key="index"
      :left="index % 2 === 0"
      v-bind="project"
    />

    <div
      class="mt-10 m-auto z-30 w-max"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <a
        href="#"
        class="bg-ci-purple px-5 py-2 rounded text-white font-semibold hover:bg-transparent transition-all duration-300 ease-in-out border-2 border-ci-purple hover:border-ci-purple hover:text-ci-purple hover:bottom-2 hover:shadow-lg text-center"
        >VIEW MORE</a
      >
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    tag: "Website",
    title: "Planet Reallife",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    img: "https://i.imgur.com/LpH1xTC.jpeg",
  },
  {
    tag: "Website",
    title: "Datenleak",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    img: "https://i.imgur.com/i9wbqNn.png",
  },
];
</script>

<style lang="scss" scoped></style>
