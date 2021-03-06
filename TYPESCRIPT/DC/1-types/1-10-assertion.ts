{
    /*
    Type Assertion ๐ฉ
    */

    function jsStrFunc(): any {
        return 10;
    }

    const result = jsStrFunc();
    // result.length ๋ช๋ฐฑํ๊ฒ result๋ string์ธ๋ฐ, any ํ์์ผ๋ก ๋ช์๋์ด ์์ด์,
    // string์์ ์ ๊ณต๋๋ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

    console.log((result as string).length); // ๊ทธ ๋, ์ฌ์ฉํ๋ ๊ฒ์ด as[ํ์] ์ด๋ค.
    console.log((<string>result).length); // ๋์ผํจ
    // ๋ณ์ as[ํ์]์ ๋ชํํ๊ฒ ๋ณ์๊ฐ [ํ์]์ธ ๊ฒฝ์ฐ์๋ง ์ฌ์ฉํ๋ค.
    // ๊ทธ๋ ์ง ์์ ๊ฒฝ์ฐ์๋ ์ปดํ์ผ ์๋ฌ, exception์ด ๋ฐ์ํ์ง๋ ์๋๋ค.
    // ๊ทธ์ ... undefined๊ฐ ๋ฐ ๋ฟ์ด๋ค.

    // assertion ์๋ชป ์ฌ์ฉํ์ฌ, app์ด ์ฃฝ๋ ๊ฒฝ์ฐ๋ ์์
    const wrong:any = 5;
    console.log((wrong as Array<number>).push(1)); // ๋ฐฐ์ด์ด ์๋๋ฐ, ๋ฐฐ์ด ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ฉด, ์๋ฌ๊ฐ ๋ฌ๋ค. ๐ฉ

    // ๊ทธ๋์, type assertion์ ์ ๋ง ์ ๋ง ๋ชํํ ๊ฒฝ์ฐ๊ฐ ์๋๋ผ๋ฉด, ์ฌ์ฉํ์ง ์๋๋ค.

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); // ์ ๋ง ๋ชํํ๊ฒ numbers๊ฐ ๋ฐฐ์ด์ธ ๊ฒฝ์ฐ์ ํด๋นํ๋ค.
    // !๊ฐ ์์ผ๋ฉด, numbers๊ฐ undefined ์ผ ์๋ ์๋ค๊ณ  ์ปดํ์ผ ์๋ฌ ๋ฐ์
    // !๊ฐ ์์ผ๋ฉด, ์ปดํ์ผ ์๋ฌ ๋ฐ์ X

    // ๊ทธ๋ฌ๋ฉด ์ ๋ง, assertions๋ฅผ ์ฌ์ฉ์ธ์  ํ๋๊ฐ?
    const button = document.querySelector('class')!; // ์ ๋ง ์ ๋ง ์กด์ฌํ๋ ๊ฒฝ์ฐ, !๋ฅผ ์ฌ์ฉํฉ๋๋ค.
    if(button) {
        button.nodeValue;
    }
}