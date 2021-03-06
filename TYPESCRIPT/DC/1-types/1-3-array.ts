{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: Array<number> = [1, 3, 4]; // Generics ν¨ν΄ μ°Έκ³ 

    function printArray(fruits: readonly string[]) { // readonly μΈ κ²½μ°, string[] ννλ‘λ§ μ°μ.  Array<number> μ λλ¦­ ννλ μ§μνμ§ μμ
        // fruits.push fruitsλ°°μ΄μ readonlyμ΄λ―λ‘, λ³κ²½(push)ν  μ μμ.
    }

    // Tuple -> interface, type alias, class λ‘ λμ²΄νμ¬ λ§μ΄ μ¬μ©νλ€.
    // indexλ‘ μ κ·Όνλ λ°©μμ κ°λμ±μ΄ λ¨μ΄μ§. μ΄λ€ λ³μμΈμ§ λͺμν  μ μλ κ²μ μΆμ²νλ€.
    let student: [string, number];
    student = ['name', 123];
    student[0]; // indexλ‘ μ κ·Ό μ, κ°λμ±μ΄ λ¨μ΄μ§.
    student[1];

     // object destructuring (κ΅¬μ‘° λΆν΄ ν λΉ : λ°°μ΄, κ°μ²΄μ μμ±μ ν΄μ²΄ν΄μ, κ·Έ κ°μ κ°λ³ λ³μμ λ΄μ μ μκ²νλ js, ts ννμ)
    const [name, age] = student;
    // κ·ΈλΌμλ λΆκ΅¬νκ³ , μ¬μ ν, λ°μ΄ν°κ° μ ν΄μ§ κ³³μ΄ μλλΌ, μ΄ λ°μ΄ν°λ₯Ό μ¬μ©νλ λΆλΆμμ μμλ‘ name, age λ₯Ό μ ν΄μ μ¬μ©ν¨;
    // ex) reactμμ useState return λ°μ λ, νν ννλ‘ μ¬μ©ν¨
}