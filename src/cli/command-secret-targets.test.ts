import { describe, expect, it } from "vitest";
import {
  getAgentRuntimeCommandSecretTargetIds,
  getMemoryCommandSecretTargetIds,
} from "./command-secret-targets.js";

describe("command secret target ids", () => {
  it("includes memory targets for agent runtime commands", () => {
    const ids = getAgentRuntimeCommandSecretTargetIds();
    expect(ids.has("agents.defaults.memory.apiKey")).toBe(true);
    expect(ids.has("agents.list[].memory.apiKey")).toBe(true);
  });

  it("keeps memory command target set focused on memory credentials", () => {
    const ids = getMemoryCommandSecretTargetIds();
    expect(ids).toEqual(
      new Set([
        "agents.defaults.memory.apiKey",
        "agents.list[].memory.apiKey",
      ]),
    );
  });
});
