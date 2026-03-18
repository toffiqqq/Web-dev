from model import Vehicle, Car

def main():
    v1 = Vehicle("Toyota", "Camry", 2020)
    c1 = Car("BMW", "M5", 2022, 4)

    vehicles = [v1, c1,]

    for v in vehicles:
        print(v)
        print(v.getInfo())
        print(v.start())

        if isinstance(v, Car):
            print(v.honk())


if __name__ == "__main__":
    main()