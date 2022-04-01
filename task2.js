const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
  {
    firstName: "Ludwig",
    lastName: "Wittgenstein",
    nickname: "Dulnie",
  },
  {
    firstName: "Jean-Jacques",
    lastName: "Rousseau",
    nickname: "Aejuae",
  },
  {
    firstName: "Jean Paul",
    lastName: "Sartre",
    nickname: "Aejert",
  },
  {
    firstName: "Søren",
    lastName: "Kierkegaard",
    nickname: "Røsdra",
  },
  {
    firstName: "Lao",
    lastName: "T.",
    nickname: "Oal.t",
  },
];

try {
  const peopleSayingHello = people.map((person) => ({
    firstName: person.firstName,
    lastName: person.lastName,
    nickname: person.nickname,
    introduceYourself: function () {
      return (
        "Cześć jestem " +
        this.firstName +
        " " +
        this.lastName +
        ", ale w szkole mówią na mnie [" +
        this.nickname +
        "]"
      );
    },
  }));

  peopleSayingHello.forEach((person) =>
    console.log(person.introduceYourself())
  );
} catch (error) {
  console.log(
    "Sorry, the object contains incorrect data, please enter a valid object."
  );
}
