const controlador = {
    index: (req, res) => {
        res.send('Index de productos');
    },
};

module.exports = controlador;

module.exports = {
    detail : (req,res) => {
        return res.send("detalleMenu");
    }
}