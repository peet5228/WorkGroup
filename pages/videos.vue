<template>
  <div class="relative min-h-screen">
    <div class="p-8 lg:p-16">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          วิดีโอการสอน
        </h1>
        <p class="text-slate-300 mb-12">ชมวิดีโออธิบายเนื้อหาแต่ละบทเรียน</p>

        <!-- Videos Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Video 1 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded">
                  18:45
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">ระบบเลขฐาน (Number Systems)</h3>
                <p class="text-slate-400 text-sm mb-4">เข้าใจว่าคอมพิวเตอร์ทำงานด้วยกระแสไฟฟ้า และเรียนรู้เลขฐานต่าง ๆ</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video 2 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded">
                  22:15
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">การแปลงเลขฐาน (Number Conversion)</h3>
                <p class="text-slate-400 text-sm mb-4">วิธีการแปลงเลขฐานต่าง ๆ แบบละเอียด พร้อมตัวอย่างจริง</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video 3 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded">
                  25:30
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">การคำนวณเลขฐาน (Computer Arithmetic)</h3>
                <p class="text-slate-400 text-sm mb-4">บวก ลบ คูณ หาร และการใช้ Complement ในการลบเลข</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video 4 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded">
                  28:00
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">พีชคณิตบูลีน (Boolean Algebra)</h3>
                <p class="text-slate-400 text-sm mb-4">ตัวดำเนินการบูลีน Logic Gates และการลดรูปสมการด้วย K-Map</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video 5 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                  20:45
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">เซต (Set Theory)</h3>
                <p class="text-slate-400 text-sm mb-4">สัญลักษณ์เซต ยูเนียน อินเตอร์เซกชัน และคอมพลีเมนต์ของเซต</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video 6 -->
          <div class="group">
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div class="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10"></div>
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <v-icon class="text-white text-3xl">mdi-play</v-icon>
                  </div>
                </div>
                <div class="absolute top-3 right-3 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                  15:20
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">การทดลองปฏิบัติ (Hands-On Practice)</h3>
                <p class="text-slate-400 text-sm mb-4">การใช้เครื่องมือออนไลน์ และการแก้ปัญหาจริง</p>
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium">
                    ชมวิดีโอ
                  </button>
                  <button class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition">
                    <v-icon>mdi-download</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex gap-4 mt-12">
          <NuxtLink to="/lessons" class="px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition">
            ← บทเรียน
          </NuxtLink>
          <NuxtLink to="/tests" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            แบบทดสอบ →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
