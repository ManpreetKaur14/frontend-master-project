let charr = '🗣️';
let rep = 5;
let result = "";

for(let i = 0; i <rep; i++)
{
  result = result + charr;
}
console.log(result)

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
console.log(person);
console.log(person.name);
console.log(person["name"]);