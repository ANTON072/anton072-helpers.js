// 画面にフィットするフォントサイズベースを返す
const baseFontSize = (designWidthPx: number, innerWidth: number) => {
  return innerWidth / (designWidthPx / 20);
};

export default baseFontSize;
