// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
//         title (a string)
//         uploader (a string, the person who uploaded it)
//         time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//     Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

let video1 = new Video("The Lord Of the Ring", "Avigdor", "9h 18mn")
let video2 = new Video("Pulp Fiction", "Avigdor", "2h 34mn")
let video3 = new Video("Harry Potter 1", "Avigdor", "2h 32m")
let video4 = new Video("Harry Potter 2", "Avigdor", "2h 41m")
let video5 = new Video("Harry Potter 3", "Avigdor", "2h 22m")

let videos = []
videos.push(video1)
videos.push(video2)
videos.push(video3)
videos.push(video4)
videos.push(video5)

console.log(videos);

videos = videos.map((val) => Object.values(val))
console.log(videos);

let instances = []

videos.forEach((val) => {
    let instance = new Video(val[0], val[1], val[2])
    instances.push(instance)
});
console.log(instances);
