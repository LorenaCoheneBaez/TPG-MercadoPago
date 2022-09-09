const mp = require('../modules/mercadoPago');
module.exports = {
    // Step 8
    process: async (req,res) => {
        try {
            let datos = await mp(req.session.cart, 12, 0)
            //* Con esto mando los datos de producto, cuota y precio de envio
            //* Esto redirecciona a MP para terminar el pago
            return res.redirect(datos.response.init_point)
        } catch (error) {
            return res.send(error)
        }
    },
    // Step 9
    feedback: (req, res) => {
        return res.send('Recibimos la respuesta de Mercado Pago')
    }
};