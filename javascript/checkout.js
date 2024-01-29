const inputs = document.querySelectorAll(".form-input");
const payButton = document.getElementById("pay-btn");
const shippingMethods = document.querySelectorAll("input[name='fraktmetod']");
const paymentMethods = document.querySelectorAll("input[name='betalningsmetod']");

const isRadioGroupChecked = (radioGroup) => {
  return Array.from(radioGroup).some((radio) => radio.checked);
};

const highlightRadioGroup = (groupName, groupLabels) => {
  const radios = document.querySelectorAll(`input[name='${groupName}']`);
  const anyChecked = Array.from(radios).some(radio => radio.checked);

  if (!anyChecked) {
    groupLabels.forEach(label => {
      label.classList.add("highlight-radio");
    });
  } else {
    groupLabels.forEach(label => {
      label.classList.remove("highlight-radio");
    });
  }
};

const checkInputs = () => {
  let allFilled = true;

  inputs.forEach((input) => {
    if (!input.value) allFilled = false;
  });

  if (
    !isRadioGroupChecked(shippingMethods) ||
    !isRadioGroupChecked(paymentMethods)
  ) {
    allFilled = false;
  }

  return allFilled;
};

const shippingMethodLabels = document.querySelectorAll("label[for^='postnord-']");
const paymentMethodLabels = document.querySelectorAll("label[for^='klarna'], label[for^='paypal'], label[for^='kort']");

const highlightEmpty = () => {
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("highlight");
    }
  });

  highlightRadioGroup('fraktmetod', shippingMethodLabels);
  highlightRadioGroup('betalningsmetod', paymentMethodLabels);
};

const removeHighlight = (input) => {
  input.classList.remove("highlight");
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    removeHighlight(input);
  });
});

const radioGroups = ["fraktmetod", "betalningsmetod"];
radioGroups.forEach((groupName) => {
  const radios = document.querySelectorAll(`input[name='${groupName}']`);
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      highlightRadioGroup(groupName);
    });
  });
});

payButton.addEventListener("click", (event) => {
  if (!checkInputs()) {
    event.preventDefault();
    highlightEmpty();
  }
});
