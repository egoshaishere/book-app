<template>
    <div>
        <VuexHelpersList />
        <Base />
    </div>
</template>

<script>
import VuexHelpersList from '../components/vuex/VuexHelpersList.vue'
import Base from '@/components/vuex/Base.vue'

export default {
    name: "VuexView",
    components: {
        VuexHelpersList,
        Base
    },
}
</script>

<style>

</style>