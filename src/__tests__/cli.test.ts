import {exec} from "child_process";
import * as fs from "fs";
const logger = require("../../lib/logger")

describe("cyscript cli commands", () =>{
  test('should be okay',async () => {
    var pageName : string  = "samplepg.page.ts";
    exec(`npx cyscript create pg ${pageName}`,(err, stdout, stderr)=>{
      // logger.log("hey",stdout)
      expect(fs.existsSync(pageName)).toEqual(true)
    })

  });
})
