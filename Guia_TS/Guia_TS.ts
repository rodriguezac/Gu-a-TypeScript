//EJERCICIO 1

class CabeceraPagina {
    // Atributos privados
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    // Constructor
    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "left"; // Alineación predeterminada
    }

    // Método 1: Establecer las propiedades de la cabecera
    setPropiedades(): void {
        // Aplica los estilos al título en el DOM
        const titleElement = document.querySelector(".title") as HTMLElement | null;
        const bodyElement = document.querySelector("body") as HTMLElement;

        if (titleElement) {
            this.titulo = titleElement.textContent || "";
        } else {
            console.log("El elemento .title no fue encontrado en el DOM.");
        }

        // Aplica los estilos al body
        this.color = bodyElement.style.color;
        this.fuente = bodyElement.style.fontFamily;

    }

    // Método para obtener las propiedades (cumple con "obtener título, color, fuente")
    getPropiedades(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }

    // Método 2: Establecer la alineación del título
    setAlineacion(alineacion: "center" | "right" | "left"): void {
        const opcionesValidas = ["center", "right", "left"];
        if (opcionesValidas.indexOf(alineacion) !== -1) {
            this.alineacion = alineacion;

            // Aplica la alineación al título en el DOM
            const titleElement = document.querySelector(".title") as HTMLElement;
            if (titleElement) {
                titleElement.style.textAlign = this.alineacion;
            }
        } else {
            console.log("Alineación no válida. Usa: center, right o left.");
        }
    }

    // Método 3: Imprimir las propiedades configuradas
    imprimirPropiedades(): void {
        console.log("Propiedades de la Cabecera:");
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

// Crear una instancia de la clase y aplicar las propiedades
const cabecera = new CabeceraPagina();
cabecera.setPropiedades();


// Obtener las propiedades (opcional)
const propiedades = cabecera.getPropiedades();
console.log("Propiedades obtenidas:", propiedades);

// Imprimir todas las propiedades en consola
cabecera.imprimirPropiedades();

//////////////////////////////////////////////////////////////

//Ejercicio 2
class Calculadora {
    // Método para sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("La división por cero no está permitida.");
        }
        return a / b;
    }

    // Método para calcular la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial
    factorial(n: number): number {
        if (n < 0 || Math.floor(n) !== n) {
            throw new Error("El factorial solo está definido para números enteros positivos.");
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejecutar el código del ejercicio al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Instancia de la clase Calculadora
    const calculadora = new Calculadora();

    // Definición de la función global para el botón "Calcular"
    (window as any).calcular = function calcular() {
        try {
            // Obtenemos valores desde los inputs del HTML
            const numero1 = parseFloat((document.getElementById("numero1") as HTMLInputElement).value);
            const numero2 = parseFloat((document.getElementById("numero2") as HTMLInputElement).value);
            const operacion = (document.getElementById("operacion") as HTMLSelectElement).value;

            let resultado: number;
            let operacionTexto: string;

            // Se ejecuta la operación seleccionada
            switch (operacion) {
                case "sumar":
                    resultado = calculadora.sumar(numero1, numero2);
                    operacionTexto = `${numero1} + ${numero2}`;
                    break;
                case "restar":
                    resultado = calculadora.restar(numero1, numero2);
                    operacionTexto = `${numero1} - ${numero2}`;
                    break;
                case "multiplicar":
                    resultado = calculadora.multiplicar(numero1, numero2);
                    operacionTexto = `${numero1} * ${numero2}`;
                    break;
                case "dividir":
                    resultado = calculadora.dividir(numero1, numero2);
                    operacionTexto = `${numero1} / ${numero2}`;
                    break;
                case "potencia":
                    resultado = calculadora.potencia(numero1, numero2);
                    operacionTexto = `${numero1} ^ ${numero2}`;
                    break;
                case "factorial":
                    resultado = calculadora.factorial(numero1);
                    operacionTexto = `${numero1}!`;
                    break;
                default:
                    throw new Error("Operación no válida.");
            }

            // Mostrar el resultado en la página
            const resultadoElemento = document.getElementById("resultado") as HTMLElement;
            resultadoElemento.textContent = resultado.toString();

            // Imprimir en consola la operación y el resultado
            console.log(`La operación es: ${operacionTexto}`);
            console.log(`Resultado: ${resultado}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(error.message); // Si hay error se mostrará
            }
        }
    };
});


//////////////////////////////////////////////////////////////

//Ejercicio 3

class Cancion {
    // Atributos públicos
    titulo: string;
    genero: string;
    // Atributo privado
    private autor: string;

    // Constructor
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Valor inicial del autor por defecto
    }

    // Método get para acceder al atributo privado autor
    getAutor(): string {
        return this.autor;
    }

    // Método set para modificar el atributo privado autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): string {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.getAutor()}`;
    }
}

// Interacción con el DOM
document.addEventListener("DOMContentLoaded", () => {
    let cancion: Cancion | null = null;

    // Función para crear una canción
    (window as any).crearCancion = function crearCancion() {
        const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
        const genero = (document.getElementById("genero") as HTMLInputElement).value;

        if (!titulo || !genero) {
            alert("Por favor, ingresa el título y el género.");
            return;
        }

        // Instancia de la canción
        cancion = new Cancion(titulo, genero);

        console.log("Canción creada:");
        console.log(`Título: ${titulo}, Género: ${genero}`);
        alert("Canción creada con éxito.");
    };

    // Función para el autor
    (window as any).establecerAutor = function establecerAutor() {
        if (!cancion) {
            alert("Primero debes crear la canción.");
            return;
        }

        const autor = (document.getElementById("autor") as HTMLInputElement).value;

        if (!autor) {
            alert("Por favor, ingresa el autor.");
            return;
        }

        cancion.setAutor(autor);

        console.log("Autor establecido:");
        console.log(`Autor: ${autor}`);
        alert("Autor establecido con éxito.");
    };

    // Función para mostrar los datos de la canción
    (window as any).mostrarCancion = function mostrarCancion() {
        if (!cancion) {
            alert("Primero debes crear la canción.");
            return;
        }

        const datos = cancion.mostrarDatos();

        // Mostrar los datos en la consola
        console.log("Datos de la canción:");
        console.log(datos);

        // Mostrar los datos en el HTML
        const resultadoElemento = document.getElementById("resultadoCancion") as HTMLElement;
        resultadoElemento.textContent = datos;
    };
});

/////////////////////////////////////////////////////////////////////Ejercicio 4
class Cuenta {
    // Atributos
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    // Constructor
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Método para depositar
    depositar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        } else {
            this.cantidad += valor;
            console.log(`Se ha depositado correctamente $${valor.toFixed(2)}.`);
            console.log(`Saldo actual: $${this.cantidad.toFixed(2)}`);
        }
    }

    // Método para retirar
    retirar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00.");
        } else if (this.cantidad >= valor) {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor.toFixed(2)}.`);
            console.log(`Saldo actual: $${this.cantidad.toFixed(2)}`);
        } else {
            console.log("No hay suficiente saldo en la cuenta.");
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatos(): string {
        return `Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`;
    }
}

// Interacción con el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Instancia de Cuenta
    let cuenta: Cuenta | null = null;

    // Función para crear la cuenta
    (window as any).crearCuenta = function crearCuenta() {
        const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
        const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
        const tipoCuenta = (document.getElementById("tipoCuenta") as HTMLSelectElement).value; // Obtener el valor seleccionado del select
        const numeroCuenta = (document.getElementById("numeroCuenta") as HTMLInputElement).value;

        if (!nombre || isNaN(cantidad) || !tipoCuenta || !numeroCuenta) {
            alert("Por favor, completa todos los campos antes para crear la cuenta.");
            return;
        }

        // Crear instancia de Cuenta
        cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);

        console.log("Cuenta creada:");
        console.log(cuenta.mostrarDatos());
        alert("Cuenta creada con éxito.");
    };

    // Función para depositar dinero
    (window as any).depositarCuenta = function depositarCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }

        const valor = parseFloat((document.getElementById("valorDeposito") as HTMLInputElement).value);
        if (isNaN(valor)) {
            alert("Por favor, ingresa un valor válido para depositar.");
            return;
        }

        cuenta.depositar(valor);
    };

    // Función para retirar dinero
    (window as any).retirarCuenta = function retirarCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }

        const valor = parseFloat((document.getElementById("valorRetiro") as HTMLInputElement).value);
        if (isNaN(valor)) {
            alert("Por favor, ingresa un valor válido para retirar.");
            return;
        }

        cuenta.retirar(valor);
    };

    // Función para mostrar los datos de la cuenta
    (window as any).mostrarDatosCuenta = function mostrarDatosCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }

        const datos = cuenta.mostrarDatos();
        console.log("Datos de la cuenta:");
        console.log(datos);

        const resultadoElemento = document.getElementById("resultadoCuenta") as HTMLElement;
        resultadoElemento.textContent = datos;
    };
});
///////////////////////////////////////////////////////////////////
// Ejercicio 5

// Clase abstracta Persona
abstract class Persona {
    // Atributos
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    // Constructor
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    // Método para verificar si es mayor de edad
    MayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
      }
    }
  
    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): void;
  }
  
  // Clase Empleado que hereda de Persona
  class Empleado extends Persona {
    // Atributo específico de Empleado
    sueldo: number;
  
    // Constructor de Empleado
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad); 
      this.sueldo = sueldo;
    }
  
    // Método para cargar sueldo
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
      console.log(`El sueldo de ${this.nombre} ${this.apellido} ha sido cargado: $${this.sueldo.toFixed(2)}`);
    }
  
    // Método para imprimir sueldo
    imprimirSueldo(): void {
      console.log(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo.toFixed(2)}`);
    }
  
    // Implementación del método abstracto mostrarDatos
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Edad: ${this.edad}`);
    }
  }
  
  // Interacción con el DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Función para crear un empleado desde el HTML
    (window as any).crearEmpleado = function crearEmpleado() {
      // Obtener valores del formulario con IDs únicos
      const nombre = (document.getElementById("empleadoNombre") as HTMLInputElement).value.trim();
      const apellido = (document.getElementById("empleadoApellido") as HTMLInputElement).value.trim();
      const direccion = (document.getElementById("empleadoDireccion") as HTMLInputElement).value.trim();
      const telefono = (document.getElementById("empleadoTelefono") as HTMLInputElement).value.trim();
      const edadString = (document.getElementById("empleadoEdad") as HTMLInputElement).value;
      const sueldoString = (document.getElementById("empleadoSueldo") as HTMLInputElement).value;
  
      // Convertir los valores numéricos
      const edad = parseInt(edadString);
      const sueldo = parseFloat(sueldoString);
  
      // Validar que todos los campos de texto estén llenos
      if (!nombre || !apellido || !direccion || !telefono) {
        alert("Por favor, completa todos los campos de texto.");
        return;
      }
  
      // Validar que los campos numéricos sean válidos
      if (!edadString || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingresa un valor válido para la edad.");
        return;
      }
  
      if (!sueldoString || isNaN(sueldo) || sueldo <= 0) {
        alert("Por favor, ingresa un valor válido para el sueldo.");
        return;
      }
  
      // Crear el empleado
      const empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
  
      // Mostrar los datos del empleado en el HTML
      const resultadoElemento = document.getElementById("resultadoEmpleado") as HTMLElement;
      resultadoElemento.textContent = `${empleado.nombre} ${empleado.apellido} (${empleado.edad} años)`;
  
      // Mostrar en consola los datos del empleado
      empleado.mostrarDatos();
  
      // Verificar si es mayor de edad
      empleado.MayorDeEdad();
  
      // Cargar sueldo e imprimirlo
      empleado.cargarSueldo(sueldo);
      empleado.imprimirSueldo();
    };
  });
  