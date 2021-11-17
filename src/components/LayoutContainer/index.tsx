import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

interface LayoutContainerProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(181, 211, 237, 0.14)",
    minHeight: "100vh",
  },
  copyright: {
    textAlign: "center",
    padding: "16px",
  },
}));

export function LayoutContainer({
  children,
}: LayoutContainerProps) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
      <p className={classes.copyright}>© The Ksquare Group</p>
    </Box>
  );
}
