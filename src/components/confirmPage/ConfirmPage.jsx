import React, { useState, useEffect } from "react";
import SweetAlert from "sweetalert2-react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const ConfirmPage = () => {
  const [Popup, setPopup] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  var pagePath = window.location.pathname;
  var user_id = pagePath.split("/");
  console.log(user_id[2]);
  useEffect(() => {
    {
      user_id[2] === localStorage.getItem("user-token") &&
        setTimeout(() => {
          setOpen(false);
          setPopup(true);
        }, 3000);
    }
  }, []);
  const handleClick = () => {
    window.location.href = "/PanEmailVerify";
    setPopup(false);
  };
  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <SweetAlert
        show={Popup}
        title="Accout Verify Successfully"
        // text="SweetAlert in React"
        onConfirm={handleClick}
      />
    </>
  );
};

export default ConfirmPage;
