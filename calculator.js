let outputScreen = document.getElementById("input");
      function Display(num) {
        outputScreen.value += num;
      }
      function Calculator() {
        try {
          outputScreen.value = eval(outputScreen.value);
        } catch {
          alert("invalid");
        }
      }
      function Clear() {
        outputScreen.value = "";
      }
      function Delete() {
        outputScreen.value = outputScreen.value.slice(0, -1);
      }