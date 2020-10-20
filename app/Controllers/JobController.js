import { ProxyState } from "../AppState.js";
import { jobService } from "../Services/JobService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById("jobs").innerHTML = template
}

//Public
export default class JobController {
  constructor() {
    ProxyState.on("jobs", _draw);
    _draw()
  }

  jobPage() {
    document.getElementById("job-page").classList.remove("hidden")
    document.getElementById("house-page").classList.add("hidden")
    document.getElementById("car-page").classList.add("hidden")

  }

  postJob(e) {
    e.preventDefault()
    let formData = e.target
    let newJob = {
      jobTitle: formData.jobTitle.value,
      company: formData.company.value,
      rate: formData.rate.value,
      hours: formData.hours.value,
      description: formData.description.value
    }
    jobService.postJob(newJob)
  }

  editJob(e, jobId) {
    e.preventDefault()
    let formData = e.target
    let editedJob = {
      jobTitle: formData.jobTitle.value,
      company: formData.company.value,
      rate: formData.rate.value,
      hours: formData.hours.value,
      description: formData.description.value,
      _id: jobId
    }
    // @ts-ignore
    $('#editJobModal-' + jobId).modal('toggle')
    jobService.editJob(editedJob)
  }

  deleteJob(jobId) {
    jobService.deleteJob(jobId)
  }

}
