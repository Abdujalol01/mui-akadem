import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { features1 } from "../helpers";
const Features = () => {
  return (
    <Box paddingBottom={"120px"}>
      <Container>
        <Box>
          <Typography
            variant="h1"
            fontSize={{ xs: "36px", sx: "48px", md: "72px" }}
            sx={{
              lineHeight: "120%",
              fontWeight: 700,
              mb: "24px",
              maxWidth: "435px",
              width: "100%",
              marginBottom: "72px",
            }}
          >
            Nega aynan Akademnashr?
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item margin={{ xs: "0 auto", sm: "0px" }} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: "340px",boxShadow:"none" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom:"32px"
                }}
                image={features1}
                title="features"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "120%",
                    letterSpacing: "0.5px",
                  }}
                >
                  Oson buyurtma qilish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                  buyurtma qila olasiz.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item margin={{ xs: "0 auto", sm: "0px" }} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: "340px",boxShadow:"none" }}>
            <CardMedia
                component="img"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom:"32px"
                }}
                image={features1}
                title="features"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "120%",
                    letterSpacing: "0.5px",
                  }}
                >
                  Oson buyurtma qilish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                  buyurtma qila olasiz.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item margin={{ xs: "0 auto", sm: "0px" }} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: "340px" ,boxShadow:"none" }}>
            <CardMedia
                component="img"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom:"32px"
                }}
                image={features1}
                title="features"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "120%",
                    letterSpacing: "0.5px",
                  }}
                >
                  Oson buyurtma qilish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                  buyurtma qila olasiz.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
