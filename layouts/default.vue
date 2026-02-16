<template>
  <div class="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
    <!-- Premium animated gradient background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Animated blobs with enhanced visuals -->
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-full blur-3xl" style="animation: float 7s ease-in-out infinite;"></div>
      <div class="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-full blur-3xl" style="animation: float 7s ease-in-out infinite 1.5s;"></div>
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl" style="animation: float 8s ease-in-out infinite 2.5s;"></div>
      
      <!-- Subtle grid overlay -->
      <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Navigation Bar with premium styling -->
    <nav class="sticky top-0 z-50 bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-2xl border-b border-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo with hover effect -->
          <div class="flex-shrink-0 flex items-center group cursor-pointer">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 transform group-hover:scale-110">
              G
            </div>
            <span class="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">GENESIS</span>
          </div>

          <!-- Desktop Navigation Links with underline animation -->
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink 
              to="/" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">หน้าแรก</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink 
              to="/description" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">รายละเอียด</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink 
              to="/lessons" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">บทเรียน</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink 
              to="/videos" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">วิดีโอ</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink 
              to="/tests" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">ทดสอบ</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="relative px-4 py-2 text-gray-200 font-medium transition-all duration-300 hover:text-indigo-400 group"
            >
              <span class="relative z-10">เกี่ยวกับ</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
          </div>

          <!-- Desktop Right Items -->
          <div class="hidden sm:flex items-center space-x-3">
            <div class="relative hidden lg:block group">
              <input
                type="text"
                placeholder="Search..."
                class="bg-slate-800/40 hover:bg-slate-800/60 text-white placeholder-gray-400 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:bg-slate-800/80 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 border border-slate-700/50"
              />
              <v-icon class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">mdi-magnify</v-icon>
            </div>
            <button class="p-2.5 text-gray-300 hover:text-indigo-400 hover:bg-slate-800/40 rounded-lg transition-all duration-300 hover:scale-110">
              <v-icon>mdi-bell-outline</v-icon>
            </button>
            <button class="p-2.5 text-gray-300 hover:text-indigo-400 hover:bg-slate-800/40 rounded-lg transition-all duration-300 hover:scale-110">
              <v-icon>mdi-account-circle</v-icon>
            </button>
          </div>

          <!-- Mobile Menu Button with animation -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2.5 text-gray-300 hover:text-indigo-400 hover:bg-slate-800/40 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <v-icon v-if="!mobileMenuOpen" class="transition-transform duration-300">mdi-menu</v-icon>
            <v-icon v-else class="transition-transform duration-300">mdi-close</v-icon>
          </button>
        </div>

        <!-- Mobile Menu with enhanced styling -->
        <transition
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0 -translate-y-3 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-300"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 -translate-y-3 scale-95"
        >
          <div v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-gradient-to-r from-indigo-500/20 to-pink-500/20">
            <div class="flex flex-col space-y-2 mt-3">
              <NuxtLink to="/" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">หน้าแรก</NuxtLink>
              <NuxtLink to="/description" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">รายละเอียด</NuxtLink>
              <NuxtLink to="/lessons" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">บทเรียน</NuxtLink>
              <NuxtLink to="/videos" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">วิดีโอ</NuxtLink>
              <NuxtLink to="/tests" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">ทดสอบ</NuxtLink>
              <NuxtLink to="/about" class="block px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 font-medium">เกี่ยวกับ</NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Page Content with smooth transitions -->
    <div class="relative z-10 animate-fade-in">
      <slot />
    </div>

    <!-- Footer accent line -->
    <div class="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-30px) translateX(15px);
  }
  50% {
    transform: translateY(-20px) translateX(-10px);
  }
  75% {
    transform: translateY(-15px) translateX(20px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
