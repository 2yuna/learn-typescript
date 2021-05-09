// 2.13 Enum은 무엇이고 좋은건가?
{
  /**
   * Enum: 여러가지의 관련된 상수의 값들을 한 곳에 모아서 정의할 수 있도록 도와주는 타입
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // Enum의 이름은 첫글자만 대문자로 하는 것이 통상적인 규칙
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day = Days.Saturday;
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Wednesday";

  /**
   * ❗️ 다른 언어에선 Enum이 유용하게 쓰이지만,
   * TypeScript에선 Enum을 가급적 사용하지 않는 것이 좋다.
   *
   * ⚠️ TypeScript에서의 Enum의 문제점
   * Enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당 가능하다.
   * Enum을 사용하면 타입이 정확하게 보장되지 않는다.
   * Union 타입으로 대체 가능
   */
}
