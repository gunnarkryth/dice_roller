const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

const randomDice = () => {
  const random = Math.floor(Math.random() * 6) + 1;
  rollDice(random);
};

const rollDice = (random) => {
  // Define the rotation values for each face
  const rotations = {
    1: { rotateX: 0, rotateY: 0 },
    2: { rotateX: -90, rotateY: 0 },
    3: { rotateX: 0, rotateY: -90 },
    4: { rotateX: 0, rotateY: 90 },
    5: { rotateX: 90, rotateY: 0 },
    6: { rotateX: 180, rotateY: 0 },
  };

  // Perform the animation using anime.js
  anime({
    targets: dice,
    rotateX: [
      { value: rotations[random].rotateX + 360, duration: 1000 },
      { value: rotations[random].rotateX, duration: 1000 },
    ],
    rotateY: [
      { value: rotations[random].rotateY + 360, duration: 1000 },
      { value: rotations[random].rotateY, duration: 1000 },
    ],
    easing: "easeOutExpo",
  });
};

rollBtn.addEventListener("click", randomDice);
