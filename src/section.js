4	<!--begin::Content-->
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Subheader-->
    <!--end::Subheader-->
    <!--begin::Entry-->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-custom">
                        <div class="card-header flex-wrap border-0 pt-6 pb-0">
                            <div class="card-title">
                                <h3 class="card-label">Create Sections</h3>
                            </div>
                            <div class="card-toolbar">
                                <!--begin::Button-->
                                <a href="#" class="btn btn-primary font-weight-bolder"
                                    data-toggle="modal" data-target="#NewSection">
                                    <i class="la la-plus"></i>Create Sections</a>
                                <div class="modal fade" id="NewSection" data-backdrop="static"
                                    tabindex="-1" role="dialog" aria-labelledby="staticBackdrop"
                                    aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Create Sections</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <i aria-hidden="true" class="ki ki-close"></i>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label>Title <span
                                                                class="text-danger">*</span></label>
                                                        <input type="text" class="form-control"
                                                            placeholder="Name of Title" />
                                                        <span class="form-text text-muted">You cand
                                                            insert New Title
                                                            Name.</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleSelect1">Type <span
                                                                class="text-danger">*</span></label>
                                                        <select class="form-control"
                                                            id="exampleSelect1">
                                                            <option>Normal</option>
                                                            <option>Table</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="checkbox-inline">
                                                            <label class="checkbox">
                                                                <input type="checkbox"
                                                                    name="Checkboxes2" />
                                                                <span></span>
                                                                is Title Visible
                                                            </label>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save
                                                    changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!--end::Button-->
                            </div>
                        </div>
                        <div class="card-body">
                            <!--begin::Example-->
                            <table class="table table-striped table-bordered">
                                <thead class="thead-dark text-center">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">is Title Visible</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <th scope="row" class=" align-middle">1</th>
                                        <td class="align-middle"><a href="#">Section Title Here 1</a>
                                        </td>
                                        <td class=" align-middle">Normal</td>
                                        <td class=" align-middle">True</td>
                                        <td class="text-right">

                                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                                data-target="#NewSection">
                                                <i class="fas fa-edit"></i>
                                                Edit</a>
                                            <a href="#" class="btn btn-secondary">
                                                <i class="fa fa-plus-square" aria-hidden="true"></i>
                                                Attribute</a>
                                            <a href="#" class="btn btn-danger">
                                                <i class="fas fa-trash-alt"></i> Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class=" align-middle">2</th>
                                        <td class="align-middle"><a href="#">Section Title Here 2</a>
                                        </td>
                                        <td class=" align-middle">Normal</td>
                                        <td class=" align-middle">True</td>
                                        <td class="text-right">

                                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                                data-target="#NewSection">
                                                <i class="fas fa-edit"></i>
                                                Edit</a>
                                            <a href="#" class="btn btn-secondary">
                                                <i class="fa fa-plus-square" aria-hidden="true"></i>
                                                Attribute</a>
                                            <a href="#" class="btn btn-danger">
                                                <i class="fas fa-trash-alt"></i> Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--end::Example-->
                        </div>
                        <div class="card-footer text-right" googl="true">
                            <button type="reset" class="btn btn-info">Preview</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                            <button type="reset" class="btn btn-primary mr-2">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!--end::Entry-->
</div>
<!--end::Content-->