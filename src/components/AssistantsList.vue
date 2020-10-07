<template>

    <div>
        <ul v-for="person in peopleList" :key="person">
            <li>{{person}}</li>
        </ul>
        <div>
            <button @click="addAssistant()">Añadir Asistente</button>
            <button @click="deleteAssistant()">Eliminar Asistente</button>
        </div>    
    </div>
    
</template>

<script>
export default {

    data: function (){
        return{
            peopleList:['Ana', 'Juan', 'Pepe', 'Victoria', 'Antonio'],
        }
    },
    methods: {
        addAssistant: function(){
            var randomNumber = Math.floor(Math.random() * 10001);
            this.peopleList.push(`Asistente${randomNumber}`);
        },
        deleteAssistant: function(){
            this.peopleList.splice(0,1);
        }
    }

}
</script>

