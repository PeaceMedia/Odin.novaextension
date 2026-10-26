# Odin for Nova

An extension for the [Nova](https://nova.app/) code editor providing syntax highlighting support, issue reporting/syntax checking, and language server integration for the [Odin programming language](https://odin-lang.org/).

Conceived and written by [a human](https://albright.pro/).

## Installation

The easiest way to install this extension is to simply use Nova's built-in Extension Library feature. From the Extensions menu, select "Extension Library…". In the resulting window, use the "Search for New Extensions" search box at the top and search for "Odin." This extension should pop right up.

Note, however, that its most interesting features require a bit of configuration. Keep reading for more information.

## Configuration

### Syntax highlighting

Simply enable this extension. Further configuration is not necessary.

### Issue reporting

You will need to have an "odin" binary installed, if you haven't already, in order for it to provide issues. Current builds of Odin are available from MacPorts and Homebrew, or you can download a binary or build from source following [these instructions](https://odin-lang.org/docs/install/). You'll have the best results using a version of Odin which matches the version you are writing your code in.

Once it's installed, go into this extension's settings (select "Extension Library…" from the "Extensions" menu, click on "Odin for Nova" from the left sidebar, then click the "Settings" tab in the panel on the right) and check the "Enable issues" box. If the "odin" binary is not in your $PATH, you will need to use the "Path to "odin" binary" field to enter its path.

Due to how Odin's syntax checking works, *syntax can only be checked when a file is saved.*

### Language server support

You will need to have the "ols" binary installed. Clone the [ols repo](git@github.com:DanielGavin/ols.git) and follow the instructions in the readme to build it; it's pretty simple to build.

Once installed, go into this extension's settings as described above and check the "Use OLS" box, and set a path to the "ols" binary if necessary.

OLS is highly configurable via JSON files. See its documentation for more information.

## Bugs & missing features

- "odinfmt" from the OLS project is not currently supported. I'll need to do some more experimentation to see if it's possible and/or would make sense to use that with Nova.
- Sometimes the extension tries to start OLS when it's already running, causing an exception to be logged to the extension console. I'm not yet sure why that's happening or if there's anything I can do about that.

## Nota bene

Note that this project is not developed by the core Odin team. Please do not contact them for support with this extension. Instead, create an issue in [this project's GitHub issue queue](https://github.com/PeaceMedia/Odin.novaextension/issues), or email me at: contact@albright.pro

LLM-generated contributions to this project will not be accepted.

## Acknowledgements

- Tree-sitter support provided by the [tree-sitter-odin project](https://github.com/tree-sitter-grammars/tree-sitter-odin), licensed under the [MIT license](https://mit-license.org/).
- Logo modified from the [official artwork](https://github.com/odin-lang/artwork), licensed under the [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license. This is a copyleft license so Odin for Nova's extension artwork is also under this license.
- The `example/demo.odin` file is from the [Odin code repo](https://github.com/odin-lang/Odin) (`examples/demo/demo.odin`), which is licensed under the 3-clause BSD license.
