<template>

    <div class="Sample">
        <div class="SampleCore1">
            aho1
        </div>
        <div class="SampleCore2">
            aho2
        </div>
    </div>
</template>

<script>

export default {
    name: 'Sample',
}

</script>

<style scoped>
.Sample{
    width: 100%;
    text-align: left;
    background-color:cadetblue;
    display: inline-block;
    /* position : relative; */
}
.SampleCore1{
    width: 30%;
    text-align: left;
    background-color:darkblue;
    /* position : absolute; */
    /* vertical-align: 20%;
    line-height: 40px; */
    display: inline-block;
    margin-left: 20%;
    color: white;
}
.SampleCore2{
    text-align: left;
    background-color:blueviolet;
    width: 30%;
    /* position : absolute; */
    /* vertical-align: 20%;
    line-height: 40px; */
    /* margin-left: 20%;
    margin-right: 50%; */
    display: inline-block;
    color: white;
}
</style>