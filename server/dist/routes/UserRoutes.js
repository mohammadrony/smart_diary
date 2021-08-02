"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.userController = new userController_1.UserController();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // For TEST only ! In production, you should use an Identity Provider !!
        // - /api/user
        this.router.post('/register', this.userController.registerUser);
        this.router.post('/login', this.userController.authenticateUser);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map