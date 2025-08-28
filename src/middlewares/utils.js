const utilsMiddleware = (req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next(); // Passe à l'étape suivante
};
module.exports = utilsMiddleware ;