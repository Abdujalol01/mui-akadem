import {
  AppBar,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { logo } from "../helpers";
import { useState } from "react";
import DrawerComponent from "./drawer-component";
const Navbar = () => {
  const [value, setValue] = useState(0);
  const items = ["Bosh Sahifa", "Kitoblar", "Aksiyalar", "Kontaktlar"];
  // theme
  const theme = createTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  // handleChange
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <AppBar elevation={0} sx={{ 
      bgcolor: "#fff", 
      py: 2 ,
      zIndex:"100",
      position:"static"}}>
        <Container>
        <Toolbar>
          {isMatch ? (
            <>
              <img src={logo} alt="Logo" />
              <DrawerComponent />
            </>
          ) : (
            <>
              <img src={logo} alt="" />

              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                indicatorColor="secondary"
                textColor="secondary"
              >
                {items.map((item, idx) => (
                  <Tab 
                  
                  value={idx} 
                  key={idx}
                  indicatorcolor="secondary"
                  label={item} />
                ))}
              </Tabs>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#FF7500",
                  p: 1.5,
                  color: "#fff",
                  fontSize: "13px",
                  marginLeft:"32px",
                  "&:hover": {
                    bgcolor: "#FF7500",
                  },
                  whiteSpace: "no-wrap",
                }}
              >
                Ro'yxatdan o'tish
              </Button>
            </>
          )}
        </Toolbar>
        </Container>
    </AppBar>
  );
};

export default Navbar;
