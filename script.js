

    let res = postData('db.json', JSON.stringify(Object));

    console.log(res)


let postData = async ((url,data) =>{
    let f = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:data
    })

    return await f.json();
})