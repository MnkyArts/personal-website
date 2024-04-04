<template>
  <section id="start">
    <div
      data-aos="fade-in"
      class="h-[550px] md:h-screen flex items-end justify-center sm:items-center sm:justify-normal relative overflow-hidden opacity-0"
    >
      <div
        class="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-hero min-h-full bg-top [background-position-x:center]"
        style="
        mask-image: linear-gradient(black 75%, transparent 100%);
        -webkit-mask-image: linear-gradient(black 75%, transparent 100%);
      "
      ></div>
      <div
        data-aos="fade-up"
        class="flex justify-end items-end absolute z-10 h-screen md:bottom-0 md:right-0"
      >
        <img
          draggable="false"
          src="/assets/img/Liam.png"
          class="w-full sm:h-[90%]"
          alt="hero"
          style="
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
      "
        />
      </div>
      <div
        class="relative text-center sm:text-left mb-20 sm:px-32 z-20 sm:z-0 sm:mb-0"
      >
        <div class="mb-5" id="headers">
          <VueWriter class="font-geom text-ci-purple font-semibold sm:text-4xl m-0" :array="string" :eraseSpeed="50" :typeSpeed="100">
          </VueWriter>
          <h2
            class="font-geom text-white text-4xl sm:text-5xl md:text-9xl font-bold m-0"
          >
            LIAM ROBINSON
          </h2>
          <h1
            class="font-geom text-white sm:text-5xl m-0"
          >
            DEVELOPER AND GRAPHIC DESIGNER
          </h1>
          <div>
            <FontAwesomeIcon icon="github" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueWriter from "vue-writer";

const string = [
'HEY MY NAME IS', // English
'HEY MEIN NAME IST', // German
'HOLA, MI NOMBRE ES', // Spanish
'MERHABA, BENİM ADIM', // Turkish
'HELLO, MENO JME JE', // Czech
'SALUT, MON NOM EST', // French
'ΓΕΙΑ ΜΟΥ ΤΟ ΟΝΟΜΑ ΕΙΝΑΙ', // Greek
'HALLO, MIJN NAAM IS', // Dutch
'CIAO, IL MIO NOME È', // Italian
'こんにちは、私の名前は', // Japanese
'여보세요, 내 이름은', // Korean
'HEJ, MITT NAMN ÄR', // Swedish
'САЛАМ, ИМЯ МЕНЯ', // Russian
];
</script>

<style lang="scss" scoped></style>
