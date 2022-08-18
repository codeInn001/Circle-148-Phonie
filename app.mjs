function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  // responsive navbar

  function displayNavbar() {
    const navLinks = document.querySelector(".navlinks");
    const showMenu = document.querySelector(".menu_bar");
    showMenu.addEventListener("click", () => {
      navLinks.classList.toggle("nav_active");
    });
  }

  displayNavbar();

  const MTN = [703, 706, 803, 806, 810, 813, 814, 816, 903, 906, 913];

  const AIRTEL = [708, 802, 808, 812, 701, 902, 901, 907];

  const GLO = [805, 807, 811, 815, 705, 905];
  const NINE_MOBILE = [809, 817, 818, 908, 909];

  const NTEL = [804];
  const SMILE = [702];
  const MULTILINKS = [709];

  const usersNumberInputField = document.querySelector(".tel");
  const submitBtn = document.querySelector(".submit-btn");
  const form = document.querySelector("form");
  const networkImage = document.querySelector(".network-image");
  const countryCodeWithPlus = "+234";
  const countryCode = "234";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userNumber = usersNumberInputField.value;
    let firstName = document.querySelector(".first_name").value || "";
    let lastName = document.querySelector(".last_name").value || "";

    function sliceInputValue() {
      if (userNumber.startsWith(countryCodeWithPlus)) {
        userNumber = userNumber.slice(countryCodeWithPlus.length);
      } else if (userNumber.startsWith(countryCode)) {
        userNumber = userNumber.slice(countryCode.length);
      }
    }

    sliceInputValue();

    const userNumberWithoutZero = Number(userNumber);
    const firstThreeDigit = userNumberWithoutZero.toString().slice(0, 3);
    const convertToNumber = Number(firstThreeDigit);

    let network;

    function checkNetwork() {
      if (MTN.includes(convertToNumber)) {
        network = "mtn";
      } else if (AIRTEL.includes(convertToNumber)) {
        network = "airtel";
      } else if (GLO.includes(convertToNumber)) {
        network = "glo";
      } else if (NINE_MOBILE.includes(convertToNumber)) {
        network = "9mobile";
      } else if (NTEL.includes(convertToNumber)) {
        network = "ntel";
      } else if (SMILE.includes(convertToNumber)) {
        network = "smile";
      } else if (MULTILINKS.includes(convertToNumber)) {
        network = "multilinks";
      } else {
        network = false;
      }
    }

    checkNetwork();

    function displayNetworkImage() {
      const image = document.createElement("img");
      const span = document.createElement("span");
      span.innerHTML = network
        ? `Hi, ${firstName} ${lastName} Your network provider is`
        : "Please enter a valid number and try again";

      image.setAttribute("src", network ? `./images/${network}.svg` : "");

      networkImage.classList.remove("hide");
      networkImage.classList.add("show");
      networkImage.innerHTML = "";
      networkImage.appendChild(span);
      networkImage.appendChild(image);
    }

    displayNetworkImage();
  });

  function autosuggest() {
    const input = document.querySelector("input.tel");
    const suggestions = document.querySelector(".suggestions");
    

    let ALL_NETWORK = [
      ...AIRTEL,
      ...MTN,
      ...GLO,
      ...MULTILINKS,
      ...NINE_MOBILE,
      ...NTEL,
      ...SMILE,
    ];

    input.addEventListener("input", (e) => {
      suggestions.classList.remove("hide");
      let inputValue = e.target.value;
      let lengthOfInput = e.target.value.length;

      suggestions.innerHTML = " ";
      ALL_NETWORK.forEach((networkLine) => {
        let matchLetter = networkLine
          .toString()
          .slice(0, inputValue.length - 1);

       

        if (matchLetter === inputValue.slice(1) && inputValue.length > 1) {
          suggestions.innerHTML += `<p>0${networkLine}</p>`;
        }
      });

      let elementChildren = Array.from(suggestions.children);

      elementChildren.forEach((element) => {
        element.addEventListener("click", (e) => {
          input.value = "0" + Number(` ${e.target.textContent}`);
          suggestions.classList.add("hide");
          input.focus();
        });
      });
    });
  }

  autosuggest();
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
