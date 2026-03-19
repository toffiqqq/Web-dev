class Vehicle():
    def __init__(self, model, base_cost):
        self.model = model
        self.base_cost = base_cost

    def calculateDeliveryCost(self):
        return self.base_cost

    def getVehicleInfo(self):
        return f"Model: {self.model}\nCost: {self.base_cost}"


class Car(Vehicle):
    def __init__(self, model, base_cost, number_of_seats):
        super().__init__(model, base_cost)
        self.number_of_seats = number_of_seats

    def calculateDeliveryCost(self, extra_weight=0):
        return super().calculateDeliveryCost() + extra_weight

    def getVehicleInfo(self):
        return super().getVehicleInfo() + \
               f"\nNumber of seats: {self.number_of_seats}"


class Truck(Vehicle):
    def __init__(self, model, base_cost, max_load):
        super().__init__(model, base_cost)
        self.max_load = max_load

    def calculateDeliveryCost(self, distance=0, fuel_price=0):
        return super().calculateDeliveryCost() + distance + fuel_price

    def getVehicleInfo(self):
        return super().getVehicleInfo() + \
               f"\nMax load: {self.max_load}"