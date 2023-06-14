const cel = 15;

console.log("Temperature:>>>", cel * 1.8 + 32, "F")

const converter = (cel) => {
    return Math.round(cel * 1.8 + 32);
}

console.log(converter(2))

const days = 30;

console.log("Hours:>>>", days * 24)

console.log("Minutes:>>>", days * 24 * 60)

const health = 100;

const energy = 100;

console.log("Health:>>>", health - 110)

console.log("Energy:>>>", energy - -50)

const price = 140;

console.log("Discount:>>>", price - price / 100 * 10)

const num = 14.476;

console.log("Math.floor :>>>", Math.floor(num))

const string = "20.566";

console.log("parseFloat :>>>", parseFloat(string))

const str = "1";

console.log("parseInt :>>>", parseInt(str))

const number = 24;

console.log("Math.sqrt :>>>", Math.sqrt(number))

const strNum = "152";

const value = 17;

console.log("parseInt to number :>>>", parseInt(strNum))

console.log("toString :>>>", value.toString())