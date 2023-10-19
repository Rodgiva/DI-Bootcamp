stars = ""
for (i=0; i < 6; i++) {
    stars += "* "
    console.log(stars);
}

for (i=0; i < 6; i++) {
    stars = "* "
    for (j=0; j < i; j++) {
        stars += "* "
    }
    console.log(stars);
}