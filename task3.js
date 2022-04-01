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

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

if (colors.length == 0) {
  console.log("Sorry, the list is empty, please provide a full color list");
} else {
  try {
    const peopleAndTheirFavoriteColors = people.map((person) => ({
      firstName: person.firstName,
      lastName: person.lastName,
      nickname: person.nickname,
      introduceYourself: person.introduceYourself,
      getFavouriteColor: function (number = 5) {
        if (number > 0 && number < 31) {
          const index =
            (this.firstName.length +
              this.lastName.length +
              this.nickname.length -
              number) %
            colors.length;
          return index < 0 ? colors[Math.abs(index)] : colors[index];
        } else if (number <= 0) {
          return "The number is too small, the number cannot be less than 1";
        } else if (number > 30) {
          return "The number is too big, the number cannot be more than 30";
        }
      },
    }));

    peopleAndTheirFavoriteColors.forEach((person) =>
      console.log(person.getFavouriteColor(20))
    );
  } catch (error) {
    console.log(
      "Sorry, the object contains incorrect data, please enter a valid object."
    );
  }
}
