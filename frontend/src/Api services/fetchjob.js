 export async  function fetchJobs(){

    let item = {
        key:"value"
    };
    let response=await fetch("http://127.0.0.1:8000/api/Jobshow",{
        method:'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        }

    });

    let  result = await response.json();

return result;
}