def get_data () :
    #read the data
    with open("chocolate.txt", "r") as chocolate_file :
        print(chocolate_file.read())

get_data()

# read only the first 10 characters
def get_data () :
    #read the data
    with open("chocolate.txt", "r") as chocolate_file :
        print(chocolate_file.read(10))

get_data()

def get_data_list () :
    #read the data
    #give a list
    with open("chocolate.txt", "r") as chocolate_file :
        list_sentences = chocolate_file.readlines()
        for sentence in list_sentences :
            print(sentence)

get_data_list()


def add_data () :
    #add the data
    #give a list
    # write replaces everything
    with open("chocolate.txt", "w") as chocolate_file :
        chocolate_file.write("Hello")

add_data()


# read and write --> "r+"
def add_data_to_file () :
    with open("chocolate.txt", "r+") as chocolate_file :
        list_sentence = chocolate_file.readlines()
        list_sentence.insert(1,"hello hello \n")
        print(chocolate_file.tell())
        chocolate_file.seek(0) # starting the cursor at position 0
        chocolate_file.writelines(list_sentence)

add_data_to_file()