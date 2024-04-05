<template>
  <section
    id="about"
    data-aos="fade-up"
    class="h-full flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-28 px-5"
  >
    <div
      class="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-about min-h-full bg-center"
      style="
        mask-image: linear-gradient(
          to top,
          transparent 0%,
          black 20%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to top,
          transparent 0%,
          black 20%,
          transparent 100%
        );
      "
    ></div>
    <div data-aos="fade-right" class="absolute top-16 -right-5 lg:right-40">
      <img
        draggable="false"
        src="/img/computer.png"
        alt="Computer"
        class="about-img object-cover h-32 md:h-80 saturate-0 opacity-50 mix-blend-screen"
        :class="{ hover: hoverR }"
        style="
          mask-image: linear-gradient(to top, transparent, black);
          -webkit-mask-image: linear-gradient(to top, transparent, black);
        "
      />
    </div>
    <div data-aos="fade-left" class="absolute top-16 left-10 lg:left-64">
      <img
        draggable="false"
        src="/img/mailbox.png"
        alt="Mailbox"
        class="about-img object-cover h-32 md:h-80 saturate-0 opacity-50 mix-blend-screen"
        :class="{ hover: hoverL }"
        style="
          mask-image: linear-gradient(to top, transparent, black);
          -webkit-mask-image: linear-gradient(to top, transparent, black);
        "
      />
    </div>
    <div class="relative z-10">
      <div
        class="flex justify-center items-center text-center text-white flex-col h-auto gap-5 md:gap-10 mt-32 md:mt-0"
      >
        <p class="md:w-[45rem] font-semibold drop-shadow-[2px_4px_15px_black]">
          I'm <span class="text-ci-purple">Liam Robinson</span>, a graphic
          designer and web developer from Lüneburg, Germany, with 8+ years of
          experience. I excel in logo, web, and print design, offering effective
          and efficient solutions for your design needs. In my free time, I work
          on various projects using Node.js, Nuxt, and Next.js. Occasionally,
          you can also watch me on Twitch to see what I'm currently working on.
        </p>
        <div
          class="w-full flex flex-col justify-center items-center md:flex-row gap-3 md:gap-10"
        >
          <a
            href="#contact"
            @mouseover="hoverL = true"
            @mouseleave="hoverL = false"
            class="w-full sm:w-auto bg-ci-blue group flex items-center justify-center px-6 py-3 text-sm rounded text-white font-semibold transition-all duration-300 ease-in-out border-[1px] border-gray-700 hover:bg-ci-purple hover:border-ci-purple hover:shadow-lg text-center"
            ><svg
              data-v-adc1ba32=""
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-1.5 h-4 fill-ci-purple group-hover:fill-white transition-all duration-300 ease-in-out mr-4"
            >
              <path
                d="M0 8C0 7.66985 0.136025 7.35428 0.376052 7.12759L7.57605 0.327588C8.05787 -0.127467 8.81736 -0.105767 9.27241 0.376055C9.72747 0.857877 9.70577 1.61736 9.22395 2.07242L2.94768 8L9.22395 13.9276C9.70577 14.3826 9.72747 15.1421 9.27241 15.6239C8.81736 16.1058 8.05787 16.1275 7.57605 15.6724L0.376052 8.87242C0.136025 8.64572 0 8.33015 0 8Z"
              ></path>
            </svg>
            <p>Get in Touch</p></a
          >
          <a
            href="#projects"
            class="w-full sm:w-auto bg-ci-blue group flex items-center justify-center px-6 py-3 text-sm rounded text-white font-semibold transition-all duration-300 ease-in-out border-[1px] border-gray-700 hover:bg-ci-purple hover:border-ci-purple hover:shadow-lg text-center"
            @mouseover="hoverR = true"
            @mouseleave="hoverR = false"
          >
            <p>View my Projects</p>
            <svg
              data-v-adc1ba32=""
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-1.5 h-4 fill-ci-purple group-hover:fill-white transition-all duration-300 ease-in-out ml-4 -scale-100"
            >
              <path
                d="M0 8C0 7.66985 0.136025 7.35428 0.376052 7.12759L7.57605 0.327588C8.05787 -0.127467 8.81736 -0.105767 9.27241 0.376055C9.72747 0.857877 9.70577 1.61736 9.22395 2.07242L2.94768 8L9.22395 13.9276C9.70577 14.3826 9.72747 15.1421 9.27241 15.6239C8.81736 16.1058 8.05787 16.1275 7.57605 15.6724L0.376052 8.87242C0.136025 8.64572 0 8.33015 0 8Z"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hoverL = ref(false);
const hoverR = ref(false);
</script>

<style scoped>
.about-img {
  transition: all 0.3s ease-in-out;
}
.hover {
  filter: saturate(1) !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
