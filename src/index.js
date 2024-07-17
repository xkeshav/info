#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 80,
  title: "@xkeshav",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#649ed2",
};

const intro = chalk.bold(
  "Hi, Keshav Mohta here 👋\n\nI'm a web developer from India.\n"
);

const links = [
  {
    name: chalk.black.bgGreen("• Website 🌐 "),
    url: "https://xkeshav.com",
  },
  {
    name: chalk.white.bgMagenta("• GitHub 💻 "),
    url: "https://github.com/xkeshav",
  },
  {
    name: chalk.yellowBright.bgHex("#1153be")("• Linkedin 🔗 "),
    url: "https://linkedin.com/in/xkeshav",
  },
  {
    name: chalk.black.bgWhite("• Twitter 𝐗 "),
    url: "https://twitter.com/xkeshav",
  },
];

const linkMap = links.map(({name, url}) => `${name}  ⇢  ${chalk.italic(url)}`).join("\n\n");

const linkList = "\n\nFind me on the internet:\n\n" + linkMap;

console.log(boxen(intro + linkList, boxenOptions));
