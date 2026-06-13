function getThirdSaturday(year, month) {
    const firstDay = new Date(year, month, 1);
    const firstSaturday = 1 + (6 - firstDay.getDay() + 7) % 7;
    return new Date(year, month, firstSaturday + 14);
}

function getNextThirdSaturday() {
    const now = new Date();           // Uses system date/time
    const year = now.getFullYear();
    const month = now.getMonth();

    let candidate = getThirdSaturday(year, month);

    // If today is past (or on) the third Saturday, move to next month
    if (now > candidate) {
        let nextMonth = month + 1;
        let nextYear = year;
        if (nextMonth > 11) {
            nextMonth = 0;
            nextYear++;
        }
        candidate = getThirdSaturday(nextYear, nextMonth);
    }

    return candidate;
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function daysUntil(targetDate) {
    const now = new Date();
    const diffTime = targetDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function display() {
    const nextDate = getNextThirdSaturday();

    document.getElementById('date').textContent = formatDate(nextDate);

    const daysLeft = daysUntil(nextDate);
    document.getElementById('days').textContent =
        daysLeft > 0
            ? `${daysLeft} day${daysLeft > 1 ? 's' : ''} from today`
            : "Today is the third Saturday!";
}

// Run immediately
display();
