import path, { dirname } from "path";

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment configuration
dotenv.config({
  path: path.resolve(__dirname, "../..", ".env"),
});

const envSchema = z.object({
  NEXT_PUBLIC_DID: z.string().nonempty(),
  NEXT_PUBLIC_ED25519_SEED: z.string().nonempty(),
  NEXT_PUBLIC_LAVA_BADGE_ADDRESS: z.string().nonempty(),
  NEXT_PUBLIC_LAVA_PROJECT_ID: z.string().nonempty(),
  NEXT_PUBLIC_LAVA_GATEWAY: z.string().nonempty(),
});

const env = envSchema.parse(process.env);

export { env };

// const constants = {
//   publicDID: process.env.NEXT_PUBLIC_DID || "",
//   seed: process.env.ED25519_SEED || "",
// };

// export default constants;
