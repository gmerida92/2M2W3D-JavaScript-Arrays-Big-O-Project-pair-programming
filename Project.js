function randomNumberArr(max) {
    const res = new Array();
  
    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));
  
      res.push(randomNumber);
    }
  
    return res;
  }

//   console.log(randomNumberArr(1))
//   console.log(randomNumberArr(10))
//   console.log(randomNumberArr(100))
//   console.log(randomNumberArr(1000))
//   console.log(randomNumberArr(10000))
//   console.log(randomNumberArr(100000))

//push => time complexity: O(n)
function pushTest(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
  
    return arr;
}

let l = 10;
console.time(`pushTest(${l}): `);
pushTest();
console.timeEnd(`pushTest(${l}): `);

let a = 100;
console.time(`pushTest(${a}): `);
pushTest(a);
console.timeEnd(`pushTest(${a}): `);

let s = 1000;
console.time(`pushTest(${s}): `);
pushTest(s);
console.timeEnd(`pushTest(${s}): `);

let d = 10000;
console.time(`pushTest(${d}): `);
pushTest(d);
console.timeEnd(`pushTest(${d}): `);

let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);