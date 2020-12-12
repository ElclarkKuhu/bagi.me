document.addEventListener('DOMContentLoaded', function() {
    var methods = {
        "name" : ["Paypal", "DANA", "OVO", "GO-PAY", "LinkAja"],
        "link" : [
            "http://paypal.me/elclarkkuhu",
            "https://saweria.co/elclark",
            "https://saweria.co/elclark",
            "https://saweria.co/elclark",
            "https://saweria.co/elclark"
        ]
    }
    showMethods(methods);
});

function getMethods() {
    // TODO
}

function showMethods(methods) {
    const p1 = "<a href='";
    const p2 = "'><button>";
    const p3 = "</button></a>";

    for (i in methods.name) {
        document.getElementById('methods').innerHTML = document.getElementById('methods').innerHTML + p1 + methods.link[i] + p2 + methods.name[i] + p3;
        console.log(p1 + methods.link[i] + p2 + methods.name[i] + p3)
    }
}