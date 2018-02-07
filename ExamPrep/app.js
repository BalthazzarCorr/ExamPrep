function spiceFlow(input) {

    let yieldOfMine = Number(input);
    let totalSpice = 0;

    let days = 0;

    while (yieldOfMine >= 100 && yieldOfMine > 0) {

        totalSpice += yieldOfMine - 26;
        yieldOfMine -= 10;
        days++;
    }

    if (yieldOfMine < 99 &&  yieldOfMine > 26) {

        totalSpice = totalSpice - 26;
    }



    console.log(days);
    console.log(totalSpice);

}

spiceFlow(0)