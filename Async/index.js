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
    const orderedItem = 'burger';
    const customerPays = 330;

    //Store Convertions:
    const matchOrderItem = Object.keys(menu).find(value => value.toLowerCase() === orderedItem.toLowerCase());
    const price = menu[matchOrderItem]
    const isAvailable = !!price
    
    console.log("Please Place your Order");
    function order(){
        console.log("Order is processing, checking for stock...");
        
        const promise = new Promise(function(resolve, reject){
           setTimeout(function(){
              if(isAvailable){
                 resolve();
              }else{
                 reject(`Sorry, the ${orderedItem} is not available in stock.`);
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
                    resolve(`${orderedItem} Delivery successfully and changes: ${customerPays - price}BDT`);
                }else{
                    resolve(`${orderedItem} Has been delivered`);
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
