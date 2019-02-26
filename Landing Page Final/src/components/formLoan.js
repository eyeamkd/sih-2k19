import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField fullWidth
          id="outlined-textarea"
          label="Why do you need the loan?"
          placeholder="Enter your reason"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <div className="cibil">
	        <TextField
	          id="outlined-textarea"
	          label="Enter Loan Amount"
	          placeholder="Rs."
	          multiline
	          className={classes.textField}
	          margin="normal"
	          variant="outlined"
	        />
	        <TextField
	          id="outlined-textarea"
	          label="CIBIL Score"
	          placeholder="#"
	          multiline
	          className={classes.textField}
	          margin="normal"
	          variant="outlined"
	        />
        </div>
      </CardContent>
      <CardActions>
        <Button size="large">Submit</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
