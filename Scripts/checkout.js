import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
import { user_prof } from "../Components/user_profile.js";

document.querySelector("#navbar_append_div").innerHTML = navbar();
append_cart_item_number();
user_prof();
document.getElementById("ak-footer").innerHTML = footer();
let proceed_btn = document.getElementById("ak-place-order-btn");
proceed_btn.onclick = () => {
  UserDetails();
};
let name = [];
const UserDetails = () => {
  let first_name = document.getElementById("ak-first-name").value;
  let last_name = document.getElementById("ak-last-name").value;
  let full_name = first_name + " " + last_name;
  console.log(full_name);
  name.push(full_name);
  localStorage.setItem("Custumer_name", JSON.stringify(name));
  let state = document.getElementById("ak-region").value;
  let house_no = document.getElementById("ak-hs_no").value;
  let city = document.getElementById("ak-city").value;
  let pin_code = document.getElementById("ak-pin-code").value;
  let phone_number = document.getElementById("ak-phone").value;
  let select_card_type = document.getElementById("ak-select-card-type").value;

  window.location.href = "payment.html";
};
