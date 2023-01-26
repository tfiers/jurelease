
const fs = require('fs')

// From /root/.julia/dev/PkgGraph/Project.toml
const path = "test/Project.toml"
const text = fs.readFileSync(path, "utf-8")

// Matches a line `version = "…"`, but w/ arbitrary whitespace.
const re = /^\s*version\s*=\s*"(.*)"\s*$/m
const m = text.match(re)
const matchedLine = m[0]
const currentVersion = m[1]
const versionToRelease = currentVersion.split('-', limit=1)[0]
const newLine = matchedLine.replace(currentVersion, versionToRelease)
const newText = text.replace(matchedLine, newLine)

fs.writeFileSync("test/out/Project.toml", newText)

// Now, for Changelog.md
// The whole new section to add can just be a hardcoded multiline string here.
// Hm, also, now no need for commented out section anymore.

/*
<br>

## v0.7  &nbsp;<sub>[![][unreleased-badge]][devlink]</sub>

[unreleased-badge]: https://img.shields.io/badge/Unreleased-orange
[devlink]: https://github.com/tfiers/PkgGraph.jl#development

_{no changes yet}_
*/

// We could markdown-parse.
// Or trust there'll be:
// ## vXXXX  &nbsp;<sub>[![][unreleased-badge]][devlink]</sub>
// ## vXXXX  &nbsp;<sub>[![][XXXX-date-badge]][XXXX-release]</sub>
