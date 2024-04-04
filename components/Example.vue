<template>
    <div class="overflow-hidden py-16 sm:py-16">
      <div
      class="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-projects min-h-full bg-top [background-position-x:center]"
      style="
        mask-image: linear-gradient(
          to top,
          transparent 0%,
          black 50%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to top,
          transparent 0%,
          black 50%,
          transparent 100%
        );
      "
    ></div>
      <div class="max-w-[110rem] px-6 lg:px-8 relative z-20">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="w-full flex items-center justify-center lg:ml-auto lg:pl-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-ci-purple">Website</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Planet Reallife</p>
              <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </div>
          <div class="flex items-start justify-end lg:order-first">
            <img src="https://i.imgur.com/LpH1xTC.jpeg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[70rem]" width="1920" height="1080" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>