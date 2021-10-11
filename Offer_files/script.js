(function () {
  "use strict";
  const opt1 = document.querySelector(".opt1");
  const opt2 = document.querySelector(".opt2");
  const flexSwitch = document.getElementById("flexSwitchCheckChecked");
  if (flexSwitch) {
    flexSwitch.addEventListener("click", () => {
      opt1.classList.toggle("hide");
      opt2.classList.toggle("hide");
    });
  }
})();

(function () {
  "use strict";
  function radioButtonBolder(radio_group) {
    for (let radio of radio_group) {
      radio.addEventListener("change", () => {
        for (let otherRadio of radio_group) {
          otherRadio.parentElement.children[1].classList.remove(
            "table-radio-selected"
          );
        }
        radio.parentElement.children[1].classList.add("table-radio-selected");
      });
    }
  }
  const mtpl_radios = document.querySelectorAll(
    ".opt2 .mtpl input[type=radio]"
  );
  radioButtonBolder(mtpl_radios);
  const casco_radios = document.querySelectorAll(
    ".opt2 .casco input[type=radio]"
  );
  radioButtonBolder(casco_radios);
})();

(function () {
  "use strict";
  const radioTierClass = document.getElementsByClassName("radio-tier");

  const removeSelectedClasses = function () {
    for (var i = 0; i < radioTierClass.length; i++) {
      const curRadioTierList = radioTierClass[i];
      curRadioTierList.previousSibling.previousSibling.textContent = "Vali";
      const pricingTable =
        curRadioTierList.parentElement.parentElement.parentElement
          .parentElement;
      pricingTable.classList.remove("selected-tier");
      pricingTable.classList.add("unselected-tier");
    }
  };

  const myFunction = function () {
    removeSelectedClasses();
    const pricingTable =
      this.parentElement.parentElement.parentElement.parentElement;
    const vali = this.previousSibling.previousSibling;
    vali.textContent = "Valitud";
    pricingTable.classList.remove("unselected-tier");
    pricingTable.classList.add("selected-tier");
  };

  for (var i = 0; i < radioTierClass.length; i++) {
    radioTierClass[i].addEventListener("change", myFunction, false);
  }
})();
