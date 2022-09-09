module.exports =(req,res,next) => {
    //* El middleware de nivel app, para corroborar que exista un usuario en sesión y que si no hay carrito que lo cree

    let cart = [] //* Array Porque puede tener varios items

    if(req.session && !req.session.cart){
        req.session.cart = cart
    }
    res.locals.cart = req.session.cart
    next();
};