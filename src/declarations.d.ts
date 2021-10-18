/// <reference types="react-scripts" />

import type { Theme as MuiTheme } from '@material-ui/core';

declare module 'styled-components' {
  interface DefaultTheme extends MuiTheme {}
}
