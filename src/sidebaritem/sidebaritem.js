import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

class SidebarItemComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={_index}>
        <ListItem
          className="listItem"
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className="textSection"
            onClick={() => this.selectNote(_note, _index)}
          >
            <ListItemText
              disableTypography
              secondary={
                <Typography type="body2" style={{ color: "#888888" }}>
                  {_note.title}
                </Typography>
              }
              // secondary={removeHTMLTags(_note.title.substring(0, 25))}
            />
            {/* <ListItemText
              classes={{ primary: "'your class'" }}
              secondary={_note.title}
              // secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
            ></ListItemText> */}
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(_note)}
            className="deleteIcon"
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }

  selectNote = (n, i) => this.props.selectNote(n, i);

  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
}

export default SidebarItemComponent;
