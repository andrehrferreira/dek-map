import path from "path";
import globby from "globby";

export default async (mapPath) => {
    const mapPathResolve = path.join(process.cwd(), mapPath);

    await globby([`${mapPathResolve}/*.js`, `${mapPathResolve}/**/*.js`]).then((paths) => {
        paths.forEach((filePath) => {
            let fileRequire = require(path.resolve(filePath));

            if(typeof fileRequire == "function")
                fileRequire();
            else if(typeof fileRequire.default == "function")
                fileRequire.default();
        });

        return true;
    });
}
