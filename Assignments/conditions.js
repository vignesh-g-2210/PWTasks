let browser = "Edges"

launchBrowser();
function launchBrowser() {

    if (browser == "Chrome") {
        console.log(`Valid browser`)
    }

    else if (browser == "Edge") {
    }
    else {
        console.log(`Invalid browser`)
    }
}


runTests();
function runTests() {
    switch (browser) {
        case "Chrome":
            console.log("Valid browser")
            break

        case "Edge":
            console.log("Invalid browser")
            break

        default:
            console.log("Error")

    }

    





}