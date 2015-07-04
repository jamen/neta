# Building

To compile the CoffeeScript into JavaScript, you can simply:

 1. Use the `build` file, which is equivalent to option 2. (Shell only)
  1. `./build` for library users.
  2. `./build dev` for contributors.
 2. Use the CoffeeScript compiler:
  1. `coffee -c . -o src` for library users.
  2. `coffee -wc . -o src` for contributors.

(If you're using `./build`, don't forget to allow executing: `chmod 0744 build`)
