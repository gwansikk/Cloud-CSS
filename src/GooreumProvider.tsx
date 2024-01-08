import React, { ReactNode } from "react";
import { Global, ThemeProvider } from "@emotion/react";

import theme from "@styles/theme";
import { globalStyle } from "@styles/globalStyle";

type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

const GooreumProvider = ({ children }: StrictPropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
};

export default GooreumProvider;
