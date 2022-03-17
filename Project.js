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

// let l = 10;
// console.time(`pushTest(${l}): `);
// pushTest();
// console.timeEnd(`pushTest(${l}): `);

// let a = 100;
// console.time(`pushTest(${a}): `);
// pushTest(a);
// console.timeEnd(`pushTest(${a}): `);

// let s = 1000;
// console.time(`pushTest(${s}): `);
// pushTest(s);
// console.timeEnd(`pushTest(${s}): `);

// let d = 10000;
// console.time(`pushTest(${d}): `);
// pushTest(d);
// console.timeEnd(`pushTest(${d}): `);

// let n = 100000;
// console.time(`pushTest(${n}): `);
// pushTest(n);
// console.timeEnd(`pushTest(${n}): `);

//pop
function popTest(arr) {
  const n = arr.length;

  for (let i = 0 ; i < n ; i++) {
    arr.pop();
  }

  return arr;
}

let n = 10;
console.time(`popTest(${n}): `);
pushTest(n);
console.timeEnd(`popTest(${n}): `);

let o = 100;
console.time(`popTest(${o}): `);
pushTest(o);
console.timeEnd(`popTest(${o}): `);

let p = 1000;
console.time(`popTest(${p}): `);
pushTest(p);
console.timeEnd(`popTest(${p}): `);

let q = 10000;
console.time(`popTest(${q}): `);
pushTest(q);
console.timeEnd(`popTest(${q}): `);

let r = 100000;
console.time(`popTest(${r}): `);
pushTest(r);
console.timeEnd(`popTest(${r}): `);

let s = 1000000;
console.time(`popTest(${s}): `);
pushTest(s);
console.timeEnd(`popTest(${s}): `);
