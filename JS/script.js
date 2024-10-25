const app = Vue.createApp({
    data() {
        return {
            respuesta: '',
            aniosCocinando: '',
            nuevoPlatillo: '',
            platillos: [],
            experiencia: '',
            mostrarDatos: false
        };
    },
    methods: {
        agregarPlatillo() {
            if (this.nuevoPlatillo) {
                this.platillos.push(this.nuevoPlatillo.trim());
                this.nuevoPlatillo = ''; 
            }
        },
        mostrarResumen() {
            this.mostrarDatos = true;
        }
    }
}).mount('#app');
