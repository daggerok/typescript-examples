main();

function main() {

  const circle: Shape = { kind: 'circle', radius: 3 };
  const square: Shape = { kind: 'square', size: 6 };
  const rectangle: Shape = { kind: 'rectangle', w: 2, h: 6 };

  getKindOf(circle);
  getKindOf(rectangle);
  getKindOf(square);
}

type Shape =
  { kind: 'circle', radius: number } |
  { kind: 'square', size: number } |
  { kind: 'rectangle', w: number, h: number };

function getKindOf(shape: Shape) {
  switch (shape.kind) {
    case 'circle': return printShape(shape);
    case 'rectangle': return printShape(shape);
    case 'square': return printShape(shape);
  }
  assertNeverOf(shape); // to see effect of never type - just comment out one of the cases...
}

function printShape(shape: Shape) {
  console.log(`kind: ${shape.kind}:`, shape);
}

function assertNeverOf(obj?: never) {
  throw Error('nevarrr!!111one...');
}
