<template>
  <section
    id="contact"
    data-aos="fade-up"
    class="flex flex-col md:flex-row items-start gap-20 sm:gap-40 px-6 py-20 sm:px-32 bg-projects bg-cover"
  >
    <div class="w-full md:w-1/2">
      <h2
        class="font-geom text-white text-5xl sm:text-5xl md:text-7xl font-bold md:mb-5"
      >
        Get in Touch
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Thank you for considering me for your graphic and web design needs. If
        you’re interested in working together, please feel free to contact me.
        I’m dedicated to helping your business succeed and providing you with
        exceptional service.
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Looking forward to hearing from you soon!
      </p>
      <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
        <div class="flex gap-x-4">
          <dt class="flex-none">
            <span class="sr-only">Address</span>
            <BuildingOffice2Icon
              class="h-7 w-6 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd>Bilmer Str. 24<br />21337, Lüneburg</dd>
        </div>
        <div class="flex gap-x-4">
          <dt class="flex-none">
            <span class="sr-only">Email</span>
            <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
          </dt>
          <dd>
            <a class="hover:text-white" href="mailto:contact@liamrbsn.com"
              >contact@liamrbsn.com</a
            >
          </dd>
        </div>
      </dl>
    </div>

    <form action="#" method="POST" class="w-full md:w-1/2">
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-white"
              >First name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ci-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-white"
              >Last name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ci-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-white"
              >Email</label
            >
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ci-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-semibold leading-6 text-white"
              >Phone number</label
            >
            <div class="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ci-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-white"
              >Message</label
            >
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ci-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            class="rounded-md bg-ci-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ci-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ci-purple"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
