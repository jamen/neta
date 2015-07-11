# Cluster
A client that connects to a Cluster server.  Designed on events emitted from I/O on the mini-protocol CLSP.

It's important to note this is dependent on CoffeeScript, although you don't have to run it in CoffeeScript, you can compile it down to JavaScript (using `build`) so you can use it in your JavaScript-based libraries.

`Cluster` is an object that implements many objects; however, there are two objects which are most important to `Cluster`...  `Client`, which handles the networking on Cluster, and `Interface`, which handles terminal I/O to create a better feeling environment.

### Permissions

Right off the bat, if you're using shell, you might want to give permission to the shell files we've provided...  You can do this using `chmod`:

```
chmod 744 cluster build
```

This allows you, but no one else, to execute the `cluster` and `build` files.
