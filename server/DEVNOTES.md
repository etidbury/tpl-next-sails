

<h3>SailsJs Notes</h3>

To create a new entity within the API

```bash
sails generate api [EntityName]
```



#DB migration related

```mysql

ALTER TABLE `json_cms_dev`.`wmgspotifytrack`
  ADD COLUMN `id` INT NOT NULL AUTO_INCREMENT FIRST,
  ADD PRIMARY KEY (`id`);
  
  
```

```mysql

ALTER TABLE `json_cms`.`wmgspotifytrack`
  ADD COLUMN `id` INT NOT NULL AUTO_INCREMENT FIRST,
  ADD COLUMN `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD PRIMARY KEY (`id`);
  
  
```




###"Invalid connection name specified' error
 
 means sails-mysql adapter was not shut down properly. ```npm run test``` will test then shut down 
 connection for successful reconnection