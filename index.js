var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var ralph = "Ralph";
  kittens.push(ralph);
  return kittens;
}

function destructivelyPrependKitten(name) {
  var name = "Bob";
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
