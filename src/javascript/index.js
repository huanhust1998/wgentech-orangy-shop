function isMobile() {
  return (
    window.innerWidth <= 768 &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

function createTimerText() {
  const timerTextElement = document.getElementById("timer-text");

  if (isMobile()) {
    timerTextElement.textContent = "FREE SHIPPING · COUPON: FREE.";
  } else {
    timerTextElement.textContent =
      "FREE SHIPPING · COUPON: FREE. Exchanges and returns within 30 days.";
  }
}

createTimerText();
