
# BackendApi
Este readme esta construido en parte de manera automatica con scripts.
## Test
| Node Version | Vulnerabilidades NPM detectadas | Test |
| -|-|-|
|v16.15.0|0|✅|

## ✨ Estructura de carpetas y archivos

```bash
< ROOT / src >
    |
    |-- .github/                           # Github Actions Workflow
    |-- .husky/                            # Husky Workflow
    |-- scripts/                           # Scripts para automatizar el procesos de construccion
    |   |-- create-readme.js               # Script para crear el README.md en parte de manera automatica
    |-- src/                               # Archivos de codigo
    |   |-- controllers/                   # Controladores
    |   |-- exceptions/                    # Excepciones de codigo controladas
    |   |-- middlewares/                   # Middlewares
    |   |-- providers/                     # Proveedores de servicios
    |   |-- routes/                        # Rutas
    |   |-- index.ts                       # Archivo principal de codigo
    |-- test/                              # Archivos de pruebas
    |   |-- app/                           # Aqui se definen los test
    |   |-- step_definitions               # Aqui se definen los entries de los test
    |-- .editorconfig                      # Configuraciones de editor
    |-- .env                               # Archivo de variables de entorno
    |-- .gitignore                         # Archivo de ignoracion de archivos en git
    |-- .nvmrc                             # Archivo que define la version de nodejs
    |-- cucumber.js                        # Entrie de cucumber.js para los test
    |-- package.json                       # Archivo de configuracion del proyecto
    |-- tsconfig.json                      # Archivo de configuracion de typescript
    |-- tsconfig.prod.json                 # Archivo de configuracion de typescript para produccion
    |-- ************************************************************************
```
