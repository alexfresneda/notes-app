import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "",
      title: "",
      id: "",
    };
  }
  componentDidMount = () => {
    this.setState({
      body: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };
  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        body: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        {/* <BorderColorIcon className={classes.editIcon}></BorderColorIcon> */}
        <input
          className={classes.titleInput}
          placeholder={"Note title.."}
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill value={this.state.body} onChange={this.updateBody} />
      </div>
    );
  }
  updateBody = async (val) => {
    await this.setState({ body: val });
    this.update();
  };
  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  };
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.body,
    });
  }, 200);
}

export default withStyles(styles)(EditorComponent);
