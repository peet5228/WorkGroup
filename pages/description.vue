<template>
  <div class="relative min-h-screen">
    <div class="p-8 lg:p-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          คำอธิบายรายวิชา
        </h1>
        
        <div class="space-y-8">
          <!-- Subject Overview -->
          <div class="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
            <h2 class="text-2xl font-bold text-white mb-4">ข้อมูลรายวิชา</h2>
            <div class="space-y-3 text-slate-300">
              <p><strong class="text-indigo-300">ชื่อวิชา:</strong> คณิตศาสตร์คอมพิวเตอร์</p>
              <p><strong class="text-indigo-300">รหัสวิชา:</strong> 20901 - 1003</p>
              <p><strong class="text-indigo-300">จำนวนหน่วยกิต:</strong> 3 หน่วย</p>
              <p><strong class="text-indigo-300">ระดับชั้น:</strong> ระดับอุดมศึกษา / โปรแกรมวิทยาศาสตร์คอมพิวเตอร์</p>
              <p><strong class="text-indigo-300">หมายเหตุ:</strong> วิชาบังคับก่อน ต้องศึกษาก่อนเรียนวิชาเขียนโปรแกรม</p>
            </div>
          </div>

          <!-- Course Objectives -->
          <div class="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <h2 class="text-2xl font-bold text-white mb-4">วัตถุประสงค์การเรียน</h2>
            <ul class="space-y-2 text-slate-300 list-disc list-inside">
              <li>เข้าใจเนื้อหารายวิชาตามมาตรฐาน</li>
              <li>สามารถประยุกต์ใช้ความรู้ในการแก้ปัญหา</li>
              <li>พัฒนาทักษะการคิดวิเคราะห์และการสืบสอบ</li>
              <li>สามารถทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพ</li>
            </ul>
          </div>

          <!-- Learning Outcomes -->
          <div class="p-6 bg-gradient-to-br from-pink-500/10 to-yellow-500/10 rounded-2xl border border-pink-500/20">
            <h2 class="text-2xl font-bold text-white mb-4">ผลการเรียนรู้ที่คาดหวัง</h2>
            <ul class="space-y-2 text-slate-300 list-disc list-inside">
              <li>บอกได้: หลักการและความรู้พื้นฐาน</li>
              <li>ทำได้: บรรยายและอธิบายความรู้ได้ชัดเจน</li>
              <li>ใช้ได้: ประยุกต์ใช้ความรู้ในสถานการณ์จริง</li>
              <li>วิเคราะห์ได้: แยกแยะและเปรียบเทียบได้อย่างสมเหตุสมผล</li>
              <li>สร้างได้: สร้างสรรค์ผลงานที่มีคุณภาพ</li>
            </ul>
          </div>

          <!-- Course Content Overview -->
          <div class="p-6 bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-2xl border border-yellow-500/20">
            <h2 class="text-2xl font-bold text-white mb-6">โครงสร้างเนื้อหารายวิชา (6 บท)</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-indigo-400/50 transition-all">
                <div class="font-bold text-indigo-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-numeric-1-box</v-icon>
                  ระบบเลขฐาน (Number Systems)
                </div>
                <p class="text-slate-400 text-sm">เลขฐานสิบ สอง แปด สิบหก และการทำงานของคอมพิวเตอร์</p>
              </div>
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all">
                <div class="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-numeric-2-box</v-icon>
                  การแปลงเลขฐาน (Number Conversion)
                </div>
                <p class="text-slate-400 text-sm">แปลงเลขฐานต่าง ๆ และการแปลงแบบทางลัด</p>
              </div>
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-pink-400/50 transition-all">
                <div class="font-bold text-pink-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-numeric-3-box</v-icon>
                  การคำนวณเลขฐาน (Computer Arithmetic)
                </div>
                <p class="text-slate-400 text-sm">บวก ลบ คูณ หาร และ Complement ในระบบเลขฐานสอง</p>
              </div>
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-green-400/50 transition-all">
                <div class="font-bold text-green-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-numeric-4-box</v-icon>
                  พีชคณิตบูลีน (Boolean Algebra & Logic Gates)
                </div>
                <p class="text-slate-400 text-sm">AND, OR, NOT, NAND, NOR, XOR และการลดรูปสมการ</p>
              </div>
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-yellow-400/50 transition-all">
                <div class="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-numeric-5-box</v-icon>
                  เซต (Set Theory)
                </div>
                <p class="text-slate-400 text-sm">สัญลักษณ์เซต ยูเนียน อินเตอร์เซกชัน คอมพลีเมนต์</p>
              </div>
              <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-all">
                <div class="font-bold text-blue-300 mb-2 flex items-center gap-2">
                  <v-icon class="text-lg">mdi-calculator-variant</v-icon>
                  ระบบการทดลองสอนแบบปฏิบัติ (Hands-On Practice)
                </div>
                <p class="text-slate-400 text-sm">การทดลองการคำนวณและการแก้ปัญหาจริง</p>
              </div>
            </div>
          </div>

          <!-- Assessment Methods -->
          <div class="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
            <h2 class="text-2xl font-bold text-white mb-4">วิธีการประเมินผล</h2>
            <div class="space-y-3 text-slate-300">
              <p><strong class="text-green-300">• แบบทดสอบ:</strong> 40% - ทดสอบความเข้าใจเนื้อหาแต่ละบท</p>
              <p><strong class="text-green-300">• ใบงาน/โครงการ:</strong> 30% - ประยุกต์ใช้ความรู้ในการทำงาน</p>
              <p><strong class="text-green-300">• การมีส่วนร่วม:</strong> 20% - การเข้าชั้นเรียนและอภิปราย</p>
              <p><strong class="text-green-300">• สอบปลายภาค:</strong> 10% - ทดสอบเนื้อหาทั้งหมด</p>
            </div>
          </div>

          <!-- Study Methods -->
          <div class="p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-500/20">
            <h2 class="text-2xl font-bold text-white mb-4">วิธีการเรียน</h2>
            <ul class="space-y-2 text-slate-300 list-disc list-inside">
              <li>ศึกษาเอกสารการเรียน (ใบความรู้) แบบละเอียด</li>
              <li>ชมวิดีโออธิบายเนื้อหา</li>
              <li>ทำใบงานและแบบฝึกหัด</li>
              <li>ส่วนตัวอ่านเนื้อหาเพิ่มเติมจากแหล่งอ้างอิง</li>
              <li>ร่วมอภิปรายกับเพื่อนและครู</li>
            </ul>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex gap-4 mt-12">
          <NuxtLink to="/" class="px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition">
            ← กลับหน้าแรก
          </NuxtLink>
          <NuxtLink to="/lessons" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            ไปที่บทเรียน →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
