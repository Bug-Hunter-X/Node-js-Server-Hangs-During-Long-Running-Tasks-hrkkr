# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a long-running task blocks the event loop, causing the server to appear unresponsive.  The `bug.js` file contains the problematic code.  The `bugSolution.js` demonstrates how to resolve this using `process.nextTick` or `setImmediate` for better event loop management.

## Problem

The `bug.js` example uses `setInterval` to simulate a heavy computation that doesn't yield control to the event loop. This results in the server freezing and not responding to requests. 

## Solution

The `bugSolution.js` demonstrates the solution by using `process.nextTick` or `setImmediate`. These functions allow tasks to be scheduled for execution on the next iteration of the event loop, preventing the server from hanging.