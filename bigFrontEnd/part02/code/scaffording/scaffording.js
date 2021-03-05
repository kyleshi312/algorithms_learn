#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Project name'
    }
])
.then(anwsers => {
    console.log(anwsers)
    const tmplDir = path.join(__dirname, 'templates')
    const destDir = process.cwd()

    fs.readdir(tmplDir, (err, files) => {
        if(err) throw err
        files.forEach(file => {
            // console.log(file)
            ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result) => {
                if(err) throw err
                console.log(result)
                fs.writeFileSync(path.join(destDir, file), result)
            })
        })
    })
})