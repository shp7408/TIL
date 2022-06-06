{
    /*
     * Union Types: OR
    */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');
    //    move('lala'); // error
    type TileSize = 8 | 16 | 32;
    const tile1: TileSize = 16;
    //    const tile2: TileSize = 33; // error

    // function: login -> success, fail
    //    type LoginResult = 'success' | 'fail';
    //    function showLoginResult(result:LoginResult) {
    //         if (result === 'success') {
    //             console.log(result);
    //         } else {
    //             console.log(result, "why?");
    //         }
    //     }

    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState;
    // function login(id: string, password: string): LoginState {
    //     return {
    //         response: {
    //             body: 'logged in!',
    //         },
    //     };
    // };

    // printLoginState(state: LoginState)
    // success -> body
    // fail -> reason 출력

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(state.response.body);
        } else if ('reason' in state) {
            console.log(state.reason);
        }
    };

    const state1:FailState = {
        reason: "nullllll",
    }
    printLoginState(state1);
}