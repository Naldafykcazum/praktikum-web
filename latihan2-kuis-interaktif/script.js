// List pertanyaan kuis Resident Evil
const questions = [
    {
        question: "Siapa karakter utama di Resident Evil 2?",
        options: ["Leon S. Kennedy", "Chris Redfield", "Jill Valentine", "Albert Wesker"],
        correct: 0
    },
    {
        question: "Apa nama perusahaan farmasi yang menciptakan T-Virus?",
        options: ["Umbrella Corporation", "Tricell", "Blue Umbrella", "Neo-Umbrella"],
        correct: 0
    },
    {
        question: "Siapa karakter yang terkenal dengan kalimat 'STARS'?",
        options: ["Nemesis", "Tyrant", "William Birkin", "Hunk"],
        correct: 0
    },
    {
        question: "Apa nama kota yang terkena wabah virus di Resident Evil 2 dan 3?",
        options: ["Raccoon City", "Silent Hill", "Metro City", "Gotham City"],
        correct: 0
    },
    {
        question: "Senjata ikonik Leon di Resident Evil 4?",
        options: ["Red9", "Matilda", "Silver Ghost", "Punisher"],
        correct: 2
    },
    {
        question: "Siapa bos terakhir di Resident Evil 3 Remake?",
        options: ["Nemesis", "Tyrant", "William Birkin", "Alex Wesker"],
        correct: 0
    },
    {
        question: "Apa jenis virus yang menginfeksi Ethan Winters di Resident Evil 7?",
        options: ["T-Virus", "C-Virus", "Mold", "Las Plagas"],
        correct: 2
    },
    {
        question: "Siapa anggota keluarga Baker yang pertama kali menyerang Ethan di Resident Evil 7?",
        options: ["Jack Baker", "Marguerite Baker", "Lucas Baker", "Eveline"],
        correct: 0
    },
    {
        question: "Apa nama kapal yang karam di Resident Evil 7?",
        options: ["Queen Zenobia", "Titanic", "Annabelle", "USS Missouri"],
        correct: 2
    },
    {
        question: "Di Resident Evil Village, siapa karakter yang menjadi Lady Dimitrescu?",
        options: ["Jill Valentine", "Alcina Dimitrescu", "Mia Winters", "Ada Wong"],
        correct: 1
    },
    {
        question: "Apa nama virus yang digunakan di Resident Evil 5?",
        options: ["T-Virus", "Progenitor Virus", "Uroboros", "Las Plagas"],
        correct: 2
    },
    {
        question: "Siapa karakter yang bertarung melawan Albert Wesker di Resident Evil 5?",
        options: ["Chris Redfield & Sheva Alomar", "Leon & Ada Wong", "Claire & Moira", "Hunk & Nicholai"],
        correct: 0
    },
    {
        question: "Di Resident Evil 6, siapa yang berhadapan langsung dengan Ustanak?",
        options: ["Leon", "Chris", "Jake", "Ada"],
        correct: 2
    },
    {
        question: "Apa nama kultus yang berhubungan dengan Las Plagas di Resident Evil 4?",
        options: ["Los Iluminados", "The Connections", "The Family", "Neo-Umbrella"],
        correct: 0
    },
    {
        question: "Siapa pencipta T-Virus dalam lore Resident Evil?",
        options: ["Oswell E. Spencer", "William Birkin", "Alex Wesker", "James Marcus"],
        correct: 3
    },
    {
        question: "Apa jenis mutasi akhir dari William Birkin di Resident Evil 2?",
        options: ["G-5", "G-3", "G-4", "Tyrant Enhanced"],
        correct: 0
    },
    {
        question: "Siapa yang membantu Leon dalam Resident Evil 4?",
        options: ["Jill Valentine", "Ada Wong", "Rebecca Chambers", "Sheva Alomar"],
        correct: 1
    },
    {
        question: "Apa nama proyek yang menciptakan Nemesis?",
        options: ["Project Tyrant", "Project N", "Project STARS", "Nemesis Program"],
        correct: 3
    },
    {
        question: "Senjata legendaris yang selalu muncul di banyak game Resident Evil?",
        options: ["Lightning Hawk", "Rocket Launcher", "Samurai Edge", "Chicago Typewriter"],
        correct: 1
    },
    {
        question: "Siapa partner Claire Redfield di Resident Evil: Code Veronica?",
        options: ["Leon S. Kennedy", "Steve Burnside", "Carlos Oliveira", "Billy Coen"],
        correct: 1
    }
];

// Variabel penting
let currentQuestionIndex = 0;
let score = 0;

// Element HTML
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const finalScore = document.getElementById("final-score");

// Fungsi untuk menampilkan pertanyaan
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-option");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Fungsi untuk mereset tampilan
function resetState() {
    feedback.textContent = "";
    feedback.classList.remove("correct", "wrong");
    optionsContainer.innerHTML = "";
    nextButton.disabled = true;
}

// Fungsi untuk mengecek jawaban
function checkAnswer(selectedIndex) {
    let correctIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        feedback.textContent = "✔ Jawaban Benar!";
        feedback.classList.add("correct");
        score++;
    } else {
        feedback.textContent = "✖ Jawaban Salah!";
        feedback.classList.add("wrong");
    }

    // Aktifkan tombol next setelah menjawab
    nextButton.disabled = false;
}

// Fungsi untuk menampilkan pertanyaan berikutnya
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Fungsi untuk menampilkan hasil akhir
function showResult() {
    document.getElementById("quiz-container").classList.add("d-none");
    resultContainer.classList.remove("d-none");
    finalScore.textContent = `${score} / ${questions.length}`;
}

// Fungsi untuk mengulang kuis
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("d-none");
    document.getElementById("quiz-container").classList.remove("d-none");
    showQuestion();
}

// Event Listener untuk tombol Next
nextButton.addEventListener("click", nextQuestion);

// Jalankan pertama kali
showQuestion();

// Mengecek jawaban & nonaktifkan tombol lain
function checkAnswer(selectedIndex) {
    let correctIndex = questions[currentQuestionIndex].correct;
    let buttons = document.querySelectorAll(".btn-option");

    // Nonaktifkan semua tombol setelah memilih jawaban
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        feedback.textContent = "✔ Jawaban Benar!";
        feedback.classList.add("correct");
        score++;
    } else {
        feedback.textContent = "✖ Jawaban Salah!";
        feedback.classList.add("wrong");
    }

    nextButton.disabled = false;
}
