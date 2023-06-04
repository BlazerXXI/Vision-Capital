$(document).ready(function () {
  // функциональность кнопки "меню бургер"
  $("#burgerMenu").click(function () {
    if ($(this).hasClass("burger-active")) {
      // Если кнопка имеет класс "burger-active"
      $(this).removeClass("burger-active"); // Удаляем класс "burger-active" у текущей нажатой кнопки
      $("#nav").removeClass("nav-active"); // Удаляем класс "nav-active" у элемента с id "nav"
    } else {
      // Если кнопка не имеет класса "burger-active"
      $(this).addClass("burger-active"); // Добавляем класс "burger-active" к текущей нажатой кнопке
      $("#nav").addClass("nav-active"); // Добавляем класс "nav-active" к элементу с id "nav"
      $("header").addClass("d-block");
    }
  });

  const timerOpenJoinNow = () => {
    const timer = setTimeout(() => {
      $("#popupJoinNow").removeClass("visually-hidden");
      clearTimeout(timer);
    }, 6000);
  };
  timerOpenJoinNow();

  $("#joinNowButton").click(() => {
    $("#popupJoinNow").removeClass("visually-hidden");
  });
  $("#closePopupButton").click(() => {
    $("#popupJoinNow").addClass("visually-hidden");
  });

  $(document).on("click", (event) => {
    if (event.target.id == "bgPopup") {
      $("#popupJoinNow").addClass("visually-hidden");
    }
  });
  $(document).on("click", (event) => {
    if (event.target.id == "joinNowButton") {
      $("#burgerMenu").removeClass("burger-active"); // Удаляем класс "burger-active" у текущей нажатой кнопки
      $("#nav").removeClass("nav-active"); // Удаляем класс "nav-active" у элемента с id "nav"
    }
  })(
    $(document).on("keydown", (event) => {
      if (event.keyCode == 27) {
        $("#popupJoinNow").addClass("visually-hidden");
      }
    })
  );
});
