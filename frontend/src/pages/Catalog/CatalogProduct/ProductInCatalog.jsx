import React from "react";
import styles from "./index.module.css";

function CatalogProduct({ product }) {
  const { id, name, price, imageUrl } = product;
  return (
    <a className={styles.productContainer}
      href={"/catalog/product/" + id}>
      <div className={styles.product}>
      <div
        className={styles.product__imageContainer}
      >
        <img
          src={imageUrl}
          className={styles.imageContainer__image}
          alt="food"
        />
      </div>
      <div className={styles.product__detailsContainer}>
        <p className={styles.detailsContainer__name}>{name}</p>
        <div className={styles.weightPriceContainer}>
          <p className={styles.weightPriceContainer__price}>${price}</p>
        </div>
      </div>
      </div>
    </a>
  );
}

export default CatalogProduct;
