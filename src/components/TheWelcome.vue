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
      <TheIcon :type="'fa-briefcase'" />
      
    </template>
    <template #heading>Professional Summary</template>

    I am a skilled web developer with 7+ years of experience in the field. I have a strong background in both front-end
    and back-end technologies, including <a target="_blank" href="https://angular.io/">Angular</a>, <a target="_blank" href="https://reactjs.org/">React</a>, <a target="_blank" href="https://vuejs.org/">VueJS</a>, <a target="_blank" href="https://nodejs.org/en/">NodeJS</a>, <a href="https://expressjs.com/" target="_blank">ExpressJS</a>, <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>,
    <a href="https://www.mongodb.com/" target="_blank">Postgres</a>,
    <a href="https://www.php.net/" target="_blank">PHP</a>, 
    <a href="https://codeigniter.com/" target="_blank">Codeigniter</a>,
    <a href="https://laravel.com/" target="_blank">Laravel</a>, 
    and 
    <a href="https://aws.amazon.com/" target="_blank">AWS services</a> 
    like 
    <a href="https://aws.amazon.com/ec2/" target="_blank">EC2</a>, 
    <a href="https://aws.amazon.com/s3/" target="_blank">S3</a>, 
    <a href="https://aws.amazon.com/ses/" target="_blank">SES</a>, and 
    <a href="https://aws.amazon.com/rds/" target="_blank">RDS</a>.
  </TheItem>

  <TheItem>
    <template #icon>
      <TheIcon :type="'fa-road'" />
    </template>
    <template #heading>Career Journey</template>
    I started my career at <a  target="_blank" href="https://www.canopusinfosystems.com/">Canopus Infosystems</a> in 2015 as a trainee and spent more than 3 years there. 
    I then joined <a href="https://www.ideavate.com/" target="_blank">Ideavate</a> in 2018 and worked there for 3 years. 
    I have worked on 5+ project in angular and codeigniter. 
    Familiar with customization on Drupal and Magento at Ideavate. 
    Now, I am back to Canopus Infosystems. 
    I have worked on more than 50 projects at Canopus Infosystems.
  </TheItem>

  <TheItem>
    <template #icon>
      <TheIcon :type="'fa-graduation-cap'" />
    </template>
    <template #heading>Educational Background</template>

    I have a MCA and BCA degree, and a diploma in Hardware and Networking from
    <a href="https://jetking.com/" target="_blank">Jetking</a>.
    I have also achieved certificates from 
    <a href="https://www.udemy.com/" target="_blank">Udemy</a> 
    for VueJs, NodeJs, and Angular. 
    I am always eager to learn new technologies and to improve
    my skills.
  </TheItem>

  <TheItem>
    <template #icon>
      <TheIcon :type="'fa-users'" />
    </template>
    <template #heading>Expert Web Developer - Achieving Your Goals Together</template>
    With 7+ years of experience and expertise in front-end and back-end technologies, 
    I am ready to work with you and help you achieve your goals through expert web development solutions.
  </TheItem>
</template>
