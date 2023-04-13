SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `fuiba_dappmp` DEFAULT CHARACTER SET utf8 ;
USE `fuiba_dappmp` ;

-- -----------------------------------------------------
-- Table `fuiba_dappmp`.`Electrovalvulas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fuiba_dappmp`.`Electrovalvulas` ;

CREATE TABLE IF NOT EXISTS `fuiba_dappmp`.`Electrovalvulas` (
  `electrovalvulaId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`electrovalvulaId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fuiba_dappmp`.`Dispositivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fuiba_dappmp`.`Dispositivos` ;

CREATE TABLE IF NOT EXISTS `fuiba_dappmp`.`Dispositivos` (
  `dispositivoId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `ubicacion` VARCHAR(200) NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`dispositivoId`, `electrovalvulaId`),
  INDEX `fk_Dispositivos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Dispositivos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `fuiba_dappmp`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fuiba_dappmp`.`Mediciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fuiba_dappmp`.`Mediciones` ;

CREATE TABLE IF NOT EXISTS `fuiba_dappmp`.`Mediciones` (
  `medicionId` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  `valor` VARCHAR(100) NULL,
  `dispositivoId` INT NOT NULL,
  PRIMARY KEY (`medicionId`, `dispositivoId`),
  INDEX `fk_Mediciones_Dispositivos_idx` (`dispositivoId` ASC) ,
  CONSTRAINT `fk_Mediciones_Dispositivos`
    FOREIGN KEY (`dispositivoId`)
    REFERENCES `fuiba_dappmp`.`Dispositivos` (`dispositivoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fuiba_dappmp`.`Log_Riegos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fuiba_dappmp`.`Log_Riegos` ;

CREATE TABLE IF NOT EXISTS `fuiba_dappmp`.`Log_Riegos` (
  `logRiegoId` INT NOT NULL AUTO_INCREMENT,
  `apertura` TINYINT NULL,
  `fecha` DATETIME NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`logRiegoId`, `electrovalvulaId`),
  INDEX `fk_Log_Riegos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Log_Riegos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `fuiba_dappmp`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLPatio');
INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLCocina');
INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLJardinDelantero');
INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLLiving');
INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLHabitacion1');
INSERT INTO fuiba_dappmp.Electrovalvulas (nombre) VALUES ('eLHabitacion2');


INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 1', 'Patio',1);
INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 2', 'Cocina',2);
INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 3', 'Jardin Delantero',3);
INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 4', 'Living',4);
INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 5', 'Habitacion 1',5);
INSERT INTO fuiba_dappmp.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 6', 'Habitacion 2',6);


INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),60,1 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),40,1 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),30,2 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),50,3 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),33,5 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),17,4 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),29,6 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),20,1 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),44,4 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),61,5 );
INSERT INTO fuiba_dappmp.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),12,2 );

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;