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
            <TheIcon :type="'fa-phone'"/>  
        </template>
        <template #heading>Contact Information:</template>
        <ul>
            <li>Email: satanand.t@gmail.com</li>
            <li>Phone: +91-9098981546</li>
        </ul>

    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-globe'"/>  
        </template>
        <template #heading>Social Media Links:</template>
        <ul>
            <li>
                LinkedIn: 
                <a href="https://www.linkedin.com/in/satanand-tiwari-50a1233b/" target="_blank">https://www.linkedin.com/in/satanand-tiwari-50a1233b/</a>
            </li>
            <li>
                GitHub: 
                <a href="https://github.com/satanand7" target="_blank">https://github.com/satanand7</a>
            </li>
            <li>
                Stackoverflow: 
                <a href="https://stackoverflow.com/users/4856791/satanand-tiwari" target="_blank">https://stackoverflow.com/users/4856791/satanand-tiwari</a>
            </li>
        </ul>
    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-download'"/>  
        </template>
        <template #heading>Downlaod Resume:</template>
        <a href="/Satanand Tiwari CV.pdf" target="_blank" download="">Satanand Tiwari CV</a>
    </TheItem>
</template>
