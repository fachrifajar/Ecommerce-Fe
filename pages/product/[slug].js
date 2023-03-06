/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import style from "@/styles/pages/detailProductStyle.module.scss";
import Link from "next/link";
import Navbar from "@/components/organisms/navbar";
import CardProductNew from "@/components/molecules/cardProductNew";
import Footer from "@/components/organisms/footer";
import axios from "axios";

export default function DetailProduct(props) {
  const productListNew = props.productListNew;

  const [productNew, setProductNew] = React.useState(productListNew.data);
  return (
    <>
      <Head>
        <title>Product | Blanja</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <div className="container-fluid p-0">
          {/* NAVBAR */}
          <nav
            className={`container-fluid sticky-sm-top shadow py-2 ${style.containerNavbar}`}
          >
            <Navbar />
          </nav>
          {/* END OF NAVBAR */}

          {/* CONTENT PRODUCT */}
          <section className={`container py-5 ${style.content}`}>
            {/* BREADCRUMB */}
            <nav aria-label="breadcrumb" className={`mb-5 ${style.breadcrumb}`}>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">category</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  T-Shirt
                </li>
              </ol>
            </nav>

            {/* SELECT PRODUCT */}
            <div className={`${style.selectProduct}`}>
              <div className="row">
                <div className={`col-4 pt-1 ${style.imgProduct}`}>
                  <img
                    className={`shadow-sm rounded-3`}
                    src="/images/imgProduct.webp"
                    alt="imgProduct"
                  />
                </div>
                <div className={`col-8 ${style.sideRight}`}>
                  <div className="row">
                    <h3 className={style.title}>Baju muslim pria</h3>
                    <p className={style.brand}>Zalora Cloth</p>
                    <img
                      src="/images/Rating.webp"
                      className={`${style.rating}`}
                      alt="image-product"
                    />
                  </div>
                  <div className="row mt-4">
                    <div className={`col-3 ${style.price}`}>
                      <p>Price</p>
                      <h4>$ 20.0</h4>
                    </div>
                    <div className={`col-4 ${style.color}`}>
                      <h5>Color</h5>
                      <select
                        className="form-select shadow-sm"
                        aria-label="Default select example"
                        // onChange={(e) => {
                        //   fetchBySort(e.target.value);
                        // }}
                      >
                        <option selected disabled>
                          Color
                        </option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                        <option value="gray">Gray</option>
                        <option value="cream">Cream</option>
                        <option value="blue">Blue</option>
                      </select>
                    </div>
                  </div>
                  {/* SIZE */}
                  <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-3">
                      <h5>Size</h5>
                      <nav aria-label="Page navigation example">
                        <ul
                          class="pagination"
                          // style={{ marginLeft: "80px", marginTop: "10px" }}
                        >
                          <li class="page-item">
                            <a
                              class="page-link border rounded-circle border-2 fw-bold"
                              aria-label="Previous"
                              style={{
                                borderRadius: "50px",
                                borderColor: "black",
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  color: "black",
                                }}
                              >
                                -
                              </span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link border-0"
                              style={{ color: "black" }}
                            >
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link border rounded-circle border-2 fw-bold"
                              aria-label="Next"
                            >
                              <span
                                aria-hidden="true"
                                style={{ color: "black" }}
                              >
                                +
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-4">
                      <h5>Jumlah</h5>
                      <nav aria-label="Page navigation example">
                        <ul
                          class="pagination"
                          // style={{ marginLeft: "80px", marginTop: "10px" }}
                        >
                          <li class="page-item">
                            <a
                              class="page-link border rounded-circle border-2 fw-bold"
                              aria-label="Previous"
                              style={{
                                borderRadius: "50px",
                                borderColor: "black",
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  color: "black",
                                }}
                              >
                                -
                              </span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link border-0"
                              style={{ color: "black" }}
                            >
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link border rounded-circle border-2 fw-bold"
                              aria-label="Next"
                            >
                              <span
                                aria-hidden="true"
                                style={{ color: "black" }}
                              >
                                +
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className={`col-12 ${style.btnProduct}`}>
                      <Link
                        href={"/bag/my-bag"}
                        type="button"
                        className={`btn btn-outline-secondary rounded-pill me-3 ${style.btnChat}`}
                      >
                        Chat
                      </Link>
                      <Link
                        href={"/bag/my-bag"}
                        type="button"
                        className={`btn btn-outline-secondary rounded-pill me-3 ${style.btnAddBag}`}
                      >
                        Add bag
                      </Link>
                      <Link
                        href={"/checkout"}
                        type="button"
                        className={`btn btn-primary rounded-pill ${style.btnBuyNow}`}
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT INFORMATION */}
            <div
              className={`mt-5 border-bottom pb-5 border-2 ${style.productInformation}`}
            >
              <div className={`mb-4 ${style.subTitle}`}>
                <h4>Informasi Produk</h4>
              </div>
              <div className={`mb-4 ${style.condition}`}>
                <h5>Condition</h5>
                <p>New</p>
              </div>
              <div className={`mb-5 ${style.Description}`}>
                <h5>Description</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Donec non magna rutrum, pellentesque augue eu, sagittis velit.
                  Phasellus quis laoreet dolor. Fusce nec pharetra quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Praesent sed enim vel turpis blandit imperdiet ac ac felis.
                  Etiam tincidunt tristique placerat. Pellentesque a consequat
                  mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo
                  vehicula. Donec quam elit, sollicitudin eu nisl at, ornare
                  suscipit magna
                </p>
                <p>
                  onec non magna rutrum, pellentesque augue eu, sagittis velit.
                  Phasellus quis laoreet dolor. Fusce nec pharetra quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Praesent sed enim vel turpis blandit imperdiet ac ac felis.
                </p>
                <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>
              </div>
              <div className={`${style.productReview}`}>
                <h3>Product review</h3>
              </div>
            </div>

            {/* LIKE THIS */}
            <div className={`mt-5 ${style.likeThis}`}>
              <h2>You can also like this</h2>
              <p>You’ve never seen it before!</p>
              <div className={`row ${style.content}`}>
                {productNew?.map((item, key) => (
                  <React.Fragment key={key}>
                    <div className="col-3 mb-4">
                      <CardProductNew
                        img={item?.products_picture[0]?.product_picture}
                        productName={item?.product_name}
                        price={item?.price}
                        storeName={item?.store_name}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          {/* END OF CONTENT PRODUCT */}

          {/* FOOTER */}
          <Footer />
          {/* END OF FOOTER */}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const productNew = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?sort=DESC&categoryFilter=tshirt`
  );

  const convertProductNew = productNew.data;

  return {
    props: {
      productListNew: convertProductNew,
    }, // will be passed to the page component as props
  };
}
