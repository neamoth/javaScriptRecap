const bike = new Object();

      bike.name = prompt("Enter the bike name: ");
      bike.brand = prompt("Enter the brand: ");
      bike.start = function (){
         let speed = parseInt(prompt("Enter the speed and put 1 to start: "));
         if(speed == 1){
            console.log("Bike started");
            speed = parseInt(prompt("Enter current speed: "));
            if (speed > 1 & speed == 40){
               console.log("Bike is stopped at " + speed)
            }
         
         }
         return this.name + " speed is: " + speed;

      }

      let option = parseInt(prompt("Enter 1 for name, 2 for brand, 3 for engine: "));
      if(option == 1){
         console.log(bike.name);
      }
      else if (option == 2){
         console.log(bike.brand);
      }
      else if (option == 3){
         console.log(bike.start());
      }else{
         console.log("PLease enter a valid number");
      }