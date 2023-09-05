price = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

fruit_chosed = input("Give me a fruit in the list\n")
price_of_chosen_fruit = price[fruit_chosed]

print(f"It will cost you {price_of_chosen_fruit} dollars")

#************************************************************

words = ['PYTHON', 'JOHN', 'chEEse', 'hAm', 'DOE', '123']
upper_words = [i.upper() for i in words]
print(upper_words)

words = ['PYTHON', 'JOHN', 'chEEse', 'hAm', 'DOE', '123']
upper_words = [i for i in words if i.isupper()]
print(upper_words)

#************************************************************

# Exercise 3
# Print the total duration of the playlist

playlist = {
    'title': "Hello World",
    'author': "Planet",
    'songs': [
        {
            'song_title': "Song One",
            'artist': ['Artist 1', 'Artist 2'],
            'duration': 4.31,
        },
        {
            'song_title': "Song Two",
            'artist': ['Artist 1'],
            'duration': 2.53,
        },
        {
            'song_title': "Song Three",
            'artist': ['Artist 1', 'Artist 2', 'Artist 3'],
            'duration': 3.43,
        }
    ]
}

total_duration = 0
for song in playlist['songs']:
    total_duration += song['duration']

print(total_duration)

#************************************************************

fruits = [
    "apple",
    "banana",
    "orange"
]

print(list(enumerate(fruits)))