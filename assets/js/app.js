class Paciente {

    #nombre;
    #edad;
    #rut;
    #diagnostico;

    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre
        this.#edad = edad
        this.#rut = rut
        this.#diagnostico = diagnostico

    }
    get nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }
    get rut() {
        return this.#rut
    }
    get diagnostico() {
        return this.#diagnostico
    }
    set nombre(value) {
        this.#nombre = value
    }
    set edad(value) {
        this.#edad = value
    }
    set rut(value) {
        this.#rut = value
    }
    set diagnostico(value) {
        this.#diagnostico = value
    }

}

class Consultorio {
    #nombre;
    #pacientes;

    constructor(nombre) {
        this.#nombre = nombre
        this.#pacientes = []
    }
    agregarPaciente(paciente) {
        this.#pacientes.push(paciente)
    }

    mostrarPacientes() {
        this.#pacientes.forEach((paciente) => {
            console.log(paciente)
        })
    }


}

const consultorioMacul = new Consultorio("Macul")
const paciente1 = new Paciente("Alexis", 38, "16175907", "Sano")
const paciente2 = new Paciente("Pedro", 75, "16175908", "Diabetico")
const paciente3 = new Paciente("Juana", 60, "16175909", "Presion alta")


consultorioMacul.agregarPaciente(paciente1)
consultorioMacul.agregarPaciente(paciente2)
consultorioMacul.agregarPaciente(paciente3)

consultorioMacul.mostrarPacientes()

