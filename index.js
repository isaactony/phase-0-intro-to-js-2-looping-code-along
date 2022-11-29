//const gifts = ["teddy bear", "drone", "doll"];

let result = [];
function writeCards(gifts, event) {
    //let result = [];
    for (let i = 0; i < gifts.length; i++) {
        let message = `Thank you, ${gifts[i]}, for the wonderful ${event} gift!`;
        result.push(message);

  }
  
  return result;
}

writeCards(gifts, "birthday");


function countDown(num) {
    let countdown = 0;
    while (countdown <= num) {
        console.log(num--);

    }

}