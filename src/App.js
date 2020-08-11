import React, { Component } from "react";
import Todo from "./components/Todo";
import ToRead from "./components/ToRead";
import CoolTabs from "react-cool-tabs";

class App extends Component {
  render() {
    return (
      <div>
        <CoolTabs
          tabKey={"1"}
          style={{ width: 1300, height: 1000, background: "white" }}
          activeTabStyle={{ background: "red", color: "white" }}
          unActiveTabStyle={{ background: "green", color: "black" }}
          activeLeftTabBorderBottomStyle={{ background: "blue", height: 4 }}
          activeRightTabBorderBottomStyle={{ background: "yellow", height: 4 }}
          tabsBorderBottomStyle={{ background: "orange", height: 4 }}
          leftContentStyle={{ background: "lightgreen" }}
          rightContentStyle={{ background: "lightblue" }}
          leftTabTitle={"TODOS"}
          rightTabTitle={"TODO READ"}
          leftContent={<Todo />}
          rightContent={<ToRead />}
          contentTransitionStyle={"transform 0.6s ease-in"}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}
export default App;
