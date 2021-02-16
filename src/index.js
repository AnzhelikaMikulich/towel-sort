
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
      }
      if(!matrix.length){
        return [];
      }
      const a = [];
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
          a.push(matrix[i]);
        } else {
          a.push(matrix[i].reverse());
        }
      }
      let ar = a.toString().split(",");
      ar = ar.map(function (item) {
        return +item;
      });
      return ar;
}
