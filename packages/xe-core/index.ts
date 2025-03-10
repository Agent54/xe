export default class Xe {
    constructor() {
        console.log("Xe");
        // detect deno, bun, node
        if (typeof Deno !== "undefined") {
            console.log("Deno");
        // @ts-ignore missing bun type
        } else if (typeof Bun !== "undefined") {
            console.log("Bun");
        // @ts-ignore warn about missing process
        } else if (typeof process !== "undefined") { 
            console.log("Node");
        }
    }
    version():string {
        return "0.1.1";
    }
}
