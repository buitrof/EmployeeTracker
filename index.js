const inquirer = require('inquirer')

inquirer.prompt({
  type: 'list',
  name: 'input',
  message: 'What would you like to do?',
  choices: ['View all employees',
  'Add a department', 
  'Add a role', 
  'Add an employee', 
  'View departments', 
  'View roles', 
  'View employees', 
  'Update employee role']
})
.then(({input}) => {
  switch (input) {
    case 'Add a department':
      console.log('department added')
      break
    case 'Add a role':
      console.log('role added')
      break
    case 'Add an employee':
      console.log('employee added')
      break
    case 'View departments':
      console.log('department viewed')
      break
    case 'View roles':
      console.log('roles viewed')
      break 
    case 'View employees':
      console.log('employees viewed')
      break
    case 'Update employee role':
      console.log('employee updated')
      break
  }
})