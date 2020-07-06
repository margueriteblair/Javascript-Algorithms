//from algo expert

// function riverSizes(matrix) {
//     let riverSize = [];
//       for (let i = 0; i < matrix.length; i++) {
//           for (let j = 0; j < matrix[i].length; j++){
//                   let length = 0;
//                 if (matrix[i][j]===1 && matrix[i][j] === matrix[i][j+1]) {
//                       length++;
//                       riverSize.push(length);
//               } else if (matrix[i][j]===1 && matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i+1][j]) {
//                   length+=2;
//                   riverSize.push(length)
//               } else if (matrix[i][j]===1 && matrix[i][j] === matrix[i+1][j]){
//                 length++;
//                 riverSize.push(length);
//               }
//           }
//       }
//       console.log(riverSize)
//   }

function riverSizes(matrix) {
    // matrix = matrix.join(",");
    // let regex = /1+/g;
    let length = 0;
    let riverSize = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && matrix[i][j+1] === 1 && matrix[i+1][j] === 1) {
                length+=3;
                riverSize.push(length);
                length = 0;
            } else if (matrix[i][j]) {

            } else if (matrix[i][j] === 1) {
                length++;
                riverSize.push(length);
                length = 0;
            }
        }
        console.log(riverSize)
    }
}

riverSizes([[1, 0, 0, 1, 0],[1,0,1,0,0], [0,0,1,0,1],[1,0,1,0,1],[1,0,1,1,0]]);