{
  // Array
  const fruits: string[] = ["π", "π"];
  const scores: Array<number> = [1, 3, 4];

  /**
   * λ κ°μ§ λ°©μμ μ°¨μ΄μ μ΄ νλ μλ€λ©΄,
   * readonlyλ Array<?>μμ μ§μλμ§ μλλ€.
   *
   * readonlyλ?
   * Objectμ λΆλ³μ±μ μ μ§ν΄μ€λ€.
   */
  function printArray(fruits: readonly string[]) {
    // fruits.push;
  }

  /**
   * Tuple -> interface, type alias, class
   * μλ‘ λ€λ₯Έ νμλ€μ νλμ λ°°μ΄μ λ΄μ μ μλ€.
   */
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  //Object Distructuring
  const [name, age] = student;
}
