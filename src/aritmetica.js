// se crean la funcion suma

const sumar = (numero1, numero2) => numero1 + numero2;

// se crea la funcion resta desde Codespaces

const restar = (numero1, numero2) => numero1 - numero2;


// se crea la funcion dividir desde el equipo local

const dividir = (numero1, numero2) => {
    if (numero2 == 0) {
        console.log("Division por CERO no definida")
        return
    }
    return numero1 / numero2;
}

// se crea la funcion multiplicacion desde Codespaces

const multiplicar = (numero1, numero2) => numero1 * numero2;

// se crea la funcion de factorial
function factorial(position) {
    if (position == 0) {
        return 1   
    }
    return position*factorial(position -1)
}

const fibonacci = (posicion) => {
  if (posicion == 0) return 0;
  if (posicion == 1) return 1;
  return fibonacci(posicion -1) + fibonacci(posicion -2);
}

quo

