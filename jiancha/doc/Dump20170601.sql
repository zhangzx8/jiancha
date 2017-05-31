-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	5.6.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bao_ming`
--

DROP TABLE IF EXISTS `bao_ming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bao_ming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(128) COLLATE utf8_bin NOT NULL,
  `sex` varchar(45) COLLATE utf8_bin NOT NULL,
  `pic` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `birthday` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `age` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `id_chart` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `mz` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `zzmm` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `jg` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `ypgw` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `school` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `major` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `school2` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `major2` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `school3` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `major3` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `picimg` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `picimg1` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `picimg2` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `picimg3` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `picimg4` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `create_time` bigint(20) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bao_ming`
--

LOCK TABLES `bao_ming` WRITE;
/*!40000 ALTER TABLE `bao_ming` DISABLE KEYS */;
INSERT INTO `bao_ming` VALUES (1,'1231243','1','','','','','','','','','','','','','','','','','','','','',2,NULL,NULL),(2,'hdhfh','1','\\resource\\upload\\1495951045072Jellyfish.jpg','','','','','','','','','','','','','','','','','','','',2,NULL,NULL),(3,'','1','','','','','','','','','','','','','','','','','','','','',2,NULL,NULL),(4,'','1','','','','','','','','','','','','','','','','','','','','',1,NULL,NULL),(5,'tt','1','','','','ttt','','','','','','','','','','','','','','','','',1,NULL,NULL),(6,'tt','1','','','','ttt','','','','','','','','','','','','','','','','',2,NULL,NULL),(7,'','','','','','','','','','','','','','','','','','','','','','',1,NULL,NULL),(8,'','','','','','','','','','','','','','','','','','','','','','',1,NULL,NULL);
/*!40000 ALTER TABLE `bao_ming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liuyan`
--

DROP TABLE IF EXISTS `liuyan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liuyan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `conent` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  `huifu_content` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liuyan`
--

LOCK TABLES `liuyan` WRITE;
/*!40000 ALTER TABLE `liuyan` DISABLE KEYS */;
INSERT INTO `liuyan` VALUES (1,'ff','ff','f','f\r\n                        ','f',NULL,NULL,NULL),(2,'','','','','',1496246528144,1496246528144,'tt');
/*!40000 ALTER TABLE `liuyan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) COLLATE utf8_bin NOT NULL,
  `title` varchar(45) COLLATE utf8_bin NOT NULL,
  `content` mediumtext COLLATE utf8_bin,
  `create_time` bigint(20) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'zhaokao','11','111',NULL,NULL),(2,'xinwen','ee','ee',NULL,NULL),(3,'zhaokao','ee','ee',1496249596588,1496249596588),(4,'zhaokao','efeff','wefwgfweg',1496250801972,1496250801972),(5,'zhaokao','esgegeg','ewggewg',1496250810488,1496250810488),(8,'zhaokao','污染范围广','额的感人的话',1496251593070,1496251593070),(9,'zhaokao','招考信息12','招考信息12招考信息12招考信息12招考信息12招考信息12招考信息12招考信息12招考信息12招考信息12',1496251641722,1496251641722),(10,'zhaokao','招考信息13','招考信息13招考信息13招考信息13招考信息13招考信息13招考信息13招考信息13招考信息13招考信息13招考信息13',1496251648792,1496251648792),(11,'zhaokao','招考信息14','招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14招考信息14',1496251656001,1496251656001),(12,'xinwen','学院新闻12','学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12学院新闻12',1496251669015,1496251669015),(13,'xinwen','学院新闻13','学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13学院新闻13',1496251676467,1496251676467),(14,'xinwen','学院新闻14','学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14学院新闻14',1496251685873,1496251685873);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-01  1:32:08
