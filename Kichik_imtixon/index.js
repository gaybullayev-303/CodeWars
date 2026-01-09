// let students = [
//   { name: "Ali", score: 70, active: true },
//   { name: "Vali", score: 85, active: false },
//   { name: "Hasan", score: 90, active: true },
//   { name: "Husan", score: 60, active: true }
// ];
// students = students.filter((obj) => {
//     if(obj.active){
//           obj.score = obj.score * 0.1 + obj.score;
//         return obj;
//     }
// });
// let sum = students.reduce((acc , curr) => acc + curr.score, 0) / students.length;
// console.log(students);
// console.log(+sum.toFixed(2));


// -----------------------------------------------------------------------
// 2 ---

// let transactions = [
//     { type: "income", amount: 500 },
//     { type: "expense", amount: 200 },
//     { type: "income", amount: 1500 },
//     { type: "expense", amount: 300 },
//     { type: "income", amount: 700 }
// ];
// transactions = transactions.filter((obj) => obj.amount > 1000)
// console.log(transactions);

// transactions = transactions.findIndex((obj) => obj.type == "expense")
// console.log(transactions);

// transactions = transactions.findLastIndex((obj) => obj.type === "income")
// console.log(transactions);


// --------------------------------------------------------------
// 3---
// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 }
// ];
// products = products.sort(name),
// products = products.name.sort((a,b) => a.localcompare - b.localcompare)
// products = products.sort((a,b) => a.price - b.price)

// console.log(products);
// ===================================================================
// 4---

// let employees = [
//   { name: "Ali", verified: true, role: "user" },
//   { name: "Vali", verified: true, role: "manager" },
//   { name: "Hasan", verified: true, role: "user" }
// ];


// employees = employees.filter((obj) => obj.role === "manager")

// console.log(employees);

// ---------------------------------------------------------------
// 5---
// let sales = [
//   [120, 300],
//   [450, 100],
//   [600, 200]
// ];
// let newsales = []
// sales = sales.flat(2)
// newsales = sales;
// newsales = newsales.Reduce((acc , curr) => acc + curr )
// console.log(newsales);


// ========================================================================
// 6---

// let users = [
//   { name: "Ali", skills: ["html", "css", "js"] },
//   { name: "Vali", skills: ["node", "js", "mongo"] },
//   { name: "Hasan", skills: ["css", "figma"] }
// ];

// users = users.filter((obj)=> obj.skills.includes("js"))
// console.log(users);

// ---------------------------------------------------------------
// 7---

// let orders = [
//   { product: "Book", price: 10, quantity: 3 },
//   { product: "Pen", price: 2, quantity: 10 },
//   { product: "Bag", price: 40, quantity: 1 }
// ];

// orders = orders.reduce((acc ,curr)=> acc + curr.price * curr.quantity , 0)
// console.log(orders);

// ----------------------------------------------------------------------------
// 8---
// let athletes = [
//   { name: "Ali", time: 12.5 },
//   { name: "Vali", time: 11.8 },
//   { name: "Hasan", time: 12.1 }
// ];
// athletes = athletes.sort((a,b)=>a.time-b.time)
// console.log(athletes);

// -------------------------------------------------------------------------------------
// 9---
// let data = [5, 10, 15, 20, 25, 30];
// data.fill(0 , 3)
// data = data.copyWithin(0, 1 , 4)
// console.log(data);
// ----------------------------------------------------------------------------------------