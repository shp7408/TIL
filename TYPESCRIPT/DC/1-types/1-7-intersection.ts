{
    /*
    Intersection Types: & internWork 는 Student 타입도 되고, Worker 타입도 된다.
    */
    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.score, person.employeeId, person.work());
    }

    internWork({
        name: 'sh',
        score: 1,
        employeeId: 7408,
        work: () => {},
    })
}

