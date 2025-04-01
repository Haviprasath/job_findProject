export async function AddSeeker(username,password,email){
    let item={
       username,password,email
    }
    console.warn(username,password,email);
    let response=await fetch("http://127.0.0.1:8000/api/AddSeeker", {
        method:'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    let  result = await response.json();
    return result;
}