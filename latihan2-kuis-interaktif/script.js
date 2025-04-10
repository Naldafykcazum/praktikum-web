// List pertanyaan kuis Resident Evil
const questions = [
    {
      question: "Jika f(x) = 2x² - 3x + 1, maka f(2) = ...",
      options: ["3", "5", "7", "11"],
      correct: 0
    },
    {
      question: "Perubahan energi pada setrika listrik adalah ...",
      options: ["Listrik ke panas", "Panas ke listrik", "Kimia ke panas", "Gerak ke panas"],
      correct: 0
    },
    {
      question: "Hormon yang mengatur kadar gula darah adalah ...",
      options: ["Insulin", "Adrenalin", "Estrogen", "Glukagon"],
      correct: 0
    },
    {
      question: "Apa yang menjadi latar belakang munculnya Perang Dunia I?",
      options: ["Pembunuhan Franz Ferdinand", "Invasi Polandia", "Perang Dingin", "Revolusi Rusia"],
      correct: 0
    },
    {
      question: "Kalimat efektif adalah kalimat yang ...",
      options: ["Singkat, jelas, dan logis", "Panjang dan detail", "Memiliki rima", "Bersifat puitis"],
      correct: 0
    },
    {
      question: "Fungsi utama sistem ekskresi pada manusia adalah ...",
      options: ["Mengeluarkan sisa metabolisme", "Menghasilkan energi", "Mengangkut oksigen", "Mencerna makanan"],
      correct: 0
    },
    {
      question: "Salah satu ciri ekonomi pasar adalah ...",
      options: ["Harga ditentukan oleh mekanisme pasar", "Semua diatur pemerintah", "Tidak ada kompetisi", "Produksi dikendalikan negara"],
      correct: 0
    },
    {
      question: "Negara yang pertama kali menggunakan sistem demokrasi adalah ...",
      options: ["Yunani", "Amerika Serikat", "Inggris", "Perancis"],
      correct: 0
    },
    {
      question: "Manakah dari berikut ini yang merupakan larutan elektrolit kuat?",
      options: ["NaCl", "C6H12O6", "CH3COOH", "NH3"],
      correct: 0
    },
    {
      question: "Konflik antara suku di dalam satu wilayah disebut konflik ...",
      options: ["Horizontal", "Vertikal", "Ideologis", "Antar negara"],
      correct: 0
    },
    {
      question: "Jika log₂(x) = 5, maka nilai x adalah ...",
      options: ["32", "16", "10", "25"],
      correct: 0
    },
    {
      question: "Bunyi hukum Newton II adalah ...",
      options: ["F = m × a", "Aksi = Reaksi", "Setiap benda diam tetap diam", "Energi tidak dapat diciptakan"],
      correct: 0
    },
    {
      question: "Peninggalan kerajaan Sriwijaya berupa prasasti yang terkenal adalah ...",
      options: ["Prasasti Kedukan Bukit", "Prasasti Ciaruteun", "Prasasti Talang Tuo", "Prasasti Kalasan"],
      correct: 0
    },
    {
      question: "Majas yang membandingkan dua hal secara eksplisit menggunakan kata 'seperti' adalah ...",
      options: ["Simile", "Metafora", "Personifikasi", "Hiperbola"],
      correct: 0
    },
    {
      question: "Zat yang tidak dapat dipisahkan lagi menjadi zat yang lebih sederhana disebut ...",
      options: ["Unsur", "Senayawa", "Campuran", "Larutan"],
      correct: 0
    },
    {
      question: "Alat untuk mengukur tekanan udara adalah ...",
      options: ["Barometer", "Termometer", "Higrometer", "Anemometer"],
      correct: 0
    },
    {
      question: "Teori yang menyatakan bahwa masyarakat berkembang dari sederhana ke kompleks adalah teori ...",
      options: ["Evolusi", "Revolusi", "Konflik", "Fungsionalisme"],
      correct: 0
    },
    {
      question: "Jika 3x - 2 = 10, maka nilai x adalah ...",
      options: ["4", "6", "5", "2"],
      correct: 0
    },
    {
      question: "Revolusi Industri pertama kali terjadi di negara ...",
      options: ["Inggris", "Jerman", "Amerika", "Prancis"],
      correct: 0
    },
    {
      question: "Fungsi utama mitokondria dalam sel adalah ...",
      options: ["Tempat respirasi sel", "Sintesis protein", "Pengatur osmosis", "Pencernaan sel"],
      correct: 0
    },
    {
        question: "Manakah yang termasuk reaksi redoks?",
        options: [
          "Zn + CuSO₄ → ZnSO₄ + Cu",
          "HCl + NaOH → NaCl + H₂O",
          "CaCO₃ → CaO + CO₂",
          "CH₃COOH + NaOH → CH₃COONa + H₂O"
        ],
        correct: 0
      },
      {
        question: "Unsur intrinsik cerpen yang menggambarkan waktu dan tempat disebut ...",
        options: ["Latar", "Tema", "Tokoh", "Amanat"],
        correct: 0
      },
      {
        question: "Siapa tokoh utama dalam pergerakan Budi Utomo?",
        options: ["Dr. Soetomo", "Ki Hajar Dewantara", "Moh. Hatta", "H.O.S. Tjokroaminoto"],
        correct: 0
      },
      {
        question: "Konstitusi pertama yang digunakan Indonesia setelah merdeka adalah ...",
        options: ["UUD 1945", "RIS 1949", "UUDS 1950", "Dekrit Presiden"],
        correct: 0
      },
      {
        question: "Jika gaya 20 N diberikan pada benda bermassa 4 kg, percepatannya adalah ...",
        options: ["5 m/s²", "4 m/s²", "2 m/s²", "0,5 m/s²"],
        correct: 0
      },
      {
        question: "Fungsi usus halus dalam sistem pencernaan adalah ...",
        options: [
          "Menyerap sari makanan",
          "Menghancurkan makanan kasar",
          "Menetralkan racun",
          "Menyimpan makanan sementara"
        ],
        correct: 0
      },
      {
        question: "Sosiologi disebut sebagai ilmu kategori karena ...",
        options: [
          "Membahas apa yang terjadi, bukan yang seharusnya",
          "Mempelajari norma dan nilai",
          "Mengarah pada penilaian moral",
          "Bersifat spekulatif"
        ],
        correct: 0
      },
      {
        question: "Kegiatan yang menambah nilai guna suatu barang disebut ...",
        options: ["Produksi", "Distribusi", "Konsumsi", "Investasi"],
        correct: 0
      },
      {
        question: "Jumlah elektron pada atom karbon (nomor atom 6) adalah ...",
        options: ["6", "12", "3", "4"],
        correct: 0
      },
      {
        question: "Pernyataan manakah yang merupakan kalimat fakta?",
        options: [
          "Air mendidih pada suhu 100°C di permukaan laut",
          "Belajar itu sangat menyenangkan",
          "Matematika adalah pelajaran tersulit",
          "Indonesia itu indah sekali"
        ],
        correct: 0
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
