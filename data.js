// Student Data Service
class StudentDataService {
    constructor() {
        this.students = [
            {
                id: "1001",
                name: "王东",
                weaknesses: ["Rabbit", "Convince", "Peripheral"],
                englishLevel: 2
            },
            {
                id: "1002",
                name: "张巍译",
                weaknesses: ["Future", "Grades", "Green"],
                englishLevel: 1
            },
            {
                id: "1003",
                name: "穆春蓉",
                weaknesses: ["Phenomenon", "Background", "Proof"],
                englishLevel: 3
            },
            {
                id: "1004",
                name: "Omar",
                weaknesses: ["Culture", "Convince", "Loop"],
                englishLevel: 2
            },
            {
                id: "1005",
                name: "Khalifa",
                weaknesses: ["Emotions", "Numbers", "Black"],
                englishLevel: 1
            }
        ];

        // Comprehensive vocabulary database - 50 words per difficulty level
        this.vocabularyDatabase = {
            level1: [
                { english: "Happy", arabic: "سعيد" },
                { english: "Book", arabic: "كتاب" },
                { english: "Water", arabic: "ماء" },
                { english: "Friend", arabic: "صديق" },
                { english: "School", arabic: "مدرسة" },
                { english: "Family", arabic: "عائلة" },
                { english: "Food", arabic: "طعام" },
                { english: "House", arabic: "بيت" },
                { english: "Play", arabic: "يلعب" },
                { english: "Learn", arabic: "يتعلم" },
                { english: "Color", arabic: "لون" },
                { english: "Dog", arabic: "كلب" },
                { english: "Cat", arabic: "قطة" },
                { english: "Tree", arabic: "شجرة" },
                { english: "Sun", arabic: "شمس" },
                { english: "Moon", arabic: "قمر" },
                { english: "Star", arabic: "نجمة" },
                { english: "Bird", arabic: "طائر" },
                { english: "Fish", arabic: "سمكة" },
                { english: "Flower", arabic: "زهرة" },
                { english: "Red", arabic: "أحمر" },
                { english: "Blue", arabic: "أزرق" },
                { english: "Big", arabic: "كبير" },
                { english: "Small", arabic: "صغير" },
                { english: "Good", arabic: "جيد" },
                { english: "Bad", arabic: "سيء" },
                { english: "Hot", arabic: "حار" },
                { english: "Cold", arabic: "بارد" },
                { english: "New", arabic: "جديد" },
                { english: "Old", arabic: "قديم" },
                { english: "Day", arabic: "يوم" },
                { english: "Night", arabic: "ليل" },
                { english: "Love", arabic: "حب" },
                { english: "Help", arabic: "مساعدة" },
                { english: "Work", arabic: "عمل" },
                { english: "Time", arabic: "وقت" },
                { english: "Hand", arabic: "يد" },
                { english: "Foot", arabic: "قدم" },
                { english: "Eye", arabic: "عين" },
                { english: "Ear", arabic: "أذن" },
                { english: "Mouth", arabic: "فم" },
                { english: "Head", arabic: "رأس" },
                { english: "Heart", arabic: "قلب" },
                { english: "Money", arabic: "مال" },
                { english: "Car", arabic: "سيارة" },
                { english: "Road", arabic: "طريق" },
                { english: "City", arabic: "مدينة" },
                { english: "Country", arabic: "بلد" },
                { english: "Music", arabic: "موسيقى" },
                { english: "Dance", arabic: "رقص" }
            ],
            level2: [
                { english: "Beautiful", arabic: "جميل" },
                { english: "Important", arabic: "مهم" },
                { english: "Interesting", arabic: "مثير للاهتمام" },
                { english: "Different", arabic: "مختلف" },
                { english: "Together", arabic: "معاً" },
                { english: "Because", arabic: "لأن" },
                { english: "Through", arabic: "عبر" },
                { english: "During", arabic: "خلال" },
                { english: "Before", arabic: "قبل" },
                { english: "After", arabic: "بعد" },
                { english: "Again", arabic: "مرة أخرى" },
                { english: "Always", arabic: "دائماً" },
                { english: "Never", arabic: "أبداً" },
                { english: "Sometimes", arabic: "أحياناً" },
                { english: "Usually", arabic: "عادة" },
                { english: "Maybe", arabic: "ربما" },
                { english: "Think", arabic: "يفكر" },
                { english: "Believe", arabic: "يؤمن" },
                { english: "Remember", arabic: "يتذكر" },
                { english: "Forget", arabic: "ينسى" },
                { english: "Understand", arabic: "يفهم" },
                { english: "Explain", arabic: "يشرح" },
                { english: "Describe", arabic: "يصف" },
                { english: "Discuss", arabic: "يناقش" },
                { english: "Agree", arabic: "يوافق" },
                { english: "Disagree", arabic: "يعترض" },
                { english: "Decide", arabic: "يقرر" },
                { english: "Choose", arabic: "يختار" },
                { english: "Prefer", arabic: "يفضل" },
                { english: "Want", arabic: "يريد" },
                { english: "Need", arabic: "يحتاج" },
                { english: "Hope", arabic: "يأمل" },
                { english: "Expect", arabic: "يتوقع" },
                { english: "Plan", arabic: "يخطط" },
                { english: "Prepare", arabic: "يحضر" },
                { english: "Practice", arabic: "يتدرب" },
                { english: "Improve", arabic: "يحسن" },
                { english: "Develop", arabic: "يطور" },
                { english: "Change", arabic: "يغير" },
                { english: "Grow", arabic: "ينمو" },
                { english: "Increase", arabic: "يزيد" },
                { english: "Decrease", arabic: "ينقص" },
                { english: "Start", arabic: "يبدأ" },
                { english: "Finish", arabic: "ينهي" },
                { english: "Continue", arabic: "يكمل" },
                { english: "Stop", arabic: "يتوقف" },
                { english: "Success", arabic: "نجاح" },
                { english: "Failure", arabic: "فشل" }
            ],
            level3: [
                { english: "Knowledge", arabic: "معرفة" },
                { english: "Information", arabic: "معلومات" },
                { english: "Technology", arabic: "تكنولوجيا" },
                { english: "Environment", arabic: "بيئة" },
                { english: "Economy", arabic: "اقتصاد" },
                { english: "Society", arabic: "مجتمع" },
                { english: "Government", arabic: "حكومة" },
                { english: "Education", arabic: "تعليم" },
                { english: "Communication", arabic: "اتصال" },
                { english: "Relationship", arabic: "علاقة" },
                { english: "Experience", arabic: "خبرة" },
                { english: "Opportunity", arabic: "فرصة" },
                { english: "Responsibility", arabic: "مسؤولية" },
                { english: "Achievement", arabic: "إنجاز" },
                { english: "Challenge", arabic: "تحدي" },
                { english: "Solution", arabic: "حل" },
                { english: "Problem", arabic: "مشكلة" },
                { english: "Decision", arabic: "قرار" },
                { english: "Strategy", arabic: "استراتيجية" },
                { english: "Management", arabic: "إدارة" },
                { english: "Organization", arabic: "منظمة" },
                { english: "Innovation", arabic: "ابتكار" },
                { english: "Creativity", arabic: "إبداع" },
                { english: "Inspiration", arabic: "إلهام" },
                { english: "Motivation", arabic: "دافع" },
                { english: "Dedication", arabic: "تفانٍ" },
                { english: "Perseverance", arabic: "مثابرة" },
                { english: "Discipline", arabic: "انضباط" },
                { english: "Consistency", arabic: "استمرارية" },
                { english: "Flexibility", arabic: "مرونة" },
                { english: "Adaptability", arabic: "تكيف" },
                { english: "Sustainability", arabic: "استدامة" },
                { english: "Efficiency", arabic: "كفاءة" },
                { english: "Effectiveness", arabic: "فعالية" },
                { english: "Productivity", arabic: "إنتاجية" },
                { english: "Quality", arabic: "جودة" },
                { english: "Excellence", arabic: "تميز" },
                { english: "Professionalism", arabic: "احترافية" },
                { english: "Leadership", arabic: "قيادة" },
                { english: "Teamwork", arabic: "عمل جماعي" },
                { english: "Collaboration", arabic: "تعاون" },
                { english: "Partnership", arabic: "شراكة" },
                { english: "Cooperation", arabic: "تعاون" },
                { english: "Competition", arabic: "منافسة" },
                { english: "Globalization", arabic: "عولمة" },
                { english: "Diversity", arabic: "تنوع" },
                { english: "Inclusion", arabic: "شمولية" },
                { english: "Equality", arabic: "مساواة" },
                { english: "Justice", arabic: "عدالة" }
            ]
        };

        // Translation dictionary for weakness words (English-Arabic only)
        this.translations = {
            "Rabbit": { arabic: "أرنب" },
            "Convince": { arabic: "إقناع" },
            "Peripheral": { arabic: "طرفي" },
            "Future": { arabic: "مستقبل" },
            "Grades": { arabic: "درجات" },
            "Green": { arabic: "أخضر" },
            "Phenomenon": { arabic: "ظاهرة" },
            "Background": { arabic: "خلفية" },
            "Proof": { arabic: "إثبات" },
            "Culture": { arabic: "ثقافة" },
            "Loop": { arabic: "حلقة" },
            "Emotions": { arabic: "عواطف" },
            "Numbers": { arabic: "أرقام" },
            "Black": { arabic: "أسود" }
        };
    }

    // Get student by ID
    getStudentById(studentId) {
        return this.students.find(student => student.id === studentId);
    }

    // Get all student IDs for validation
    getAllStudentIds() {
        return this.students.map(student => student.id);
    }

    // Get weakness data with translations for a student
    getStudentWeaknessData(studentId) {
        const student = this.getStudentById(studentId);
        if (!student) return null;

        const weaknessData = student.weaknesses.map(weakness => ({
            english: weakness,
            arabic: this.translations[weakness]?.arabic || weakness
        }));

        return {
            student: student,
            weaknesses: weaknessData,
            gameDifficulty: this.getGameDifficulty(student.englishLevel),
            isGuestMode: false
        };
    }

    // Get guest mode data with vocabulary from specified difficulty level
    getGuestModeData(difficultyLevel = 2) {
        const levelKey = `level${difficultyLevel}`;
        const vocabulary = this.vocabularyDatabase[levelKey] || this.vocabularyDatabase.level2;

        // Select random words from the vocabulary database
        const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
        const selectedWords = shuffled.slice(0, Math.min(20, vocabulary.length)); // Select 20 random words

        const guestData = {
            student: {
                id: "guest",
                name: "Guest User",
                englishLevel: difficultyLevel
            },
            weaknesses: selectedWords.map(word => ({
                english: word.english,
                arabic: word.arabic
            })),
            gameDifficulty: this.getGameDifficulty(difficultyLevel),
            isGuestMode: true
        };

        return guestData;
    }

    // Get mixed mode data for students (combines weakness words with level vocabulary)
    getStudentMixedModeData(studentId) {
        const student = this.getStudentById(studentId);
        if (!student) return null;

        const levelKey = `level${student.englishLevel}`;
        const vocabulary = this.vocabularyDatabase[levelKey] || this.vocabularyDatabase.level2;

        // Get student weakness words
        const weaknessWords = student.weaknesses.map(weakness => ({
            english: weakness,
            arabic: this.translations[weakness]?.arabic || weakness,
            isWeakness: true
        }));

        // Get additional vocabulary words to fill the game
        const additionalWordsCount = this.getGameDifficulty(student.englishLevel).wordPairsPerRound - weaknessWords.length;
        let additionalWords = [];

        if (additionalWordsCount > 0) {
            // Filter out words that are already in weaknesses
            const weaknessEnglishWords = new Set(weaknessWords.map(w => w.english));
            const filteredVocabulary = vocabulary.filter(word => !weaknessEnglishWords.has(word.english));

            // Select random additional words
            const shuffled = [...filteredVocabulary].sort(() => Math.random() - 0.5);
            additionalWords = shuffled.slice(0, additionalWordsCount).map(word => ({
                english: word.english,
                arabic: word.arabic,
                isWeakness: false
            }));
        }

        const allWords = [...weaknessWords, ...additionalWords];

        return {
            student: student,
            weaknesses: allWords,
            gameDifficulty: this.getGameDifficulty(student.englishLevel),
            isGuestMode: false
        };
    }

    // Determine game difficulty based on English level
    getGameDifficulty(level) {
        switch(level) {
            case 1:
                return {
                    timerDuration: 120, // 2 minutes for beginners
                    bubbleSize: 'large',
                    animationSpeed: 'slow',
                    wordPairsPerRound: 6 // 6 word pairs = 12 bubbles (easier for beginners)
                };
            case 2:
                return {
                    timerDuration: 90, // 1.5 minutes for intermediate
                    bubbleSize: 'medium',
                    animationSpeed: 'normal',
                    wordPairsPerRound: 12 // 12 word pairs = 24 bubbles
                };
            case 3:
                return {
                    timerDuration: 60, // 1 minute for advanced
                    bubbleSize: 'small',
                    animationSpeed: 'fast',
                    wordPairsPerRound: 18 // 18 word pairs = 36 bubbles (fits screen well)
                };
            default:
                return this.getGameDifficulty(2);
        }
    }

    // Store current student data in localStorage
    storeCurrentStudent(studentData) {
        localStorage.setItem('currentStudent', JSON.stringify(studentData));
    }

    // Retrieve current student data from localStorage
    getCurrentStudent() {
        const stored = localStorage.getItem('currentStudent');
        return stored ? JSON.parse(stored) : null;
    }

    // Clear current student data
    clearCurrentStudent() {
        localStorage.removeItem('currentStudent');
    }
}

// Create global instance
window.studentDataService = new StudentDataService();