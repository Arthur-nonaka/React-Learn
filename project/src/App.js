import "./App.css";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Media from "./Components/Media";
import Temperature from "./Components/Temperature";
import Area from "./Components/Area";
import AreaCircle from "./Components/AreaCircle";
import Perimeter from "./Components/Perimeter";
import PerimeterCircle from "./Components/PerimeterCircle";
import Exponent from "./Components/Exponent";
import ToCentimeters from "./Components/ToCentimeters";
import ToMiles from "./Components/ToMiles";
import IMC from "./Components/IMC";
import Discount from "./Components/Discount";
import Fees from "./Components/Fees";
import FeesComplex from "./Components/FeesComplex";
import ConvertDays from "./Components/ConvertDays";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div className="main">
        <Container title={"Media"}>
          <Media />
        </Container>
        <Container title={"Temperatura"}>
          <Temperature />
        </Container>
        <Container title={"Area"}>
          <Area />
        </Container>
        <Container title={"Area do Circulo"}>
          <AreaCircle />
        </Container>
        <Container title={"Perimetro"}>
          <Perimeter />
        </Container>
        <Container title={"Perimetro do Circulo"}>
          <PerimeterCircle />
        </Container>
        <Container title={"Expoente"}>
          <Exponent />
        </Container>
        <Container title={"Centimetros"}>
          <ToCentimeters />
        </Container>
        <Container title={"Milhas"}>
          <ToMiles />
        </Container>
        <Container title={"IMC"}>
          <IMC />
        </Container>
        <Container title={"Desconto"}>
          <Discount />
        </Container>
        <Container title={"Juros"}>
          <Fees />
        </Container>
        <Container title={"Juros Compostos"}>
          <FeesComplex />
        </Container>
        <Container title={"Dias"}>
          <ConvertDays />
        </Container>
      </div>
    </div>
  );
}

export default App;
