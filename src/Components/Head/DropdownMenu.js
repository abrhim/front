import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Typography} from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
});



class SimpleListMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ anchorEl: null });
    this.props.selectItem({selectedIndex: index})
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, schools, selectedIndex } = this.props;
    const { anchorEl } = this.state;

    console.log(selectedIndex)
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="school-menu"
            aria-label="Select a School"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              disableTypography
              style={{color:"fff"}}
              primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Select a Color</Typography>}
              secondary={schools[selectedIndex].name}
            />
          </ListItem>
        </List>
        <Menu
          id="school-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {schools.map((option, index) => (
            <MenuItem
              color="white"
              key={option.name}
              selected={index === selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleListMenu);