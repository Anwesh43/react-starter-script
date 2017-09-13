const CommandExecutor = require('./CommandExecutor')
const createReactProject = (process)=>{
    if(process.argv.length == 3) {
        const proj_name = process.argv[process.argv.length-1]
        const commandSequences = [`git clone https://github.com/alicoding/react-webpack-babel ${proj_name}`,`cd ${proj_name};sudo rm -r .git`]
        const commandExecutor = new CommandExecutor(commandSequences)
        commandExecutor.execute()
    }
}
module.exports = createReactProject
