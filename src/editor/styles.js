const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    // padding: "5px",
    fontSize: "40px",
    fontWeight: "700",
    width: "100%",
    backgroundColor: "inherit",
    color: "inherit",
    paddingLeft: "15px",
    margin: "50px 0px 0px",
  },
  editIcon: {
    position: "absolute",
    left: "310px",
    top: "12px",
    color: "white",
    width: "10",
    height: "10",
  },
  editorContainer: {
    height: "100%",
    boxSizing: "border-box",
    width: "800px",
    margin: "0px auto",
    padding: "0px 20px",
  },
});

export default styles;
