const sentence = "hello there from Lighthouse Labs";

for (let char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
    char == sentence.length - 1 ? console.log() : "";
  }, 50 * char);
}