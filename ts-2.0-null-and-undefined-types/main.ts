interface User {
  username: string;
}

class Person implements User {
  constructor(
    public username: string
  ) {}
}

let counter = 0;

function printUsers(user?: User | null | undefined, ...rest: User[]) {
  console.log(`printing ${++counter}:`);

  if (!user) console.log(`!user`);
  else console.log(user);

  console.log(`rest: ${rest.length}`);
  if (rest.length) console.log(rest);
}

main();

function main() {
  printUsers();
  printUsers(new Person('max'));
  printUsers(
    new Person('max 1'),
    new Person('max 2')
  );
  printUsers(
    new Person('max 11'),
    new Person('max 22'),
    new Person('max 33'),
  );
  printUsers(...[
    new Person('max 111'),
    new Person('max 222'),
    new Person('max 333'),
    new Person('max 444'),
  ]);
}
