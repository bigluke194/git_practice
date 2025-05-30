const subjects = ["You", "Your energy", "Your mind"];
const verbs = ["will conquer", "is aligned with", "transforms"];
const objects = ["all challenges", "abundance", "your dreams"];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMessage() {
  const subject = getRandomElement(subjects);
  const verb = getRandomElement(verbs);
  const object = getRandomElement(objects);

  const message = `${subject} ${verb} ${object}.`;
  console.log("💬 " + message);
}

generateMessage();
