export async function jobsearch(job_title,job_type,location){

    let item={job_title,location,job_type};
    console.warn(job_title,location,job_type);
    let result=await fetch("http://127.0.0.1:8000/api/Jobsearch",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"

        }


    });
    result = await result.json();
    console.warn("the output of the search",result);
    return result;
}
