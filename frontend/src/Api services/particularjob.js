export async function particularjob(job_id){

        let response=await fetch(`http://127.0.0.1:8000/api/JobSearchById/${job_id}`,{
            method:'GET',
            headers:{
                "content-type":"application/json",
                "Accept":"application/json"
            }
        });
        let result=await response.json();
    return result;

}