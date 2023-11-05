// apparently, I can't use the last version of shalk
// the version used here is 4.1.2

const displayCat = () => {
  const chalk = require("chalk");

  const cat =
    "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░\n░░░░░░░░▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░\n░░░░░░░░█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░\n░░░░░░░░█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░\n░▄▄▄▄▄░░█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░\n░██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░\n░░▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░\n░░░░▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░\n░░░░░░░▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░\n░░░░░░░▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░\n░░░░░░█▀▀█████████▀▀▀▀████████████▀░░░░\n░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░".split(
      "\n"
    );

  cat.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (i < 10) {
        process.stdout.write(chalk.red(element[i]));
      } else if (10 <= i && i < 20) {
        process.stdout.write(chalk.yellow(element[i]));
      } else if (20 <= i && i < 30) {
        process.stdout.write(chalk.green(element[i]));
      } else if (30 <= i && i < 40) {
        process.stdout.write(chalk.blue(element[i]));
      }
    }
    console.log("");
  });
};

module.exports = displayCat