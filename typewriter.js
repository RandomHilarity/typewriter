//const sentence = "hello there from Lighthouse Labs";
let sentence = "hello";

/*
for (let char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
    char == sentence.length - 1 ? console.log() : "";
  }, 50 * char);
}
*/

let test = 0;
let delay = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    test ++;
    test === sentence.length ? console.log() : "";
  }, 500 * delay);
  delay ++;
}
