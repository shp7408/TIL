{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resource:ResourceLoadState) {
    switch(resource.state) {
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`😃 ${resource.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${resource.reason}`);
        break;
      default:
        throw Error('invalid state!');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
