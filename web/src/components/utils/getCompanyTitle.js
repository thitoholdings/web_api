export default function getCompanyTitle(color) {
  switch (color.toLocaleLowerCase()) {
    case "red":
      return "Thito Holdings";
    case "indigo":
      return "BOPRITA";
    case "green":
      return "Motor & Glass";
    case "gray":
      return "Sycamon";
    case "purple":
      return "Gilgamesh";
    default:
      return "Other";
  }
}
export function getCompanyTitleAB(color) {
  switch (color.toLocaleLowerCase()) {
    case "red":
      return "TH";
    case "indigo":
      return "BO";
    case "green":
      return "M&G";
    case "gray":
      return "SY";
    case "purple":
      return "GI";
    default:
      return "Other";
  }
}
export function getStatusTitle(color) {
  if (!color) return "open";
  switch (color.toLocaleLowerCase()) {
    case "red":
      return "backlog";
    case "grey":
      return "open";
    case "gray":
      return "open";
    case "yellow":
      return "doing";
    case "green":
      return "done";
  }
}
export function getStatusColor(color) {
  if (!color) return "gray";
  switch (color.toLocaleLowerCase()) {
    case "backlog":
      return "red";
    case "open":
      return "gray";
    case "open":
      return "gray";
    case "doing":
      return "yellow";
    case "done":
      return "green";
    default:
      return "grey";
  }
}
