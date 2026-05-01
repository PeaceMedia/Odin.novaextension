# How to build this extension

This documentation assumes you are at least somewhat familiar with [building Nova extensions](https://docs.nova.app/extensions/getting-started/) and just covers the particularities for this extension, partially because I know I myself am not going to remember all this stuff after a few weeks (or even days).

1. Clone or download the [tree-sitter-odin](https://github.com/tree-sitter-grammars/tree-sitter-odin) project to the destination of your choice.
2. Download the Parser Build Script linked from the [Tree-Sitter parser compilation documentation page](https://docs.nova.app/syntax-reference/tree-sitter/#compiling-a-parser) on Nova's web site (here's a [direct link](https://docs.nova.app/syntax-reference/build_script.zip) if you trust it).
3. `cd` into the directory created by the ZIP file you downloaded and run `./compile_parser.sh /path/to/tree-sitter-odin /path/to/Nova.app`. If all goes well, a "build" directory will be created.
4. Copy `build/lib/libtree-sitter-odin.14.1.dylib` from that directory to `Syntaxes/libtree-sitter-odin.dylib` in this project (note the version number part may be different, but whatever it is, it must be removed).
5. From the `tree-sitter-odin` directory, copy the `.scm` files in the `queries` directory into the `Queries` directory in this project.
