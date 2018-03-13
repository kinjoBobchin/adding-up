// node.jsのリファレンス
// https://nodejs.org/api/readline.html

'use strict';

// moduleの呼び出し
const fs = require("fs") // fs は FileSystem の略
const readline = require("readline")
const rs = fs.ReadStream("./popu-pref.csv")
const rl = readline.createInterface({ 'input': rs, 'output': {} })


// rl オブジェクトで line というイベントが発生したらこの無名関数を呼んでください、という意味
rl.on("line", (lineString) => {
  const columns = lineString.split(",")
  const year = parseInt(columns[0])
  const prefecture = columns[2]
  const popu = parseInt(columns[7])
  if (year === 2010 || year === 2015) {
    console.log(year)
    console.log(prefecture)
    console.log(popu)
  }
})

rl.resume();