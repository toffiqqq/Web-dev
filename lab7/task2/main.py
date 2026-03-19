from model import Car, Truck


def main():
    car = Car("BMW M5", 5000, 4)
    truck = Truck("Volvo FH16", 10000, 20)

    vehicles = [car, truck]

    for v in vehicles:
        print(v)
        print(v.getVehicleInfo())
        print("Delivery cost:", v.calculateDeliveryCost())


if __name__ == "__main__":
    main()