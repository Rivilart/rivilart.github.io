let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { // К каждой добавляется обработчик событий на клик
        let theme = this.dataset.theme; // Помещается в переменную название темы из атрибута data-theme
        applyTheme(theme); // Вызывается функция, которая меняет тему и передается в нее её название
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `styles/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; // Показывются все кнопки смены темы
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрывается кнопка для активной темы
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверка есть ли в LocalStorage записаное значение для 'theme' и присваевание его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяется светлая тема
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяется темная
    applyTheme('dark');
}