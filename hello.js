
const fs = require('fs');
const path = "/root/.julia/dev/PkgGraph/Project.toml"
const data = fs.readFileSync(path, "utf-8")
console.log(data)
