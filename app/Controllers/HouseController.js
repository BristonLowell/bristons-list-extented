import { ProxyState } from "../AppState.js";
import { houseService } from "../Services/HouseService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template
}

//Public
export default class HouseController {
  constructor() {
    ProxyState.on("houses", _draw);
    _draw()
  }

  housePage() {
    document.getElementById("house-page").classList.remove("hidden")
    document.getElementById("car-page").classList.add("hidden")
    document.getElementById("job-page").classList.add("hidden")

  }

  postHouse(e) {
    e.preventDefault()
    let formData = e.target
    let newHouse = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      year: formData.year.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      price: formData.price.value,
      description: formData.description.value
    }
    houseService.postHouse(newHouse)
  }

  editHouse(e, houseId) {
    e.preventDefault()
    let formData = e.target
    let editedHouse = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      year: formData.year.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      price: formData.price.value,
      description: formData.description.value,
      _id: houseId
    }
    // @ts-ignore
    $('#editHouseModal-' + houseId).modal('toggle')
    houseService.editHouse(editedHouse)
  }

  deleteHouse(houseId) {
    houseService.deleteHouse(houseId)
  }

}
