function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getCarInfo = function () {
    return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`;
  };
}

const myCar = new Car("Lada", "Granta", 2019);
console.log(myCar.getCarInfo());
