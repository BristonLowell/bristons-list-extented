import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from '../Services/AxiosService.js'

class JobService {
  editJob(editedJob) {
    api.put("jobs/" + editedJob._id, editedJob).then(res => {
      this.getJobs()
    }).catch(err => console.error(err))
  }
  constructor() {
    this.getJobs()
  }
  getJobs() {
    api.get("jobs").then(res => {
      ProxyState.jobs = res.data.data.map(rawJobData => new Job(rawJobData))
    }).catch(err => console.error(err))
  }

  postJob(newJob) {
    api.post("jobs", newJob).then(res => {
      this.getJobs()
    }).catch(err => console.error(err))
  }

  deleteJob(jobId) {
    api.delete("jobs/" + jobId).then(res => {
      console.log(res.data);
      this.getJobs()
    }).catch(err => console.error(err))
  }
}

export const jobService = new JobService();

