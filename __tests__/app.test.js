const request = require("supertest");
const app = require("../src/app"); // adjust the path to your app file
const { describe, it, expect } = require("@jest/globals"); // Add this line

describe("GET /", () => {
    it('responds with "Hello World!"', async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World!");
    });
});
