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

//pop => time complexity: O(1)
function popTest(arr) {
  const n = arr.length;

  for (let i = 0 ; i < n ; i++) {
    arr.pop();
  }

  return arr;
}

// let n = 10;
// console.time(`popTest(${n}): `);
// pushTest(n);
// console.timeEnd(`popTest(${n}): `);

// let o = 100;
// console.time(`popTest(${o}): `);
// pushTest(o);
// console.timeEnd(`popTest(${o}): `);

// let p = 1000;
// console.time(`popTest(${p}): `);
// pushTest(p);
// console.timeEnd(`popTest(${p}): `);

// let q = 10000;
// console.time(`popTest(${q}): `);
// pushTest(q);
// console.timeEnd(`popTest(${q}): `);

// let r = 100000;
// console.time(`popTest(${r}): `);
// pushTest(r);
// console.timeEnd(`popTest(${r}): `);

// let s = 1000000;
// console.time(`popTest(${s}): `);
// pushTest(s);
// console.timeEnd(`popTest(${s}): `);

//map
// const map = array.map(x => x * 2);

// let array10 = randomNumberArr(10)
// let array100 = randomNumberArr(100)
// let array1000 = randomNumberArr(1000)
// let array10000 = randomNumberArr(10000)
// let array100000 = randomNumberArr(10000)

// const map10 = array10.map(x => x * 2);
// console.log(map10);
// console.time(`popTest(${o}): `);
// pushTest(o);
// console.timeEnd(`popTest(${o}): `);


//filter => Time Complexity O(n)
//reduce => Time Complexity O(n)
//every => Time Complexity O(n)

//unshift => Time Complexity: O(n)
function unshiftTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.unshift(i);
  }

  return arr;
}

// let n = 10;
// console.time(`unshiftTest(${n}): `);
// pushTest(n);
// console.timeEnd(`unshiftTest(${n}): `);

// let o = 100;
// console.time(`unshiftTest(${o}): `);
// pushTest(o);
// console.timeEnd(`unshiftTest(${o}): `);

// let p = 1000;
// console.time(`unshiftTest(${p}): `);;
// pushTest(p);
// console.timeEnd(`unshiftTest(${p}): `);

// let q = 10000;
// console.time(`unshiftTest(${q}): `);
// pushTest(q);
// console.timeEnd(`unshiftTest(${q}): `);

// let r = 100000;
// console.time(`unshiftTest(${r}): `);
// pushTest(r);
// console.timeEnd(`unshiftTest(${r}): `);

// let s = 1000000;
// console.time(`unshiftTest(${s}): `);
// pushTest(s);
// console.timeEnd(`unshiftTest(${s}): `);

//shift => Time Complexity O(1)
function shiftTest(arr) {
    const n = arr.length;
  
    for (let i = 0 ; i < n ; i++) {
      arr.shift();
    }
  
    return arr;
  }

let a = 10;
console.time(`shiftTest(${a}): `);
shiftTest(a);
console.timeEnd(`shiftTest(${a}): `);

let s = 100;
console.time(`shiftTest(${s}): `);
shiftTest(s);
console.timeEnd(`shiftTest(${s}): `);

let d = 1000;
console.time(`shiftTest(${d}): `);
shiftTest(d);
console.timeEnd(`shiftTest(${d}): `);

let f = 10000;
console.time(`shiftTest(${f}): `);
shiftTest(f);
console.timeEnd(`shiftTest(${f}): `);

let g = 100000;
console.time(`shiftTest(${g}): `);
shiftTest(g);
console.timeEnd(`shiftTest(${g}): `);

let h = 1000000;
console.time(`shiftTest(${h}): `);
shiftTest(h);
console.timeEnd(`shiftTest(${h}): `);