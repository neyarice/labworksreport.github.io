$(document).ready(function() {
    // Ініціалізуємо слайдер
    $("#slider").slider({
      range: "min",
      min: 0,
      max: 100,
      value: 50,
      slide: function(event, ui) {
        // Оновлюємо значення вибраного числа у текстовому полі
        $("#selectedValue").val(ui.value);
      }
    });
    
    // Оновлюємо значення вибраного числа за замовчуванням
    $("#selectedValue").val($("#slider").slider("value"));
  });


  $(document).ready(function() {
    $("#menu-toggle").click(function() {
      $("#menu").toggle("fast");
    });
  });


  $(document).ready(function() {
    $("#datepicker").datepicker();
  });