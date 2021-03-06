import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    Root: {
      path: "root",
      screens: {
        Home: "Home",
        Tick: "Ticket",
        Travel: "Travel",
        Map: "Map",
        Share: "Share",
      },
    },
  },
};
