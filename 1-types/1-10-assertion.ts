// 2.15 건방진 녀석 Type Assertion!
// 알아두면 좋지만 사용하면 위험할 수 있는 Type Assertion
{
  /**
   * Type Assertions 💩
   * 100% 장담할 경우에만 사용해야한다.
   *
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱
  // !는 무조건 null(undefined)이 아니라고 정의하는 것

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
}
