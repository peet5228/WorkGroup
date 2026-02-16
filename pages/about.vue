<template>
  <div class="relative min-h-screen">
    <div class="p-8 lg:p-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          ผู้จัดทำ
        </h1>

        <!-- Creator Information -->
        <div class="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 mb-8">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Avatar -->
            <div class="flex-shrink-0">
              <div class="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white">
                <v-icon class="text-6xl">mdi-account</v-icon>
              </div>
            </div>

            <!-- Details -->
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-white mb-2">นักเรียน-นักศึกษา</h2>
              <p class="text-green-300 text-lg font-semibold mb-4">สาขาการศึกษา : เทคโนโลยีสารสนเทศ</p>
              
              <div class="space-y-3 text-slate-300">
                <p><strong class="text-green-300">ชื่อ:</strong> 1.นาย ภัทรดนัยหิรัญญานุวัตร <br> 2.นายณัฐลักษณ์ ยาวิละ <br> นางสาว กนกพิชญ์ ไชยพรม</p>
                <p><strong class="text-green-300">สถาบันการศึกษา:</strong> วิทยาลัยเทคนิคน่าน </p>
                <!-- <p><strong class="text-green-300">ประสบการณ์:</strong> มากกว่า 10 ปี</p> -->
                <!-- <p><strong class="text-green-300">ความเชี่ยวชาญ:</strong> การพัฒนาสื่อการสอน, การศึกษาออนไลน์</p> -->
              </div>

              <!-- Contact -->
              <div class="mt-6 flex gap-4">
                <a href="#" class="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition flex items-center gap-2">
                  <v-icon>mdi-email</v-icon>
                  อีเมล
                </a>
                <a href="#" class="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition flex items-center gap-2">
                  <v-icon>mdi-phone</v-icon>
                  โทรศัพท์
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- About the Course -->
        <div class="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 mb-8">
          <h3 class="text-2xl font-bold text-white mb-4">เกี่ยวกับสื่อการสอนนี้</h3>
          <div class="space-y-4 text-slate-300">
            <p>
              สื่อการสอนนี้ได้รับการพัฒนาด้วยเทคโนโลยีสมัยใหม่เพื่อให้ผู้เรียนสามารถเรียนรู้ได้อย่างมีประสิทธิภาพและสะดวก ประกอบด้วย:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>บทเรียน 6 บท ที่ครอบคลุมเนื้อหาสำคัญ</li>
              <li>ใบความรู้ (Knowledge Sheets) แบบ PDF ที่มีรูปภาพและแผนภาพประกอบ</li>
              <li>ใบงาน (Worksheets) สำหรับฝึกปฏิบัติ</li>
              <li>วิดีโออธิบายเนื้อหาสำหรับทุกบท</li>
              <li>แบบทดสอบแบบปรนัยและอัตนัยเพื่อประเมินความเข้าใจ</li>
              <li>แหล่งอ้างอิงและเอกสารเพิ่มเติม</li>
            </ul>
          </div>
        </div>

        <!-- Development Team -->
        <!-- <div class="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 mb-8">
          <h3 class="text-2xl font-bold text-white mb-6">ทีมพัฒนา</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p class="font-semibold text-white mb-1">ผู้เขียนเนื้อหา</p>
              <p class="text-slate-400 text-sm">ครู/อาจารย์ด้านสาขาวิชา</p>
            </div>
            <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p class="font-semibold text-white mb-1">ผู้ออกแบบระบบ</p>
              <p class="text-slate-400 text-sm">ผู้เชี่ยวชาญด้าน Web Design</p>
            </div>
            <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p class="font-semibold text-white mb-1">ผู้พัฒนาระบบ</p>
              <p class="text-slate-400 text-sm">วิศวกรซอฟต์แวร์</p>
            </div>
            <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p class="font-semibold text-white mb-1">ผู้บรรณาธิการ</p>
              <p class="text-slate-400 text-sm">บรรณาธิการอักษรศาสตร์</p>
            </div>
          </div>
        </div> -->

        <!-- Contact Information -->
        <!-- <div class="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20">
          <h3 class="text-2xl font-bold text-white mb-6">ติดต่อเรา</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p class="text-yellow-300 font-semibold mb-2">ที่ตั้ง</p>
              <p class="text-slate-300">สถาบันการศึกษา<br/>จังหวัร/เมือง</p>
            </div>
            <div>
              <p class="text-yellow-300 font-semibold mb-2">อีเมล</p>
              <p class="text-slate-300">teacher@education.ac.th</p>
            </div>
            <div>
              <p class="text-yellow-300 font-semibold mb-2">โทรศัพท์</p>
              <p class="text-slate-300">+66 (0) XXX-XXX-XXXX</p>
            </div>
            <div>
              <p class="text-yellow-300 font-semibold mb-2">ช่องทางติดต่อ</p>
              <div class="flex gap-2">
                <a href="#" class="text-indigo-400 hover:text-indigo-300">Facebook</a>
                <a href="#" class="text-indigo-400 hover:text-indigo-300">LINE</a>
                <a href="#" class="text-indigo-400 hover:text-indigo-300">Twitter</a>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Navigation -->
        <div class="flex gap-4 mt-12">
          <NuxtLink to="/tests" class="px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition">
            ← แบบทดสอบ
          </NuxtLink>
          <NuxtLink to="/" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            กลับหน้าแรก
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
