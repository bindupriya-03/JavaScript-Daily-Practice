// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    const [month, day, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for (let i = 0; i < n; i++) {
        const dateString = readLine().trim();
        console.log(getDayName(dateString));
    }


    
    return dayName;
}