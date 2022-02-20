'use strict';

//JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting : interpreter 가 변수와 함수의 메모리 공간을 선언 전에,
// 미리 할당하는 것을 의미한다.

console.log('1');
// async 비동기 언제 코드가 실행될 지, 예측하지 못하는 함수
setTimeout(() => { // 지정한 시간이 지나면, 콜백 함수를 호출하는 것 
    console.log('2'); // callback 함수 : 우리가 전달해준 함수를 니가 나중에 불러줘
}, 2000);

setTimeout(() => console.log("222"), 3000); // 콜백함 수를 한 줄만 사용하는 경우 arrow fc 으로 사용
console.log('3');

// 콜백 함수를 2가지 경우 있다.
// === Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('Hello'));

// === Asynchronous callback 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'sh') && (password == 1234) ||
                (id === 'coder') && (password == 123)
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000 );
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'sh') {
                onSuccess({ name : 'sh', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('endter your id');
const password = prompt('endter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name} you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error)
    }
);






