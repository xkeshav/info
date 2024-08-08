#!/usr/bin/env node
import chalk from "chalk";

const boxLines = {
  topLeft: "┌",
  topRight: "┐",
  bottomRight: "┘",
  bottomLeft: "└",
  side: "│",
};
const emptySpace = " ";
const newLine = "\n";

const boxConsole = (messages = []) => {
  const tips = [emptySpace, ...messages].map((msg) => ({
    text: msg,
    len: msg.length,
  }));
  let line = chalk.yellow("─".repeat(80));
  let result = [
    newLine,
    chalk.yellow(boxLines.topLeft) + line + chalk.yellow(boxLines.topRight),
  ];
  tips.forEach((msg) => {
    const str = emptySpace + msg.text + `${msg.len === 1 ? "\t" + emptySpace : newLine}` + emptySpace;
    result.push(str);
  });
  result.push(
    chalk.yellow(boxLines.bottomLeft) + line + chalk.yellow(boxLines.bottomRight) + newLine,
  );
  return result.join(newLine);
};

const intro = chalk.bold(
  "\t\t👋 Hi, Keshav Mohta here. I'm a web developer from India.",
);

const links = [
  {
    name: chalk.black.bgGreen("• Website 🕸 "),
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

const linkMap = links
  .map(({ name, url }) => `\t\t ${name} ->  ${chalk.italic(url)}`)
  .join("\n\n");

const linkList = "\t\tFind me on the internet:";

console.log(boxConsole([intro, linkList, linkMap]));
