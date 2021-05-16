import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";
// import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebaritem";

class SidebarComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className="sidebarContainer">
          <div className="newNoteBtn">
            <Button onClick={this.newNote}>add</Button>
          </div>
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  {/* <Divider /> */}
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }

  newNote = () => {
    this.props.newNote();
  };

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = (note) => {
    this.props.deleteNote(note);
  };
}

export default SidebarComponent;
// export default withStyles(styles)(SidebarComponent);
