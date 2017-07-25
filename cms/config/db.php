<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return [
    
    '*' => [
        'server'        => 'localhost',
        'initSQLs'      => ["SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"],
        'database'      => 'dean',
        'tablePrefix'   => 'craft',
    	'user'          => 'centresquare',
    	'password'      => '2Tn=48|4jpz*2P_6|*_Zq6_FA|hE;w'
    ],
    
    '.local' => [
    	'user' => 'root',
        'password' => 'root'
    ]
    

];