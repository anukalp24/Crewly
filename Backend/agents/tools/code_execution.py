import os
from dotenv import load_dotenv
from e2b_code_interpreter import Sandbox
from langchain_core.tools import tool

load_dotenv()


@tool
def execute_python_code(code: str) -> str:
    """Execute Python code in an isolated E2B sandbox and return its output or errors."""

    try:
        with Sandbox.create() as sandbox:
            result = sandbox.run_code(code)

            output = []

            if result.logs.stdout:
                output.append(
                    "Output:\n" + "\n".join(result.logs.stdout)
                )

            if result.logs.stderr:
                output.append(
                    "Standard error:\n" + "\n".join(result.logs.stderr)
                )

            if result.error:
                output.append(f"Execution error:\n{result.error}")

            if not output:
                output.append("Execution completed with no output.")

            return "\n\n".join(output)[:10000]

    except Exception as error:
        return f"Sandbox execution failed: {error}"