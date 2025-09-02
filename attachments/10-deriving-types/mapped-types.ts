type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  times: (a: number, b: number) => number;
};

type Result<T> = {
  [Key in keyof T]: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
  times(a: number, b: number) {
    return a * b;
  },
};

let mathResults: Result<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(1, 2),
  times: mathOperations.times(1, 2),
};
