let clave: string = "";
let cantidadIntentos: number = 1;

while (clave !== "Eureka" && cantidadIntentos < 4) {
  clave = prompt("Ingrese su clave");
  if (clave === "Eureka") {
    console.log("La clave es correcta Bienvenido");
  } else {
    console.log("Has agotado todos los intentos");
    cantidadIntentos++;
  }
}

// ejercicio nro
