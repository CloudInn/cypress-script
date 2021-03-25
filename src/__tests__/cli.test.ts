import {exec} from "child_process";
import * as fs from "fs";

const logger = require("../../lib/logger")

describe("cyscript cli create page object", () =>{
  
  // 1- create page object in integration folder [module-name]/pagename.page.ts
  test('should create a .page.ts in integration folder if cypress installed',done => {
    var pageName : string  = "samplepg.page.ts";
    var moduleName : string = "sample_module"
    var cypressIntegrationFolderPath : string = "cypress/integration";
    var pageFullPath = `${cypressIntegrationFolderPath}/${moduleName}/${pageName}`
    // create cypress/integration folders
    fs.mkdirSync("cypress")
    fs.mkdirSync(cypressIntegrationFolderPath)
    exec(`npx cyscript create --pg ${pageName} --module ${moduleName}`,(err, stdout, stderr)=>{
      // logger.log("hey",stdout)
      expect(fs.existsSync(pageFullPath)).toEqual(true)
      fs.rmdirSync(cypressIntegrationFolderPath, { recursive: true })
      fs.rmdirSync("cypress")
      done();
    })
  });
  test('should throw exception if cypress is not installed',done => {
    var pageName : string  = "samplepg.page.ts";
    var moduleName : string = "sample_module"
    var cypressIntegrationFolderPath : string = "cypress/integration";
    var pageFullPath = `${cypressIntegrationFolderPath}/${moduleName}/${pageName}`
    exec(`npx cyscript create --pg ${pageName} --module ${moduleName}`,(error, stdout, stderr)=>{
      expect(stderr).toContain("throw new custom_exceptions_1.CypressNotFoundError")
      done();
    })
  });
  // 1-1 if cypress doesn't exists report back no cypress installation
  
  // 2-if there is no module name provided ask for it or it will create it in the root
  // integration/pagename.page.ts

  // 3-if the page name is exists you will notify user that it exists and exit
  // 4- if the module doesn't have a folder pages it will create it and add the page 
  // inside the module , if it has the folder then just add the page to it

  //5- page object specs [
  //  1- class name
  //  2- private elementsIDs
  //  3- private url
  //  4- constructor
  //  5- cy.visit
  //   visit(): void {
  //  cy.visit(this._url, { failOnStatusCode: false });
  // }
  //]

  // 6- it should match module name upper or lower case
})
