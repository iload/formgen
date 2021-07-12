<!--begin::Content-->
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
                                <h3 class="card-label">Create Attribute</h3>
                            </div>
                            <div class="card-toolbar">
                                <!--begin::Button-->
                                <a href="#" class="btn btn-primary font-weight-bolder"
                                    data-toggle="modal" data-target="#NewSection">
                                    <i class="la la-plus"></i>Create Attribute</a>
                                <div class="modal fade" id="NewSection" data-backdrop="static"
                                    tabindex="-1" role="dialog" aria-labelledby="staticBackdrop"
                                    aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Create Attribute</h5>
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
                                                        <div class="checkbox-inline">
                                                            <label class="checkbox">
                                                                <input type="checkbox"
                                                                    name="Checkboxes2" />
                                                                <span></span>
                                                                is Required
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleSelect1">Type <span
                                                                class="text-danger">*</span></label>
                                                        <select class="form-control selectpicker"
                                                            id="exampleSelect1" data-live-search="true">
                                                            <option value="text">Text</option>
                                                            <option value="textarea">Text Area</option>
                                                            <option value="integer">Integer</option>
                                                            <option value="double">Double</option>
                                                            <option value="date">Date</option>
                                                            <option value="DateTime">Date Time</option>
                                                            <option value="boolean">Boolean</option>
                                                            <option value="file">File</option>
                                                            <option value="image">Image</option>
                                                            <option value="video">Video</option>
                                                            <option value="singleselection">Single
                                                                Selection</option>
                                                            <option value="multiselection">Multi
                                                                Selection</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group border-1">
                                                        <label>Max Characters <span
                                                                class="text-danger">*</span></label>
                                                        <input type="number" class="form-control"
                                                            placeholder="Numbers" />
                                                    </div>
                                                    <div class="form-group border-1">
                                                        <div class="row">
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="From">
                                                            </div>
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="To">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group border-1">
                                                        <div class="row">
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="True title">
                                                            </div>
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="False title">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group border-1">
                                                        <div class="row">
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Accepted Types">
                                                            </div>
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Max File Size">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group border-1">
                                                        <div class="row">
                                                            <div class="col">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Options">
                                                            </div>
                                                            <div class="col">
                                                                <a href="#" class="btn btn-light"><i
                                                                        class="fa fa-plus-square"
                                                                        aria-hidden="true"></i> add</a>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="form-group">
                                                        <div class="checkbox-inline">
                                                            <label class="checkbox">
                                                                <input type="checkbox"
                                                                    name="Checkboxes2" />
                                                                <span></span>
                                                                is enable
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
                                        <th scope="col">is Enable</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <th scope="row" class=" align-middle">1</th>
                                        <td class="align-middle"><a href="#">Attribute Title Here 1</a>
                                        </td>
                                        <td class=" align-middle">Text</td>
                                        <td class=" align-middle">True</td>
                                        <td class="text-right">

                                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                                data-target="#NewSection">
                                                <i class="fas fa-edit"></i>
                                                Edit</a>

                                            <a href="#" class="btn btn-danger">
                                                <i class="fas fa-trash-alt"></i> Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class=" align-middle">2</th>
                                        <td class="align-middle"><a href="#">Attribute Title Here 2</a>
                                        </td>
                                        <td class=" align-middle">Image</td>
                                        <td class=" align-middle">True</td>
                                        <td class="text-right">

                                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                                data-target="#NewSection">
                                                <i class="fas fa-edit"></i>
                                                Edit</a>

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