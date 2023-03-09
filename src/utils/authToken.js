import jwt from "jsonwebtoken";

export const signToken = (user) => {
  const secret = process.env.SECRET;

  const accessToken = jwt.sign(JSON.parse(JSON.stringify(user)), secret, {
    expiresIn: "7d",
  });

  return accessToken;
};

export const verifyToken = (token) => {
  const secret = process.env.SECRET;
  jwt.verify(token, secret, (err, user) => {
    console.log(err);
  });
};
