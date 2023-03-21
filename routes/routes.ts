import express from "express";
import {
	generateEcommerceData,
	generateUsersData,
} from "../controller/controller";

const router = express.Router();

router.get("/", generateEcommerceData);
router.get("/users", generateUsersData);

export default router;
