let circle = {
  radius: 1,
  data: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  toDo: function () {
    console.log("draw");
  },
};
circle.data;
console.log(circle.data);

function makeCircle(radius) {
  return {
    radius: radius,
    toDo() {
      console.log("draw");
    },
  };
}

const circle1 = makeCircle(1);
console.log(circle1.toDo());

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const myCircle = new CreateCircle(1);
console.log(myCircle.draw());
