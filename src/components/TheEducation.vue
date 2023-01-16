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
            <TheIcon :type="'fa-graduation-cap'"/>
        </template>
        <template #heading>MCA from Rajiv Gandhi Proudyogiki Vishwavidyalaya</template>
        <ul>
            <li>Duration: 2 years (2013- 2015)</li>
            <li>CGPA: 7.94</li>
        </ul>

    </TheItem>

    <TheItem>
        <template #icon>
            <TheIcon :type="'fa-graduation-cap'"/>
        </template>
        <template #heading>BCA from Makhanlal Chaturvedi National University of Journalism and Communication</template>
        <ul>
            <li>Duration: 3 years (2008-2011)</li>
            <li>CGPA: 7.3</li>
        </ul>
    </TheItem>

    <TheItem>
        <template #icon>
            
            <TheIcon :type="'fa-certificate'"/>
        </template>
        <template #heading>Diploma in Hardware and Networking from Jetking</template>
        <ul>
            <li>Duration: 2.5 years (2010-2012)</li>
            <li>CGPA: 7.2</li>
        </ul>
    </TheItem>

    <TheItem>
        <template #icon>
            
            <TheIcon :type="'fa-certificate'"/>
        </template>
        <template #heading>Diploma in Computer Application (DCA) from Bhoj University</template>
        <ul>
            <li>Duration: 1 years (2006-2007)</li>
            <li>CGPA: 6.6</li>
        </ul>
    </TheItem>
</template>
