import * as core from "@actions/core";
import { wait } from "./wait";

export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput("milliseconds");

    core.debug(`Waiting ${ms} milliseconds ...`);

    core.debug(new Date().toString());
    await wait(Number.parseInt(ms, 10));
    core.debug(new Date().toString());

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}
