import {
  Button,
  Fab,
  useMediaQuery,
  useTheme,
  ButtonProps,
  FabProps,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  icon: ReactNode;
  onClick?: () => void;

  fabProps?: FabProps;
  buttonProps?: ButtonProps;
};

export const ActionButton = ({
  title,
  icon,
  onClick,

  fabProps = {},
  buttonProps = {},
}: Props) => {
  const theme = useTheme();
  const mdUpBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  const { sx: fabSx, size = 'small', color: fabColor = 'inherit', ...restFabProps } = fabProps;
  const { sx, variant = 'outlined', color = 'inherit', ...restButtonProps } = buttonProps;

  return (
    <>
      {!mdUpBreakpoint && (
        <Fab
          {...restFabProps}
          size={size}
          color={fabColor}
          sx={fabSx}
          onClick={onClick}
        >
          {icon}
        </Fab>
      )}

      {mdUpBreakpoint && (
        <Button
          {...restButtonProps}
          sx={{ minWidth: 'fit-content', alignSelf: 'center', borderRadius: 5, ...sx }}
          startIcon={icon}
          variant={variant}
          color={color}
          onClick={onClick}
        >
          <Typography variant="button" fontWeight="600">{title}</Typography>
        </Button>
      )}
    </>
  );
};
