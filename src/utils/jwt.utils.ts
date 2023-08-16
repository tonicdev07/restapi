import jwt from "jsonwebtoken";
import config from "config";
import logger from "../utils/logger";


export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {
  const signingKey = Buffer.from(
    config.get<string>(keyName),
    "base64"
  ).toString("base64");
  console.log(signingKey);
  // console.log(publicKey);

  return jwt.sign(object, 'abs123', {
    ...(options && options),
    // algorithm: "RS256",
  });
}

export function verifyJwt(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
) {
  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  );
  // console.log("token" + token);
  // console.log("publicKey" + publicKey);

  try {
    const decoded = jwt.verify(token, 'abs123');

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    logger.error("error" + e);
    return {
      valid: false,
      expired: true,
      decoded: null,
    };
  }
}
