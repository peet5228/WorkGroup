<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Hero Section -->
    <div class="relative pt-20 pb-32 lg:pt-32 lg:pb-48 text-center px-4">
      <!-- Decorative blobs -->
      <div class="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-pink-500/20 to-indigo-500/30 rounded-full blur-3xl -z-10 animate-pulse" style="animation-delay: 2s;"></div>

      <div class="max-w-4xl mx-auto relative z-10">
        <!-- Badge -->
        <div class="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/50 rounded-full mb-8 backdrop-blur-sm hover:border-indigo-400/70 transition-all duration-300">
          <span class="text-indigo-300 text-sm font-semibold flex items-center gap-2 justify-center">
            <v-icon class="text-lg animate-bounce" style="animation-delay: 0s;">mdi-book-open</v-icon>
            ระบบสื่อการสอนออนไลน์ครบครัน
          </span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span class="block mb-3">สื่อการสอน</span>
          <span class="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">ออนไลน์สมบูรณ์</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl lg:text-2xl text-slate-300 mb-4 leading-relaxed font-light">
          แพลตฟอร์มการเรียนรู้ที่ออกแบบมาอย่างพิเศษ
        </p>
        <p class="text-lg lg:text-xl text-slate-400 mb-12 leading-relaxed">
          พร้อมด้วยบทเรียนสมบูรณ์ วิดีโออธิบาย แบบทดสอบ และเอกสารการเรียนรู้ที่ครบถ้วน
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <NuxtLink to="/lessons" class="group relative px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-2xl overflow-hidden inline-block transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transform">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative flex items-center justify-center gap-2">
              <v-icon>mdi-play-circle</v-icon>
              เริ่มเรียนรู้ทันที
            </span>
          </NuxtLink>

          <NuxtLink to="/description" class="group px-10 py-4 bg-slate-700/40 text-white font-bold rounded-2xl border-2 border-slate-600 hover:border-indigo-400 hover:bg-slate-600/50 transition-all duration-300 inline-block hover:shadow-xl hover:shadow-indigo-500/20">
            <span class="flex items-center justify-center gap-2">
              <v-icon>mdi-information-outline</v-icon>
              ดูรายละเอียด
            </span>
          </NuxtLink>
        </div>

        <!-- Stats Preview -->
        <div class="mt-20 grid grid-cols-3 gap-4 lg:gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-400 mb-2">6</div>
            <p class="text-slate-400 text-sm">บทเรียน</p>
          </div>
          <div class="text-center border-l border-r border-slate-700/50">
            <div class="text-4xl font-bold text-purple-400 mb-2">6+</div>
            <p class="text-slate-400 text-sm">วิดีโอ</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <p class="text-slate-400 text-sm">คำถาม</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="px-4 lg:px-16 py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <h2 class="text-4xl lg:text-5xl font-black text-white mb-4 text-center">ความเป็นเยี่ยม</h2>
      <p class="text-slate-400 text-center mb-16 text-lg">ของระบบการเรียนรู้ที่ครบถ้วน</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div class="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-indigo-500/30 hover:border-indigo-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-400/30">
              <v-icon class="text-indigo-300 text-4xl">mdi-book-multiple</v-icon>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">บทเรียน</h3>
            <p class="text-slate-400 leading-relaxed mb-4">เนื้อหา 6 บทสมบูรณ์พร้อมใบความรู้ PDF และใบงานการเรียน</p>
            <div class="flex items-center gap-2 text-indigo-400 text-sm font-semibold group-hover:gap-3 transition-all">
              <span>เรียนรู้เพิ่มเติม</span>
              <v-icon class="text-lg">mdi-arrow-right</v-icon>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 hover:border-purple-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-400/30">
              <v-icon class="text-purple-300 text-4xl">mdi-video-box</v-icon>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">วิดีโออธิบาย</h3>
            <p class="text-slate-400 leading-relaxed mb-4">วิดีโอสอนสำหรับแต่ละบท อธิบายเนื้อหาอย่างชัดเจน</p>
            <div class="flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:gap-3 transition-all">
              <span>เรียนรู้เพิ่มเติม</span>
              <v-icon class="text-lg">mdi-arrow-right</v-icon>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-pink-500/30 hover:border-pink-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-pink-400/30">
              <v-icon class="text-pink-300 text-4xl">mdi-pencil-box-multiple</v-icon>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">แบบทดสอบ</h3>
            <p class="text-slate-400 leading-relaxed mb-4">ประเมินความเข้าใจ 100+ คำถาม สำหรับทุกบท</p>
            <div class="flex items-center gap-2 text-pink-400 text-sm font-semibold group-hover:gap-3 transition-all">
              <span>เรียนรู้เพิ่มเติม</span>
              <v-icon class="text-lg">mdi-arrow-right</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Overview -->
    <div class="px-4 lg:px-16 py-20">
      <h2 class="text-4xl lg:text-5xl font-black text-white mb-4 text-center">เมนูการเรียน</h2>
      <p class="text-slate-400 text-center mb-16 text-lg">เข้าถึงสื่อการสอนที่คุณต้องการ</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Description -->
        <NuxtLink to="/description" class="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm">
          <div class="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <v-icon class="text-indigo-400 text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">mdi-information-outline</v-icon>
            <h3 class="text-xl font-bold text-white mb-2">คำอธิบายรายวิชา</h3>
            <p class="text-slate-400 text-sm leading-relaxed">ดูเป้าหมาย ผลการเรียนรู้ วิธีการศึกษา และการประเมินผล</p>
          </div>
        </NuxtLink>

        <!-- Lessons -->
        <NuxtLink to="/lessons" class="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
          <div class="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <v-icon class="text-purple-400 text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">mdi-book-open-page-variant</v-icon>
            <h3 class="text-xl font-bold text-white mb-2">สื่อการสอน</h3>
            <p class="text-slate-400 text-sm leading-relaxed">บทเรียน 6 บท ใบความรู้ ใบงาน และไฟล์ PDF ดาวน์โหลด</p>
          </div>
        </NuxtLink>

        <!-- Videos -->
        <NuxtLink to="/videos" class="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 backdrop-blur-sm">
          <div class="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <v-icon class="text-pink-400 text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">mdi-play-circle</v-icon>
            <h3 class="text-xl font-bold text-white mb-2">วิดีโอการสอน</h3>
            <p class="text-slate-400 text-sm leading-relaxed">วิดีโออธิบายเนื้อหา สำหรับแต่ละบท พร้อมดาวน์โหลด</p>
          </div>
        </NuxtLink>

        <!-- Tests -->
        <NuxtLink to="/tests" class="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
          <div class="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <v-icon class="text-yellow-400 text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">mdi-clipboard-check</v-icon>
            <h3 class="text-xl font-bold text-white mb-2">แบบทดสอบ</h3>
            <p class="text-slate-400 text-sm leading-relaxed">ประเมินความเข้าใจ ทดสอบตามบท และข้อสอบครบชุด</p>
          </div>
        </NuxtLink>

        <!-- About -->
        <NuxtLink to="/about" class="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
          <div class="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <v-icon class="text-green-400 text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">mdi-account-multiple</v-icon>
            <h3 class="text-xl font-bold text-white mb-2">ผู้จัดทำ</h3>
            <p class="text-slate-400 text-sm leading-relaxed">ข้อมูลผู้สร้าง ทีมงาน และประวัติการพัฒนา</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Stats Section with Premium Styling -->
    <div class="relative px-4 lg:px-16 py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl lg:text-5xl font-black text-white mb-16 text-center">ตัวเลขที่พูดได้</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stat 1 -->
          <div class="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div class="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black text-indigo-400 mb-3">6</div>
              <p class="text-slate-300 font-semibold">บทเรียน</p>
              <p class="text-slate-500 text-sm mt-2">เนื้อหาครบถ้วน</p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black text-purple-400 mb-3">6+</div>
              <p class="text-slate-300 font-semibold">วิดีโอสอน</p>
              <p class="text-slate-500 text-sm mt-2">สำหรับแต่ละบท</p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
            <div class="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black text-pink-400 mb-3">100+</div>
              <p class="text-slate-300 font-semibold">คำถามทดสอบ</p>
              <p class="text-slate-500 text-sm mt-2">ประเมินความเข้าใจ</p>
            </div>
          </div>

          <!-- Stat 4 -->
          <div class="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div class="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all"></div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black text-yellow-400 mb-3">∞</div>
              <p class="text-slate-300 font-semibold">เรียนได้ทุกเมื่อ</p>
              <p class="text-slate-500 text-sm mt-2">24/7 ตลอดเวลา</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
