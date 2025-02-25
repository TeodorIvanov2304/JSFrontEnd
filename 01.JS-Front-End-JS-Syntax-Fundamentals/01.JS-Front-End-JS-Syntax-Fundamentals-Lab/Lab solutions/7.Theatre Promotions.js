function promotions(day,age) {

    if(day == 'Weekday') {

        if(age <= 18 && age >= 0) {
            console.log('12$')
        }
        else if(age > 18 && age <= 64 ){
            console.log('18$');
        }
        else if(age > 64 && age <= 122) {
            console.log('12$')
        }
        else {
            console.log('Error!');
        }
    }

    else if(day == 'Weekend') {

        if(age <= 18 && age >= 0) {
            console.log('15$')
        }
        else if(age > 18 && age <= 64 ){
            console.log('20$');
        }
        else if(age > 64 && age <= 122) {
            console.log('15$')
        }
        else {
            console.log('Error!');
        }
    }

    else if(day == 'Holiday') {

        if(age <= 18 && age >= 0) {
            console.log('5$')
        }
        else if(age > 18 && age <= 64 ){
            console.log('12$');
        }
        else if(age > 64 && age <= 122) {
            console.log('10$')
        }
        else {
            console.log('Error!');
        }
    }
}

promotions('Weekday', 17);
promotions('Weekday', 55);
promotions('Weekday', 122);
promotions('Weekday', -1);
promotions('Weekday', 123);
promotions('Weekend', 11);
promotions('Weekend', 50);
promotions('Weekend', 121);
promotions('Weekend', -1);
promotions('Weekend', 123);
promotions('Holiday', -12);
promotions('Holiday', 155);
promotions('Holiday', 1);
promotions('Holiday', 20);
promotions('Holiday', 90);
