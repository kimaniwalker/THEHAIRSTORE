import * as baseService from './base';

async function postCharge(token, amount, description, phone, email) {

    try {
        let response = await baseService.makeFetch('/api/donate', {
            method: 'POST',
            body: JSON.stringify({ token, amount, description, phone, email }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })

        });
        
            


        let contentType = response.headers.get('Content-Type');

        if (contentType.indexOf('application/json') > -1) {
            
            console.log(response);
            return response.json();

        }
        
        console.log(response.status);
        return response.status;


    }
    catch(err) {

        console.log(err);
    }


}

async function createCheckoutSession(amount, description, quantity) {

     try {
                let res = await fetch('/api/donate/session', {
                    method: 'POST',
                    body: JSON.stringify({ amount, description, quantity }),
                    headers: new Headers({ "Content-Type": "application/json" })
    
                });
                let sessionResponse = await res.json();
                
                setSessionResponse(sessionResponse);
                console.log(sessionResponse);
                
    
            } catch (e) {
                console.log(e)
            }

}



export { postCharge, createCheckoutSession };