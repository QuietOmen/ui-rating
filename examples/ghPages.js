/**
 * Runs an ordered set of commands within each of the build directories.
 */
import ncp from 'ncp';
ncp.limit = 16;
import mkdirp from 'mkdirp';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

var exampleDirs = fs.readdirSync(__dirname).filter((file) => {
  return fs.statSync(path.join(__dirname, file)).isDirectory();
});

// Ordering is important here. `npm install` must come first.
var files = ['bundle.js'];

for (let dir of exampleDirs) {
  for (let file of files) {
    ncp(`./examples/${dir}/build/${file}`, `./gh-pages/${dir}-${file}`, {clobber: true}, function (err) {
     if (err) {
       return console.error(err);
     }
     console.log('GH-Pages: File Copied!');
    });
  }
}

// <script src="ui-rating.min.js"></script>
// <div id="rating-root"></div>
// <script src="rating/index.js"></script>

ncp('./dist/ui.rating.js', './gh-pages/ui.rating.js', {clobber: true}, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('GH-Pages: Library Copied!');
});
