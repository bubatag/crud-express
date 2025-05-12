-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para bubatag_ofc
DROP DATABASE IF EXISTS `bubatag_ofc`;
CREATE DATABASE IF NOT EXISTS `bubatag_ofc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bubatag_ofc`;

-- Copiando estrutura para tabela bubatag_ofc.bubalinos
DROP TABLE IF EXISTS `bubalinos`;
CREATE TABLE IF NOT EXISTS `bubalinos` (
  `idbubalino` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `raca` varchar(255) DEFAULT NULL,
  `n_etiqueta` varchar(5) DEFAULT NULL,
  `idade` int(5) DEFAULT NULL,
  `sexo` varchar(9) DEFAULT NULL,
  `idcoleira` int(11) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idbubalino`),
  KEY `idcoleira` (`idcoleira`),
  KEY `idusuario` (`idusuario`),
  CONSTRAINT `bubalinos_ibfk_1` FOREIGN KEY (`idcoleira`) REFERENCES `coleiras` (`idcoleira`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `bubalinos_ibfk_2` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.bubalinos: ~6 rows (aproximadamente)
DELETE FROM `bubalinos`;
INSERT INTO `bubalinos` (`idbubalino`, `nome`, `raca`, `n_etiqueta`, `idade`, `sexo`, `idcoleira`, `idusuario`) VALUES
	(1, 'josé', 'Murrah', 'CVX12', 4, 'Masculino', 1, 1),
	(2, 'Lorré', 'Murrah', 'DCV14', 67, 'Masculino', 2, 1),
	(3, 'Mané', 'Murrah', 'TGZ32', 78, 'Masculino', 3, 2),
	(4, 'Fubá', 'Murrah', 'CBF56', 89, 'Feminino', 4, 3),
	(5, 'feio', 'Murrah', 'FGT76', 110, 'Masculino', 5, 4),
	(6, 'Mana', 'Murrah', 'HJS76', 12, 'Feminino', NULL, 5);

-- Copiando estrutura para tabela bubatag_ofc.coleiras
DROP TABLE IF EXISTS `coleiras`;
CREATE TABLE IF NOT EXISTS `coleiras` (
  `idcoleira` int(11) NOT NULL AUTO_INCREMENT,
  `n_coleira` varchar(4) DEFAULT NULL,
  `coleira_localizacao` varchar(25) DEFAULT NULL,
  `IP` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idcoleira`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.coleiras: ~7 rows (aproximadamente)
DELETE FROM `coleiras`;
INSERT INTO `coleiras` (`idcoleira`, `n_coleira`, `coleira_localizacao`, `IP`) VALUES
	(1, '1', 'Normal', '10.12.27.30'),
	(2, '2', 'Perigo', '10.12.27.40'),
	(3, '3', 'Fora', '192.168.0.30'),
	(4, '4', 'Fora', '132.147.110.20'),
	(5, '5', 'Perigo', '35.67.56.12');

-- Copiando estrutura para tabela bubatag_ofc.dados
DROP TABLE IF EXISTS `dados`;
CREATE TABLE IF NOT EXISTS `dados` (
  `iddados` int(11) NOT NULL AUTO_INCREMENT,
  `batimento_cardiaco` int(11) DEFAULT NULL,
  `temperatura` float(10,2) DEFAULT NULL,
  `idbubalino` int(11) DEFAULT NULL,
  `idcoleira` int(11) DEFAULT NULL,
  PRIMARY KEY (`iddados`),
  KEY `idcoleira` (`idcoleira`),
  KEY `idbubalino` (`idbubalino`),
  CONSTRAINT `dados_ibfk_1` FOREIGN KEY (`idcoleira`) REFERENCES `coleiras` (`idcoleira`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `dados_ibfk_2` FOREIGN KEY (`idbubalino`) REFERENCES `bubalinos` (`idbubalino`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.dados: ~6 rows (aproximadamente)
DELETE FROM `dados`;
INSERT INTO `dados` (`iddados`, `batimento_cardiaco`, `temperatura`, `idbubalino`, `idcoleira`) VALUES
	(1, 34, 45.00, 1, 1),
	(2, 110, 56.00, 2, 2),
	(3, 45, 34.00, 3, 3),
	(4, 45, 89.00, 4, 4),
	(5, 23, 45.00, 5, 5),
	(6, 67, 48.00, 6, NULL);

-- Copiando estrutura para tabela bubatag_ofc.historico_estresse
DROP TABLE IF EXISTS `historico_estresse`;
CREATE TABLE IF NOT EXISTS `historico_estresse` (
  `idhistorico_estresse` int(11) NOT NULL AUTO_INCREMENT,
  `estado_estresse` varchar(50) DEFAULT NULL,
  `data_estresse` datetime DEFAULT current_timestamp(),
  `idbubalino` int(11) NOT NULL,
  PRIMARY KEY (`idhistorico_estresse`),
  KEY `idbubalino` (`idbubalino`),
  CONSTRAINT `historico_estresse_ibfk_1` FOREIGN KEY (`idbubalino`) REFERENCES `bubalinos` (`idbubalino`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.historico_estresse: ~6 rows (aproximadamente)
DELETE FROM `historico_estresse`;
INSERT INTO `historico_estresse` (`idhistorico_estresse`, `estado_estresse`, `data_estresse`, `idbubalino`) VALUES
	(1, 'Ocioso', '2025-05-02 11:07:33', 1),
	(2, 'Ok', '2025-05-02 11:07:33', 2),
	(3, 'Estressado', '2025-05-02 11:07:33', 3),
	(4, 'Estressado', '2025-05-02 11:07:33', 4),
	(5, 'ok', '2025-05-02 11:07:33', 5),
	(6, 'Ocioso', '2025-05-02 11:07:33', 6);

-- Copiando estrutura para tabela bubatag_ofc.localizacao
DROP TABLE IF EXISTS `localizacao`;
CREATE TABLE IF NOT EXISTS `localizacao` (
  `idlocalizacao` int(5) NOT NULL AUTO_INCREMENT,
  `idbubalino` int(5) DEFAULT 0,
  `idcoleira` int(5) DEFAULT 0,
  `latitude` varchar(50) DEFAULT '0',
  `longitude` varchar(50) DEFAULT '0',
  PRIMARY KEY (`idlocalizacao`),
  KEY `fk_localizacao_bubalinos` (`idbubalino`),
  KEY `fk_localizacao_coleira` (`idcoleira`),
  CONSTRAINT `fk_localizacao_bubalinos` FOREIGN KEY (`idbubalino`) REFERENCES `bubalinos` (`idbubalino`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_localizacao_coleira` FOREIGN KEY (`idcoleira`) REFERENCES `coleiras` (`idcoleira`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.localizacao: ~10 rows (aproximadamente)
DELETE FROM `localizacao`;
INSERT INTO `localizacao` (`idlocalizacao`, `idbubalino`, `idcoleira`, `latitude`, `longitude`) VALUES
	(1, 1, 1, '-24.586153', '-47.890889'),
	(2, 2, 2, '-24.586500', '-47.891000'),
	(3, 3, 3, '-24.586200', '-47.890500'),
	(4, 4, 4, '-24.586700', '-47.890700'),
	(5, 5, 5, '-24.585900', '-47.891100'),
	(6, 6, 1, '-24.586400', '-47.891300'),
	(7, 1, 2, '-24.585800', '-47.890800'),
	(8, 2, 3, '-24.586600', '-47.890200'),
	(9, 3, 4, '-24.586000', '-47.891000'),
	(10, 4, 5, '-24.586300', '-47.890600');

-- Copiando estrutura para tabela bubatag_ofc.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `CCIR` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela bubatag_ofc.usuarios: ~5 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`idusuario`, `nome`, `email`, `senha`, `CCIR`) VALUES
	(1, 'VInícius de Souza Camargo Costa', 'Vinicius@gmail.com', '1234', '1234567891234'),
	(2, 'João', 'Joao@gmail.com', '4321', '7256812345679'),
	(3, 'Carlos Eduardo', 'Carloa@gmail.com', '4567', '3610984631462'),
	(4, 'Fukunaga', 'Fuku@gmail.com', '3578', '4211382109478'),
	(5, 'Cristhian', 'Cristhian@gmail.com', '5681', '1924812098234');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
