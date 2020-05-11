import {
  content,
  colNumber,
  rowNumber,
  PLAYER,
  WALL,
  SPACE,
  BOX,
  correct,
} from "./map.js";

/**
 * 玩家移动函数
 * @param {*} direction  left、right、up、down
 */
export function playerMove(direction) {
  // 得到玩家位置
  var playPoint = getPlayerPoint();
  //得到玩家下一个位置
  var nextInfo = getNextInfo(playPoint.row, playPoint.col, direction);

  //什么情况 不能移动
  if (nextInfo.value === WALL) {
    return false;
  }

  //能移动
  if (nextInfo.value === SPACE) {
    //空白
    exchange(playPoint, nextInfo);
    return true;
  } else if (nextInfo.value === BOX) {
    //箱子
    //获取箱子的下一个位置
    var nextNextInfo = getNextInfo(nextInfo.row, nextInfo.col, direction);
    if (nextNextInfo.value === SPACE) {
      exchange(nextInfo, nextNextInfo);
      exchange(playPoint, nextInfo);
      return true;
    } else {
      return false;
    }
  }
}

export function isWin() {
  // 判断每个正确位置是否都有箱子
  for (var item of correct) {
    if (content[item.row][item.col] !== BOX) {
      return false;
    }
  }
  return true;
}

/**
 * 交换位置
 * @param {object} point1 位置1对象的信息
 * @param {object} point2 位置2对象的信息
 */
function exchange(point1, point2) {
  //   var temp = content[point1.row][point1.col];
  //   content[point1.row][point1.col] = point2.value;
  //   content[point2.row][point2.col] = temp;
  [content[point1.row][point1.col], content[point2.row][point2.col]] = [
    content[point2.row][point2.col],
    content[point1.row][point1.col],
  ];
}

/**
 * 得到玩家位置
 */
function getPlayerPoint() {
  for (var row = 0; row < rowNumber; row++) {
    for (var col = 0; col < colNumber; col++) {
      if (content[row][col] === PLAYER) {
        return {
          row,
          col,
        };
      }
    }
  }
  return new Error("地图居然没有玩家");
}

/**
 * 得到玩家在指定方向上的下一个位置信息(行 列)
 * @param {*} row 执行行
 * @param {*} col 指定列
 * @param {*} direction
 */
function getNextInfo(row, col, direction) {
  if (direction === "left") {
    return {
      row: row,
      col: col - 1,
      value: content[row][col - 1],
    };
  } else if (direction === "right") {
    return {
      row: row,
      col: col + 1,
      value: content[row][col + 1],
    };
  } else if (direction === "up") {
    return {
      row: row - 1,
      col: col,
      value: content[row - 1][col],
    };
  } else if (direction === "down") {
    return {
      row: row + 1,
      col: col,
      value: content[row + 1][col],
    };
  }
}
