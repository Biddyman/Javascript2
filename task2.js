let data = [
    {principal:2500, time:1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3}

];


function interestCalculator(array) {
    let rate;

    for (principal>=2500 && time>1 && time<3) {
        rate = 3;
    }
    for (principal>=2500 && time>=3) {
        rate = 4;
    }
    for (principal<2500 || time<=1) {
        rate = 2;
    }
    else {
        rate = 1;
    }

    interest = (principal * rate * time) / 100;
}