export function getAccuWeatherIconURL(iconNumber) {
  return `https://developer.accuweather.com/sites/default/files/${(
    "0" + iconNumber
  ).slice(-2)}-s.png`;
}
