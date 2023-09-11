class Dog:
    def __init__(self, dog_name, dog_age, dog_weight):
        self.name = dog_name
        self.age = dog_age
        self.weight = dog_weight

    def bark(self):
        return f"{self.name} is barking\n"
    
    def run_speed(self):
        return (self.weight/self.age*10)
    
    def fight(self, other_dog):
        stats_self = self.run_speed() * self.weight
        stats_other_dog = other_dog.run_speed() * other_dog.weight
        if stats_self > stats_other_dog:
            return self
        elif stats_self < stats_other_dog:
            return other_dog