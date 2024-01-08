import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: { [key: string]: string };
    backgroundColor: { [key: string]: string };
    padding: { [key: string]: string };
    radius: string;
  }
}
