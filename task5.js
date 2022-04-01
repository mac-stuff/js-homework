const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
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
  },
  {
    firstName: "Ludwig",
    lastName: "Wittgenstein",
    nickname: "Dulnie",
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
  },
  {
    firstName: "Jean-Jacques",
    lastName: "Rousseau",
    nickname: "Aejuae",
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
  },
  {
    firstName: "Jean Paul",
    lastName: "Sartre",
    nickname: "Aejert",
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
  },
  {
    firstName: "Søren",
    lastName: "Kierkegaard",
    nickname: "Røsdra",
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
  },
  {
    firstName: "Lao",
    lastName: "T.",
    nickname: "Oal.t",
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
  },
];

const number = Math.floor(Math.random() * 100 + 1);

const isElite = (number) => {
  if (number % 3 === 0 || number % 5 === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }
  return true;
};

function swapKeysAndValues(obj) {
  const swapped = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(swapped);
}

const filteredPeople = people
  .filter(
    (person) =>
      ((person.firstName.charAt(person.firstName.length - 1) === "a" ||
        person.firstName.charAt(person.firstName.length - 1) === "k") &&
        person.lastName.length > 6 &&
        person.nickname.includes("a")) ||
      isElite(number)
  )
  .map((person) => ({
    firstName: person.firstName,
    lastName: person.lastName,
    nickname: person.nickname,
  }))
  .map((person) => swapKeysAndValues(person));

if (filteredPeople.length != 0) {
  let peopleSingleObject = Object.assign.apply({}, filteredPeople);

  const peopleTable = [];
  for (let item in peopleSingleObject) {
    if (peopleSingleObject.hasOwnProperty(item)) {
      peopleTable.push(item);
    }
  }

  const isLessThanS = (word, char = "s") => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] < char) {
        return true;
      }
    }
    return false;
  };

  const isMoreThanS = (word, char = "s") => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] >= char) {
        return true;
      }
    }
    return false;
  };

  let pepoleTableFiltered = [];

  for (let i = 0; i < peopleTable.length; i++) {
    if (i == 0 || i % 3 == 0) {
      if (isMoreThanS(peopleTable[i])) {
        pepoleTableFiltered.push(peopleTable[i]);
      }
    } else {
      if (isLessThanS(peopleTable[i])) {
        pepoleTableFiltered.push(peopleTable[i]);
      }
    }
  }

  const peopleTableSorted = pepoleTableFiltered.sort();

  console.log("Here is the result:");
  console.log(peopleTableSorted);
} else {
  console.log(
    "Unfortunately, none of the conditions were met and the program returned an empty array."
  );
}
