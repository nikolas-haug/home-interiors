# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.6.38)
# Database: products_test
# Generation Time: 2018-07-06 02:44:18 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Items`;

CREATE TABLE `Items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;

INSERT INTO `Items` (`id`, `categoryId`, `name`, `image`, `price`, `createdAt`, `updatedAt`, `UserId`)
VALUES
	(3,2147483647,'Trinity Design 72\"x80\" Exterior Unfinished Modern Mahogany Double Pre-Hung Doors','https://i.ebayimg.com/00/s/NTAwWDQxMQ==/z/-RUAAOSwGY1Zny3g/$_12.JPG',2248.00,'2018-07-04 15:09:39','2018-07-04 15:09:39',1),
	(5,2147483647,'Avanti Design 72\"x96\" Exterior Unfinished Modern Mahogany Double Pre-Hung Doors','https://i.ebayimg.com/00/s/NTAwWDM1MA==/z/2EUAAOSwzPBZnyuC/$_12.JPG',2648.00,'2018-07-04 15:10:59','2018-07-04 15:10:59',1),
	(24,2147483647,'ALL WOOD White Kitchen Cabinets Fully Upgraded 10x10 Group Sale','https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/3aAAAOSwMfJZzVDo/$_12.JPG',1368.99,'2018-07-05 18:04:00','2018-07-05 18:04:00',2);

/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` text,
  `about` text,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `about`, `email`, `password`, `last_login`, `status`, `createdAt`, `updatedAt`)
VALUES
	(1,'test','test',NULL,NULL,'test@test.com','$2a$08$nz9o.k9.5gLQaYGpvkcoPuZC4LQDPfTtkiMzCZzieuQqxhXu61wu2',NULL,'active','2018-06-30 18:34:38','2018-06-30 18:34:38'),
	(2,'barbey','test',NULL,NULL,'barbey@test.com','$2a$08$T1JhxmYeOC9Rj4NITp3sIO0RF4b2JtTHjV8jkYbvXkNBAVUC.RTq2',NULL,'active','2018-06-30 18:48:26','2018-06-30 18:48:26');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
