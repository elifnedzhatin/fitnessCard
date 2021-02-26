/*
Задача 3. Карта за фитнес
Да се напише програма, която проверява дали първоначално налична сума е достатъчна, за да се заплати карта за месечен достъп във фитнес.
Цената на картата зависи от пола на клиента и спорта, който практикува:
Пол	    Gym    Boxing  Yoga    Zumba   Dances  Pilates
мъж	    $42	    $41	    $45	    $34	    $51	    $39
жена	$35	    $37	    $42	    $31	    $53	    $37
Всички цени на карти за ученици (възраст под 19 години вкл.) са с 20% намаление.
От конзолата се прочитат 4 реда:
•	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
•	Пол - символ ('m' за мъж и 'f' за жена)
•	Възраст - цяло число в интервала [5…105]
•	Спорт - текст (една от възможностите в таблицата)
*/
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
fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"]);



//ДА