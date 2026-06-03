# Odin for Nova

An extension for the [Nova](https://nova.app/) code editor providing syntax highlighting support and issue reporting for the [Odin programming language](https://odin-lang.org/).

## Installation

The easiest way to install this extension is to simply use Nova's built-in Extension Library feature. From the Extensions menu, select "Extension Library…" then search for "Odin" in the resulting window and install this extension.

Due to how Odin's syntax checking works, it will *only check syntax when a file is saved.*

The "odin" binary will need to be in your path in order for this extension to function currently (you should be able to open a Terminal window and activate the Odin binary by simply typing "odin"). The ability to specify a path to the Odin binary may be made available in a future update. Currently, this extension does not currently have any settings.

## Known issues

- Incorrect issues are given for import statements that use collections. We can probably fix this by looking for and parsing an ols.json file in the project and using that to tell the Odin binary about collections.

## Todo

- Implement [OLS](https://github.com/DanielGavin/ols) support for even more Odin goodies in Nova.

## Acknowledgements

- Tree-sitter support provided by the [tree-sitter-odin project](https://github.com/tree-sitter-grammars/tree-sitter-odin), licensed under the [MIT license](https://mit-license.org/).
- Logo modified from the [official artwork](https://github.com/odin-lang/artwork), licensed under the [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license. This is a copyleft license so Odin for Nova's extension artwork is also under this license.
