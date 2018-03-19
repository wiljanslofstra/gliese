const fs = require('fs');
const install = require('yarn-install');

const args = process.argv;
const mod = args[2];
const modulesFolder = `${__dirname}/../dev/modules/`;
const modulesOutput = `${__dirname}/../assets/src/javascript/modules/`;
const modulesDefinitions = `${__dirname}/../assets/src/javascript/containers/general.js`;

function listAvailableModules() {
  fs.readdir(modulesFolder, (err, files) => {
    if (err) { console.error(err); return; }

    const availableModules = [];
    const regex = new RegExp('.js$');

    files.forEach((file) => {
      if (regex.test(file)) {
        availableModules.push(file.replace(regex, ''));
      }
    });

    console.log(`Available modules: \n${availableModules.join('\n')}`);
  });
}

function getModuleFile(name) {
  if (typeof name === 'undefined') {
    console.error('No module defined');
    listAvailableModules();
    return null;
  }

  const moduleFile = `${modulesFolder}${name}.js`;

  const exists = fs.existsSync(moduleFile);

  if (!exists) {
    console.error('This module is not available to add to your project');
    listAvailableModules();
    return null;
  }

  return fs.readFileSync(moduleFile);
}

function moveModule(file, name, cb) {
  fs.writeFile(`${modulesOutput}${name}.js`, file, (err) => {
    if (err) { console.error(err); return; }
    cb();
  });
}

function insertModule(name, cb) {
  const definitions = fs.readFileSync(modulesDefinitions);
  const definitionsStr = definitions.toString();
  const fromImport = '// insert-import';
  const toImport = `import ${name} from '../modules/${name}';\n// insert-import`;
  const fromDefinition = '// insert-definition';
  const toDefinition = `${name}.initialize();\n  // insert-definition`;

  let rewrite = definitionsStr.replace(fromImport, toImport);
  rewrite = rewrite.replace(fromDefinition, toDefinition);

  fs.writeFile(modulesDefinitions, rewrite, (err) => {
    if (err) { console.error(err); return; }
    cb();
  });
}

function installDependencies(file, cb) {
  const match = /\/\*\*?\s?npm-add\s(.+)\s?\*\*?\//g;
  const fileStr = file.toString();

  const matches = match.exec(fileStr);

  if (matches) {
    const deps = matches[1].trim().split(' ');

    if (deps.length) {
      install(deps);
    }
  }

  cb();
}

const file = getModuleFile(mod);

if (typeof file !== 'undefined' && file) {
  moveModule(file, mod, () => {
    insertModule(mod, () => {
      installDependencies(file, () => {
        console.log(`Module '${mod}' added!`);
      });
    });
  });
}
