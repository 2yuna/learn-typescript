{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /**
     * BEANS_GRAM_PER_SHOT은
     * Class 내부에서 연결된 정보이고 변하지 않는 숫자이다.
     * 이런 경우 멤버변수로 작성하게 되면 클래스로 만드는 object마다 해당 정보가 포함되게 된다.
     * (Object마다 변하지 않는 값이 포함될 필요가 없다)
     * 이처럼 클래스에서 한 번 정의되어지고 이 클래스를 이용한 오브젝트 사이에서 다 공유가 될 수 있는 아이들은
     * 이렇게 멤버변수로 두게되면 오브젝트를 만들때마다 중복적으로 데이터가 생성되기 때문에 메모리 낭비가 될 수 있다.
     * 이 경우 static 키워드를 붙여 클래스 레벨로 만드는 것이 좋다.
     */
    static BEANS_GRAM_PER_SHOT: number = 7; //class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}
