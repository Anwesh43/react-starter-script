#!/usr/local/bin/node
const childProcess = require('child_process')
class CommandExecutor {
    constructor(commands) {
        this.commands = commands
        this.index = 0
    }
    execute() {
        if(this.index < this.commands.length) {
            childProcess.exec(this.commands[this.index],(err,stdout,stderr)=>{
                if(err) {
                    console.log(err)
                }
                else {
                    console.log(stdout)
                    console.log(stderr)
                    this.index++
                    this.execute()
                }
            })
        }
    }
}
module.exports = CommandExecutor
