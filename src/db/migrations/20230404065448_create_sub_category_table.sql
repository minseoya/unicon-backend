-- migrate:up
CREATE TABLE product_image (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(2000),
  product_id INT NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT productId_productImage_FK FOREIGN KEY (product_id) REFERENCES product(id)
)
-- migrate:down
DROP TABLE product_image;