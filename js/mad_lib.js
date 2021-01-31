// JS Mad Lib
let yourName = prompt("What is your name? ");
let yourFriend = prompt("What is one of your friends' name? ");

let nationality = prompt("Enter a nationality: ");
let nationalityArray = [nationality, "Italians", "Spanish"];
nationalityCnt = nationalityArray.length;
nationalityRand = Math.floor(Math.random()*nationalityCnt);
nationalityResult = nationalityArray[nationalityRand];

let foodName = prompt("Enter a food name: ");
let foodNameArray = [foodName, "sushi", "sausage"];
foodNameCnt = foodNameArray.length;
foodNameRand = Math.floor(Math.random()*foodNameCnt);
foodNameResult = foodNameArray[foodNameRand];

let number = prompt("Enter a number between 2 to 10: ");
let numberArray = [number, "5", "9"];
numberCnt = numberArray.length;
numberRand = Math.floor(Math.random()*numberCnt);
numberResult = numberArray[numberRand];

let color = prompt("Enter your favorite color: ");
let colorArray = [color, "black", "green"];
colorCnt = colorArray.length;
colorRand = Math.floor(Math.random()*colorCnt);
colorResult = colorArray[colorRand];

let humanOrgan = prompt("Enter a human organ: ");
let humanOrganArray = [humanOrgan, "fingers", "nose"];
humanOrganCnt = humanOrganArray.length;
humanOrganRand = Math.floor(Math.random()*humanOrganCnt);
humanOrganResult = humanOrganArray[humanOrganRand];

let adjective = prompt("Enter an adjective: ");
let adjectiveArray = [adjective, "abnormal", "fatty"];
adjectiveCnt = adjectiveArray.length;
adjectiveRand = Math.floor(Math.random()*adjectiveCnt);
adjectiveResult = adjectiveArray[adjectiveRand];

let secAdjective = prompt("Enter a second adjective: ");
let secAdjectiveArray = [secAdjective, "stink", "nasty"];
secAdjectiveCnt = secAdjectiveArray.length;
secAdjectiveRand = Math.floor(Math.random()*secAdjectiveCnt);
secAdjectiveResult = secAdjectiveArray[secAdjectiveRand];

let pluralNoun = prompt("Enter a plural noun: ");
let pluralNounArray = [pluralNoun, "promotions", "farts"];
pluralNounCnt = pluralNounArray.length;
pluralNounRand = Math.floor(Math.random()*pluralNounCnt);
pluralNounResult = pluralNounArray[pluralNounRand];



document.write("<h6>In 1978, " + foodNameResult + " was invented by a " + adjectiveResult + " " + nationalityResult + " named " + yourName + ". In order to make a(n) " + secAdjectiveResult + " " + foodNameResult + ", a lot of " + pluralNounResult + " is required to be taken. After a period of time of study, scientists have confirmed your " + humanOrganResult + " will turn to your favorite color '" + colorResult + "' in a month as you wish if you eat " + foodNameResult + " " + numberResult + " times a day. Many doctors recently suggest changing color of your " + humanOrganResult + " will be more effective if you consult your diet with the famous psychologist, " + yourFriend + ".</h6>");

