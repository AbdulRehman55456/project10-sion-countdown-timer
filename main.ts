#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const toji = await inquirer.prompt([
  {
    name: "userinput",
    type: "number",
    message: "Please enter the amount of seconds",
    validate: (input) => {
      if (isNaN(input)) {
        return "please enter valid number";
      } else if (input > 60) {
        return "seconds must be in 60";
      } else {
        return true;
      }
    },
  },
]);

let gojo = toji.userinput;

function starttime(val: number) {
  const inttime = new Date().setSeconds(new Date().getSeconds() + val + 2);
  const intervaltime = new Date(inttime);
  setInterval(() => {
    const currtime = new Date();
    const timediff = differenceInSeconds(intervaltime, currtime);

    if (timediff <= 0) {
      console.log("timer has been expired");
      process.exit();
    }

    const min = Math.floor((timediff % (3600 * 24)) / 3600);
    const seconds = Math.floor(timediff % 60);
    console.log(
      `${min.toString().padStart(1, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );
  }, 1000);
}
starttime(gojo);
