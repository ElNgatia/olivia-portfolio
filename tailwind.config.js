import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#db804e",
      white: "#ffffff",
      dirt: "#a36209",
    },
    fontFamily: {
      merriweather: ["Merriweather-Regular", "serif"],
      merriweatherbold: ["Merriweather-Bold", "serif"],
      safiramarch: ["Safira March", "serif"],
      droidserif: ["Droid Serif", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/mt-sample-background.jpg')",
      },
    },
  },
  plugins: [],
});
