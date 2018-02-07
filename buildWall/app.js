
function bildWall(arr) {

    let wall = arr.map(Number);

    let progress = false;

    let log = [];

    while (!progress) {

        progress = true;

        let create = 0;

        for (let i = 0; i < wall.length; i++) {

            if (wall[i] < 30) {
                wall[i] += 1;
                create += 195;

                progress = false;
            }
        }

        if (!progress) {
            log.push(create);
        }
        
    }

    console.log(log.join(', '));
    console.log(log.reduce((a, b) => a + b, 0) * 1900 + ' pesos');
}