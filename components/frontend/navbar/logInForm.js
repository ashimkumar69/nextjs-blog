// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  InputAdornment,
  IconButton,
  Icon,
} from "@material-ui/core";

// import
import { customTheme } from "theme/customTheme";

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    marginRight: theme.spacing(1),
    textTransform: "capitalize",
    color: customTheme.palette.textWhite.primaryTextColor,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogActions: {
    justifyContent: "center",
  },
  submitBtn: {
    color: customTheme.palette.textWhite.primaryTextColor,
    backgroundColor: customTheme.palette.blueColor,
    transition: "all 300ms ease-in-out",
    "&:hover": {
      backgroundColor: customTheme.palette.blueDarkColor,
    },
  },
  cancelBtn: {
    color: customTheme.palette.blueColor,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // dialog open
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // password show
  const [showPassword, setShowPassword] = React.useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword((preState) => !preState);
  };

  return (
    <React.Fragment>
      <Button
        className={classes.loginBtn}
        disableElevation
        disableRipple
        onClick={handleClickOpen}
      >
        Login
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Welcome back
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Box mb={2}>
              <TextField
                autoFocus
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                required
              />
            </Box>

            <Box mb={2}>
              <TextField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleToggleShowPassword}
                      >
                        {showPassword ? (
                          <Icon className="fas fa-eye-slash" />
                        ) : (
                          <Icon className="fas fa-eye" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.cancelBtn}
            onClick={handleClose}
            disableElevation
          >
            Cancel
          </Button>
          <Button
            className={classes.submitBtn}
            onClick={handleClose}
            variant="contained"
            disableElevation
          >
            Log In
          </Button>
        </DialogActions>
        <Box p={2} textAlign="center">
          New to Glostars? Sign up
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
