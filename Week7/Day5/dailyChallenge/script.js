const apiKey = "1fa8d93f110dc9edba3d4cf7"

const test = async () => {
    const url = "https://v6.exchangerate-api.com/v6/1fa8d93f110dc9edba3d4cf7/latest/USD"

    
    try {
        const res = await fetch(url)
        if (res.status != 200) {
            throw new Error("Something went wrong")
        }
        else {
            let data = await res.json()
            console.log(data);
        }
    }
    catch (err) {
        console.log(err);
    }
}

test()