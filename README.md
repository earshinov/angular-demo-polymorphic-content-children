This is a demo project to demonstrate a problem that I had trying to extend a library without copying and modifying its sources.

First, take a look at `git log`.  Note that the problem appears after introducting an intermediate module with imports and re-exports (`demo-lib/src/util/index.ts`).

Reproduction steps:

  1. Build the library: `cd demo-lib; npm run build; cd ..;`
  2. Install the built library into the demo app: `cd demo-app; yarn add file:../demo-lib/dist;`
  3. Try builting the demo app: `npm run -- ng build --prod`

The `--prod` flag is crucial here since it enables AOT compilation where the problem occurs.  Running `ng server` or `ng build` without the `--prod` flag succeeds and the application works properly.

The problem is probably related to the approach taken by the library to allow for different kinds of children in a container component.  This approach is illustrated in this blog post: http://www.mcrook.com/2016/10/angular-2-contentchildren-with-abstract.html
