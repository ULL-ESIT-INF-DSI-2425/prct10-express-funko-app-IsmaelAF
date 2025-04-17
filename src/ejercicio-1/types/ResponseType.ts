import { Funko } from "../Funko.js"

/**
 * Tipo de respuesta
 */
export type ResponseType = {
    success: boolean,
    message?: string,
    funkoPops?: Funko[],
    funkoPop?: Funko,
}