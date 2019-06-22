import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
		console.log("tabcontainer",this.props.tabs);
    return (
      <div className={classes.root}>
        <Paper>
					<Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
          >
					{this.props.tabs.map(tab => 
						<Tab label={tab.label} style={{color: primaryColor, fontSize: '1.3em'}}/>
					)}
          </Tabs>
        </Paper>
				{this.props.tabs.map((tab, index) => 
				value === index && <TabContainer>{tab.content}</TabContainer>
				)}
      </div>
    );
  }
}


export default withStyles(styles)(SimpleTabs);
