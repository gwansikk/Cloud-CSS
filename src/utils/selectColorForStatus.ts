import { globalStyleColor } from "../styles";
import { GlobalTypeActivate, GlobalTypeStatus } from "../types";

function selectColorForStatus(status?: GlobalTypeActivate | GlobalTypeStatus): string {
  const { red, green, default: defaultColor } = globalStyleColor;

  switch (status) {
    case "disabled":
      return "#e4e3ea";

    case "error":
      return red;

    case "success":
      return green;

    default:
      return defaultColor;
  }
}

export default selectColorForStatus;
