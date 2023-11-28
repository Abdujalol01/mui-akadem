import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { saleImg } from "../helpers";

const Sale = () => {
  return (
    <Box
      sx={{ backgroundColor: "#252420" }}
      position={"relative"}
      marginBottom={{ xs: "80px", sx: "120px", md: "160px" }}
    >
      <Container>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ md: 25 }}>
          <Box
            sx={{
              maxWidth: "387px",
              width: "100%",
            }}
            paddingY={{ xs: "30px", sm: "50px", md: "80px" }}
          >
            <Typography
              variant="h3"
              component={"h2"}
              sx={{
                color: "#FFF",
                fontSize: "40px",
                fontWeight: 700,
                mb: "24px",
              }}
            >
              Bolalar kitoblari uchun ajoyib aksiya!
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                color: "rgba(255, 255, 255, 1)",
                mb: "18px",
                fontSize: "16px",
              }}
            >
              Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
              turli mashq qo’llanmalari va komikslar.
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                color: "rgba(255, 255, 255, 1)",
                mb: "32px",
                fontSize: "16px",
              }}
            >
              Aksiyadagi eng katta to’plamda 50 ta kitobni 350 ming so’mga
              (aslida 383 ming so’m) sotib olishingiz mumkin.
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
          <Box paddingTop={"30px"}>
            <img width={"100%"} src={saleImg} alt="SaleBook" maxwidth="440px" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Sale;
