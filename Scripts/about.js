import { navbar } from "../Components/navbar.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
import { user_prof } from "../Components/user_profile.js";
import { sidebar } from "../Scripts/navbar_des.js";
import { footer } from "../Components/footer.js";
let navbar_div = document.getElementById("ak-about-nav");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector("#hari_about_footer");
footer_div.innerHTML = footer();
append_cart_item_number();
user_prof();
sidebar();
