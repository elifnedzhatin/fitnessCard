function fitnessCard(input){
    let money = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    if(sex ==="m"){
        if(sport === "Gym"){
            priceCard = 42;
        } else if(sport === "Boxing"){
            priceCard = 41;
        } else if(sport === "Yoga"){
            priceCard = 45;
        } else if(sport === "Zumba"){
            priceCard = 34;
        } else if(sport === "Dances"){
            priceCard = 51;
        } else if(sport === "Pilates"){
            priceCard = 39;
        }
    } else if(sex === "f"){
        if(sport === "Gym"){
            priceCard = 35;
        } else if(sport === "Boxing"){
            priceCard = 37;
        } else if(sport === "Yoga"){
            priceCard = 42;
        }else if(sport === "Zumba"){
            priceCard = 34;
        }else if(sport === "Dances"){
            priceCard = 53;
        }else if(sport === "Pilates"){
            priceCard = 37;
        }
    } if (age <= 19){
        priceCard = priceCard * 0.80;
    } if (money >= priceCard){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let diff = Math.abs(money - priceCard);
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}
