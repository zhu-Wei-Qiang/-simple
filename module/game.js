import showUI from "./ui.js";
import { playerMove, isWin } from "./play.js";

showUI();
var over = false;

//完成整个游戏
window.onkeydown = function (e) {
  if (over) {
    return;
  }
  var result = false;
  if (e.key === "ArrowUp") {
    result = playerMove("up");
  } else if (e.key === "ArrowDown") {
    result = playerMove("down");
  } else if (e.key === "ArrowLeft") {
    result = playerMove("left");
  } else if (e.key === "ArrowRight") {
    result = playerMove("right");
  }

  if (result) {
    showUI();
    if (isWin()) {
      // alert("游戏胜利");
      console.log("游戏胜利");
      over = "true";
    }
  }
};
