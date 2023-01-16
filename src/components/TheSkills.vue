<script setup lang="ts">
import TheItem from './TheItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import TheIcon from './icons/TheIcon.vue'
</script>

<template>
    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-globe'"/>  
        </template>
        <template #heading>Front-end Technologies</template>
        <ul>
            <li>Proficient in front-end technologies such as Angular, React, and VueJS</li>
            <li>
                Extensive experience in developing 
                single-page applications (SPAs) and 
                progressive web apps (PWAs) using Angular and VueJS.</li>
        </ul>

    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-database'"/>  
        </template>
        <template #heading>Back-end Technologies</template>
        <ul>
            <li>Experience with NodeJS, ExpressJS, MongoDB, and Postgres.</li>
            <li>Proficient in creating RESTful APIs and web services using NodeJS and ExpressJS.</li>
            <li>Familiar with PHP, CodeIgniter 3, and Laravel</li>
            <li>Comfortable with using PHP frameworks such as CodeIgniter 3 and Laravel for web development</li>
        </ul>
    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-cloud'"/>  
        </template>
        <template #heading>Cloud Services</template>
        <ul>
            <li>Knowledge of AWS services such as EC2, S3, SES, and RDS</li>
            <li>Experience in configuring and deploying web applications on AWS EC2, S3, SES, and RDS</li>
        </ul>
    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-code'"/>  
        </template>
        <template #heading>API Development</template>
        <ul>
            <li>Ability to create REST APIs in NodeJS and PHP</li>
            <li>Experience in creating secure, scalable and high-performance REST APIs using NodeJS and PHP</li>
        </ul>
    </TheItem>
</template>
