class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    // Function Cari Mobil
    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputCapacity = document.getElementById("inputCapacity");
    this.searchbtn = document.getElementById("search-btn");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.searchbtn.onclick = this.search
  }

  // Coba Cari Mobil

    search = async () => {
    this.clear();
    const dateValue = this.inputDate.value;
    const timeValue = this.inputTime.value;
    const capacityValue = this.inputCapacity.value;

      if (!dateValue || !timeValue || !capacityValue ) {
        alert("Mohon isi semua data!")
        return;
      }

    const datetime = new Date (`${dateValue} ${timeValue}`)

      const filterer = (car) => {
        const dateFilter = car.availableAt > datetime;
        const capacityFilter = car.capacity > capacityValue;
        return dateFilter && capacityFilter;
      }

      const cars = await Binar.listCars(filterer);
      Car.init(cars);

      if (cars.length === 0) {
        const node = document.createElement("div");
        node.innerHTML = "<strong>Mohon maaf, Mobil tidak tersedia</strong>"
        this.carContainerElement.appendChild(node);
      } else {

      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {

    // cars : menampilkan list cars yang sudah difilter

    // AvailableAt ==> field  tanggal dan waktu
    // capacity ==> jumlah penumpang

    const cars = await Binar.listCars();
    Car.init(cars);
    
  } 

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
