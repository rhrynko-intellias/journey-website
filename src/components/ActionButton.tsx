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

  fabProps?: FabProps;
  buttonProps?: ButtonProps;
};

export const ActionButton = ({
  title,
  icon,

  fabProps = {},
  buttonProps = {},
}: Props) => {
  const theme = useTheme();
  const mdUpBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  const { size = 'small', color = 'primary', ...restFabProps } = fabProps;
  const { sx, variant = 'outlined', color: btnColor = 'inherit', ...restButtonProps } = buttonProps;

  return (
    <>
      {!mdUpBreakpoint && (
        <Fab
          {...restFabProps}
          size={size}
          color={color}
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
          color={btnColor}
        >
          <Typography variant="button" fontWeight="600">{title}</Typography>
        </Button>
      )}
    </>
  );
};
