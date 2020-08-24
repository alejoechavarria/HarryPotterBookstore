-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 24, 2020 at 04:55 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `harry-potter-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `BOOKS`
--

CREATE TABLE `BOOKS` (
  `ID` int(11) NOT NULL,
  `TITLE` varchar(100) NOT NULL,
  `PRICE` decimal(10,3) NOT NULL,
  `STOCK` int(11) NOT NULL,
  `URL_IMAGE` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `BOOKS`
--

INSERT INTO `BOOKS` (`ID`, `TITLE`, `PRICE`, `STOCK`, `URL_IMAGE`) VALUES
(1, 'HARRY POTTER Y LA PIEDRA FILOSOFAL', '50.000', 10, 'https://m.media-amazon.com/images/S/aplus-media/sota/f1abc087-9d36-4c74-9f63-eae7cbd1dc8c.jpg'),
(2, 'HARRY POTTER Y EL MISTERIO DEL PRINCIPE', '58.000', 0, 'https://static.megustaleer.com.ar/images/libros_650_x/9789878000152.jpg'),
(3, 'HARRY POTTER Y EL PRISIONERO DE ASKABAN', '45.000', 10, 'https://fundacionrafaelpombo.org/wp-content/uploads/2018/07/harry-potter-y-el-prisionero-de-azkaban.jpg'),
(4, 'HARRY POTTER Y LAS RELIQUIAS DE LA MUERTE', '52.000', 29, 'https://images-na.ssl-images-amazon.com/images/I/81+mhB9i4wL.jpg'),
(5, 'HARRY POTTER Y LA CAMARA SECRETA', '54.000', 11, 'https://www.unitheque.com/getImage/m7lm4cyl8wA%3D.jpg?key=2|500'),
(6, 'HARRY POTTER Y EL CALIZ DE FUEGO', '48.000', 45, 'https://images-eu.ssl-images-amazon.com/images/I/9109MtU5pRL._AC_SR462,693_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `ROLES`
--

CREATE TABLE `ROLES` (
  `ID` int(11) NOT NULL,
  `ROLE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ROLES`
--

INSERT INTO `ROLES` (`ID`, `ROLE`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `SALES`
--

CREATE TABLE `SALES` (
  `ID` int(11) NOT NULL,
  `INVOICE_NUMBER` varchar(30) NOT NULL,
  `DESCRIPTION` varchar(200) NOT NULL,
  `TOTAL_PAID` decimal(10,3) NOT NULL,
  `DATE` varchar(10) NOT NULL,
  `CLIENT_ID` int(11) NOT NULL,
  `CLIENT_FULL_NAME` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SALES`
--

INSERT INTO `SALES` (`ID`, `INVOICE_NUMBER`, `DESCRIPTION`, `TOTAL_PAID`, `DATE`, `CLIENT_ID`, `CLIENT_FULL_NAME`) VALUES
(1, 'RANDOM123', 'Testeando', '100.000', '2020-08-22', 8, 'Alejandro Echavarria'),
(21, 'RANDOM010', 'Compra de 3 libros de HARRY POTTER Y EL PRISIONERO DE ASKABAN, 2 libros de HARRY POTTER Y LAS RELIQUIAS DE LA MUERTE, ', '239.000', '2020-08-23', 8, 'Alejandro Echavarria'),
(22, 'RANDOM115', 'Compra de 3 libros de HARRY POTTER Y LA PIEDRA FILOSOFAL, ', '150.000', '2020-08-23', 8, 'Alejandro Echavarria'),
(23, 'RANDOM0', 'Compra de 2 libros de HARRY POTTER Y LA PIEDRA FILOSOFAL, ', '100.000', '2020-08-23', 8, 'Alejandro Echavarria'),
(24, 'RANDOM1', 'Compra de 2 libros de HARRY POTTER Y EL PRISIONERO DE ASKABAN, 1 libros de HARRY POTTER Y LAS RELIQUIAS DE LA MUERTE, 5 libros de HARRY POTTER Y EL CALIZ DE FUEGO, ', '382.000', '2020-08-23', 11, 'Valeria ');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  `LASTNAME` varchar(60) NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `PASSWORD` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`ID`, `NAME`, `LASTNAME`, `USERNAME`, `EMAIL`, `PASSWORD`) VALUES
(1, 'Alejandro', 'Echavarria', 'Admin', 'alejo@gmail.com', '$2a$10$7cCHdorngQIAX3QvnV95zO.1vsb0bN9/Cxv7dnAdBeUMAGhqtL86u'),
(8, 'Alejandro', 'Echavarria', 'alejoechavarria', 'alejoem@gmail.com', '$2a$10$SdjEjHFUzy7QknVTaGJytekIzatu5iEQkKXCIG1O.zkjerNUu3fZm'),
(10, 'Camilo', '', 'camilo', 'camilo@gmail.com', '$2a$10$3poCp.9NK1n30cq6e0.I1OPMFChR9aRnGzVcfbX9L/nXq3mxqgMAW'),
(11, 'Valeria', '', 'Valen', 'valeria@gmail.com', '$2a$10$0/UgUMwyLnOzKnGSpP8xu.LdVZzTO34oejT5KgpOoP2oingRr2I3a');

-- --------------------------------------------------------

--
-- Table structure for table `USERS_ROLES`
--

CREATE TABLE `USERS_ROLES` (
  `USER_ID` int(11) NOT NULL,
  `ROLES_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USERS_ROLES`
--

INSERT INTO `USERS_ROLES` (`USER_ID`, `ROLES_ID`) VALUES
(1, 1),
(8, 2),
(10, 2),
(11, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `BOOKS`
--
ALTER TABLE `BOOKS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `ROLES`
--
ALTER TABLE `ROLES`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `SALES`
--
ALTER TABLE `SALES`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `INVOICE_NUMBER` (`INVOICE_NUMBER`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `username` (`USERNAME`),
  ADD UNIQUE KEY `email` (`EMAIL`);

--
-- Indexes for table `USERS_ROLES`
--
ALTER TABLE `USERS_ROLES`
  ADD PRIMARY KEY (`USER_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `BOOKS`
--
ALTER TABLE `BOOKS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ROLES`
--
ALTER TABLE `ROLES`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `SALES`
--
ALTER TABLE `SALES`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
