export const createMatrix = (size: number) => {
  const matrix = new Array(size);
  for (let x = 0; x < size; x++) {
    matrix[x] = new Array(size);
    for (let y = 0; y < size; y++) {
      matrix[x][y] = 0;
    }
  }
  return matrix;
};
