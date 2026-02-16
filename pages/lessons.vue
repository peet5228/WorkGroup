<template>
  <div class="relative min-h-screen">
    <div class="p-8 lg:p-16">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          สื่อการสอน - บทเรียน
        </h1>
        <p class="text-slate-300 mb-12">เลือกบทเรียนที่ต้องการศึกษา</p>

        <!-- Lessons Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Lesson 1 -->
          <div class="group p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">1</div>
            <h3 class="text-xl font-bold text-white mb-2">ระบบเลขฐาน</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">เลขฐานสิบ สอง แปด สิบหก และการทำงานของคอมพิวเตอร์ด้วยกระแสไฟฟ้า</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ เลขฐานสิบ (Decimal)</p>
              <p>✓ เลขฐานสอง (Binary)</p>
              <p>✓ เลขฐานแปด (Octal)</p>
              <p>✓ เลขฐานสิบหก (Hexadecimal)</p>
            </div>
            <div class="flex flex-col gap-2">
              <!-- <a href="#" class="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-pdf-box</v-icon>
                ใบความรู้ PDF
              </a> -->
              <a href="https://tutor-vip.com/number-base-system/" target="_blank" class="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a>
            </div>
          </div>

          <!-- Lesson 2 -->
          <div class="group p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">2</div>
            <h3 class="text-xl font-bold text-white mb-2">การแปลงเลขฐาน</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">แปลงเลขฐานต่าง ๆ และการแปลงแบบทางลัด</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ วิธีหารสั้น</p>
              <p>✓ วิธีคูณด้วยค่าประจำหลัก</p>
              <p>✓ แปลง ฐานสอง ↔ ฐานแปด</p>
              <p>✓ แปลง ฐานสอง ↔ ฐานสิบหก</p>
            </div>
            <div class="flex flex-col gap-2">
              <!-- <a href="#" class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-pdf-box</v-icon>
                ใบความรู้ PDF
              </a> -->
              <a href="https://www2.cs.science.cmu.ac.th/courses/204101/lib/exe/fetch.php?media=w14-lec_number_system.pdf" target="_blank" class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a>
            </div>
          </div>

          <!-- Lesson 3 -->
          <div class="group p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">3</div>
            <h3 class="text-xl font-bold text-white mb-2">การคำนวณเลขฐาน</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">บวก ลบ คูณ หาร และ Complement ในระบบเลขฐาน</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ การบวกเลขฐานสอง</p>
              <p>✓ 1's Complement</p>
              <p>✓ 2's Complement</p>
              <p>✓ การลบด้วยการบวก</p>
            </div>
            <div class="flex flex-col gap-2">
              <a href="http://anyflip.com/kgfo/aabm/basic" target="_blank" class="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-lg hover:bg-pink-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-pdf-box</v-icon>
                ใบความรู้ PDF
              </a>
              <!-- <a href="#" class="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-lg hover:bg-pink-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a> -->
            </div>
          </div>

          <!-- Lesson 4 -->
          <div class="group p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">4</div>
            <h3 class="text-xl font-bold text-white mb-2">พีชคณิตบูลีน</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">ตัวดำเนินการบูลีน Logic Gates และการลดรูปสมการ</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ AND, OR, NOT</p>
              <p>✓ NAND, NOR, XOR</p>
              <p>✓ Truth Table</p>
              <p>✓ Karnaugh Map (K-Map)</p>
            </div>
            <div class="flex flex-col gap-2">
              <a href="https://tps.comsci.info/algebra.pdf" target="_blank" class="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-pdf-box</v-icon>
                ใบความรู้ PDF
              </a>
              <!-- <a href="#" class="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a> -->
            </div>
          </div>

          <!-- Lesson 5 -->
          <div class="group p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">5</div>
            <h3 class="text-xl font-bold text-white mb-2">เซต (Set Theory)</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">พื้นฐานการจัดกลุ่มข้อมูลและสัญลักษณ์เซต</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ สัญลักษณ์เซต</p>
              <p>✓ ยูเนียน (Union)</p>
              <p>✓ อินเตอร์เซกชัน (Intersection)</p>
              <p>✓ คอมพลีเมนต์ (Complement)</p>
            </div>
            <div class="flex flex-col gap-2">
              <!-- <a href="#" class="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-pdf-box</v-icon>
                ใบความรู้ PDF
              </a> -->
              <a href="https://math.sc.su.ac.th/wp-content/uploads/2025/10/set_theory.pdf" target="_blank" class="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a>
            </div>
          </div>

          <!-- Lesson 6 -->
          <!-- <div class="group p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">6</div>
            <h3 class="text-xl font-bold text-white mb-2">การทดลองปฏิบัติ</h3>
            <p class="text-slate-400 mb-4 text-sm leading-relaxed">ระบบการทดลองการคำนวนด้วยเครื่องมือปฏิบัติ</p>
            <div class="flex flex-col gap-2 mb-4 text-xs text-slate-500">
              <p>✓ Calculator ออนไลน์</p>
              <p>✓ Converter Tool</p>
              <p>✓ Logic Gate Simulator</p>
              <p>✓ Practice Problems</p>
            </div>
            <div class="flex flex-col gap-2">
              <a href="#" class="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-calculator-variant</v-icon>
                เครื่องมือปฏิบัติ
              </a>
              <a href="#" class="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition text-sm font-medium flex items-center gap-2">
                <v-icon class="text-lg">mdi-file-document</v-icon>
                ใบงาน PDF
              </a>
            </div>
          </div> -->
        </div>

        <!-- Navigation -->
        <div class="flex gap-4 mt-12">
          <NuxtLink to="/" class="px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition">
            ← กลับหน้าแรก
          </NuxtLink>
          <NuxtLink to="/videos" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            ดูวิดีโอ →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
