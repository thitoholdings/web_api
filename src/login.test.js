import request from "supertest";
import app from "./app.js";

describe("login functionality", () => {
  test("logs in user with valid credentials", async () => {
    const response = await request(app)
      .post("/users/authenticate")
      .send({ username: "kutlos@thitoholdings.co.bw", password: "alpha000" });

    expect(response.status).toBe(200);
    expect(response.body.user).toBeDefined(); // assuming your backend API returns a user ID in the response body
  });
});
