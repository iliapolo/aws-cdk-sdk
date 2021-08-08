import { Stack, App } from '@aws-cdk/core';

/**
 * Synthesize a stack and return the template in JSON format.
 * Useful for complete snapshot testing.
 */
export function synth(stack: Stack): any {
  const app = App.of(stack);
  if (!app) {
    throw new Error(`Stack ${stack.node.id} must be defined within an app in order to synthesize it`);
  }
  const assembly = app.synth();
  return assembly.getStackArtifact(stack.node.id).template;
}