/* eslint-disable no-console */
import chalk from "chalk";
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production";

console.log(chalk.blue("Generating minified bundle for production. This will take a moment..."));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // A fatal error occurred. Stop here.
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log(chalk.yellow("Webpack generated the following errors: "));
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warnings: "));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // If we got this far, the build succeeded.
  console.log(chalk.green("Your app has been built for production and written to /dist!"));
console.log(process.env);
  return 0;
});
