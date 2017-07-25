<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [
  
    '*' => [
        'translationDebugOutput'      => false,
        'useCompressedJs'             => true,
        'cacheDuration'               => 'P1D',
        'cooldownDuration'            => 'PT5M',
        'maxInvalidLogins'            => 5,
        'invalidLoginWindowDuration'  => 'PT1H',
        'phpMaxMemoryLimit'           => '256M',
        
        // Member login info duration
        // http://www.php.net/manual/en/dateinterval.construct.php
        'userSessionDuration'           => 'P101Y',
        'rememberedUserSessionDuration' => 'P101Y',
        'rememberUsernameDuration'      => 'P101Y',

        'enableCsrfProtection' => true,
    
        'omitScriptNameInUrls' => true,
        'maxUploadFileSize' => 33554432,
        
        'disableDevmodeMinifying' => true,
        
        'environmentVariables' => [
            'basePath' => dirname(__DIR__, 2) . '/public/',
            'baseUrl'  => 'https://centresquare-hw.com/'
        ],

        'siteUrl' => 'https://centresquare-hw.com/'
    ],
    
    '.local' => [
        'devMode' => true,
        'testToEmailAddress' => 'darby@kbamarketing.co.uk',
        'siteUrl' => 'http://dean.local/',
        'enableTemplateCaching' => false,
        'environmentVariables' => [
            'baseUrl'  => 'http://dean.local/'
        ]
    ]
    
];