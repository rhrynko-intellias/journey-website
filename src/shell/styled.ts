import { styled, AppBar as MUIAppBar } from "@mui/material";

export const appBarHeight = 64;

export const AppBar = styled(MUIAppBar)`
  min-height: ${appBarHeight}px;
  background-color: #714eff;
  position: sticky;
  box-shadow: none;
`;
