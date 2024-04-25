import express from "express";

// import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryArticle, productCategoryController, productCategoryControllerProject, productCountController, productListController, productPhotoController, realtedProductController, updateProductController } from "../controllers/productController.js";


const router = express.Router();

//routes
router.post('/create-product',formidable(),createProductController);

// //update
router.put('/update-product/:pid',updateProductController);

// //get product
router.get('/get-product',getProductController);

// //get single product
router.get('/get-product/:slug',getSingleProductController);


// //get photo
router.get('/product-photo/:pid',productPhotoController);

// //delete route
router.delete('/product-delete/:pid',deleteProductController);

// //filter product
// router.post('/product-filters',productFiltersController);

// //pagination count
router.get('/product-count',productCountController);

// //product per page
router.get('/product-list/:page',productListController);


// //search product
// router.get("/search/:keyword", searchProductController);

// //similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category", productCategoryController);
router.get("/product-category-project", productCategoryControllerProject);
router.get("/product-articles", productCategoryArticle);



// //payement routes
// //token
// router.get('/braintree/token',braintreeTokenController);


// //payment
// router.post('/braintree/payment',requiredSignIn,braintreePaymentController);


export default router