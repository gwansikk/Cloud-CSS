import { globalStyleBackgroundColor } from "../styles";
import { GlobalTypeActivate, GlobalTypeStatus } from "../types";

function selectBackgroundColorForStatus(status?: GlobalTypeActivate | GlobalTypeStatus): string {
  const { grey, red, green } = globalStyleBackgroundColor;

  switch (status) {
    case "disabled":
      return "#e4e3ea";

    case "error":
      return red;

    case "success":
      return green;

    default:
      return grey;
  }
}

export default selectBackgroundColorForStatus;
