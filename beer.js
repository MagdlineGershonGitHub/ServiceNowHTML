let beer = 99;
let word = "bottles";

        while (beer > 0) {

            if (beer== 1) {
                word = "bottle"; // ONE bottle
            }

            console.log(beer + " " + word + " of beer on the wall, " + beer + " " + word + " of beer");
            beer = beer - 1;

            if (beer > 0) {
                console.log("Take one down, pass it round " + beer + " " + word + " of beer");
            }
        }

        if (beer == 0) {
            console.log("No more bottles of beer");
        }

    