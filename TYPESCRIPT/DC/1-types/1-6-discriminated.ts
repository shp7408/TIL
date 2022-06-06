{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail';
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    };

    const state2:FailState = {
        result: 'fail',
        reason: "nullllll",
    }
    printLoginState(state2);
}