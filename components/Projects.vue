<template>
  <section
    id="play"
    data-aos="fade-up"
    class="h-full w-full flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-28 md:-mt-16"
  >
    <div
      class="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-hero min-h-full bg-top [background-position-x:center]"
      style="
        mask-image: linear-gradient(
          to top,
          transparent 5%,
          black 20%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to top,
          transparent 5%,
          black 20%,
          transparent 100%
        );
      "
    ></div>
    <div class="absolute top-0 bottom-0 left-0 right-0 min-h-full"></div>
    <div class="relative z-10">
      <div class="flex flex-col justify-center items-center mb-10">
        <h2
          class="font-geom text-white text-4xl sm:text-5xl md:text-7xl font-bold md:mb-5"
        >
          My Projects
        </h2>
        <p class="text-white md:text-2xl">
          Latest work i've done
        </p>
      </div>
    </div>
    <Example class="relative z-100 w-full" />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
