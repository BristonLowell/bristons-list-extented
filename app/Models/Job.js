export default class House {
    constructor(data) {
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description || "Uknown"
        this._id = data._id
    }

    get Template() {
        return /*html*/`
    <div class="col-3 border border-dark m-5 shadow-lg rounded">
        <h1>${this.jobTitle}</h1>
        <h3>${this.company}</h3>
        <h3>$${this.rate}</h3>
        <p>${this.hours}</p>
        <p>${this.description}</p>
        <button class="btn btn-danger btn-block" onclick="app.jobController.deleteJob('${this._id}')">Delort</button>
        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editJobModal-${this._id}">
        Edit
    </button>
    ${this.Modal}
    </div>
    `
    }

    get Modal() {
        return /*html*/` 
    <div class="modal fade" id="editJobModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit ${this.jobTitle} - ${this.company}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="container-fluid" onsubmit="app.jobController.editJob(event, '${this._id}')">
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <div class="form-group row">
                                <label for="jobTitle" class="col-sm-12 col-form-label">Job Title</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" value="${this.jobTitle}" name="jobTitle" id="jobTitle"
                                        placeholder="">
                                </div>
                                <label for="company" class="col-sm-12 col-form-label">company</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" value="${this.company}" name="company" id="company"
                                        placeholder="">
                                </div>
                                <label for="rate" class="col-sm-12 col-form-label">rate</label>
                                <div class="col-sm-12">
                                    <input type="range" value="${this.rate}" min="1900" max="2020" class="form-control" name="rate"
                                        id="rate" placeholder="">
                                </div>
                                <label for="hours" class="col-sm-12 col-form-label">hours</label>
                                <div class="col-sm-12">
                                    <input type="number" min="1" class="form-control" value="${this.hours}" name="hours" id="hours"
                                        placeholder="">
                                </div>
                                <label for="description" class="col-sm-12 col-form-label">Description</label>
                                <div class="col-sm-12">
                                <textarea name="description" class="form-control" id="" cols="30" rows="10">${this.description}</textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-sm-2 col-sm-10">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
        `

    }
}
