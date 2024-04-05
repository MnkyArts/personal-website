<template>
  <nav
    class="fixed w-full p-6 md:py-3 md:px-20 z-[100]"
    :class="{ 'bg-ci-blue bg-opacity-90 backdrop-blur-md': isScrolled() }"
  >
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div class="flex items-center justify-center gap-2">
        <img
          draggable="false"
          class="h-14 w-auto hidden md:block invert"
          src="/assets/img/logo.gif"
          alt="Logo"
        />
        <img
          draggable="false"
          class="h-12 w-auto md:hidden invert"
          src="/assets/img/logo.gif"
          alt="Your Company"
        />
        <span class="text-white font-geom font-semibold text-xl"
          >LIAM ROBINSON</span
        >
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-base font-geom">
          <li>
            <a
              href="#start"
              class="active text-white hover:border-b-2 hover:border-ci-purple hover:pb-1"
              >Start</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="text-white hover:border-b-2 hover:border-ci-purple hover:pb-1"
              >About</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="text-white hover:border-b-2 hover:border-ci-purple hover:pb-1"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="cta bg-ci-purple px-3 py-2 rounded text-white font-semibold hover:bg-transparent transition-all duration-300 ease-in-out border-2 border-ci-purple hover:border-ci-purple hover:text-ci-purple hover:bottom-2 hover:shadow-lg text-center"
              >CONTACT</a
            >
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-ci-blue fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill=""
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center justify-center p-4 border-b border-gray-700"
        >
          <img
            draggable="false"
            src="/assets/img/logo.gif"
            class="w-1/2 invert"
          />
        </span>

        <ul class="divide-y">
          <li class="border-b border-gray-700">
            <a
              href="#start"
              @click="isOpen = false"
              class="my-4 inline-block text-white"
              >Start</a
            >
          </li>
          <li class="border-b border-gray-700">
            <a
              href="#about"
              @click="isOpen = false"
              class="my-4 inline-block text-white"
              >About</a
            >
          </li>
          <li class="border-b border-gray-700">
            <a
              href="#projects"
              @click="isOpen = false"
              class="my-4 inline-block text-white"
              >Projects</a
            >
          </li>
          <li class="border-b border-gray-700">
            <a
              href="#contact"
              @click="isOpen = false"
              class="my-8 w-full text-center font-semibold cta inline-block bg-ci-purple hover:bg-blue-600 px-3 py-2 rounded text-white"
              >CONTACT</a
            >
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrollY: 0,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    isScrolled() {
      if (this.isOpen) return false;

      return this.scrollY > 100;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul a");

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });

    window.addEventListener("scroll", () => {
      this.scrollY = window.scrollY;

      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (id === null) id = "start";
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  },
};
</script>
<style>
nav {
  transition: all 0.3s;
}

.active {
  border-bottom: 2px solid #553adf;
  padding-bottom: 0.25rem;
}
</style>
