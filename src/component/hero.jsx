import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { pythonBook } from "../helpers/index";
const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#252420" }} position={"relative"} marginBottom={{xs:"120px" ,sx:"150px" , md:"190px"}}>
      <Container>
        <Stack 
        direction={{ xs: "column", sm: "row" }}
        spacing={{  md: 25 }}
        >
          <Box
            sx={{
              maxWidth: "387px",
              width: "100%",
            }}
            paddingY={{xs:"30px",sm:"50px" ,md:"80px"}}
          >
            <Typography
              variant="h3"
              component={"h2"}
              sx={{
                color: "#FFF",
                fontSize: "40px",
                fontWeight: 700,
                mb:"24px"
              }}
            >
              Pythonda dasturlash asoslari
            </Typography>
            <Typography 
            variant="body2"
             component={"p"}
            sx={{
              color:"rgba(255, 255, 255, 1)",
              mb:"32px",
              fontSize:"16px"
            }}
             >
              Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
              qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
              yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
              mumkin.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#FF7500",
                p: 1.5,
                color: "#fff",
                fontSize: "13px",
                "&:hover": {
                  bgcolor: "#FF7500",
                },
                whiteSpace: "no-wrap",
              }}
            >
              Buyurtma berish
            </Button>
          </Box>
          <Box
            paddingTop={"40px"}
          >
            <img 
            width={"100%"} 
            src={pythonBook}
            alt="pythonBook"
            maxwidth="510px" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
