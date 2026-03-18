class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start(self):
        return f"{self.brand} {self.model} is starting."

    def getInfo(self):
        return f"{self.brand} {self.model} {self.year}"

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model} {self.year}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start(self):
        return f"Car {self.brand} {self.model} starts with a car engine."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"

    def __str__(self):
        return f"Car: {self.brand} {self.model} {self.year}, Doors: {self.doors}"