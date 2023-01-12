import MenuBar from "./components/MenuBar";
import MenuBartwo from "./components/MenuBartwo";
import MenuBarThree from "./components/MenuBarThree";
import MenuBarFour from "./components/MenuBarFour";
import { useRef, useState } from "react";
import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import "./styles/SelectPlan.css";
import thanks from "./images/icon-thank-you.svg";

function App() {
  const [formStep, SetFormStep] = useState(0);
  const [finalSummary, SetFinalSummary] = useState("");
  const [finalPrice, SetFinalPrice] = useState();
  const [emailError, SetEmailError] = useState("");
  const [numberError, SetNumberError] = useState("");
  const [total, SetTotal] = useState("");
  const [totalTag, SetTotalTag] = useState("/mo");
  const refOnlineService = useRef(null);
  const refLargerStorage = useRef(null);
  const refCustomProfile = useRef(null);
  const refArcadeCard = useRef(null);
  const refAdvancedCard = useRef(null);
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refNumber = useRef(null);
  const refPro = useRef(null);
  const refChosenPlan = useRef(null);
  const refOnlineChecked = useRef(null);
  const refStorageChecked = useRef(null);
  const refCustomChecked = useRef(null);
  const [arcadeValue, SetArcadeValue] = useState("$9/mo");
  const [advancedValue, SetAdvancedValue] = useState("$12/mo");
  const [proValue, SetProValue] = useState("$15/mo");
  const [addOns, SetAddons] = useState("$1/mo");
  const [chosenPlanDuration, SetChosenPlanDuration] = useState("monthly");
  const [largerStorage, SetLargerStorage] = useState("$2/mo");
  const [profilePrice, SetProfilePrice] = useState("$2/mo");

  const handleArcadeCard = () => {
    refArcadeCard.current.classList.add("bg-teal-100");
    refArcadeCard.current.classList.add("border-indigo-900");
    refAdvancedCard.current.classList.remove("bg-teal-100");
    refAdvancedCard.current.classList.remove("border-indigo-900");
    refPro.current.classList.remove("bg-teal-100");
    refPro.current.classList.remove("border-indigo-900");
    SetFinalSummary("Arcade");
  };

  const handleAdvancedCard = () => {
    refAdvancedCard.current.classList.add("bg-teal-100");
    refAdvancedCard.current.classList.add("border-indigo-900");
    refArcadeCard.current.classList.remove("bg-teal-100");
    refArcadeCard.current.classList.remove("border-indigo-900");
    refPro.current.classList.remove("bg-teal-100");
    refPro.current.classList.remove("border-indigo-900");
    SetFinalSummary("Advanced");
  };

  const handleProCard = () => {
    refPro.current.classList.add("bg-teal-100");
    refPro.current.classList.add("border-indigo-900");
    refAdvancedCard.current.classList.remove("bg-teal-100");
    refAdvancedCard.current.classList.remove("border-indigo-900");
    refArcadeCard.current.classList.remove("bg-teal-100");
    refArcadeCard.current.classList.remove("border-indigo-900");
    SetFinalSummary("Pro");
  };

  const handlePersonalInfoClick = (e) => {
    /* e.preventDefault();
    const numberErrorId = document.getElementById("numbererror");
    const emailErrorId = document.getElementById("emailerror");
    const nameError = document.getElementById("nameerror");

    if (refName.current.value === "") {
      nameError.classList.remove("hidden");
    } else {
      nameError.classList.add("hidden");
    }

    if (refEmail.current.value === "") {
      SetEmailError("This field is required");
      emailErrorId.classList.remove("hidden");
    } else if (!isEmail(refEmail.current.value)) {
      SetEmailError("Not a valid email");
      emailErrorId.classList.remove("hidden");
    } else {
      emailErrorId.classList.add("hidden");
    }

    if (refNumber.current.value === "") {
      SetNumberError("This field is required");
      numberErrorId.classList.remove("hidden");
    } else if (!isNumber(refNumber.current.value)) {
      SetNumberError("Not a valid Phone Number");
      numberErrorId.classList.remove("hidden");
    } else {
      numberErrorId.classList.add("hidden");
    }
    */

    // if (
    // refName.current.value != "" &&
    //refEmail.current.value != "" &&
    //isEmail(refEmail.current.value) &&
    //refNumber.current.value != "" &&
    //isNumber(refNumber.current.value)
    //) {
    SetFormStep((cur) => cur + 1);
    //}
  };

  const isEmail = () => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      refEmail.current.value
    );
  };

  const isNumber = () => {
    return /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      refNumber.current.value
    );
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    SetFormStep((cur) => cur + 1);
  };

  const handleGoBackClick = (e) => {
    e.preventDefault();
    SetFormStep((cur) => cur - 1);
  };

  const ExtraCardInfo = () => {
    const extraInfo = document.getElementsByClassName("yearly");
    const toggler = document.getElementById("toggle-switch");
    const monthly = document.getElementById("monthly");
    const yearly = document.getElementById("yearly");
    for (let i = 0; i < extraInfo.length; i++) {
      if (toggler.checked === true) {
        extraInfo[i].classList.remove("hidden");
        monthly.classList.remove("font-semibold");
        monthly.classList.add("text-slate-400");
        yearly.classList.add("font-semibold");
        yearly.classList.remove("text-slate-400");
        SetArcadeValue("$90/yr");
        SetAdvancedValue("$120/yr");
        SetProValue("$150/yr");
        SetAddons("$10/yr");
        SetLargerStorage("$20/yr");
        SetProfilePrice("$20/yr");
        SetChosenPlanDuration("Yearly");
        SetTotalTag("/yr");
      } else {
        extraInfo[i].classList.add("hidden");
        monthly.classList.remove("text-slate-400");
        monthly.classList.add("font-semibold");
        yearly.classList.remove("font-semibold");
        yearly.classList.add("text-slate-400");
        SetArcadeValue("$9/mo");
        SetAdvancedValue("$12/mo");
        SetProValue("$15/mo");
        SetAddons("$1/mo");
        SetLargerStorage("$2/mo");
        SetProfilePrice("$2/mo");
        SetChosenPlanDuration("Monthly");
        SetTotalTag("/mo");
      }
    }
  };

  const handleSelectPlanClick = (e) => {
    e.preventDefault();
    if (refArcadeCard.current.classList.contains("bg-teal-100")) {
      SetFinalPrice(arcadeValue);
    } else if (refAdvancedCard.current.classList.contains("bg-teal-100")) {
      SetFinalPrice(advancedValue);
    } else if (refPro.current.classList.contains("bg-teal-100")) {
      SetFinalPrice(proValue);
    }

    if (
      refArcadeCard.current.classList.contains("bg-teal-100") ||
      refAdvancedCard.current.classList.contains("bg-teal-100") ||
      refPro.current.classList.contains("bg-teal-100")
    ) {
      SetFormStep((cur) => cur + 1);
    } else if (
      !refArcadeCard.current.classList.contains("bg-teal-100") ||
      !refAdvancedCard.current.classList.contains("bg-teal-100") ||
      !refPro.current.classList.contains("bg-teal-100")
    ) {
      alert("Please choose a plan");
    }
  };

  const handleAddonsClick = (e) => {
    e.preventDefault();
    const finalPriceDigit = finalPrice.replace(/\D/g, "");
    const addOnsDigit = addOns.replace(/\D/g, "");
    const largerStorageDigit = largerStorage.replace(/\D/g, "");
    const profilePriceDigit = profilePrice.replace(/\D/g, "");

    if (refOnlineChecked.current.checked) {
      SetTotal(Number(finalPriceDigit) + Number(addOnsDigit));
    } else if (refStorageChecked.current.checked) {
      SetTotal(Number(finalPriceDigit) + Number(largerStorageDigit));
    } else if (refCustomChecked.current.checked) {
      SetTotal(Number(finalPriceDigit) + Number(profilePriceDigit));
    }
    if (refOnlineChecked.current.checked && refStorageChecked.current.checked) {
      SetTotal(
        Number(finalPriceDigit) +
          Number(addOnsDigit) +
          Number(largerStorageDigit)
      );
    }
    if (refOnlineChecked.current.checked && refCustomChecked.current.checked) {
      SetTotal(
        Number(finalPriceDigit) +
          Number(addOnsDigit) +
          Number(profilePriceDigit)
      );
    }
    if (refStorageChecked.current.checked && refCustomChecked.current.checked) {
      SetTotal(
        Number(finalPriceDigit) +
          Number(largerStorageDigit) +
          Number(profilePriceDigit)
      );
    }
    if (
      refOnlineChecked.current.checked &&
      refStorageChecked.current.checked &&
      refCustomChecked.current.checked
    ) {
      SetTotal(
        Number(finalPriceDigit) +
          Number(addOnsDigit) +
          Number(largerStorageDigit) +
          Number(profilePriceDigit)
      );
    }
    if (
      !refOnlineChecked.current.checked &&
      !refStorageChecked.current.checked &&
      !refCustomChecked.current.checked
    ) {
      SetTotal(finalPriceDigit);
    }
    SetFormStep((cur) => cur + 1);
  };

  return (
    <div className="bg-slate-200 lg:bg-teal-100 h-screen lg:pt-20">
      <form>
        {/**PERSONAL INFO */}
        {formStep === 0 && (
          <div className="flex flex-col lg:flex-row bg-slate-200 lg:bg-white white lg:w-7/12 lg:h-[28rem] lg:py-4 lg:pl-4 mx-auto lg:space-x-16 lg:rounded-md ">
            {<MenuBar />}
            <div className="-translate-y-16  lg:-translate-y-0 lg:mt-8 w-10/12 lg:w-auto mx-auto bg-white rounded-md p-6 lg:p-0">
              <div className="mb-6">
                <h1 className="font-bold text-2xl mb-1">Personal Info</h1>
                <p className="text-slate-400 text-sm">
                  Please provide your name,email address, and phone number
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <p className="text-xs font-medium">Name</p>
                    <p
                      className="text-xs font-medium text-red-500 hidden "
                      id="nameerror"
                    >
                      This field is required
                    </p>
                  </div>
                  <input
                    ref={refName}
                    className="border-2 rounded-md p-2 w-full focus:border-indigo-900 outline-none  "
                    type="text"
                    placeholder="eg. Aimuel Emmanuel"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-xs font-medium">Email address</p>
                    <p
                      className="text-xs font-medium text-red-500 hidden "
                      id="emailerror"
                    >
                      {emailError}
                    </p>
                  </div>
                  <input
                    ref={refEmail}
                    className="border-2 rounded-md p-2 w-full focus:border-indigo-900 outline-none  "
                    type="text"
                    placeholder="eg. daxteremmanuel@lorem.com"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-xs font-medium">Phone Number</p>
                    <p
                      className="text-xs font-medium text-red-500 hidden"
                      id="numbererror"
                    >
                      {numberError}
                    </p>
                  </div>
                  <input
                    ref={refNumber}
                    className="border-2 rounded-md p-2 w-full focus:border-indigo-900 outline-none  "
                    type="text"
                    placeholder="eg. 08106345876"
                  />
                </div>
                <button
                  onClick={handlePersonalInfoClick}
                  className="bg-indigo-900 text-white text-sm rounded-md float-right py-2 px-6 hover:opacity-50"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}
        {/**SELECT PLAN*/}
        {formStep === 1 && (
          <div className="flex flex-col lg:flex-row bg-slate-200 lg:bg-white white lg:w-7/12 lg:h-[28rem] lg:py-4 lg:pl-4 mx-auto lg:space-x-16 lg:rounded-md ">
            {<MenuBartwo />}
            <div className="-translate-y-16 lg:-translate-y-0 lg:mt-8 w-10/12 lg:w-auto mx-auto bg-white rounded-md p-6 lg:p-0">
              <div className="mb-6">
                <h1 className="font-bold text-2xl mb-1">Select your plan</h1>
                <p className="text-slate-400 text-sm">
                  You have the option of monthly or yearly billing.
                </p>
              </div>
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-3">
                <div
                  ref={refArcadeCard}
                  onClick={handleArcadeCard}
                  className=" flex space-x-4 lg:space-x-0 flex-row lg:flex-col border-2 rounded-md p-2 lg:w-32 hover:border-indigo-900 cursor-pointer"
                >
                  <div>
                    <img className="lg:h-8 lg:mb-8" src={arcade} alt="" />
                  </div>
                  <div>
                    <p className="lg:text-sm font-semibold">Arcade</p>

                    <p className="text-sm text-slate-400">{arcadeValue}</p>
                    <p className=" text-sm lg:text-xs hidden yearly">
                      2 months free
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleAdvancedCard}
                  ref={refAdvancedCard}
                  className=" flex space-x-4 lg:space-x-0 flex-row lg:flex-col border-2 rounded-md p-2 lg:w-32 hover:border-indigo-900 cursor-pointer"
                >
                  <div>
                    <img className="lg:h-8 lg:mb-8" src={advanced} alt="" />
                  </div>
                  <div>
                    <p className="lg:text-sm font-semibold">Advanced</p>
                    <p className="text-sm text-slate-400">{advancedValue}</p>
                    <p className=" text-sm lg:text-xs hidden yearly">
                      2 months free
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleProCard}
                  ref={refPro}
                  className=" flex space-x-4 lg:space-x-0 flex-row lg:flex-col border-2 rounded-md p-2 lg:w-32 hover:border-indigo-900 cursor-pointer"
                >
                  <div>
                    <img className="lg:h-8 lg:mb-8" src={pro} alt="" />
                  </div>
                  <div>
                    <p className="lg:text-sm font-semibold">Pro</p>
                    <p className="text-sm text-slate-400">{proValue}</p>
                    <p className=" text-sm lg:text-xs hidden yearly">
                      2 months free
                    </p>
                  </div>
                </div>
              </div>
              <section className="py-2 bg-slate-100 mt-10 space-x-2 flex justify-center ">
                <span className="font-semibold text-sm" id="monthly">
                  Monthly
                </span>
                <label htmlFor="toggle-switch">
                  <input
                    onClick={ExtraCardInfo}
                    type="checkbox"
                    id="toggle-switch"
                    className="cursor-pointer h-5 w-9 rounded-full appearance-none bg-indigo-900 checked:bg-indigo-900 transition duration-200 relative"
                  />
                </label>
                <span
                  className="font-semibold text-sm text-slate-400"
                  id="yearly"
                >
                  Yearly
                </span>
              </section>
              <div className="flex justify-between mt-10 items-center">
                <span
                  to="/"
                  onClick={handleGoBackClick}
                  className="text-slate-500 text-sm  cursor-pointer hover:text-indigo-900 font-semibold"
                >
                  Go back
                </span>
                <button
                  onClick={handleSelectPlanClick}
                  className="bg-indigo-900 text-white text-sm rounded-md py-2 px-6 hover:opacity-50"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/**ADD-ONS */}
        {formStep === 2 && (
          <div className="flex flex-col lg:flex-row bg-slate-200 lg:bg-white white lg:w-7/12 lg:h-[28rem] lg:py-4 lg:pl-4 mx-auto lg:space-x-16 lg:rounded-md ">
            {<MenuBarThree />}
            <div className="-translate-y-16 lg:-translate-y-0 lg:mt-8 w-10/12 lg:w-auto mx-auto bg-white rounded-md p-6 lg:p-0 ">
              <div className="mb-6">
                <h1 className="font-bold text-2xl mb-1">Pick Add-ons</h1>
                <p className="text-slate-400 text-sm">
                  Add-ons help enhance your gaming experience
                </p>
              </div>
              <div className="space-y-4">
                <div
                  ref={refOnlineService}
                  className="p-2 border-2 rounded-md hover:border-indigo-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        ref={refOnlineChecked}
                        onClick={() => {
                          refOnlineService.current.classList.toggle(
                            "bg-teal-100"
                          );
                          refOnlineService.current.classList.toggle(
                            "border-indigo-900"
                          );
                        }}
                        type="checkbox"
                        className="w-4 h-4 mr-4 text-blue-600 bg-gray-100 rounded border-gray-300 "
                      />
                      <div className="">
                        <p className="font-medium text-sm">Online Service</p>
                        <p className="text-slate-400 text-xs">
                          Access to multiplayer games
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:ml-32 text-indigo-900 font-medium">
                      {addOns}
                    </p>
                  </div>
                </div>
                <div
                  ref={refLargerStorage}
                  className="p-2 border-2 rounded-md hover:border-indigo-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        ref={refStorageChecked}
                        onClick={() => {
                          refLargerStorage.current.classList.toggle(
                            "bg-teal-100"
                          );
                          refLargerStorage.current.classList.toggle(
                            "border-indigo-900"
                          );
                        }}
                        type="checkbox"
                        className="w-4 h-4 mr-4 text-blue-600 bg-gray-100 rounded border-gray-300 "
                      />
                      <div>
                        <p className="font-medium text-sm ">Larger storage</p>
                        <p className="text-slate-400 text-xs">
                          Extra 1TB of cloud save
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:ml-32 text-indigo-900 font-medium">
                      {largerStorage}
                    </p>
                  </div>
                </div>
                <div
                  ref={refCustomProfile}
                  className="p-2 border-2 rounded-md hover:border-indigo-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        ref={refCustomChecked}
                        onClick={() => {
                          refCustomProfile.current.classList.toggle(
                            "bg-teal-100"
                          );
                          refCustomProfile.current.classList.toggle(
                            "border-indigo-900"
                          );
                        }}
                        type="checkbox"
                        className="w-4 h-4 mr-4 text-blue-600 bg-gray-100 rounded border-gray-300 "
                      />
                      <div>
                        <p className="font-medium text-sm">
                          Customizable profile
                        </p>
                        <p className="text-slate-400 text-xs">
                          Custom theme on your profile
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:ml-32 text-indigo-900 font-medium">
                      {profilePrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10 items-center">
                <span
                  to="/selectplan"
                  onClick={handleGoBackClick}
                  className="text-slate-500 text-sm cursor-pointer hover:text-indigo-900 font-semibold"
                >
                  Go back
                </span>
                <button
                  onClick={handleAddonsClick}
                  className="bg-indigo-900 text-white text-sm rounded-md  py-2 px-6 hover:opacity-50"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/**SUMMARY */}
        {formStep === 3 && (
          <div className="flex flex-col lg:flex-row bg-slate-200 lg:bg-white white lg:w-7/12 lg:h-[28rem] lg:py-4 lg:pl-4 mx-auto lg:space-x-16 lg:rounded-md ">
            {<MenuBarFour />}
            <div className="-translate-y-16 lg:-translate-y-0 lg:mt-8 w-10/12 lg:w-auto mx-auto bg-white rounded-md p-6 lg:p-0">
              <div className="mb-6">
                <h1 className="font-bold text-2xl mb-1">Finishing Up</h1>
                <p className="text-slate-400 text-sm">
                  Double-check everything looks OK before confirming
                </p>
              </div>
              <div className="bg-teal-100 p-4 rounded-md space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p ref={refChosenPlan} className="font-semibold">
                      {finalSummary} ({chosenPlanDuration})
                    </p>
                    <p
                      className="underline text-slate-500 text-sm cursor-pointer"
                      onClick={() => {
                        SetFormStep(1);
                      }}
                    >
                      Change
                    </p>
                  </div>
                  <p className="font-semibold">{finalPrice}</p>
                </div>
                <hr className="border-slate-300" />

                {refOnlineChecked.current.checked && (
                  <div
                    className="flex items-center justify-between"
                    id="finishonline"
                  >
                    <p className="text-slate-400 text-sm">Online service</p>
                    <p className="text-indigo-900 text-sm ">{addOns}</p>
                  </div>
                )}
                {refStorageChecked.current.checked && (
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm">Larger storage</p>
                    <p className="text-indigo-900 text-sm">{largerStorage}</p>
                  </div>
                )}
                {refCustomChecked.current.checked && (
                  <div
                    className="flex items-center justify-between"
                    id="finishonline"
                  >
                    <p className="text-slate-400 text-sm">
                      Customizable Profile
                    </p>
                    <p className="text-indigo-900 text-sm ">{profilePrice}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-slate-400 text-sm">
                  Total({chosenPlanDuration})
                </p>
                <p className="font-bold text-lg text-indigo-900">
                  ${total}
                  {totalTag}
                </p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <span
                  to="/addons"
                  onClick={handleGoBackClick}
                  className="text-slate-500 text-sm cursor-pointer hover:text-indigo-900 font-semibold"
                >
                  Go back
                </span>
                <button
                  onClick={handleNextClick}
                  className="bg-indigo-900 text-white text-sm rounded-md  py-2 px-6 hover:opacity-50"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/**THANK YOU */}
        {formStep === 4 && (
          <div className=" flex flex-col lg:flex-row bg-slate-200 lg:bg-white lg:w-7/12 lg:h-[28rem] lg:py-4 lg:pl-4 mx-auto lg:space-x-16 lg:rounded-md ">
            {<MenuBarFour />}
            <div className="-translate-y-16 lg:-translate-y-0 lg:mt-20 w-10/12 lg:w-auto mx-auto bg-white rounded-md p-6 lg:p-0">
              <div className="flex justify-center">
                <img src={thanks} alt="" />
              </div>

              <div className="text-center space-y-6">
                <p className=" lg:text-4xl text-2xl font-bold">Thank you!</p>
                <p className=" lg:text-sm text-slate-500">
                  Thanks for confirming your subscription! We hope you have{" "}
                  <br className="hidden md:block" />
                  fun using our platform. If you ever need support, please feel{" "}
                  <br className="hidden md:block" />
                  free to email us at support@loremgaming.com
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
export default App;
