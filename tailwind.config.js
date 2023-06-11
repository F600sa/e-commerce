/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        ButtonColors: "#1e2832",
        greyColor: "#f4f4f5",
        whiteColor: "#FFFFFF",
        orangeColor: "#ff6f61",
      },
      fontFamily: {
        h2Roboto: "Roboto-Medium",
        h3FontOpen: "OpenSans-Regular",
        h6FontOpen: "OpenSans-SemiBold",
        pRoboto: "Roboto-Italic",
        pOpenSans: "OpenSans-Italic",
      },
      backgroundImage: {
        img1: "url('/public/assets/images/01.png')",
        img2: "url('/public/assets/images/02.png')",
        img3: "url('/public/assets/images/03.png')",
        img4: "url('/public/assets/images/18.png')",
        img5: "url('/public/assets/images/19.png')",
        zaraLogo: "url('/public/assets/images/1024px-Zara_Logo 1.png')",
        zaraLogo2: "url('/public/assets/images/1024px-Zara_Logo 2.png')",
        barand1: "url('/public/assets/images/brand1.png')",
        barand2: "url('/public/assets/images/brand2.png')",
        barand3: "url('/public/assets/images/brand3.png')",
        barand4: "url('/public/assets/images/brand4.png')",
        barand5: "url('/public/assets/images/brand5.png')",
        card1: "url('/public/assets/images/card.png')",
        card2: "url('/public/assets/images/card (1).png')",
        card3: "url('/public/assets/images/card (2).png')",
        card4: "url('/public/assets/images/card (3).png')",
        card5: "url('/public/assets/images/card (4).png')",
        card6: "url('/public/assets/images/card (5).png')",
        Frame: "url('/public/assets/images/Frame.png')",
        Logo1: "url('/public/assets/images/logo.png')",
        Logo: "url('/public/assets/images/logo (1).png')",
      },
    },
  },
  plugins: [],
};
