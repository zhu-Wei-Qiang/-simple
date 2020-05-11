// 仅用于记录地图信息(玩家 、 墙 、 箱子)

/**
 * 0 => 空白
 * 1 => 玩家
 * 2 => 墙
 * 3 => 箱子
 */

export const SPACE = 0;
export const PLAYER = 1;
export const WALL = 2;
export const BOX = 3;

export const content = [
  [0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 0, 1, 0, 2, 0, 0],
  [0, 0, 2, 0, 3, 0, 2, 0, 0],
  [2, 2, 2, 0, 0, 0, 2, 2, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 0, 3, 3, 3, 3, 3, 0, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 2, 0, 3, 3, 3, 0, 2, 2],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 0],
];

// 正确位置
export const correct = [
  { row: 3, col: 4 },
  { row: 4, col: 4 },
  { row: 5, col: 2 },
  { row: 5, col: 3 },
  { row: 5, col: 4 },
  { row: 5, col: 5 },
  { row: 5, col: 6 },
  { row: 6, col: 4 },
  { row: 7, col: 4 },
  { row: 8, col: 4 },
  { row: 9, col: 4 },
  { row: 10, col: 4 },
];

// 总列
export const colNumber = content[0].length;
// 总行
export const rowNumber = content.length;
