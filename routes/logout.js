module.exports = async (req, res, next) => {
    req.session.destroy()
    res.redirect('/login')
}