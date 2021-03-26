## Cyscript [npm tool for automating creation of multile test configurations for Cypress ]

## Install dependencies
```
npm install 
```
## How to run test cases
```
npm run prep-test
npm test
```

#### run using venv
you should have python3 and virtualenv installed

```
virtualenv .venv
source .venv/bin/activate
pip install nodeenv
nodeenv -p
npm run pre-run
cyscript --help
```

#### vscode extensions used 
- File watcher  
    it transpiles every changed ts file after saving it.