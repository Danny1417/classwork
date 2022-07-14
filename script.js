async function getData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify({
            userId: 1,
            title: "My first to do",
            completed: false,
        })
    }),
    let json = await data.json();
    console.log(json);
}


}
getData()