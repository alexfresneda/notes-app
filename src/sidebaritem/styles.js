const styles = (theme) => ({
  listItem: {
    backgroundColor: "#f6f8f9",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  textSection: {
    maxWidth: "85%",
  },
  deleteIcon: {
    position: "absolute",
    right: "5px",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "red",
    },
  },
});

export default styles;
