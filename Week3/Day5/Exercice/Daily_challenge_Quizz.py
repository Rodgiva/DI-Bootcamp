# Instructions
# Part 1 : Quizz :

# What is a class?
#   A class i a pattern of an instance of object in which we can store variables, functions/methods (in the case if the methods are not statics)
# What is an instance?
#   An instance is an object that was instanciate (initialized) from a class
# What is encapsulation?
#   The encapsulation is a way to protect the attributes af the class by using the accessor: getter and setter
# What is abstraction?
#   An abstract method cannot be instanciate, but can be used by the childrens of the class. It is a way to unify the code
# What is inheritance?
#   The inheritence is a way to unify the code too. It let the mother class A to give all his methods and attributes to the children class B
# What is multiple inheritance?
#   The multiple inheritance is when a class can be a mother class AND a children class
# What is polymorphism?
#   We talk about polymorphism when an attribute or method/function have the same name from different class
# What is method resolution order or MRO?
#   In inheritence, particularly multiple inheritance, the MRO is the method to search the methods in the mothers class:
#   for example
class A:
    def display(self):
        print('bip A')
class B:
    def display(self):
        print('bip B')
class C(A, B):
    pass
class D(C, B):
    pass

bip = D()
bip.display()

#   In this case, bip is aninstance of D, so the MRO will search in D(C, B). The first class inputted is C, so the MRO check -> C(A, B) et.
#   D -> C -> A: the output will be "bip A", and not "bip A"

# Part 2: Create a deck of cards class.

# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

# the card
class Card:
    # class variables where I store every values of cards
    suits = ("Hearts", "Diamonds", "Clubs", "Spades")
    values = ("A",2,3,4,5,6,7,8,9,10,"J","Q","K")

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

# the deck
class Deck:
    # Here I shuffle the deck in the init method 
    def __init__(self):
        self.cards = []
        self.shuffle()

    # Here I store in a list every instances of cards
    def shuffle(self):
        for suit in Card.suits:
            for value in Card.values:
                self.cards.append(Card(suit, value))
        random.shuffle(self.cards)

    # Pick randomly a card, then remove it in the list of cards, return the card picked
    def deal(self):
        rand_pick_suit_index = random.randint(0, len(Card.suits)-1)
        rand_pick_value_index = random.randint(0, len(Card.values)-1)

        card_dealt = None
        for card in self.cards:
            if card.suit == self.cards[rand_pick_suit_index].suit and card.value == self.cards[rand_pick_value_index].value:
                card_dealt = card
                self.cards.remove(card)
                break
        
        print(f"You have dealt the {card_dealt.suit} {card_dealt.value}")
        return card_dealt
    
a_deck = Deck()
a_deck.deal()