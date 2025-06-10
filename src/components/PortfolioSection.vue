<template>
    <v-container fluid class="portfolio-container px-0">
        <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
                <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold mb-4">Portfolio</h1>
                <p class="text-body-1 text-sm-body-1 text-md-h6 text-lg-h5 text-white-50">
                    Explora mi trabajo a través de diferentes categorías y descubre cómo puedo
                    ayudarte a crear contenido visual impactante.
                </p>
            </v-col>
        </v-row>

        <v-row justify="center" class="mb-8">
            <v-col cols="auto">
                <v-btn-toggle v-model="selectedMediaType" mandatory group class="media-type-toggle">
                    <v-btn value="fotografias" class="toggle-btn">Fotografías</v-btn>
                    <v-btn value="videos" class="toggle-btn">Videos</v-btn>
                    <v-btn value="drone" class="toggle-btn">Drone</v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-row justify="center" class="mb-12">
            <v-col cols="auto">
                <v-chip-group v-model="selectedCategory" mandatory class="category-chip-group"
                    active-class="selected-chip">
                    <v-chip v-for="category in filteredCategories" :key="category.value" :value="category.value" filter
                        variant="outlined" size="large" class="category-chip" label>
                        {{ category.text }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>

        <v-row justify="center" class="mb-8">
            <v-col v-for="item in filteredPortfolioItems" :key="item.id" cols="12" sm="6" md="4" lg="3" xl="2"
                class="d-flex justify-center">
                <v-card class="portfolio-item-card">
                    <v-img v-if="item.type === 'image'" :src="item.src" :alt="item.alt" cover
                        class="portfolio-media"></v-img>
                    <div v-else-if="item.type === 'video'" class="portfolio-media video-placeholder">
                        <v-icon size="96" color="white">mdi-play-circle</v-icon>
                        <span class="video-text">Video Placeholder</span>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ddddd from '../assets/ddddd.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto7 from '../assets/foto7.jpg';    
import foto8 from '../assets/foto8.jpg';

const selectedMediaType = ref('fotografias');
const selectedCategory = ref(null);

const categories = {
    fotografias: [
        { text: 'Fotos de los Arias', value: 'fotos_arias' },
        { text: 'Sesiones generales', value: 'sesiones_generales' },
        { text: 'Comida', value: 'comida' },
        { text: 'Deportiva', value: 'deportiva' },
    ],
    videos: [
        { text: 'Videos Corporativos', value: 'videos_corporativos' },
        { text: 'Eventos', value: 'eventos_video' },
        { text: 'Animación', value: 'animacion' },
    ],
    drone: [
        { text: 'Tomas Aéreas', value: 'tomas_aereas' },
        { text: 'Inspección', value: 'inspeccion' },
    ],
};

const portfolioItems = ref([
    // Fotografías
   { id: 'fa1', type: 'image', mediaType: 'fotografias', category: 'fotos_arias', src: ddddd, alt: 'Cámara vintage y lentes' },
    { id: 'fa2', type: 'image', mediaType: 'fotografias', category: 'fotos_arias', src: foto2, alt: 'Fotógrafo tomando una foto' },
    { id: 'fa3', type: 'image', mediaType: 'fotografias', category: 'fotos_arias', src: foto3, alt: 'Cámara DSLR y equipo' },

    { id: 'sg1', type: 'image', mediaType: 'fotografias', category: 'sesiones_generales', src: foto4, alt: 'Sesión General 1 - persona con cámara' },
    { id: 'sg2', type: 'image', mediaType: 'fotografias', category: 'sesiones_generales', src: foto5, alt: 'Sesión General 2 - fotografía de calle' },

    { id: 'c1', type: 'image', mediaType: 'fotografias', category: 'comida', src: foto7, alt: 'Fotografía de comida 1' },
    { id: 'c2', type: 'image', mediaType: 'fotografias', category: 'comida', src: foto8, alt: 'Fotografía de comida 2' },

    { id: 'd1', type: 'image', mediaType: 'fotografias', category: 'deportiva', src: 'https://images.unsplash.com/photo-1579953932986-7734891152a4?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Fotografía deportiva 1' },
    { id: 'd2', type: 'image', mediaType: 'fotografias', category: 'deportiva', src: 'https://images.unsplash.com/photo-1628172901614-38c64267606e?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Fotografía deportiva 2' },

    // Videos
    { id: 'vc1', type: 'video', mediaType: 'videos', category: 'videos_corporativos', src: '', alt: 'Video Corporativo 1' },
    { id: 'vc2', type: 'video', mediaType: 'videos', category: 'videos_corporativos', src: '', alt: 'Video Corporativo 2' },
    { id: 'ev1', type: 'video', mediaType: 'videos', category: 'eventos_video', src: '', alt: 'Evento Video 1' },

    // Drone
    { id: 'ta1', type: 'video', mediaType: 'drone', category: 'tomas_aereas', src: '', alt: 'Toma Aérea 1' },
    { id: 'ta2', type: 'video', mediaType: 'drone', category: 'inspeccion', src: '', alt: 'Toma Aérea 2' }, // Asigné la categoría "inspeccion"
]);

// Cuando cambie el tipo de medio, actualizamos la categoría seleccionada a la primera disponible
watch(selectedMediaType, (newType) => {
    const currentCategories = categories[newType] || [];
    selectedCategory.value = currentCategories.length > 0 ? currentCategories[0].value : null;
}, { immediate: true });

const filteredCategories = computed(() => {
    return categories[selectedMediaType.value] || [];
});

const filteredPortfolioItems = computed(() => {
    return portfolioItems.value.filter(item =>
        item.mediaType === selectedMediaType.value && item.category === selectedCategory.value
    );
});
</script>

<style scoped>
.portfolio-container {
    background-color: #000000;
    color: white;
    padding: 40px 0;
}

h1 {
    color: white;
}

p {
    color: rgba(255, 255, 255, 0.7);
}

.media-type-toggle .v-btn {
    background-color: transparent !important;
    color: rgba(255, 255, 255, 0.7) !important;
    border-radius: 20px;
    text-transform: none;
    font-weight: 500;
    padding: 0 20px;
    height: 44px;
}

.media-type-toggle .v-btn.v-btn--active {
    background-color: #673AB7 !important;
    color: white !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.category-chip {
    color: white !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    background-color: transparent !important;
    border-radius: 20px;
    margin: 4px;
    text-transform: none;
    cursor: pointer;
}

.selected-chip {
    background-color: #673AB7 !important;
    border-color: #673AB7 !important;
    font-weight: 600;
}

.portfolio-item-card {
    width: 100%;
    max-width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    background-color: #1a1a1a;
}

.portfolio-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.video-placeholder {
    background: linear-gradient(to top right, #333333, #1a1a1a);
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
}

.video-text {
    margin-top: 8px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 600px) {
    .media-type-toggle .v-btn {
        padding: 0 12px;
        font-size: 0.8rem;
        height: 38px;
    }

    .category-chip {
        font-size: 0.8rem;
        padding: 0 10px;
        height: 32px;
    }

    .portfolio-item-card {
        height: 250px;
    }

    .portfolio-media .v-icon {
        font-size: 72px !important;
    }
}

@media (min-width: 601px) and (max-width: 960px) {
    .portfolio-item-card {
        height: 280px;
    }

    .portfolio-media .v-icon {
        font-size: 80px !important;
    }
}
</style>
