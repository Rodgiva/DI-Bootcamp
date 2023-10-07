from random import randint

class Opponent:
    def __init__(self, st=10, ag=10, sp=10, lvl=1):
        # strength
        self.st: int = st
        # agility
        self.ag: int = ag
        # speed
        self.sp: int = sp
        # level
        self.lvl: int = lvl

        # health points
        self.hp = (10*self.st) + (2*self.ag) + (2*self.sp)
        # accuracy
        self.acc = (self.st/8) + (self.ag/2) + (self.sp)
        # dodge
        self.do = (self.st/8) + (self.ag) + (self.sp/2)
        # attack
        self.atk = (4*self.st) + (self.ag/2) + (self.sp/2)
        # attack speed
        self.atk_sp = self.ag + self.sp

    # use to calculate and set the hp, accuracy, dodge, attack and attack speed based on the strength, agility and speed
    def set_attr(self):
        self.hp = (10*self.st) + (2*self.ag) + (2*self.sp)
        self.acc = (self.st/8) + (self.ag/2) + (self.sp)
        self.do = (self.st/8) + (self.ag) + (self.sp/2)
        self.atk = (4*self.st) + (self.ag/2) + (self.sp/2)
        self.atk_sp = (2*self.ag) + (2*self.sp)

    def lvlup(self):
        self.lvl += 1
        self.set_attr()

class Monster(Opponent):
    monsters = ["troll", "orc", "goatman", "goblin", "skeleton"]
    def __init__(self, lvl):
        self.monster = Monster.monsters[randint(0,len(Monster.monsters)-1)]
        st: int
        ag: int
        sp: int
        match self.monster:
            # to improve: use a json file to store this values and use it here
            case "troll":
                st = 8
                ag = 1
                sp = 1
            case "orc":
                st = 5
                ag = 3
                sp = 2
            case "goatman":
                st = 3
                ag = 4
                sp = 4
            case "goblin":
                st = 2
                ag = 3
                sp = 5
            case "skeleton":
                st = 1
                ag = 5
                sp = 4
        super().__init__(st, ag, sp, lvl)
        self.assignement_stats(st, ag)
    
    def assignement_stats(self, base_st, base_ag):
        stats_pts = 10 * (self.lvl - 1)
        # assignation of st
        pts_up = randint((base_st * (self.lvl - 1)) - (2 * self.lvl - 1), (base_st * (self.lvl - 1)) + (2 * self.lvl - 1))
        self.st += pts_up
        stats_pts -= pts_up

        # assignation of st
        pts_up = randint((base_ag * (self.lvl - 1)) - (2 * self.lvl - 1), (base_ag * (self.lvl - 1)) + (2 * self.lvl - 1))
        self.ag +=  pts_up
        stats_pts -= pts_up

        # assignation of st
        self.sp += stats_pts

        self.set_attr()

class Player(Opponent):
    def __init__(self, name, st, ag, sp):
        super().__init__(st, ag, sp)
        self.name = name

class Game:
    @staticmethod
    def intro():
        print("\nHey! You! You're finnaly awake! You tried to escape the empire, right?\nBut they ended up capturing you. There is still a way for you to get out of this.\nTo earn your release, you will have to face 10 monsters. If you succeed, not only will you be alive, but you will have a place in the hall of fame!")
        name = input("Well, before we begin, tell me what is your name?\n")
        attr_pts = 10

        while True:
            print(f"You have {attr_pts} attributes points left.")
            attr_st = int(input("How strong are you?\n"))
            if not (attr_st > attr_pts):
                attr_pts -= attr_st
                break
            else:
                print("You cannot use more attribute points than you have.")

        while True:
            print(f"You have {attr_pts} attributes points left.")
            attr_ag = int(input("And what about you agility?\n"))
            if not (attr_ag > attr_pts):
                attr_pts -= attr_ag
                break
            else:
                print("You cannot use more attribute points than you have.")

        while True:
            print(f"You have {attr_pts} attributes points left.")
            attr_sp = int(input("And how fast are you?\n"))
            if not (attr_sp > attr_pts):
                attr_pts -= attr_sp
                break
            else: 
                print("You cannot use more attribute points than you have.")

        return [name, attr_st, attr_ag, attr_sp]
    
# attrs = Game.intro()
# player = Player(name=attrs[0], st=attrs[1], ag=attrs[2], sp=attrs[3])
# print(player.name)
# print(f"lvl {player.lvl}")
# print(f"{player.st} / {player.ag} / {player.sp}")
# print(f"hp {player.hp}\nacc {player.acc}\ndodge {player.do}\nattack {player.atk}\nattack speed {player.atk_sp}")

test = Monster(1)
# print(test.monster)
print(f"lvl {test.lvl}")
print(f"{test.st} / {test.ag} / {test.sp}")
print(f"hp {test.hp}\nacc {test.acc}\ndodge {test.do}\nattack {test.atk}\nattack speed {test.atk_sp}")