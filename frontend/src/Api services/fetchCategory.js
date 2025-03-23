export async  function fetchCategory(){

    let item = {
        key:"value"
    };
    let response2=await fetch("http://127.0.0.1:8000/api/Jobsummary",{
        method:'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        }

    });

    let  result2 = await response2.json();

    console.warn("the category summary",result2);
    return result2;

}