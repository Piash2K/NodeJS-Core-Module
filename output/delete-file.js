const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");

console.log("temp file created");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file  exits!!!");
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log("ERROR :", error.message);
}

fs.writeFile("./output/temp2.txt", "Another temp file", (error) => {
  if (error) return console.error(error.message);
  console.log("Another temp file created");
  fs.unlink("./output/temp2.txt", (error)=>{
    if(error){
        console.error("Error :", error.message)
    }else{
        console.log("Temp2 deleted")
    }
  })
});
