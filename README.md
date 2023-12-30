My personal website, runs using NextJS' static exports.

Documentation uses PNPM because it's my favorite :)

# Useful commands

```bash
# Opens development server @ http://localhost:3000.
pnpm dev
```

```bash
# Builds static site and exports it in /out.
pnpm build
```

```bash
# Starts production server using site build in /out.
pnpm start
```

```bash
# Validate code formatting, not that it matters, but that's frontend development for you.
pnpm lint

# Apply fixes to code formatting where the program can.
pnpm lint --fix
```