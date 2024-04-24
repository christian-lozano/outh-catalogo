import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skn6WY32FyFjGUdNBVHn5oXKxnLCbFbWoYSWdWC7bVsIDpY1yPUzsTNpj3JiQZImQcJIaAbeRhMLjVkZATSZEyY8qmmcJOecAlOBg0r72NSvEgqtwDr2nqFL1bDMKCl30XdU3g5ChdRO2WSjDYk4xlC5hsXA0XOGR67XqaQtv0ttZ22crvBK",
});
