<template>
    <div class="p-2 border-b transition duration-300 cursor-pointer hover:bg-gray-50 flex items-center max-w-full pr-14" :class="[{'bg-gray-50':!read}]">
        <div class="flex actions items-center">
            <div @click="$emit('select')" class="h-5 w-5 duration-300 transition mr-1 bg-indigo-50 rounded-md cursor-pointer flex items-center justify-center" :class="[{ 'bg-indigo-500':selected }]"><div v-if="selected" class="h-2 w-2 bg-white rounded-full"></div></div>
            <div @click="$emit('star')" class="h-8 w-8 duration-300 transition ml-2 text-gray-400 hover:bg-gray-100 items-center justify-center flex rounded-full cursor-pointer" :class="[{'text-yellow-500':starred}]"><i :class="`bx bx${starred ? 's' : ''}-star`" ></i></div>
            <div @click="$emit('save')" class="h-8 w-8 duration-300 transition ml-2 text-gray-400 hover:bg-gray-100 items-center justify-center flex rounded-full cursor-pointer" :class="[{'text-indigo-500':saved}]"><i :class="`bx bx${saved ? 's' : ''}-bookmark`"></i></div>
        </div>
        <div style="min-width: 10rem" class="text-sm ml-5 truncate text-gray-700" :class="[{'font-semibold':!read}]">
            <span>{{ user }}</span>
        </div>
        <div class="text-sm ml-10 text-gray-700 truncate overflow-auto" :class="[{'font-semibold':!read}]">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemTable',
    props: {
        selected: { type: Boolean, default: false },
        read: { type: Boolean, default: false },
        starred: { type: Boolean, default: false },
        saved: { type: Boolean, default: false },
        message: { type: String, default: null },
        user: { type: String, default: null },
    }
}
</script>