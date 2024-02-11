const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const object = await response.json();
  document.querySelector("#advice_id").innerHTML = object.slip.id;
  document.querySelector("#advice_content").innerHTML = object.slip.advice;
};

document.querySelector(".dice_img").addEventListener("click", fetchAdvice);
