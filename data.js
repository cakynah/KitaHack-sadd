window.quizData = [
    {
        img: '🍎', imgBg: 'purple-bg',
        bm: 'Apakah nama buah ini dalam Bahasa Melayu?',
        bi: 'What is the name of this fruit in Malay?',
        options: { bm: ['Epal', 'Oren', 'Pisang', 'Mangga'], bi: ['Apple', 'Orange', 'Banana', 'Mango'] },
        correct: 0
    },
    {
        img: '🌧️', imgBg: 'blue-bg',
        bm: 'Apakah simbol ini dalam sains?',
        bi: 'What does this symbol represent in science?',
        options: { bm: ['Salji', 'Hujan', 'Ribut', 'Banjir'], bi: ['Snow', 'Rain', 'Storm', 'Flood'] },
        correct: 1
    },
    {
        img: '🔢', imgBg: 'lime-bg',
        bm: '12 + 8 = ?',
        bi: '12 + 8 = ?',
        options: { bm: ['18', '20', '22', '15'], bi: ['18', '20', '22', '15'] },
        correct: 1
    },
    {
        img: '🗺️', imgBg: 'yellow-bg',
        bm: 'Apakah ibu kota Malaysia?',
        bi: "What is Malaysia's capital city?",
        options: { bm: ['Johor Bahru', 'Penang', 'Kuala Lumpur', 'Ipoh'], bi: ['Johor Bahru', 'Penang', 'Kuala Lumpur', 'Ipoh'] },
        correct: 2
    }
];

window.lessonsData = {
    std1: {
        bm: {
            title: '🇲🇾 Bahasa Melayu (Tahun 1)',
            cards: [
                {
                    emoji: '📝', bg: 'purple-bg', tag: 'Modul 1', title: 'Huruf & Ejaan',
                    desc: 'Pelajari huruf abjad dan cara mengeja perkataan mudah.', time: '5 min', level: 'Mudah',
                    content: '<p>Mari belajar abjad A-Z! A untuk Ayam Gepuk 🐓, B untuk Bola ⚽.</p>',
                    content_bi: '<p>Let\'s learn A-Z! A for Apple 🍎, B for Ball ⚽.</p>'
                },

                {
                    emoji: '📝', bg: 'purple-bg', tag: 'Modul 2', title: 'ABC',
                    desc: 'Pelajari huruf abjad dan cara mengeja perkataan mudah.', time: '5 min', level: 'Mudah',
                    content: '<p>Mari belajar abjad A-Z! A untuk Ayam Gepuk 🐓, B untuk Bola ⚽.</p>',
                    content_bi: '<p>Let\'s learn A-Z! A for Apple 🍎, B for Ball ⚽.</p>'
                }
            ]
        },
        bi: {
            title: '🇬🇧 English (Standard 1)',
            cards: [
                {
                    emoji: '🔤', bg: 'blue-bg', tag: 'Module 1', title: 'Alphabet Fun',
                    desc: 'Learn A to Z with pictures.', time: '5 min', level: 'Easy',
                    content: '<p>Capital letters: A B C D...</p>',
                    content_bi: '<p>Capital letters: A B C D...</p>'
                }
            ]
        },
        math: {
            title: '🔢 Matematik (Tahun 1)',
            cards: [
                {
                    emoji: '➕', bg: 'lime-bg', tag: 'Modul 1', title: 'Tambah 1-10',
                    desc: 'Asas tambah nombor kecil.', time: '6 min', level: 'Mudah',
                    content: '<p>1 + 1 = 2 🍎 + 🍎 = 🍎🍎</p>',
                    content_bi: '<p>1 + 1 = 2 🍎 + 🍎 = 🍎🍎</p>'
                }
            ]
        },
        science: {
            title: '🔬 Sains (Tahun 1)',
            cards: [
                {
                    emoji: '🌱', bg: 'lime-bg', tag: 'Modul 1', title: 'Benda Hidup',
                    desc: 'Kenali benda hidup dan bukan hidup.', time: '7 min', level: 'Mudah',
                    content: '<p>Benda hidup perlukan air, makanan dan udara. 🏃‍♂️💨</p>',
                    content_bi: '<p>Living things need water, food and air. 🏃‍♂️💨</p>'
                }
            ]
        }
    },
    std2: {
        bm: {
            title: '🇲🇾 Bahasa Melayu (Tahun 2)',
            cards: [
                {
                    emoji: '📖', bg: 'blue-bg', tag: 'Modul 1', title: 'Ayat Mudah',
                    desc: 'Belajar membina ayat pendek.', time: '8 min', level: 'Sederhana',
                    content: '<p>Contoh: Saya suka main bola. ⚽</p>',
                    content_bi: '<p>Example: I like to play ball. ⚽</p>'
                }
            ]
        },
        bi: {
            title: '🇬🇧 English (Standard 2)',
            cards: [
                {
                    emoji: '💬', bg: 'purple-bg', tag: 'Module 1', title: 'Greetings',
                    desc: 'Say hello in different ways.', time: '8 min', level: 'Medium',
                    content: '<p>Good morning! Good afternoon!</p>',
                    content_bi: '<p>Good morning! Good afternoon!</p>'
                }
            ]
        },
        math: {
            title: '🔢 Matematik (Tahun 2)',
            cards: [
                {
                    emoji: '🔢', bg: 'purple-bg', tag: 'Modul 1', title: 'Nombor hingga 100',
                    desc: 'Kira dan tulis nombor.', time: '10 min', level: 'Sederhana',
                    content: '<p>Mari kira 10, 20, 30... hingga 100!</p>',
                    content_bi: '<p>Let\'s count 10, 20, 30... to 100!</p>'
                }
            ]
        },
        science: {
            title: '🔬 Sains (Tahun 2)',
            cards: [
                {
                    emoji: '🦁', bg: 'blue-bg', tag: 'Modul 1', title: 'Kitar Hidup',
                    desc: 'Perjalanan hidup haiwan.', time: '8 min', level: 'Sederhana',
                    content: '<p>Kitar hidup rama-rama: Telur -> Beluncas -> Kepompong -> Rama-rama 🦋</p>',
                    content_bi: '<p>Butterfly life cycle: Egg -> Caterpillar -> Pupa -> Butterfly 🦋</p>'
                }
            ]
        }
    },
    std3: {
        bm: {
            title: '🇲🇾 Bahasa Melayu (Tahun 3)',
            cards: [
                {
                    emoji: '🗣️', bg: 'lime-bg', tag: 'Modul 1', title: 'Karangan Pendek',
                    desc: 'Belajar tulis cerita ringkas.', time: '10 min', level: 'Sederhana',
                    content: '<p>Gunakan kata hubung seperti "dan" serta "tetapi".</p>',
                    content_bi: '<p>Use conjunctions like "and" and "but".</p>'
                }
            ]
        },
        bi: {
            title: '🇬🇧 English (Standard 3)',
            cards: [
                {
                    emoji: '📚', bg: 'yellow-bg', tag: 'Module 1', title: 'Reading Comprehension',
                    desc: 'Read and answer questions.', time: '12 min', level: 'Hard',
                    content: '<p>Read the story of the Brave Lion. 🦁</p>',
                    content_bi: '<p>Read the story of the Brave Lion. 🦁</p>'
                }
            ]
        },
        math: {
            title: '✖️ Matematik (Tahun 3)',
            cards: [
                {
                    emoji: '✖️', bg: 'purple-bg', tag: 'Modul 1', title: 'Asas Darab',
                    desc: 'Belajar sifir mudah.', time: '10 min', level: 'Sederhana',
                    content: '<p>2 x 2 = 4, 2 x 3 = 6...</p>',
                    content_bi: '<p>2 x 2 = 4, 2 x 3 = 6...</p>'
                }
            ]
        },
        science: {
            title: '🔬 Sains (Tahun 3)',
            cards: [
                {
                    emoji: '🧲', bg: 'yellow-bg', tag: 'Modul 1', title: 'Magnet',
                    desc: 'Kekuatan tarikan magnet.', time: '10 min', level: 'Sederhana',
                    content: '<p>Magnet ada kutub Utara dan Selatan. 🧲</p>',
                    content_bi: '<p>Magnets have North and South poles. 🧲</p>'
                }
            ]
        }
    }
};

window.aiResponses = {
    bm: [
        'Soalan bagus! 🎉 Ayat ialah kumpulan perkataan yang memberi maksud yang lengkap. Contohnya: "Saya suka makan nasi."',
        'Wah, kamu sangat rajin! 🌟 Matematik itu seronok bila kita faham konsepnya. Nak saya tunjukkan cara mudah?',
        'Fotosintesis ialah proses tumbuhan membuat makanan sendiri menggunakan cahaya matahari, air dan karbon dioksida. Keren kan? 🌿',
        'Malaysia adalah negara yang indah! 🇲🇾 Ibu kotanya ialah Kuala Lumpur. Ada banyak perkara menarik untuk dipelajari tentang Malaysia!',
        'Teruskan belajar! Kamu boleh buat itu! 💪 Ada soalan lain?',
        'Saya Cikgu Leo! 🦁 Saya di sini untuk membantu kamu menjadi pelajar yang hebat!',
        'Hai kawan! Mari kita teroka dunia ilmu bersama-sama hari ini! ✨',
        'Ingat, setiap perkara besar bermula dengan satu langkah kecil. Jom tatal ke atas untuk cari topik menarik!',
        'Jangan malu untuk bertanya ya! Bertanya itu kunci kebijaksanaan. 🔑',
    ],
    bi: [
        'Great question! 🎉 A sentence is a group of words that makes complete sense. For example: "I like to eat rice."',
        'You are so hardworking! 🌟 Mathematics is fun when we understand the concepts. Want me to show you an easy way?',
        'Photosynthesis is how plants make their own food using sunlight, water and carbon dioxide. Cool right? 🌿',
        'Malaysia is a beautiful country! 🇲🇾 Its capital city is Kuala Lumpur. There are many interesting things to learn about Malaysia!',
        'Keep learning! You can do it! 💪 Any other questions?',
        'I am Cikgu Leo! 🦁 I am here to help you become an amazing student!',
        'Hi friend! Let’s explore the world of knowledge together today! ✨',
        'Remember, everything big starts with one small step. Let\'s scroll up to find more topics!',
        'Don\'t be afraid to ask! Asking is the key to wisdom. 🔑',
    ]
};
