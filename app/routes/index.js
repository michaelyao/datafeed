const userRoutes = require('./userRoutes');
module.exports = function(app, db) {
    userRoutes(app, db);
    // Other route groups could go here, in the future
};