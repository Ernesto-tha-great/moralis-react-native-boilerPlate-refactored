import React from "react";
import { LogBox } from "react-native";
import Navigation from "./navigation";

LogBox.ignoreAllLogs();


function App(): JSX.Element {
  return (
    <Navigation />
  );
}

export default App;
