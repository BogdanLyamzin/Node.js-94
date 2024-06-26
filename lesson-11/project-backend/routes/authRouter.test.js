import mongoose from "mongoose";
import request from "supertest";

import app from "../app.js";

import { findUser, clearUsers } from "../services/authServices.js";

const {TEST_DB_HOST, PORT = 3000} = process.env;

describe("test /api/auth/signup route", ()=> {
    let server = null;
    beforeAll(async ()=> {
        await mongoose.connect(TEST_DB_HOST);
        server = app.listen(PORT);
    })

    afterAll(async ()=> {
        await mongoose.connection.close();
        server.close();
    })

    beforeEach(()=> {
        
    })

    afterEach(async ()=> {
        await clearUsers();
    })

    test("test /api/auth/signup with valid data", async ()=> {
        const signupData = {
            username: "Bogdan",
            email: "bogdan@gmail.com",
            password: "123456"
        };

        const {statusCode, body} = await request(app).post("/api/auth/signup").send(signupData);
        expect(statusCode).toBe(201);
        expect(body.username).toBe(signupData.username);
        expect(body.email).toBe(signupData.email);

        const user = await findUser({email: signupData.email});
        expect(user.username).toBe(signupData.username);
    })
})