import { List,Drawer, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Box } from "@mui/material"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComponent = () => {
  const items = ["Bosh Sahifa","Kitoblar","Aksiyalar","Kontaktlar"]
  const [openDarawer , setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer
      open={openDarawer}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      onClose={()=>setOpenDrawer(false)}
    >
     <Box width={"300px"}>
     <List >
        {items.map((item)=>(
          <ListItemButton
         
          onClick={()=>setOpenDrawer(!openDarawer)}
          key={item}>
            <ListItemIcon >
              <ListItemText >
                {item}
              </ListItemText>
            </ListItemIcon>
            <Divider/>
          </ListItemButton>
        ))}
      </List>
     </Box>
    </Drawer>
    <IconButton 
     sx={{
      fontSize:"36px",
      color:"#000",
      marginRight:"25px",
      marginLeft:"auto"
    }}
    onClick={()=>setOpenDrawer(!openDarawer)}>
      <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComponent
