<template>
  <div class="relative min-h-screen">
    <div class="p-8 lg:p-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          แบบทดสอบ
        </h1>
        <p class="text-slate-300 mb-12">ทดสอบความเข้าใจเนื้อหาของแต่ละบท</p>

        <!-- Tests Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Test 1: Number Systems -->
          <div class="p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">ระบบเลขฐาน</h3>
                <p class="text-slate-400 text-sm">15 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">ทดสอบความเข้าใจเลขฐานสิบ สอง แปด และสิบหก</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>

          <!-- Test 2: Number Conversion -->
          <div class="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">การแปลงเลขฐาน</h3>
                <p class="text-slate-400 text-sm">20 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">แปลงเลขฐานต่าง ๆ และการแปลงแบบทางลัด</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>

          <!-- Test 3: Computer Arithmetic -->
          <div class="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">การคำนวณเลขฐาน</h3>
                <p class="text-slate-400 text-sm">18 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">บวก ลบ คูณ หาร และ Complement ในเลขฐานสอง</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>

          <!-- Test 4: Boolean Algebra -->
          <div class="p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">พีชคณิตบูลีน</h3>
                <p class="text-slate-400 text-sm">22 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">ตัวดำเนินการบูลีน Logic Gates และการลดรูป</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>

          <!-- Test 5: Set Theory -->
          <div class="p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">เซต (Set Theory)</h3>
                <p class="text-slate-400 text-sm">16 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                5
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">สัญลักษณ์เซต ยูเนียน อินเตอร์เซกชัน คอมพลีเมนต์</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>

          <!-- Test 6: Practice Problems -->
          <div class="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">ปัญหาปฏิบัติทั่วไป</h3>
                <p class="text-slate-400 text-sm">25 คำถาม</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                6
              </div>
            </div>
            <p class="text-slate-300 mb-6 text-sm">ปัญหารวมจากทุกบท พร้อมคำอธิบายเชื่อมโยง</p>
            <div class="flex gap-3">
              <button class="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                เริ่มทำแบบทดสอบ
              </button>
            </div>
          </div>
        </div>

        <!-- Final Exam -->
        <div class="mt-12 p-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl border-2 border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
          <div class="flex items-center gap-4 mb-4">
            <v-icon class="text-4xl text-red-400">mdi-medal</v-icon>
            <div>
              <h2 class="text-2xl font-bold text-white">สอบปลายภาค</h2>
              <p class="text-slate-400 text-sm">ทดสอบเนื้อหาทั้งหมด</p>
            </div>
          </div>
          <p class="text-slate-300 mb-6">
            แบบทดสอบครอบคลุมเนื้อหาทั้ง 5 บท ประกอบด้วย:
          </p>
          <ul class="text-slate-400 mb-6 space-y-2 list-disc list-inside">
            <li>ระบบเลขฐาน - 12 คำถาม</li>
            <li>การแปลงเลขฐาน - 16 คำถาม</li>
            <li>การคำนวณเลขฐาน - 14 คำถาม</li>
            <li>พีชคณิตบูลีน - 18 คำถาม</li>
            <li>เซต - 12 คำถาม</li>
            <li class="font-bold text-white">รวม 72 คำถาม</li>
          </ul>
          <button class="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:shadow-xl hover:shadow-red-500/50 transition font-semibold">
            เริ่มสอบปลายภาค
          </button>
        </div>

        <!-- Navigation -->
        <div class="flex gap-4 mt-12">
          <NuxtLink to="/videos" class="px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition">
            ← วิดีโอ
          </NuxtLink>
          <NuxtLink to="/about" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            ผู้จัดทำ →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
