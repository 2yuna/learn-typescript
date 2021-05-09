// 2.9 타입스크립트의 꽃 🌷 Type Alias
{
  /**
   * Type Aliases
   * 새로운 타입을 내가 정의할 수 있다!
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "yona",
    age: 12,
  };

  /**
   * String Literal Types
   * 타입을 문자열로도 지정할 수 있다!
   *
   * ✏️ 해당 타입으로 선언한 변수는 타입이 담고 있는 문자열의 값만을 담을 수 있다.
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
