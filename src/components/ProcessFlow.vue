<template>
    <div class="ProcessFlow">
        AHO
    <EachProcess/>
    <EachProcess/>
    <EachProcess/>
    <EachProcess/>
    <EachProcess/>
    </div>
</template>

<script>
import EachProcess from '@/components/EachProcess.vue';
export default {
    name: 'ProcessFlow',
    components: {
        EachProcess,
    }
}
</script>

<style scoped>
.ProcessFlow{
    text-align: left;
    background-color:aliceblue;
    margin: 20px 20px 20px 20px;
    padding: 0px 0px 12px 0px;
    padding-left: 12px;
}
</style>