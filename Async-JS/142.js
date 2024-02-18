const URL = "https://jsonplaceholder.typicode.com/posts";





function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(new Error("somting went wong"));
            }
        }

        xhr.onerror = () => {
            reject(new Error("network  errror"))
        }


        xhr.send();
    })

}

sendRequest("GET", URL)
    .then(reponse => {
        const data = JSON.parse(reponse);
        // console.log(data);
        return data
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        // console.log(url);
        return sendRequest("GET", url)
    })
    .then(newResponse => {
        console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })     
    .catch(error=>{
        console.log(error);
    })