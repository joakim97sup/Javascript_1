function myFunction() {

    let quizQuestions = [
        { question: "1", country: "Denmark", answer: "Copenhagen", correct: "false" },
        { question: "2", country: "Germany", answer: "Berlin", correct: "false" },
        { question: "3", country: "France", answer: "Paris", correct: "false" }
    ];
    questions = 0;
    score = 0;

    quizQuestions.forEach(quizQuestion => {
        let myAnswer = prompt("What is the captiol of " + quizQuestion.country, "Answer here");

        if (quizQuestion.answer == myAnswer) {
            questions++
            score++
        } else {
            questions++
        }
    });
    alert("you got " + score + " out of " + questions + " answers correct");
}

