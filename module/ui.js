//  用于将地图显示到页面
import * as map from "./map.js";

var divContaniner = document.getElementById("game");
var pieceWidth = 45;
var pieceHeight = 45;

/**
 * 设置div的宽高
 */
function setDivContainer() {
  divContaniner.style.width = pieceWidth * map.colNumber + "px";
  divContaniner.style.height = pieceHeight * map.rowNumber + "px";
}

/**
 * 根据行和列 创建一个div加到容器
 * @param {*} row 列
 * @param {*} col 行
 */
function setOnePiece(row, col) {
  var value = map.content[row][col]; //取出数组的值
  //创建一个div 给定通用样式
  var div = document.createElement("div");
  div.className = "item";
  //绝对定位 所以需要给定位置信息
  div.style.left = pieceWidth * col + "px";
  div.style.top = pieceHeight * row + "px";
  //是否是正确位置
  var Correct = isCorrect(row, col);
  if (value === map.WALL) {
    div.classList.add("wall");
  } else if (value == map.PLAYER) {
    div.classList.add("player");
  } else if (value === map.BOX) {
    if (Correct) {
      div.classList.add("coorrect-box");
    } else {
      div.classList.add("box");
    }
  } else {
    if (Correct) {
      div.classList.add("coorrect");
    } else {
      return;
    }
  }
  divContaniner.appendChild(div);
}

/**
 * 给成功的位置设置样式
 */
function isCorrect(row, col) {
  //   for (var item of map.correct) {
  //     if (item.row === row && item.col === col) {
  //       return true;
  //     }
  //   }
  return map.correct.find((p) => p.row === row && p.col === col) != undefined;
}

/**
 * 根据地图在页面上设置相应的元素
 */
function setContent() {
  // 每次改变都会清空地图东西 再次渲染
  divContaniner.innerHTML = "";
  //遍历地图内容，设置元素
  for (var row = 0; row < map.rowNumber; row++) {
    for (var col = 0; col < map.colNumber; col++) {
      setOnePiece(row, col);
    }
  }
}

/**
 * 该函数用于显示地图
 */
export default () => {
  //设置div的宽高
  setDivContainer();
  //显示地图中的内容
  setContent();
};
