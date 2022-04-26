
let age_1;
age_1 = prompt("what is your age?")
    const checkAge = function checkAge(age_1) { 
        if (typeof(age_1) != "number") {
            age_1 = Number(age_1);  

            } if (! isNaN(age_1)) {    
                let age_2 = 18;
                let age_3 = 60;
                if (age_1 < age_2) {
                    alert("You don’t have access cause your age is " + age_1 + " It’s less then ")   

                }
                else if (age_1 >= age_2 && age_1 < age_3){
                    alert("Welcome  !")
                        
                } 
                else if (age_1 > age_3) {
                    alert("Keep calm and look Culture channel")

                }else {
                    alert("Technical work")
                    
                }
        } else {
            alert("Error!!!")
        }
            
    }