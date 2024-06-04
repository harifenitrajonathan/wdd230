document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    calendar.innerHTML = `<h4>${month} ${year}</h4>`;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

    let table = '<table><thead><tr>';
    days.forEach(day => {
        table += `<th>${day}</th>`;
    });
    table += '</tr></thead><tbody><tr>';

    for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = new Date(year, date.getMonth(), i);
        if (i === 1 && currentDate.getDay() !== 0) {
            table += '<td colspan="' + currentDate.getDay() + '"></td>';
        }
        table += `<td>${i}</td>`;
        if (currentDate.getDay() === 6) {
            table += '</tr><tr>';
        }
    }
    table += '</tr></tbody></table>';

    calendar.innerHTML += table;
});
