from models import Car, Truck


def main():
    car = Car("BMW M5", 5000, 4)
    truck = Truck("Volvo FH16", 10000, 20)

    vehicles = [car, truck]

    for v in vehicles:
        print(v)
        print(v.get_vehicle_info())
        print("Delivery cost:", v.calculate_delivery_cost())


if __name__ == "__main__":
    main()