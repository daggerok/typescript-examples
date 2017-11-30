// abstract class Shape {
//   abstract getKind(): string;
// }
//
// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//
//   getKind() {
//     return "circle"
//   }
// }
//
// class Square extends Shape {
//   constructor(public size: number) {
//     super();
//   }
//
//   getKind() {
//     return "square"
//   }
// }
//
// class Rectangle extends Shape {
//   constructor(public w: number, public h: number) {
//     super();
//   }
//
//   getKind() {
//     return "rectangle"
//   }
// }
//
// const shape: Shape = new Circle(3);
// const kind = shape.getKind();
//
// console.log(`kind: ${kind}:`, shape);
