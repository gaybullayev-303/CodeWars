// try {
//     const a = 1;
//     a = 2;

// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// } finally {
//     console.log("Kod Yakunlandi");
// }

//CALLBACK 
//callback deb bir funksiya boshqa bir funksiya ichida ishlashiga aytiladi !

// function getsum(callback) {
//     callback(console.log("salom dasturchilar"));
    
// }
// getsum(
//     (sms) => {
//         console.log(sms);
//      })

// -------------------------------------------------------------------------------

// setTimeout(()=>{
//     console.log(1);
    
// setTimeout(()=>{
//     console.log(2);
    
// setTimeout(()=>{
// console.log(3);

// },1000)
// },1000)
// },1000)


// -----------------------------------------------------------------------


//Promise

// let date = new Date();
// let ms = date.getMilliseconds();
// let promise = new Promise((resolve, reject) => {
//     if(ms % 2) resolve(`${ms}, Toq Son`)
//     else reject(`${ms}, Juft Son`);
// })
//     .catch((err) => {
//         console.log(err , "catch");
        
//     })
//         .then((res) => {
//         console.log(res , "then");
        
//     })
// ==================================================================

//Async Await
// async function getdata(){
// let data = await fetch("https://jsonplaceholder.typicode.com/users");
// data = await data.json();
// console.log(data);
// }
// getdata();