import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DropdownMenu from './DropdownMenu'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  
  render(){
    const { classes,schools,selectedIndex,selectItem } = this.props;
    console.log(selectedIndex)
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
          {/* <Button color="inherit">Upload</Button> */}
          <DropdownMenu selectItem={selectItem} selectedIndex={selectedIndex} schools={schools}/> 
          {/* <Button color="inherit">BYU</Button>
          <Button color="inherit">BYU-Idaho</Button>
          <Button color="inherit">BYU–Hawaii</Button> */}


            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Data-Vis
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);