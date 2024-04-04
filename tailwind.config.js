/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "ci-blue": "#0f0f11",
        "ci-purple": "#553adf",
      },
      backgroundImage: {
        grid: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMicgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigxNSAyMyA0MiAvIDAuMDQpJz48cGF0aCBkPSdNMCAuNUgzMS41VjMyJy8+PC9zdmc+')",
        hero: "url('/assets/img/herobg.jpg')",
        phone: "url('/assets/img/hero-mobile.jpg')",
        about: "url('/assets/img/aboutbg.png')",
        play: "url('/assets/img/play.png')",
        news: "url('/assets/img/news.png')",
      },
      fontFamily: {
        carbon: ["Carbon"],
        geom: ["Geom Graphic"],
      },
    },
  },
  plugins: [],
};
