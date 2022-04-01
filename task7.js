const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let familyNames = [];

function traverse(object) {
  for (const key in object) {
    if (typeof object[key] === "object") {
      traverse(object[key]);
    } else {
      if (key == "name") {
        familyNames.push(object[key]);
      } else {
        let names = familyNames[familyNames.length - 1].concat(
          " " + object[key]
        );
        familyNames.pop();
        familyNames.push(names);
      }
    }
  }
}

traverse(nestedObject);
console.log(familyNames);
