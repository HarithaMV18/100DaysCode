let display_obj = {};
let add_ons_check = 1;
let totalCost = 0;
const styles = getComputedStyle(document.documentElement);
const bgColor1 = styles.getPropertyValue("--primary-marine-blue");
const bgColor2 = styles.getPropertyValue("--neutral-cool-gray");
const bgColor3 = styles.getPropertyValue("--primary-purplish-blue");
//next step button
const btn_next_step = document.querySelector(".next-step");
//active step
const side_bar_content_link = document.querySelectorAll(
  ".side-bar-content .active-section"
);
//active form content display
const form_class = document.querySelectorAll(".form-info");
//go back button
const go_back_btn = document.querySelector(".go-back-btn");
//toggle switch
const toggle_switch = document.querySelector("#check-box");
//check month
const check_month_plan = document.querySelector(".check-month");
//check year
const check_year_plan = document.querySelector(".check-year");
//monthly container
const monthly_box = document.querySelectorAll(".monthly-box");
//monthly child container
const m_child = document.querySelectorAll(".monthly");
//final step display details start
function finalStep(display_obj) {
  document.querySelector(".add-ons-selected-plan-name").innerHTML = "";
  document.querySelector(".add-ons-selected-plan-cost").innerHTML = "";
  const planName = document.querySelector("#check-box").checked
    ? "Yearly"
    : "Monthly";

  document.querySelector(".selected-plan-name h5").innerText =
    Object.keys(display_obj)[0] + "(" + planName + ")";
  document.querySelector(".selected-plan-name + h5").innerText =
    Object.values(display_obj)[0];
  totalCost = parseInt(
    Object.values(display_obj)[0].slice(
      1,
      Object.values(display_obj)[0].indexOf("/")
    )
  );

  for (let i = add_ons_check; i < Object.keys(display_obj).length; i++) {
    document
      .querySelector(".add-ons-selected-plan-name")
      .insertAdjacentHTML("beforeend", `<p>${Object.keys(display_obj)[i]}</p>`);
    document
      .querySelector(".add-ons-selected-plan-cost")
      .insertAdjacentHTML(
        "beforeend",
        `<p>${Object.values(display_obj)[i]}</p>`
      );
    totalCost =
      totalCost +
      parseInt(
        Object.values(display_obj)[i].slice(
          2,
          Object.values(display_obj)[i].indexOf("/")
        )
      );
  }
  document.querySelector(".total p").innerText = `Total (per ${
    planName === "Yearly" ? "year" : "month"
  })`;
  document.querySelector(".total h3").innerText = `$${
    JSON.stringify(totalCost) +
    Object.values(display_obj)[0].slice(
      Object.values(display_obj)[0].indexOf("/")
    )
  }`;
}
function displayPlan(selected_key, selected_value, rem) {
  if (selected_key !== "" && selected_value !== "" && rem !== "") {
    if (!rem) {
      display_obj[selected_key] = selected_value;
    } else {
      delete display_obj[selected_key];
    }
  } else {
    add_ons_check = 1;
    finalStep(display_obj);
  }
}

//final step display details end

//getting plan details start
function highlightPlan(e, child, planName) {
  child.forEach((item) => {
    item.classList.remove("active");
  });

  e.currentTarget.classList.add("active");
  let selected_key = e.currentTarget.querySelector(
    `.${planName}-plan h3`
  ).innerText;
  let selected_value = e.currentTarget.querySelector(
    `.${planName}-plan p`
  ).innerText;
  display_obj = {};
  displayPlan(selected_key, selected_value, false);
}

//getting plan details end
m_child.forEach((item) => {
  item.addEventListener("click", (e) => {
    highlightPlan(e, m_child, "monthly");
  });
});

//yearly container
const yearly_box = document.querySelectorAll(".yearly-box");

//yearly child container
const y_child = document.querySelectorAll(".yearly");
y_child.forEach((item) => {
  item.addEventListener("click", (e) => {
    highlightPlan(e, y_child, "yearly");
  });
});

const m_add_ons = document.querySelectorAll(".m-add-ons input");
m_add_ons.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let selected_key = e.currentTarget.value;
    let selected_value = document
      .querySelector(`#${e.currentTarget.id}`)
      .nextElementSibling.querySelector(".add-cost").innerText;
    if (item.checked) {
      document.querySelectorAll(".m-add-ons")[index].classList.add("active");

      displayPlan(selected_key, selected_value, false);
    } else {
      document.querySelectorAll(".m-add-ons")[index].classList.remove("active");
      displayPlan(selected_key, selected_value, true);
    }
  });
});
const y_add_ons = document.querySelectorAll(".y-add-ons input");
y_add_ons.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let selected_key = e.currentTarget.value;
    let selected_value = document
      .querySelector(`#${e.currentTarget.id}`)
      .nextElementSibling.querySelector(".add-cost").innerText;
    if (item.checked) {
      document.querySelectorAll(".y-add-ons")[index].classList.add("active");

      displayPlan(selected_key, selected_value, false);
    } else {
      displayPlan(selected_key, selected_value, true);
      document.querySelectorAll(".y-add-ons")[index].classList.remove("active");
    }
  });
});

//enabling yearly plan
const enableYearly = () => {
  for (let i = 0; i < yearly_box.length; i++) {
    monthly_box[i].style.display = "none";
    yearly_box[i].style.display = "flex";
  }
};

//enabling monthly plan
const enableMonthly = () => {
  for (let i = 0; i < monthly_box.length; i++) {
    monthly_box[i].style.display = "flex";
    yearly_box[i].style.display = "none";
  }
};

//highlighting active step
toggle_switch.addEventListener("click", (e) => {
  if (e.target.checked) {
    check_month_plan.style.color = bgColor2;
    check_year_plan.style.color = bgColor1;
    enableYearly();
  } else {
    check_month_plan.style.color = bgColor1;
    check_year_plan.style.color = bgColor2;
    enableMonthly();
  }
});

let count = 0;
const submitForm = (e) => {
  e.preventDefault();
};

//next step button

btn_next_step.addEventListener("click", (e) => {
  e.preventDefault();
  // const form_name = document.forms["form-class"]["name"].value;
  // const form_email = document.forms["form-class"]["email"].value;
  // const form_phone = document.forms["form-class"]["phone-number"].value;
  // if (form_name && form_email && form_phone) {
  if (btn_next_step.innerText !== "Confirm") {
    form_class[count].style.display = "none";
    side_bar_content_link[count].classList.remove("addBackground");
    count++;
    side_bar_content_link[count].classList.add("addBackground");
    form_class[count].style.display = "block";
    go_back_btn.style.display = "block";
    if (count === 3) {
      btn_next_step.innerText = "Confirm";
      btn_next_step.style.backgroundColor = bgColor3;
      displayPlan("", "", "");
    }
  } else {
    document.querySelector(".btn-section").style.display = "none";

    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".confirm-section").style.display = "block";
  }

  // btn_next_step.style.display = "none";
  // go_back_btn.style.display = "none";
  // document.querySelector(".confirm-section").style.display = "block";
  // } else {
  //   document
  //     .querySelectorAll(".error")
  //     .forEach((item) => (item.style.display = "flex"));
  // }
});

//back button
go_back_btn.addEventListener("click", (e) => {
  e.preventDefault();
  side_bar_content_link[count].classList.remove("addBackground");
  form_class[count].style.display = "none";
  count--;

  form_class[count].style.display = "block";
  side_bar_content_link[count].classList.add("addBackground");

  count === 0 ? (go_back_btn.style.display = "none") : "";
  if (count < 3) {
    btn_next_step.innerText = "Next Step";
    btn_next_step.style.backgroundColor = bgColor1;
  }
});

//final step change button
const gotoStep2 = () => {
  side_bar_content_link[count].classList.remove("addBackground");
  form_class[count].style.display = "none";
  count = count - 2;
  form_class[count].style.display = "block";
  side_bar_content_link[count].classList.add("addBackground");
};
