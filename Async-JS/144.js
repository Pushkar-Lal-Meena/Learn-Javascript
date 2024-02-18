// async await

// fetch(URL)
// .then(response =>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data)
// })



console.log("script start");

const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//  const reponse = await fetch(URL);
//  if (!reponse.ok) {
//     throw new Error("something missing")

//  }
//  const data = await reponse.json();
//  return data;

// }


//  => with arrow function 
const getPosts = async () => {
    const reponse = await fetch(URL);
    if (!reponse.ok) {
        throw new Error("something missing")

    }
    const data = await reponse.json();
    return data;
}

getPosts()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })


console.log("script End");