<template>
  <section
    id="play"
    data-aos="fade-up"
    class="h-full w-full flex flex-col relative overflow-hidden py-12 md:py-28 md:-mt-16"
  >
    <div class="absolute top-0 bottom-0 left-0 right-0 min-h-full"></div>
    <div class="relative z-10 flex flex-row items-center">
      <div class="flex flex-col px-6 sm:mb-10 sm:px-32">
        <h2
          class="font-geom text-white text-4xl sm:text-5xl md:text-7xl font-bold md:mb-5"
        >
          My Projects
        </h2>
        <p class="text-white md:text-2xl">
          Latest work i've done
        </p>
      </div>
        <div class="hidden sm:block w-1/2 h-[1px] bg-gradient-to-r from-ci-purple"></div>
    </div>

    <ProjectItem v-for="(project, index) in projects" :key="index" :left="index % 2 === 0" v-bind="project" />
  </section>
</template>

<script setup>

const projects = [
  {
    tag: 'Website',
    title: 'Planet Reallife',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: 'https://i.imgur.com/LpH1xTC.jpeg'
  },
  {
    tag: 'Website',
    title: 'Datenleak',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: 'https://i.imgur.com/i9wbqNn.png'
  }
]

</script>

<style lang="scss" scoped></style>
