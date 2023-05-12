let availablekeywords = [
    'html',
    'java',
    'computer',
    'sandip',
    'javascript',
    'computer',
    'internet',
    'iphone',
    'andriod',
    'andriod',
    'police',
    'officer',
    'code wite sandip',
];
const inputBox = document.getElementById("inputBox")
const resultBox = document.querySelector(".resulBox")

inputBox.onkeyup = function () {
    let result = []
    let input = inputBox.value

    if (input.length) {
        result = availablekeywords.filter((e) => {
            return e.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
    }
    display(result)
}

function display(result) {
    let content = result.map((list) => {
        return "<li>" + list + "</li>";
    })
    resultBox.innerHTML = "<ul>" + content + "</ul>";
}

console.log(window.screenY);