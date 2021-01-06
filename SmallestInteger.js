let A = [1,3,6,4,1,2]
// let A = [-1,-3]
// let A = [1,2,3]

function solution(A) {
  let dataHash = {};
  let smInt = A.reduce((smallestInt,curr) => {
    dataHash[curr] = '';
    if (smallestInt === curr) {
      let newInt = curr;
      while (dataHash[newInt] !== undefined){
        newInt++;
      };
      smallestInt = newInt;
    }
    return smallestInt
  }, 1);
  console.log(`The data hash consists of ${JSON.stringify(dataHash)}`)
  console.log(`Final reduce answer ${smInt}`);
}

solution(A);