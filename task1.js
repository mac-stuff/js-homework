const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Ludwig",
    lastName: "Wittgenstein",
  },
  {
    firstName: "Jean-Jacques",
    lastName: "Rousseau",
  },
  {
    firstName: "Jean Paul",
    lastName: "Sartre",
  },
  {
    firstName: "Søren",
    lastName: "Kierkegaard",
  },
  {
    firstName: "Lao",
    lastName: "T.",
  },
];

try {
  const createNickname = (name, surname) => {
    const nameSubstringReverse = name
      .substring(0, 3)
      .split("")
      .reverse()
      .join("");
    const surnameSubstringReverse = surname
      .substring(surname.length - 3)
      .split("")
      .reverse()
      .join("");
    const nickname = nameSubstringReverse + surnameSubstringReverse;
    return nickname[0].toUpperCase() + nickname.slice(1).toLowerCase();
  };

  const peopleWithNickname = people.map((person) => ({
    firstName: person.firstName,
    lastName: person.lastName,
    nickname: createNickname(person.firstName, person.lastName),
  }));

  console.log(peopleWithNickname);
} catch (error) {
  console.log(
    "Sorry, the object contains incorrect data, please enter a valid object."
  );
}
