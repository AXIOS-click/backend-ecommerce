const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

function return_vulnerabilities(){
  return vulnerabilities = new Promise((resolve, reject) => {
    exec("npm audit security list", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      resolve(stdout.split(" ")[1]);
    });
  }).then(vulns => {
    return vulns;
  }).catch(err => {
    console.log(err);
  })
}
function extraer_failes_npm_test(){
  return failed_or_valid = new Promise((resolve, reject) => {
    exec("npm test", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject('❌');
        return;
      }
      resolve('✅');
    });
  }).then(vulns => {
    return vulns;
  }).catch(err => {
    return err;
  })
}
function nodeversion(){
  // extraer la version de node del archivo nvmrc
  const nvmrc_path = path.join(__dirname, '../.nvmrc');
  const nvmrc_buffer = fs.readFileSync(nvmrc_path);
  const nvmrc_string = nvmrc_buffer.toString();
  const nvmrc_version = nvmrc_string.split("\n")[0];
  return nvmrc_version;
}
const construir_readme = async (vulneravilidades, node_version, pass_test) => {
  const vulns = await vulneravilidades;
  // leer el archivo README.md y abrirlo en un buffer
  const readme_path = path.join(__dirname, '../readme.md');
  const readme_buffer = fs.readFileSync(readme_path);
  // convertir el buffer a string
  const readme_string = readme_buffer.toString();
  // buscar la linea que contiene la cantidad de vulnerabilidades
  const linea_vuln = readme_string.split("\n").find(linea => linea.includes("|v16"));
  // reemplazar la linea por la cantidad de vulnerabilidades
  const readme_string_reemplazado = readme_string.replace(linea_vuln, `|${node_version}|${vulns}|${pass_test}|`);
  // convertir el string a buffer
  const readme_buffer_reemplazado = Buffer.from(readme_string_reemplazado);
  // escribir el buffer en el archivo README.md
  fs.writeFileSync(readme_path, readme_buffer_reemplazado);
  console.log('README.md actualizado');
}



const principal =  async () => {
  const vulns = await return_vulnerabilities();
  const nvmrc_version = await nodeversion();
  const extraer_failes_npm_tes = await extraer_failes_npm_test();
  construir_readme(vulns, nvmrc_version, extraer_failes_npm_tes);
}
principal();
