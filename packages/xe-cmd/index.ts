#!/usr/bin/env node --experimental-transform-types

// This shebang works for both Node.js and Bun
const isBun = typeof Bun !== 'undefined';

async function main() {
  try {
    // Your main CLI logic here
    console.log("Hello via " + (isBun ? "Bun" : "Node.js") + "!");
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Export the main function for module usage
export { main };

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}