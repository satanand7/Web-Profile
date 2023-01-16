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
          <TheIcon :type="'fa-industry'"/>  
        </template>
        <template #heading>Canopus Infosystems (Sept 2015 - Oct 2018, Jan 2021-Current)</template>
        Worked on more than 50 projects at Canopus Infosystems, with the most challenging project being the Diller App which required the use of technologies such as PHP CodeIgniter, NodeJS, Braintree payment system, MySQL, AWS EC2, S3, Sinch SMS, RDS.
    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-industry'"/>  
        </template>
        <template #heading>Web Developer at Ideavate (Oct 2018- Dec 2021)</template>
        <p>
            Worked on the project Eko.AI using Angular, AWS EC2, S3, PHP CodeIgniter, and MySQL.
        </p>
        <p>
            Worked on another project using AWS EC2, S3, Angular, PHP Codeigniter and MySQL.

        </p>
    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-university'"/>  
        </template>
        <template #heading>Lab Assistant at Jetking (Jan 2010 - March 2011)</template>
        <p>
            During Study Assisted in lab sessions and helped students with technical issues and queries.
        </p>
        <p>
            Gained hands-on experience with various hardware and networking equipment.
        </p>
    </TheItem>
</template>
