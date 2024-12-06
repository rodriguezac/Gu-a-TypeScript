//EJERCICIO 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CabeceraPagina = /** @class */ (function () {
    // Constructor
    function CabeceraPagina() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "left"; // Alineación predeterminada
    }
    // Método 1: Establecer las propiedades de la cabecera
    CabeceraPagina.prototype.setPropiedades = function () {
        // Aplica los estilos al título en el DOM
        var titleElement = document.querySelector(".title");
        var bodyElement = document.querySelector("body");
        if (titleElement) {
            this.titulo = titleElement.textContent || "";
        }
        else {
            console.log("El elemento .title no fue encontrado en el DOM.");
        }
        // Aplica los estilos al body
        this.color = bodyElement.style.color;
        this.fuente = bodyElement.style.fontFamily;
    };
    // Método para obtener las propiedades (cumple con "obtener título, color, fuente")
    CabeceraPagina.prototype.getPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    };
    // Método 2: Establecer la alineación del título
    CabeceraPagina.prototype.setAlineacion = function (alineacion) {
        var opcionesValidas = ["center", "right", "left"];
        if (opcionesValidas.indexOf(alineacion) !== -1) {
            this.alineacion = alineacion;
            // Aplica la alineación al título en el DOM
            var titleElement = document.querySelector(".title");
            if (titleElement) {
                titleElement.style.textAlign = this.alineacion;
            }
        }
        else {
            console.log("Alineación no válida. Usa: center, right o left.");
        }
    };
    // Método 3: Imprimir las propiedades configuradas
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Propiedades de la Cabecera:");
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Crear una instancia de la clase y aplicar las propiedades
var cabecera = new CabeceraPagina();
cabecera.setPropiedades();
// Obtener las propiedades (opcional)
var propiedades = cabecera.getPropiedades();
console.log("Propiedades obtenidas:", propiedades);
// Imprimir todas las propiedades en consola
cabecera.imprimirPropiedades();
//////////////////////////////////////////////////////////////
//Ejercicio 2
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("La división por cero no está permitida.");
        }
        return a / b;
    };
    // Método para calcular la potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para calcular el factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0 || Math.floor(n) !== n) {
            throw new Error("El factorial solo está definido para números enteros positivos.");
        }
        var resultado = 1;
        for (var i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Ejecutar el código del ejercicio al cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Instancia de la clase Calculadora
    var calculadora = new Calculadora();
    // Definición de la función global para el botón "Calcular"
    window.calcular = function calcular() {
        try {
            // Obtenemos valores desde los inputs del HTML
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            var operacion = document.getElementById("operacion").value;
            var resultado = void 0;
            var operacionTexto = void 0;
            // Se ejecuta la operación seleccionada
            switch (operacion) {
                case "sumar":
                    resultado = calculadora.sumar(numero1, numero2);
                    operacionTexto = "".concat(numero1, " + ").concat(numero2);
                    break;
                case "restar":
                    resultado = calculadora.restar(numero1, numero2);
                    operacionTexto = "".concat(numero1, " - ").concat(numero2);
                    break;
                case "multiplicar":
                    resultado = calculadora.multiplicar(numero1, numero2);
                    operacionTexto = "".concat(numero1, " * ").concat(numero2);
                    break;
                case "dividir":
                    resultado = calculadora.dividir(numero1, numero2);
                    operacionTexto = "".concat(numero1, " / ").concat(numero2);
                    break;
                case "potencia":
                    resultado = calculadora.potencia(numero1, numero2);
                    operacionTexto = "".concat(numero1, " ^ ").concat(numero2);
                    break;
                case "factorial":
                    resultado = calculadora.factorial(numero1);
                    operacionTexto = "".concat(numero1, "!");
                    break;
                default:
                    throw new Error("Operación no válida.");
            }
            // Mostrar el resultado en la página
            var resultadoElemento = document.getElementById("resultado");
            resultadoElemento.textContent = resultado.toString();
            // Imprimir en consola la operación y el resultado
            console.log("La operaci\u00F3n es: ".concat(operacionTexto));
            console.log("Resultado: ".concat(resultado));
        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message); // Si hay error se mostrará
            }
        }
    };
});
//////////////////////////////////////////////////////////////
//Ejercicio 3
var Cancion = /** @class */ (function () {
    // Constructor
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Valor inicial del autor por defecto
    }
    // Método get para acceder al atributo privado autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método set para modificar el atributo privado autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.getAutor());
    };
    return Cancion;
}());
// Interacción con el DOM
document.addEventListener("DOMContentLoaded", function () {
    var cancion = null;
    // Función para crear una canción
    window.crearCancion = function crearCancion() {
        var titulo = document.getElementById("titulo").value;
        var genero = document.getElementById("genero").value;
        if (!titulo || !genero) {
            alert("Por favor, ingresa el título y el género.");
            return;
        }
        // Instancia de la canción
        cancion = new Cancion(titulo, genero);
        console.log("Canción creada:");
        console.log("T\u00EDtulo: ".concat(titulo, ", G\u00E9nero: ").concat(genero));
        alert("Canción creada con éxito.");
    };
    // Función para el autor
    window.establecerAutor = function establecerAutor() {
        if (!cancion) {
            alert("Primero debes crear la canción.");
            return;
        }
        var autor = document.getElementById("autor").value;
        if (!autor) {
            alert("Por favor, ingresa el autor.");
            return;
        }
        cancion.setAutor(autor);
        console.log("Autor establecido:");
        console.log("Autor: ".concat(autor));
        alert("Autor establecido con éxito.");
    };
    // Función para mostrar los datos de la canción
    window.mostrarCancion = function mostrarCancion() {
        if (!cancion) {
            alert("Primero debes crear la canción.");
            return;
        }
        var datos = cancion.mostrarDatos();
        // Mostrar los datos en la consola
        console.log("Datos de la canción:");
        console.log(datos);
        // Mostrar los datos en el HTML
        var resultadoElemento = document.getElementById("resultadoCancion");
        resultadoElemento.textContent = datos;
    };
});
/////////////////////////////////////////////////////////////////////Ejercicio 4
var Cuenta = /** @class */ (function () {
    // Constructor
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método para depositar
    Cuenta.prototype.depositar = function (valor) {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad += valor;
            console.log("Se ha depositado correctamente $".concat(valor.toFixed(2), "."));
            console.log("Saldo actual: $".concat(this.cantidad.toFixed(2)));
        }
    };
    // Método para retirar
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00.");
        }
        else if (this.cantidad >= valor) {
            this.cantidad -= valor;
            console.log("Se ha retirado $".concat(valor.toFixed(2), "."));
            console.log("Saldo actual: $".concat(this.cantidad.toFixed(2)));
        }
        else {
            console.log("No hay suficiente saldo en la cuenta.");
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        return "Nombre: ".concat(this.nombre, ", Tipo de Cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de Cuenta: ").concat(this.numeroCuenta);
    };
    return Cuenta;
}());
// Interacción con el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Instancia de Cuenta
    var cuenta = null;
    // Función para crear la cuenta
    window.crearCuenta = function crearCuenta() {
        var nombre = document.getElementById("nombre").value;
        var cantidad = parseFloat(document.getElementById("cantidad").value);
        var tipoCuenta = document.getElementById("tipoCuenta").value; // Obtener el valor seleccionado del select
        var numeroCuenta = document.getElementById("numeroCuenta").value;
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
    window.depositarCuenta = function depositarCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }
        var valor = parseFloat(document.getElementById("valorDeposito").value);
        if (isNaN(valor)) {
            alert("Por favor, ingresa un valor válido para depositar.");
            return;
        }
        cuenta.depositar(valor);
    };
    // Función para retirar dinero
    window.retirarCuenta = function retirarCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }
        var valor = parseFloat(document.getElementById("valorRetiro").value);
        if (isNaN(valor)) {
            alert("Por favor, ingresa un valor válido para retirar.");
            return;
        }
        cuenta.retirar(valor);
    };
    // Función para mostrar los datos de la cuenta
    window.mostrarDatosCuenta = function mostrarDatosCuenta() {
        if (!cuenta) {
            alert("Primero debes crear la cuenta.");
            return;
        }
        var datos = cuenta.mostrarDatos();
        console.log("Datos de la cuenta:");
        console.log(datos);
        var resultadoElemento = document.getElementById("resultadoCuenta");
        resultadoElemento.textContent = datos;
    };
});
///////////////////////////////////////////////////////////////////
// Ejercicio 5
// Clase abstracta Persona
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    Persona.prototype.MayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor de Empleado
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this; // Llamamos al constructor de Persona
        _this.sueldo = sueldo;
        return _this;
    }
    // Método para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
        console.log("El sueldo de ".concat(this.nombre, " ").concat(this.apellido, " ha sido cargado: $").concat(this.sueldo.toFixed(2)));
    };
    // Método para imprimir sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " ").concat(this.apellido, " es: $").concat(this.sueldo.toFixed(2)));
    };
    // Implementación del método abstracto mostrarDatos
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
    };
    return Empleado;
}(Persona));
// Interacción con el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Función para crear un empleado desde el HTML
    window.crearEmpleado = function crearEmpleado() {
        // Obtener valores del formulario con IDs únicos
        var nombre = document.getElementById("empleadoNombre").value.trim();
        var apellido = document.getElementById("empleadoApellido").value.trim();
        var direccion = document.getElementById("empleadoDireccion").value.trim();
        var telefono = document.getElementById("empleadoTelefono").value.trim();
        var edadString = document.getElementById("empleadoEdad").value;
        var sueldoString = document.getElementById("empleadoSueldo").value;
        // Convertir los valores numéricos
        var edad = parseInt(edadString);
        var sueldo = parseFloat(sueldoString);
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
        var empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
        // Mostrar los datos del empleado en el HTML
        var resultadoElemento = document.getElementById("resultadoEmpleado");
        resultadoElemento.textContent = "".concat(empleado.nombre, " ").concat(empleado.apellido, " (").concat(empleado.edad, " a\u00F1os)");
        // Mostrar en consola los datos del empleado
        empleado.mostrarDatos();
        // Verificar si es mayor de edad
        empleado.MayorDeEdad();
        // Cargar sueldo e imprimirlo
        empleado.cargarSueldo(sueldo);
        empleado.imprimirSueldo();
    };
});
