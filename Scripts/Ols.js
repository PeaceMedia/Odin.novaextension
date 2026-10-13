class Ols {
  constructor() {
    this.client = null;
  }

  start() {
    let olsLoc = nova.config.get('biz.peacemedia.odin-for-nova.ols-path');
    if (olsLoc === '' || olsLoc === null) {
      // Search in $PATH
      odinLoc = 'ols';
    }

    const serverOptions = {
      path: olsLoc
    };
    const clientOptions = {
      syntaxes: ["odin"]
      // debug: true
    };

    this.client = new LanguageClient(
      "ols",
      "Odin Language Server",
      serverOptions,
      clientOptions
    );

    this.client.onDidStop(function() {
      console.error("ols died.");
    })

    console.info("Attempting start of ols.");
    this.client.start();
  }

  stop() {
    this.client.stop();
    this.client = null;
  }
}

module.exports = Ols;
