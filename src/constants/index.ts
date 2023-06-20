import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment configuration
dotenv.config({
  path: path.resolve(__dirname, "../..", ".env"),
});

const constants = {
  publicDID: process.env.NEXT_PUBLIC_DID || "",
  seed: process.env.ED25519_SEED || "",
};

export default constants;
