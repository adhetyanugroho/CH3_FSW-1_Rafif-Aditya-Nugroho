class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `

    <div class="col-md-4 my-2">
  <div class="card" style="width: 18rem;">
    <img src="${this.image}" class=" card-img-top card-img img-fluid" alt="">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${this.manufacture} ${this.model}</h5>
        <h5 class="price"> Rp ${this.rentPerDay} /Hari</h5>
        <p class="card-text">${this.description}</p>
        <ul class="list-unstyled">
          <li class="icon-card"> <img src="./images/fi_users.png" alt="">    ${this.capacity}  Orang</li>
          <li class="icon-card"> <img src="./images/fi_settings.png" alt="">   ${this.transmission}</li>
          <li class="icon-card"> <img src="./images/fi_calendar.png" alt="">  Tahun ${this.year}</li>
        </ul>
        <a href="#" class="btn btn-success btn-card mt-auto">Pilih Mobil</a>
      </div>
  </div> 
  
    
      `;
  }
}


 