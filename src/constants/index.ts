import dotenv from "dotenv";
import path from "path";

// Load environment configuration
dotenv.config({
  path: path.resolve(__dirname, "../..", ".env"),
});

const constants = {
  publicDID: process.env.NEXT_PUBLIC_DID || "",
  seed: process.env.ED25519_SEED || "",
};

export default constants;
