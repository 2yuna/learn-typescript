/**
 * 2.11 필수 타입! Discriminated Union 🚀
 *
 * Discriminated Union
 * Union 타입에 차별화되는, 이름이 동일한 타입을 둠으로써 간편하게 구분할 수 있는 것
 *
 * ✏️ 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로써 구분하기 쉽게 만들어준다.
 */
{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    state.result; // success or fail

    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  printLoginState({ reason: "failed" });
}
