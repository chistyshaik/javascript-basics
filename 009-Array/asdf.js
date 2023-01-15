while (runProgram) {
    const userChoiceIndex = readline.keyInSelect(USER_INPUTS);
    const userChoice = USER_INPUTS[userChoiceIndex];
    // console.log(`User Selected choice is ${chalk.bgRed(userChoice)}`)
  
    if (userChoice === ADD_STUDENT) {
  
      const newStudentName = readline.question("Please enter new student name : ");
      if(newStudentName) {
        students.push(newStudentName);
        console.log(chalk.bgGreen(`${newStudentName} added to student list`));
      }
  
    } else if (userChoice == SHOW_STUDENTS) {
      console.log(`List of Students`);
      console.log(students);
    } else {
      runProgram = false;
    }
}