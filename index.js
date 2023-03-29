const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	await fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, "utf-8")
	console.log(data)
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	await fs.appendFile(fileName, fileContent)
	console.log("update");
}

const myFileDeleter = async (fileName) => {

	// dont chnage function name
	await fs.unlink(fileName)
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

myFileWriter("File.txt", "hello")
// myFileReader("File.txt")
myFileUpdater("File.txt", " World")
// myFileDeleter("File.txt")

