
CREATE DATABASE projeto1_backend;
USE projeto1_backend;
CREATE TABLE rentals(
    rentals_id INT AUTO_INCREMENT,
    customer VARCHAR(70),
    car_brand VARCHAR(70),
    car_model VARCHAR(70),
    license_plate VARCHAR(70),
    pickup_location VARCHAR(70),
    return_location VARCHAR(70),
    price FLOAT,
    pickup_date DATE,
    return_date DATE,
    comments VARCHAR(3000),
    PRIMARY KEY (rentals_id)
);