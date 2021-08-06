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
import colorToRgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  signUpBtn: {
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(2.25),
    padding: theme.spacing(0.25),
    width: theme.spacing(15),
    border: `${theme.spacing(0.25)}px solid  ${colorToRgba(
      customTheme.palette.textWhite.primaryTextColor,
      0.5
    )}`,
    textTransform: "capitalize",
    color: customTheme.palette.textWhite.primaryTextColor,
    transition: "all 300ms ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: customTheme.palette.textWhite.primaryTextColor,
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
        className={classes.signUpBtn}
        disableElevation
        disableRipple
        onClick={handleClickOpen}
      >
        Sign Up
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Join the community
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Box mb={2}>
              <TextField
                autoFocus
                id="first_name"
                label="First Name"
                type="text"
                fullWidth
                required
              />
            </Box>

            <Box mb={2}>
              <TextField
                id="last_name"
                label="Last Name"
                type="text"
                fullWidth
                required
              />
            </Box>

            <Box mb={2}>
              <TextField
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
            Sign Up
          </Button>
        </DialogActions>
        <Box p={2} textAlign="center">
          Already a user? Log in
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
