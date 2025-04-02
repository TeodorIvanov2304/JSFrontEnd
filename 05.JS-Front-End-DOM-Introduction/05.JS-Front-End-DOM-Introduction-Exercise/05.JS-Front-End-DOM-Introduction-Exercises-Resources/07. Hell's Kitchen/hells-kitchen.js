function solve() {
    class Worker {
        constructor(name, salary) {
            this.name = name;
            this.salary = Number(salary);
        }
    }

    class Restaurant {
        constructor(name) {
            this.name = name;
            this.workers = [];
            this.avgSalary = 0;
            this.bestSalary = 0;
        }

        calculateSalaries() {
            let totalSalary = 0;
            let maxSalary = 0;
        
            for (let worker of this.workers) {
                totalSalary += worker.salary;
                if (worker.salary > maxSalary) {
                    maxSalary = worker.salary;
                }
            }
        
            this.avgSalary = totalSalary / this.workers.length;
            this.bestSalary = maxSalary;
        }
    }

    let textareaValue = document.querySelector("#inputs textarea").value;
    let restaurantData = JSON.parse(textareaValue);
    let allRestaurants = [];

    for (let item of restaurantData) {
        let [restaurantName, employeesData] = item.split(' - ');
        let restaurant = allRestaurants.find(r => r.name === restaurantName);

        if (!restaurant) {
            restaurant = new Restaurant(restaurantName);
            allRestaurants.push(restaurant);
        }

        let employees = employeesData.split(', ');

        for (let employee of employees) {
            let [name, salary] = employee.split(' ');
            restaurant.workers.push(new Worker(name, salary));
        }

        restaurant.calculateSalaries();
    }

    allRestaurants.sort((a, b) => b.avgSalary - a.avgSalary);
    let bestRestaurant = allRestaurants[0];

    let bestRestaurantP = document.querySelector("#bestRestaurant p");
    bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    let bestWorkersP = document.querySelector("#workers p");
    bestWorkersP.textContent = bestRestaurant.workers
        .sort((a, b) => b.salary - a.salary)
        .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
        .join(' ');
}
