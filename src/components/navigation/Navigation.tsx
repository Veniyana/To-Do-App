import React, { useState } from "react";
import { Typography, AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="navigation">
      <AppBar>
        <Typography variant="h3" align="center">
          Notepad
        </Typography>
        <Tabs
          value={value}
          onChange={(_: React.ChangeEvent<{}>, v) => setValue(v)}
          centered
        >
          <Tab label="Notes" component={Link} to="/" />
          <Tab label="To Dos" component={Link} to="/todos" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navigation;
