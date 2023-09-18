<template>
    <div class="div container mx-auto w-1/2 py-8">
        Game detail for game coming soon number {{ id }}
    </div>
    
</template>

<script setup>
    const { id } = useRoute().params
</script>
