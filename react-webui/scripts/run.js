const { spawn } = require("child_process");
const scripts = ["start", "build", "test"];
const [, , script, ...args] = process.argv;

if (!scripts.includes(script)) {
  throw new Error("${script} is not a valid react-script");
}

const node = spawn(
  "node",
  ["node_modules/react-scripts/bin/react-scripts", script, ...args],
  {
    env: {
      ...process.env,
    },
    stdio: "inherit",
  }
);

node.on("close", (code) => {
  process.exit(code);
});
