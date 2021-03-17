-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2021 a las 15:39:01
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(4) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contractTypeName` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `roleId` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `roleDescripcion` varchar(300) COLLATE utf8mb4_spanish_ci NOT NULL,
  `hourlySalary` int(2) NOT NULL,
  `monthlySalary` int(2) NOT NULL,
  `numberDocument` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fechaNacimiento` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ciudad` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estadoCivil` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `numberCelular` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `numeroFijo` int(20) NOT NULL,
  `fechaIngreso` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `tipoDocumento` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `barrio` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `iniTrabajo` date DEFAULT NULL,
  `finTrabajo` date DEFAULT NULL,
  `tipoBono` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `valorBono` int(20) NOT NULL,
  `create_at` date DEFAULT NULL,
  `correo` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `name`, `contractTypeName`, `roleId`, `roleDescripcion`, `hourlySalary`, `monthlySalary`, `numberDocument`, `estado`, `fechaNacimiento`, `direccion`, `ciudad`, `estadoCivil`, `numberCelular`, `numeroFijo`, `fechaIngreso`, `tipoDocumento`, `barrio`, `iniTrabajo`, `finTrabajo`, `tipoBono`, `valorBono`, `create_at`, `correo`) VALUES
(23, 'Darwin Smith Diaz Martinez', 'Contrato horas', 'Supervisor', 'Back end', 0, 0, '1024494633', 'Activo', '2021-03-11', 'calle 34 n 78-54', 'Medellin', 'Union Libre', '3102496517', 4220734, '2021-03-24', 'Cedula de ciudadania', 'Robledo Villa flora', '0000-00-00', '0000-00-00', '', 0, '2021-03-16', 'darwin@gmail.com'),
(25, 'Darwin Smith Diaz Martinez', 'Contrato horas', 'Supervisor', 'Back end', 0, 0, '1024494633', 'Activo', '2021-03-11', 'calle 34 n 78-54', 'Medellin', 'Union Libre', '3102496517', 4220734, '2021-03-24', 'Cedula de ciudadania', 'Robledo Villa flora', '0000-00-00', '0000-00-00', '', 0, NULL, 'darwin@gmail.com'),
(26, 'Darwin Smith Diaz Martinez', 'Contrato horas', 'Supervisor', 'Back end', 0, 0, '1024494633', 'Activo', '2021-03-11', 'calle 34 n 78-54', 'Medellin', 'Union Libre', '3102496517', 4220734, '2021-03-24', 'Cedula de ciudadania', 'Robledo Villa flora', '0000-00-00', '0000-00-00', '', 0, NULL, 'darwin@gmail.com'),
(27, 'Tompi Pizo', 'Contrato horas', 'Supervisor', 'Back end', 0, 0, '1024494633', 'Activo', '2021-03-11', 'calle 34 n 78-54', 'Medellin', 'Union Libre', '3102496517', 4220734, '2021-03-24', 'Cedula de ciudadania', 'Robledo Villa flora', '0000-00-00', '0000-00-00', 'Bono por cumplimiento', 25000000, NULL, 'darwin@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
