/**
 * Permite que un usuario se registre
 * Es una inserción de un objeto en el recuros de usuarios
 */
// Usa la librería de seguridad
const seguridad = require('./../seguridad/seguridad.js')
module.exports = (app, ruta) => {
    // Gestión de usuarios:  registro
    app.route(ruta)
        .post((req, res) => {
            // inserción de un registro de usuario
            const usuario = req.body;
            const yaExiste = seguridad.existeUsuario(usuario);
            if (yaExiste) {
                console.log(`email ya registrado: ${usuario.email}`);
                res.status(409).send(`email ${usuario.email} ya registrado`);
            } else {
                console.log(`ok registrando: ${usuario.email}`);
                seguridad.crearUsuario(usuario);
                const nuevaSesion = seguridad.nuevaSesion(usuario);
                res.status(201).json(nuevaSesion);
            }
        })
}