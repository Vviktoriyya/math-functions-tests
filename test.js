const { timeToMinutes } = require('./math');

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(`❌ ${message} | Очікувалось: ${expected}, Отримано: ${actual}`);
        process.exit(1);
    } else {
        console.log(`✅ ${message}`);
    }
}

try {
    //правильне
    assertEqual(timeToMinutes("00:00"), 0, '00:00 = 0 хв');
    //assertEqual(timeToMinutes("01:30"), 90, '01:30 = 90 хв');
    assertEqual(timeToMinutes("23:15"), 1395, '23:15 = 1395 хв');
    assertEqual(timeToMinutes("12:00"), 720, '12:00 = 720 хв');

    //помилку
    assertEqual(timeToMinutes("01:30"), 91, '01:30 = 90 хв');

    console.log("Усі тести пройдено успішно!");
} catch (e) {
    console.error("❌ Помилка під час тестування:", e.message);
    process.exit(1);
}