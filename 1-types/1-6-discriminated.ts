/**
 * 2.11 νμ νμ! Discriminated Union π
 *
 * Discriminated Union
 * Union νμμ μ°¨λ³νλλ, μ΄λ¦μ΄ λμΌν νμμ λ μΌλ‘μ¨ κ°νΈνκ² κ΅¬λΆν  μ μλ κ²
 *
 * βοΈ μ΄λ€ μΌμ΄μ€λ  κ³΅ν΅μ μΈ νλ‘νΌν°λ₯Ό κ°μ§κ³  μμμΌλ‘μ¨ κ΅¬λΆνκΈ° μ½κ² λ§λ€μ΄μ€λ€.
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
  // success -> π body
  // fail -> π­ reason
  function printLoginState(state: LoginState) {
    state.result; // success or fail

    if (state.result === "success") {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  }
  printLoginState({ reason: "failed" });
}
