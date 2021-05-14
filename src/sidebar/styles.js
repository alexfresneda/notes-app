const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newNoteBtn: {
    width: "100%",
    height: "50px",
    // borderBottom: "1px solid black",
    borderRadius: "0px",
    backgroundColor: "#2667C5",
    color: "white",
    "&:hover": {
      backgroundColor: "#1151AD",
    },
  },
  sidebarContainer: {
    backgroundColor: "#f6f8f9",
    marginTop: "0px",
    width: "400px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
  },
});

export default styles;
