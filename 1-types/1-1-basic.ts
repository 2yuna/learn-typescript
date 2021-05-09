{
  /**
   * Javascript
   * Primitve: 한 가지의 simple한 데이터를 담을 수 있는 원시타입
   *    number, string, boolean, bigint, symbol, null, undefined
   * Object: 복잡한 데이터를 담을 수 있는 객체타입
   *    function, array....
   */

  // number
  const num: number = 1;

  //string
  const str: string = "hello";

  //boolean
  const bool: boolean = false;

  //undefined: 값이 있는 지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; // 💩
  let person2: string | null;

  //unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "Hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unuable: void = undefined; // 💩

  // never
  /**
   * 예상치 못한 핸들링 할 수 없는 오류를 맞이했을 때
   * 함수에서 절대 리턴되지 않을 경우에 그것을 명시하기 위해서 쓰임
   */
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let nerverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
