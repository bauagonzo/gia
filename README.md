# GIA Test Practice

A client-side SPA for practicing five cognitive ability test types: Reasoning, Perceptual Speed, Number Speed & Accuracy, Word Meaning, and Spatial Visualisation.

## Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/)
- [Task](https://taskfile.dev/) (optional, for task runner)

## Development

```sh
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Type checking
pnpm run check
```

## Building

```sh
# Production build
pnpm run build

# Preview production build
pnpm run preview
```

## Using Taskfile

If you have [Task](https://taskfile.dev/) installed, you can use the following commands:

```sh
task install      # Install dependencies
task dev          # Start dev server
task build        # Production build
task check        # Type checking
task preview      # Preview production build
```

## Docker

Build and run with Docker:

```sh
# Build image
task docker:build

# Run locally on port 8080
task docker:run

# Or without Task:
docker build -t ghcr.io/bauagonzo/gia .
docker run --rm -p 8080:80 ghcr.io/bauagonzo/gia
```

### Push to Registry

```sh
# Login to ghcr.io (requires GITHUB_TOKEN env var)
task docker:login

# Push image
task docker:push

# Release with specific tag
task release TAG=v1.0.0
```
