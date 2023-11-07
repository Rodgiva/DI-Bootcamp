let randomEmoji = {}

function getRandom () {
    fetch('127.0.0.1:3030/emojis/play')
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        randomEmoji = data.emoji
        let options = data.options
        render(randomEmoji, options)
    })
}

getRandom()

function render(emoji, options) {
    const root = document.getElementById('root')
    root.innerHTML = emoji.name + " " + options[0].name + " " + options[1].name
}

function guessEmoji() {
    const val = document.getElementById("name").value
    fetch("127.0.0.1:3030/emojis/guess", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({guess:val, name: randomEmoji.name})
    })
    .then(res => res.json())
    .then(data => {
        document.
    })
}