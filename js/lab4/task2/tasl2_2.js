let textInput = document.getElementById("textInput");
    let boldButton = document.getElementById("boldButton");
    let italicButton = document.getElementById("italicButton");
    let underlineButton = document.getElementById("underlineButton");
    let colorInput = document.getElementById("colorInput");
    let uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
    let clearFormattingButton = document.getElementById("clearFormattingButton");
    let formattedTextContainer = document.getElementById("formattedTextContainer");

    boldButton.addEventListener("click", function() {
      applyFormatting("bold");
    });

    italicButton.addEventListener("click", function() {
      applyFormatting("italic");
    });

    underlineButton.addEventListener("click", function() {
      applyFormatting("underline");
    });

    colorInput.addEventListener("input", function() {
      applyFormatting("color");
    });

    uppercaseCheckbox.addEventListener("change", function() {
      applyFormatting("uppercase");
    });

    clearFormattingButton.addEventListener("click", function() {
      clearFormatting();
    });

    function applyFormatting(format) {
      let text = textInput.value;
      let formattedText = formattedTextContainer.innerHTML;

      switch (format) {
        case "bold":
          formattedText = "<b>" + formattedText + "</b>";
          break;
        case "italic":
          formattedText = "<i>" + formattedText + "</i>";
          break;
        case "underline":
          formattedText = "<u>" + formattedText + "</u>";
          break;
        case "color":
         
          formattedText = "<spa let color = colorInput.value;n style='color:" + color + "'>" + formattedText + "</span>";
          break;
        case "uppercase":
          if (uppercaseCheckbox.checked) {
            formattedText = formattedText.toUpperCase();
          }
          break;
      }

      formattedTextContainer.innerHTML = formattedText;
    }

    function clearFormatting() {
      formattedTextContainer.innerHTML = textInput.value;
    }

    textInput.addEventListener("input", function() {
      let text = textInput.value;
      formattedTextContainer.innerHTML = text;
    });