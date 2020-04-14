CREATE TABLE `dogs`
(`id` int
(20) NOT NULL,
`name` varchar
(200),
`breed` varchar
(200),
`created_at` datetime DEFAULT CURRENT_TIMESTAMP
);

create table dogs
(
  id int(50) not null
  auto_increment primary key,
name varchar
  (50),
breed varchar
  (50),
created_at datetime DEFAULT CURRENT_TIMESTAMP);

  ALTER TABLE `dogs`
  ADD PRIMARY KEY
  (`id`);
  ALTER TABLE `dogs` MODIFY `id` int
  (11) NOT NULL AUTO_INCREMENT;

  INSERT INTO `dogs` (`
  id`,`name
  `,`breed`,`created_at`) 
VALUES
  (1, 'gora', 'german shepherd', '2020-04-10 23:50:40'),
  (2, 'moss', 'eastern laika', '2020-04-10 23:50:40'),
  (3, 'ia', 'Jagdterrier', '2020-04-10 23:50:40'),
  (4, 'alice', 'springer spaniel', '2020-04-10 23:50:40'),
  (5, 'sixten', 'irish setter', '2020-04-10 23:50:50');