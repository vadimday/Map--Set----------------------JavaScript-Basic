function User(name, age) {
  this.name = name;
  this.age = age;

  this.canVote = function () {
    return this.age >= 18;
  };
}

const user1 = new User("Дмитрий", 25);
console.log(user1.canVote());

const user2 = new User("Алина", 17);
console.log(user2.canVote());
