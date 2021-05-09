{
  // Array
  const fruits: string[] = ["🍎", "🍌"];
  const scores: Array<number> = [1, 3, 4];

  /**
   * 두 가지 방식의 차이점이 하나 있다면,
   * readonly는 Array<?>에서 지원되지 않는다.
   *
   * readonly란?
   * Object의 불변성을 유지해준다.
   */
  function printArray(fruits: readonly string[]) {
    // fruits.push;
  }

  /**
   * Tuple -> interface, type alias, class
   * 서로 다른 타입들을 하나의 배열에 담을 수 있다.
   */
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  //Object Distructuring
  const [name, age] = student;
}
