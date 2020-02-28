const inquirer = require('inquirer')
const db = require('./config/db.js')

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
      db.query('SELECT * FROM department', (err, dep) => {
        if (err) console.log(err)
        for (let i = 0; i < dep.length; i++) {
          console.log(dep[i].name)
        }
      })
      break
    case 'View roles':
      db.query('SELECT * FROM role', (err, role) => {
        if (err) console.log(err)
        for (let i = 0; i < role.length; i++) {
          console.log(role[i].title)
        }
      })
      break 
    case 'View employees':
      db.query('SELECT * FROM employee', (err, emp) => {
        if (err) console.log(err)
        for (let i = 0; i < emp.length; i++) {
          console.log(emp[i].first_name + emp[i].last_name)
        }
      })
      break
    case 'Update employee role':
      console.log('employee updated')
      break
  }
})