
 function toggleClass(element, class1, class2) {
    if (element.classList.contains(class1)) {
      element.classList.replace(class1, class2);
    } else {
      element.classList.replace(class2, class1);
    }
};
   // Функция для переключения темы
 function toggleTheme() {
    var body = document.querySelector("body");
    body.classList.toggle("white");
    var article = document.querySelectorAll("article");
    for (var i = 0; i < article.length; i++) {
       article[i].classList.toggle("whitearticle");
    };
    var navblock1 = document.querySelector("#navblock-1");
    toggleClass(navblock1, "navblock-1", "whitenavblock1");
    var navblock2 = document.querySelector("#navblock-2");
    toggleClass(navblock2, "navblock-2", "whitenavblock2");
    var topic = document.querySelectorAll("#topic");
    for (var i = 0; i < topic.length; i++) {
        toggleClass(topic[i], "topic", "whitetopic");
     };
     for (var i = 0; i < topic.length; i++) {
        toggleClass(topic[i], "active", "whiteactive");
     };
    var home = document.querySelector("#home");
    toggleClass(home, "home", "whitehome");
    var up = document.querySelector("#up");
    toggleClass(up, "up", "whiteup");
    var span = document.querySelectorAll("span");
    for (var i = 0; i < span.length; i++) {
        toggleClass(span[i], "code", "whitecode");
     };
};
// Навешиваем обработчик события на кнопку
var toggleThemeButton = document.querySelector("#toggle-theme-button");
toggleThemeButton.addEventListener("click", toggleTheme);