import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { PermNav, VysHeader, VysContent, UserProfile, RatingsPage, Subscriptions } from "../../components/index";
import { SettingsMain } from "../../components/Settings";


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class LoggedContainer extends React.Component {

  state = {
    current: ""
  };

  handleSideNavClick = (event) => {
    let pagecontent = event.currentTarget.getAttribute("pagecontent");
    this.setState({ current: pagecontent });
  };


  render() {
    const { classes } = this.props;
    const componentUse = () => {
      switch(this.state.current){

        case "View Your Spaces":
          return [<VysHeader key="VysHeader" />,
          <VysContent key="VysContent" /> ];
        case "Ratings":
          return <RatingsPage key={this.state.current} />;
        case "Profile": 
          return <UserProfile key={this.state.current} />;
        case "Subscriptions":
          return <Subscriptions key={this.state.current} />;
        case "Settings":
          return <SettingsMain key={this.state.current}/>
        default:
          return <UserProfile key={this.state.current} />;
      }
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <PermNav 
        sideNavClick={()=>this.handleSideNavClick}/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        <div>
          {componentUse()}
        </div>

        </main>
      </div>
    );
  }
}

LoggedContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LoggedContainer);