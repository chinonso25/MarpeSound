
import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import PlayScreen from "../screens/PlayScreen";
import Audiolist from "../screens/Audiolist";

const SwitchNavigator = createSwitchNavigator(
  {
    PlayScreen: PlayScreen,
    Audiolist: Audiolist
  },
  {
    initialRouteName: "Audiolist"
  }
);

export default createAppContainer(SwitchNavigator);