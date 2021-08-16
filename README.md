A simple web app to track the daily activities of members of a team. [Demo](https://activetracker.herokuapp.com)




## Requirements
* PHP 7.4+
* MySQL
* Composer
* NPM

# Installation
## Clone the repo and cd into project
```
git clone https://github.com/GuyTito/activity_tracker.git
cd activity_tracker
```

## Install dependencies
```
composer install
```

## Create .env
```
copy .env.example .env
```

## Generate app encryption key
```
php artisan key:generate
```

## Set correct App url in .env
```
APP_URL=http://localhost:8000
```

## Create an empty database and Set correct database credentials
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=activity_tracker
DB_USERNAME=root
DB_PASSWORD=
```

## Migrate database
```
php artisan migrate
```

## Link storage
```
php artisan storage:link
```

## Install npm dependencies
```
npm install
```

## Run npm watcher
```
npm run watch
```

## Run server
```
php artisan serve
```

## Visit the url
http://localhost:8000

