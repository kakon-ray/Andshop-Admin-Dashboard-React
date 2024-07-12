import React from 'react';

const AddProduct = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <form method="POST" action="" enctype="multipart/form-data">
                        <div className="row pb-3">

                            <div class="col-lg-6 py-2">
                                <label>Product Name</label>
                                <input required type="text" class="form-control" name="name" placeholder="Product Name" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Category</label>
                                <input required type="text" class="form-control" name="category_id" placeholder="Category" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Sub Category</label>
                                <input required type="text" class="form-control" name="subcategory_id" placeholder="Category" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Code </label>
                                <input required type="text" class="form-control" name="code" placeholder="Product Code" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Tags </label>
                                <input required type="text" class="form-control" name="tags" placeholder="Product Tags" />
                            </div>
                            <div class="col-lg-3 py-2">
                                <label>Purchase Price</label>
                                <input required type="text" class="form-control" name="purchase_price" placeholder="Purchase Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Selling Price</label>
                                <input required type="text" class="form-control" name="selling_price" placeholder="Selling Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Discount Price</label>
                                <input required type="text" class="form-control" name="discount_price" placeholder="Discount Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Stock Quantity</label>
                                <input required type="text" class="form-control" name="stock_quantity" placeholder="Stock Quantity" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Images</label>
                                <input required type="text" class="form-control" name="images" placeholder="Images" />
                            </div>
                            
                            <div class="col-lg-3 py-2">
                                <label>Admin id</label>
                                <input required type="text" class="form-control" name="admin_id" placeholder="Admin id" />
                            </div>

                            <div class="col-lg-12 py-2">
                                <label>Description</label>
                                <input required type="text" class="form-control" name="description" placeholder="Description" />
                            </div>

                            <div class="col-lg-6 py-2">
                                <label>Thumbnail</label>
                                <input required type="text" class="form-control" name="thumbnail" placeholder="Thumbnail" />
                            </div>
                         

                        </div>

                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;