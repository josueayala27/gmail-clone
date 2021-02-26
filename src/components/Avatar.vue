<template>
    <div @click="$emit('click')" class="h-12 w-12 flex items-center justify-center cursor-pointer transition duration-300 hover:bg-gray-100 rounded-full overflow-hidden">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Avatar'
}
</script>