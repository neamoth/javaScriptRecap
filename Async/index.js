{
    //Async Wait:
    // Food Ordering:

    //Menu Displayed:
    const menu = {
        grill: 130,
        juice: 100,
        burger: 150,
        friedRice: 250
    }
    //Customer Input
    const orderedItem = 'friedRice';
    const customerPays = 330;

    //Store Convertions:
    const price = Object.values(menu)[Object.keys(menu).findIndex(value => value.toLowerCase() === orderedItem.toLowerCase())];
    const isAvailable = Object.keys(menu).some(value => value.toLowerCase() === orderedItem.toLowerCase());
 
    console.log("Please Place your Order");
    function order(){
        console.log("Order is processing, checking for stock...");
        
        const promise = new Promise(function(resolve, reject){
           setTimeout(function(){
              if(isAvailable){
                 resolve();
              }else{
                 reject("Sorry, the product is not available in stock.");
              }
           }, 2000);
        });
        return promise;
       }

       function processing(){
        console.log("Your order has been placed, Please wait for a while...");
        const promise = new Promise(function(resolve, reject){
            setTimeout(function(){
               if(price <= customerPays){
                  resolve();
               }else{
                  reject(`Payment Failed: Need to pay ${price - customerPays}BDT`);
               }
            }, 2000);
         });
         return promise;  
       }
       function deliver(){
        console.log("Payment sucessfully completed");
        const promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                if ((customerPays - price) >= 0){
                    resolve(`Food Delivery successfully and changes: ${customerPays - price}BDT`);
                }else{
                    resolve(`Food Has been delivered`);
                }
            }, 2000);
         });
         return promise;
       }

       async function foodCart(){
        try {
            await order();
            await processing();
            const message = await deliver();
            console.log(message);
            
        } catch (error) {
            console.log(error);
            
        }
       }
       foodCart();
}
