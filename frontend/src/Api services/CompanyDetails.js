export async function CompanyDetails(company_name){
        console.warn("Fetching company details for:",company_name);
        let response2 = await fetch(`http://127.0.0.1:8000/api/CompanyDetails/${company_name}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            }
        });
        let result2 = await response2.json();
        console.warn('the company details', result2);
    return result2;

}