/* Computer Learning System — data-driven learning content */

const hardwareCoverage = [
  'คืออะไร',
  'หน้าที่',
  'ทำงานอย่างไรในภาพรวม',
  'ประเภท/ชนิดที่สำคัญ',
  'สเปกที่สำคัญ',
  'สเปกมีผลต่อการใช้งานอย่างไร',
  'ทำงานร่วมกับอุปกรณ์ใด',
  'จุดที่ควรรู้ก่อนเลือกซื้อ/เปลี่ยน',
  'อาการเสียหรือปัญหาที่พบบ่อย',
  'วิธีตรวจสอบเบื้องต้น',
  'การติดตั้งหรือเปลี่ยนในกรณีที่เกี่ยวข้อง',
  'ตัวอย่างการใช้งานจริง'
];

const skillNodePositions = [
  [7, 8], [20, 8], [33, 8], [46, 8], [59, 8], [72, 8], [85, 8],
  [14, 17], [28, 17], [42, 17], [56, 17], [70, 17], [84, 17],
  [22, 26], [36, 26], [50, 26], [64, 26], [78, 26], [90, 26]
];

function createSkills(moduleId, definitions) {
  return definitions.map((definition, index) => {
    const skill = typeof definition === 'string' ? { title: definition } : definition;
    const [x, y] = skillNodePositions[index];
    const baseId = skill.id || skill.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const finalId = baseId.startsWith(`${moduleId}-`) ? baseId : `${moduleId}-${baseId || `skill-${String(index + 1).padStart(2, '0')}`}`;
    return {
      id: finalId,
      title: skill.title,
      shortName: skill.title,
      parent: moduleId,
      kind: 'skill',
      code: 'SKILL',
      subtopics: skill.subtopics || [],
      content: skill.content || {},
      x: skill.x ?? x,
      y: skill.y ?? y
    };
  });
}

const topic = (title, content) => ({ title, content });

const hardwareSkillContent = {
  cpu: [
    topic('คืออะไร', 'CPU หรือ Central Processing Unit คือหน่วยประมวลผลหลักของคอมพิวเตอร์ ทำหน้าที่รับและประมวลผลคำสั่งจากโปรแกรม'),
    topic('ทำงานอย่างไร', 'ข้อมูลและโปรแกรมที่ต้องใช้ถูกนำจาก Storage มาไว้ใน RAM แล้ว CPU อ่านคำสั่งและประมวลผล ก่อนส่งผลไปยังส่วนที่เกี่ยวข้อง เช่น GPU หรืออุปกรณ์อื่น'),
    topic('ประเภทหลัก', 'Desktop, Notebook, CPU ที่มี Graphics ในตัว และ CPU ที่ต้องใช้ GPU แยก'),
    topic('สเปกสำคัญ', 'Core คือหน่วยประมวลผลภายใน CPU, Thread คือหน่วยงานที่ CPU สามารถจัดการได้, Clock คือความถี่การทำงาน, Cache คือหน่วยความจำความเร็วสูงที่ช่วยให้ CPU เข้าถึงข้อมูลที่ใช้บ่อยได้เร็ว และ Socket คือรูปแบบช่องเชื่อมต่อกับ Motherboard'),
    topic('ทำงานร่วมกับ', 'Motherboard, RAM, Storage, GPU, CPU Cooler และ PSU'),
    topic('เลือก / เปลี่ยน', 'Socket ต้องตรงและ Motherboard ต้องรองรับ CPU นั้น รวมถึงต้องดู Cooler และกำลังไฟของ PSU'),
    topic('ติดตั้ง', 'วาง CPU ให้ตรงเครื่องหมายบน Socket ล็อกให้ถูกต้อง ติดตั้ง Cooler และต่อสาย CPU_FAN ไม่ควรฝืนกด CPU'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเปิดไม่ติด, ไม่มีภาพ, ร้อน, ลดความเร็วเมื่อร้อน, ดับหรือ Restart เมื่อโหลดสูง ให้ตรวจตำแหน่ง CPU, CPU Power, Cooler, อุณหภูมิ และดูว่า BIOS/UEFI ตรวจพบ CPU หรือไม่'),
    topic('จำ', 'CPU เป็นหน่วยประมวลผลหลัก แต่ต้องทำงานร่วมกับส่วนอื่นของระบบ')
  ],
  motherboard: [
    topic('คืออะไร', 'แผงวงจรหลักที่เชื่อมต่ออุปกรณ์ต่าง ๆ ให้ติดต่อและทำงานร่วมกัน'),
    topic('ทำงานอย่างไร', 'CPU, RAM, Storage, GPU และอุปกรณ์อื่นเชื่อมต่อผ่าน Motherboard เพื่อรับส่งข้อมูลและรับไฟ'),
    topic('ส่วนสำคัญ', 'CPU Socket, RAM Slot, PCIe Slot, M.2, SATA, Power Connector, I/O Ports และ Chipset'),
    topic('เลือก / เปลี่ยน', 'ตรวจ CPU Socket, RAM, Form Factor, M.2/SATA, PCIe, Ports และความเข้ากันได้กับ Case/PSU'),
    topic('ติดตั้ง', 'ตรวจ Standoff ใน Case ให้ตรงตำแหน่งรูยึดก่อนขัน Motherboard เพื่อป้องกันการลัดวงจร'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด No POST, อุปกรณ์ไม่ถูกพบ, พอร์ตใช้ไม่ได้ หรือ BIOS/UEFI มีปัญหา ให้ตรวจสายไฟ, CPU/RAM, BIOS/UEFI, Slot, Connector และ Error Indicator ถ้ามี'),
    topic('จำ', 'Motherboard คือศูนย์กลางที่ทำให้อุปกรณ์หลักของคอมพิวเตอร์เชื่อมต่อกัน')
  ],
  ram: [
    topic('คืออะไร', 'RAM หรือ Random Access Memory คือหน่วยความจำชั่วคราวสำหรับข้อมูลและคำสั่งที่กำลังใช้งาน ต่างจาก SSD/HDD ที่ใช้เก็บข้อมูลระยะยาว'),
    topic('ทำงานอย่างไร', 'เมื่อเปิดโปรแกรม ข้อมูลที่ต้องใช้จะถูกนำจาก Storage มาไว้ใน RAM เพื่อให้ CPU เข้าถึงได้รวดเร็ว'),
    topic('ประเภท', 'DDR4, DDR5, Desktop RAM และ Notebook RAM โดย DDR ต้องตรงกับที่ระบบรองรับ'),
    topic('สเปก', 'Capacity คือความจุ, Speed คือความเร็วในการรับส่งข้อมูล, จำนวน Module และ Compatibility'),
    topic('ติดตั้ง', 'จัดร่อง RAM ให้ตรง Slot แล้วกดจน Lock เข้าที่ ไม่ควรฝืนใส่ผิดด้าน'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด No Boot, No Display, ค้าง หรือ Restart ให้ Reseat RAM, ทดลองทีละแถว, ทดลอง Slot อื่น และใช้ Memory Test เมื่อจำเป็น'),
    topic('จำ', 'RAM คือพื้นที่ทำงานชั่วคราวของโปรแกรมที่กำลังทำงาน')
  ],
  hdd: [
    topic('คืออะไร', 'Hard Disk Drive เป็น Storage ที่ใช้จานแม่เหล็กหมุนและหัวอ่าน/เขียน'),
    topic('ทำงานอย่างไร', 'จานหมุนและหัวอ่าน/เขียนจะเข้าถึงข้อมูลบนจานแม่เหล็ก'),
    topic('ประเภท / สเปก', 'Desktop, Notebook, SATA, ความจุ, RPM, Interface และขนาด 2.5/3.5 นิ้ว'),
    topic('ข้อแตกต่าง', 'HDD มีต้นทุนต่อพื้นที่ค่อนข้างต่ำและเหมาะกับการเก็บข้อมูลจำนวนมาก แต่โดยทั่วไปช้ากว่า SSD และมีชิ้นส่วนเคลื่อนไหว'),
    topic('ติดตั้ง', 'ต่อ SATA Data เข้ากับ Motherboard และ SATA Power จาก PSU'),
    topic('ปัญหา / ตรวจสอบ', 'อาจไม่พบ Drive, ช้า, มีเสียงผิดปกติ หรือ Bad Sector ให้ตรวจสาย SATA, สายไฟ, BIOS/UEFI, Disk Management และสุขภาพ Drive'),
    topic('จำ', 'HDD เหมาะกับการเก็บข้อมูลจำนวนมากในราคาต่อพื้นที่ที่คุ้มค่า')
  ],
  ssd: [
    topic('คืออะไร', 'Solid State Drive เป็น Storage ที่ใช้ Flash Memory และไม่มีจานหมุน'),
    topic('ทำงานอย่างไร', 'เก็บข้อมูลในชิป Flash และเข้าถึงด้วยวงจรอิเล็กทรอนิกส์ จึงตอบสนองเร็วกว่า Storage แบบจานหมุนโดยทั่วไป'),
    topic('ประเภท', 'SATA SSD และ NVMe SSD'),
    topic('ข้อควรรู้', 'M.2 เป็นรูปแบบทางกายภาพ ไม่ได้แปลว่า M.2 ทุกตัวเป็น NVMe ต้องตรวจ Interface'),
    topic('สเปก', 'ความจุ, Interface, ความเร็วอ่าน/เขียน, Form Factor และ Compatibility'),
    topic('ติดตั้ง', 'SATA ต่อ Data/Power; M.2 ใส่ Slot และยึดสกรู'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด BIOS/Windows ไม่พบ, Boot ไม่ได้ หรือพื้นที่เต็ม ให้ตรวจการติดตั้ง, BIOS/UEFI, Disk Management, สาย/Slot และ Partition'),
    topic('จำ', 'SSD เหมาะกับ Windows และโปรแกรม เพราะตอบสนองรวดเร็ว')
  ],
  gpu: [
    topic('คืออะไร', 'GPU หรือ Graphics Processing Unit ทำหน้าที่ประมวลผลกราฟิกและงานบางประเภทที่เหมาะกับการประมวลผลแบบขนาน'),
    topic('ทำงานอย่างไร', 'รับข้อมูลกราฟิก คำนวณภาพ แล้วส่งผลไปยัง Monitor'),
    topic('ประเภท', 'Integrated Graphics และ Dedicated Graphics Card'),
    topic('สเปก / VRAM', 'สเปกที่เกี่ยวข้องคือ GPU, VRAM, PCIe, Power Connector, ขนาด และ Display Ports โดย VRAM คือหน่วยความจำที่ GPU ใช้เก็บข้อมูลสำหรับงานกราฟิก เช่น Texture และ Frame Buffer'),
    topic('ทำงานร่วมกับ', 'CPU, Motherboard, RAM, PSU และ Monitor'),
    topic('เลือก / ติดตั้ง', 'ตรวจ PCIe, ขนาด Case, PSU และพอร์ตจอ ใส่การ์ดให้ล็อก ยึด Case และต่อไฟถ้าจำเป็น'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด No Display, Driver มีปัญหา, ร้อน หรือ Restart เมื่อโหลดสูง ให้ตรวจการ์ด, Power, สายจอ, Device Manager, Driver และอุณหภูมิ'),
    topic('จำ', 'GPU รับผิดชอบงานกราฟิกเป็นหลัก แต่ระบบกราฟิกต้องทำงานร่วมกับส่วนอื่น')
  ],
  psu: [
    topic('คืออะไร', 'Power Supply Unit รับไฟจากระบบไฟฟ้า แปลงและจ่ายไฟให้ส่วนประกอบของคอมพิวเตอร์'),
    topic('ทำงานอย่างไร', 'จ่ายไฟให้ Motherboard, CPU, GPU, Storage และอุปกรณ์อื่นผ่าน Connector ที่เหมาะสม'),
    topic('สเปก', 'Wattage, มาตรฐาน/คุณภาพ, Connector และ Efficiency'),
    topic('เลือก', 'กำลังไฟเพียงพอ Connector ครบ และคุณภาพเหมาะสม'),
    topic('ติดตั้ง', 'ต่อ 24-pin, CPU Power, GPU Power และ SATA Power ตามอุปกรณ์'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเปิดไม่ติด, ดับเอง, Restart เมื่อโหลดสูง หรือสายหลวม ให้ตรวจปลั๊ก, Power Cable, PSU Switch, 24-pin, CPU Power และ GPU Power หากสงสัย PSU เสียควรใช้เครื่องมือทดสอบหรือให้ผู้มีความรู้ตรวจ ไม่ควรเปิด PSU เอง'),
    topic('จำ', 'PSU มีผลต่อความเสถียรของทั้งระบบ และอาการ PSU เสียอาจดูคล้าย Hardware ตัวอื่นเสีย')
  ],
  'cpu-cooler': [
    topic('คืออะไร', 'อุปกรณ์ที่นำความร้อนออกจาก CPU เพื่อควบคุมอุณหภูมิ'),
    topic('ประเภท', 'Air Cooler และ Liquid Cooler'),
    topic('จุดสำคัญ', 'Socket, ขนาด, ความสามารถในการระบายความร้อน, Fan/Pump และ Thermal Paste'),
    topic('Thermal Paste', 'วัสดุที่ช่วยเติมช่องว่างเล็ก ๆ ระหว่าง CPU กับฐาน Cooler เพื่อช่วยถ่ายเทความร้อน'),
    topic('ติดตั้ง', 'ยึด Cooler ให้แน่นพอดี ใช้ Thermal Paste เหมาะสม และต่อ Fan/Pump'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด CPU ร้อน, Fan ไม่หมุน, เสียงดัง, ลดความเร็วเมื่อร้อน หรือดับเมื่อโหลดสูง ให้ตรวจ Fan/Pump, ฝุ่น, การยึด, Thermal Paste, Airflow และอุณหภูมิ'),
    topic('จำ', 'Cooler ช่วยให้ CPU ทำงานในช่วงอุณหภูมิที่เหมาะสม')
  ],
  case: [
    topic('คืออะไร', 'โครงสำหรับติดตั้งและปกป้องอุปกรณ์ และช่วยจัด Airflow'),
    topic('จุดสำคัญ', 'รองรับ Motherboard, GPU, PSU, Storage, Cooler และพัดลม'),
    topic('เลือก', 'ตรวจขนาด Motherboard, GPU, PSU และ Cooler ว่าใส่ได้หรือไม่'),
    topic('ติดตั้ง', 'ใช้ Standoff ถูกตำแหน่งและจัดสายไม่ให้ขวางพัดลม'),
    topic('ปัญหา', 'อุปกรณ์ใส่ไม่ได้, Airflow ไม่ดี, ฝุ่น และสายเกะกะ'),
    topic('จำ', 'Case มีผลต่อพื้นที่ติดตั้ง การจัดสาย และการระบายความร้อน')
  ],
  monitor: [
    topic('คืออะไร', 'อุปกรณ์ Output ที่แสดงภาพจากคอมพิวเตอร์'),
    topic('ทำงานอย่างไร', 'GPU/Integrated Graphics ส่งข้อมูลภาพผ่าน HDMI, DisplayPort หรือพอร์ตที่รองรับไปยัง Monitor'),
    topic('สเปก / ความหมาย', 'สเปกที่เกี่ยวข้องคือขนาด, Resolution, Refresh Rate, Panel และ Ports โดย Resolution คือจำนวนพิกเซลที่ใช้สร้างภาพ ส่วน Refresh Rate คือจำนวนครั้งต่อวินาทีที่จออัปเดตภาพ เช่น 60Hz'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด No Signal, ไม่มีภาพ, กระพริบ หรือ Resolution ผิด ให้ตรวจ Power, Input Source, Cable, Port, GPU และทดลองสาย/เครื่องอื่น'),
    topic('จำ', 'ไม่มีภาพไม่ได้แปลว่า Monitor เสียเสมอ ต้องตรวจ Cable, Port และ Graphics ด้วย')
  ],
  keyboard: [
    topic('คืออะไร', 'อุปกรณ์ Input สำหรับป้อนตัวอักษร ตัวเลข และคำสั่ง'),
    topic('ประเภท', 'Membrane, Mechanical, Wired, Wireless โดย Mechanical ใช้ Switch ใต้ปุ่มแต่ละปุ่ม ทำให้ความรู้สึกและการตอบสนองต่างจาก Membrane'),
    topic('การเชื่อมต่อ', 'USB, Bluetooth หรือ Wireless Receiver'),
    topic('ปัญหา / ตรวจสอบ', 'อาจกดไม่ติด, บางปุ่มเสีย, Windows ไม่พบ หรือ Wireless หลุด ให้ตรวจสาย/แบตเตอรี่, USB Port, เชื่อมต่อใหม่, Device Manager และทดลองเครื่องอื่น'),
    topic('จำ', 'ปัญหาควรเริ่มตรวจ Connection ก่อน Driver หรือ Hardware')
  ],
  'notebook-keyboard': [
    topic('คืออะไร', 'Keyboard ภายใน Notebook ซึ่งมักเชื่อมกับ Mainboard ผ่าน Flex Cable'),
    topic('จุดสำคัญ', 'รุ่น, Connector, Flex และโครงยึด'),
    topic('เปลี่ยน', 'ปิดเครื่องและตัดไฟตามขั้นตอนที่เหมาะสม ถอดชิ้นส่วนที่บัง ปลด Flex/Connector แล้วจึงเปลี่ยน'),
    topic('ปัญหา / ตรวจสอบ', 'อาจมีบางปุ่มเสีย, ปุ่มติด, ไม่ตอบสนอง หรือ Flex หลุด ให้ตรวจ Flex, Connector และทดสอบ Keyboard'),
    topic('จำ', 'Notebook ต้องระวัง Flex และ Connector เป็นพิเศษ')
  ],
  mouse: [
    topic('คืออะไร', 'อุปกรณ์ Input สำหรับควบคุม Pointer'),
    topic('ประเภท / สเปก', 'Wired, Wireless และ Optical/Sensor โดยสเปกที่เกี่ยวข้องคือ Connection, Sensor, DPI และ Battery'),
    topic('DPI', 'ค่าที่เกี่ยวข้องกับความไวของการเคลื่อน Pointer'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด Cursor ไม่ขยับ, คลิกไม่ติด, Wireless หลุด หรือ Sensor อ่านพื้นผิวไม่ดี ให้ตรวจสาย/แบตเตอรี่, USB, เชื่อมต่อใหม่, พื้นผิว และทดลองเครื่องอื่น'),
    topic('จำ', 'ตรวจ Connection ก่อนสงสัยว่า Mouse เสีย')
  ],
  'network-adapter': [
    topic('คืออะไร', 'อุปกรณ์ที่ทำให้คอมพิวเตอร์เชื่อมต่อ Network ได้ เช่น Ethernet และ Wi-Fi Adapter'),
    topic('ทำงานอย่างไร', 'รับส่งข้อมูลระหว่าง Computer กับ Network ผ่านสายหรือสัญญาณไร้สาย'),
    topic('จุดสำคัญ', 'Speed, Interface, Driver และ Wireless Standard'),
    topic('ทำงานร่วมกับ', 'Router, Switch, Access Point, Cable และ OS'),
    topic('ปัญหา / ตรวจสอบ', 'อาจเกิด Wi-Fi ไม่พบ, Ethernet Disconnected, ต่อ Network ได้แต่ Internet ไม่ได้ หรือ Driver มีปัญหา ให้ตรวจตามลำดับ Adapter → Connection → IP → Gateway → DNS → Router → Internet'),
    topic('จำ', 'Network Adapter เป็นสะพานเชื่อม Computer กับ Network')
  ],
  printer: [
    topic('คืออะไร', 'อุปกรณ์ Output สำหรับพิมพ์ข้อมูลลงกระดาษ'),
    topic('ประเภท', 'Inkjet, Laser, USB และ Network Printer'),
    topic('ทำงานอย่างไร', 'Computer ส่งงานผ่าน OS และ Printer Driver ไปยัง Printer แล้ว Printer จึงพิมพ์'),
    topic('สเปก', 'ประเภท, Resolution, Speed, Connection และ Driver'),
    topic('ปัญหา / ตรวจสอบ', 'อาจพิมพ์ไม่ออก, Offline, Queue ค้าง หรือ Driver มีปัญหา ให้ตรวจไฟ/กระดาษ, Connection, Status, Print Queue, Driver และ Test Page'),
    topic('จำ', 'ต้องมีตัวเครื่อง การเชื่อมต่อ และ Driver ที่ถูกต้อง')
  ]
};

const hardwareSkills = createSkills('hardware', [
  { id: 'hardware-cpu', title: 'CPU', x: 7, y: 8, subtopics: hardwareSkillContent.cpu },
  { id: 'hardware-motherboard', title: 'Motherboard / Mainboard', x: 20, y: 8, subtopics: hardwareSkillContent.motherboard },
  { id: 'hardware-ram', title: 'RAM', x: 33, y: 8, subtopics: hardwareSkillContent.ram },
  { id: 'hardware-hdd', title: 'HDD', x: 46, y: 8, subtopics: hardwareSkillContent.hdd },
  { id: 'hardware-ssd', title: 'SSD', x: 59, y: 8, subtopics: hardwareSkillContent.ssd },
  { id: 'hardware-gpu', title: 'GPU / Graphics Card', x: 72, y: 8, subtopics: hardwareSkillContent.gpu },
  { id: 'hardware-psu', title: 'PSU', x: 14, y: 17, subtopics: hardwareSkillContent.psu },
  { id: 'hardware-cpu-cooler', title: 'CPU Cooler', x: 28, y: 17, subtopics: hardwareSkillContent['cpu-cooler'] },
  { id: 'hardware-case', title: 'Case', x: 42, y: 17, subtopics: hardwareSkillContent.case },
  { id: 'hardware-monitor', title: 'Monitor', x: 56, y: 17, subtopics: hardwareSkillContent.monitor },
  { id: 'hardware-keyboard', title: 'Keyboard', x: 70, y: 17, subtopics: hardwareSkillContent.keyboard },
  { id: 'hardware-notebook-keyboard', title: 'Notebook Keyboard', x: 75, y: 25, subtopics: hardwareSkillContent['notebook-keyboard'] },
  { id: 'hardware-mouse', title: 'Mouse / Touchpad', x: 84, y: 17, subtopics: hardwareSkillContent.mouse },
  { id: 'hardware-network-adapter', title: 'Network Adapter', x: 25, y: 25, subtopics: hardwareSkillContent['network-adapter'] },
  { id: 'hardware-printer', title: 'Printer', x: 49, y: 25, subtopics: hardwareSkillContent.printer }
]);

const assemblySkillContent = {
  'preparation': [
    topic('Preparation', [
      'ตรวจอุปกรณ์ให้ครบและตรวจ Compatibility เช่น CPU กับ Motherboard, RAM กับระบบ,',
      'GPU กับ Case และ PSU กับกำลังไฟที่ต้องใช้'
    ].join("\n"))
  ],
  'safety-esd': [
    topic('Safety / ESD', [
      'ปิดเครื่องและถอดไฟ จับอุปกรณ์บริเวณขอบ ระวังไฟฟ้าสถิต และไม่ฝืนใส่อุปกรณ์',
      'หากตำแหน่งไม่ตรงให้หยุดตรวจ'
    ].join("\n"))
  ],
  'components': [
    topic('Components', [
      'เตรียม CPU, Cooler, RAM, Storage, Motherboard, PSU, GPU, Case และสายต่าง ๆ'
    ].join("\n"))
  ],
  'cpu': [
    topic('CPU', [
      'วาง CPU ให้ตรงเครื่องหมายบน Socket และล็อกกลไกให้ถูกต้อง'
    ].join("\n"))
  ],
  'cooler': [
    topic('Cooler', [
      'ติดตั้ง Cooler ให้แน่นพอดี ใช้ Thermal Paste และต่อ CPU_FAN'
    ].join("\n"))
  ],
  'ram': [
    topic('RAM', [
      'ใส่ RAM ลง Slot ที่ถูกต้องจน Lock'
    ].join("\n"))
  ],
  'storage': [
    topic('Storage', [
      'ติดตั้ง M.2 หรือ SATA ตามชนิด Storage'
    ].join("\n"))
  ],
  'motherboard': [
    topic('Motherboard', [
      'ตรวจ I/O Shield ถ้าจำเป็น ตรวจ Standoff แล้ววางและขัน Motherboard ให้ถูกตำแหน่ง'
    ].join("\n"))
  ],
  'psu': [
    topic('PSU', [
      'ยึด PSU และจัดสายเพื่อเตรียมเชื่อมต่อ'
    ].join("\n"))
  ],
  'gpu': [
    topic('GPU', [
      'ใส่ GPU ลง PCIe Slot ยึด Case และต่อ Power หากจำเป็น'
    ].join("\n"))
  ],
  'power-connector': [
    topic('Power Connector', [
      'ต้องรู้จัก 24-pin Motherboard, CPU Power, GPU Power และ SATA Power'
    ].join("\n"))
  ],
  'front-panel': [
    topic('Front Panel', [
      'ต่อ Power Switch, Reset Switch, Power LED และ HDD LED ตามคู่มือ Motherboard'
    ].join("\n"))
  ],
  'cable-management': [
    topic('Cable Management', [
      'จัดสายไม่ให้ขวางพัดลมและ Airflow และไม่ดึง Connector จนตึง'
    ].join("\n"))
  ],
  'pre-power-check': [
    topic('Pre-Power Check', [
      'ตรวจสายไฟ, 24-pin, CPU Power, RAM/GPU Lock, Cooler, Storage, Front',
      'Panel, Monitor และตรวจว่าไม่มีสกรูหรือโลหะหลงอยู่'
    ].join("\n"))
  ],
  'first-boot': [
    topic('First Boot', [
      'เปิดเครื่องและสังเกตพัดลม ไฟ/เสียง ภาพ และการเข้า BIOS/UEFI'
    ].join("\n"))
  ],
  'bios-uefi': [
    topic('BIOS / UEFI', [
      'ตรวจ CPU, RAM, Storage และ Boot Device'
    ].join("\n"))
  ],
  'post-build-verification': [
    topic('Post-Build Verification', [
      'หลังติดตั้ง Windows ตรวจ Device Manager, RAM, Storage, Network, USB, Audio',
      'และ Display แล้วทดสอบจริง'
    ].join("\n"))
  ],
  'no-boot': [
    topic('ถ้าไม่ Boot', [
      'ตรวจตามลำดับ Power → PSU → 24-pin/CPU Power → RAM → GPU → Front Panel →',
      'BIOS/UEFI → อุปกรณ์ทีละชิ้น'
    ].join("\n"))
  ],
};

const assemblySkills = createSkills('assembly', [
  { id: 'assembly-preparation', title: 'Preparation', x: 7, y: 8, subtopics: assemblySkillContent['preparation'] },
  { id: 'assembly-safety-esd', title: 'Safety / ESD', x: 20, y: 8, subtopics: assemblySkillContent['safety-esd'] },
  { id: 'assembly-components', title: 'Components', x: 33, y: 8, subtopics: assemblySkillContent['components'] },
  { id: 'assembly-cpu', title: 'CPU', x: 46, y: 8, subtopics: assemblySkillContent['cpu'] },
  { id: 'assembly-cooler', title: 'CPU Cooler', x: 59, y: 8, subtopics: assemblySkillContent['cooler'] },
  { id: 'assembly-ram', title: 'RAM', x: 72, y: 8, subtopics: assemblySkillContent['ram'] },
  { id: 'assembly-storage', title: 'Storage', x: 85, y: 8, subtopics: assemblySkillContent['storage'] },
  { id: 'assembly-motherboard', title: 'Motherboard', x: 14, y: 17, subtopics: assemblySkillContent['motherboard'] },
  { id: 'assembly-psu', title: 'PSU', x: 28, y: 17, subtopics: assemblySkillContent['psu'] },
  { id: 'assembly-gpu', title: 'GPU', x: 42, y: 17, subtopics: assemblySkillContent['gpu'] },
  { id: 'assembly-power-connector', title: 'Power Connector', x: 56, y: 17, subtopics: assemblySkillContent['power-connector'] },
  { id: 'assembly-front-panel', title: 'Front Panel', x: 70, y: 17, subtopics: assemblySkillContent['front-panel'] },
  { id: 'assembly-cable-management', title: 'Cable Management', x: 84, y: 17, subtopics: assemblySkillContent['cable-management'] },
  { id: 'assembly-pre-power-check', title: 'Pre-Power Check', x: 22, y: 26, subtopics: assemblySkillContent['pre-power-check'] },
  { id: 'assembly-first-boot', title: 'First Boot', x: 36, y: 26, subtopics: assemblySkillContent['first-boot'] },
  { id: 'assembly-bios-uefi', title: 'BIOS / UEFI', x: 50, y: 26, subtopics: assemblySkillContent['bios-uefi'] },
  { id: 'assembly-post-build-verification', title: 'Post-Build Verification', x: 64, y: 26, subtopics: assemblySkillContent['post-build-verification'] },
  { id: 'assembly-no-boot', title: 'No Boot Troubleshooting', x: 78, y: 26, subtopics: assemblySkillContent['no-boot'] },
]);


const maintenanceSkillContent = {
  'Inspection ก่อนลงมือ': [
    topic('Inspection ก่อนลงมือ', [
      'ก่อนถอดหรือเปลี่ยนอะไร ให้ตรวจสภาพเครื่องก่อน',
      '',
      '- **ภายนอก:** ฝุ่น รอยแตก พอร์ต สาย และอุปกรณ์ที่หลวม',
      '- **ภายใน:** ฝุ่นตามพัดลม/Heatsink, สายหลวม, Connector, RAM/GPU, Storage และรอยไหม้',
      '- **การทำงาน:** เสียงผิดปกติ ความร้อน การดับ/Restart และอาการที่ผู้ใช้พบ',
      '- **Software ที่ช่วยตรวจ:** BIOS/UEFI, Device Manager, Disk Management และเครื่องมือดูอุณหภูมิ/สุขภาพอุปกรณ์ตามความเหมาะสม',
      '',
      'หลักคิดคือ **ตรวจจากสิ่งง่ายและปลอดภัยก่อน แล้วค่อยถอดอุปกรณ์เมื่อมีเหตุผล**'
    ].join("\n")),
  ],
  'Cleaning': [
    topic('กฎความปลอดภัย', [
      '1. ปิดเครื่อง',
      '2. ถอดปลั๊กหรือแหล่งจ่ายไฟ',
      '3. ถ้าเป็น Notebook ให้ปิดเครื่องและตัด Battery/Power ตามวิธีของรุ่นนั้น',
      '4. ใช้ลมเป่าหรือแปรงนุ่มสำหรับฝุ่น และใช้ผ้าแห้ง/วัสดุที่เหมาะสมกับพื้นผิว',
      '5. ระวังไม่ให้ความชื้นเข้าอุปกรณ์',
      '6. ถ้าใช้ลมกับพัดลม ให้ยึดใบพัดไม่ให้หมุนเร็วเกินไป'
    ].join("\n")),
    topic('ทำความสะอาดตามชิ้นส่วน', [
      '**Case**',
      '- เป่าฝุ่นจากช่องลมและตะแกรง',
      '- เช็ดฝุ่นตามพื้นผิวและกรองฝุ่น',
      '- ตรวจว่าช่องลมไม่ถูกบัง',
      '',
      '**CPU Cooler**',
      '- เป่าฝุ่นจาก Heatsink และพัดลม',
      '- ยึดใบพัดไม่ให้หมุนจากแรงลม',
      '- ถ้าถอด Cooler ออกจาก CPU ต้องพิจารณาเปลี่ยน Thermal Paste ก่อนประกอบกลับ',
      '',
      '**GPU**',
      '- เป่าฝุ่นบริเวณพัดลมและ Heatsink',
      '- ตรวจว่าพัดลมหมุนได้ปกติ',
      '- ไม่ใช้น้ำหรือของเหลวกับตัวการ์ด',
      '',
      '**PSU**',
      '- ทำความสะอาดบริเวณภายนอกและช่องระบายอากาศ',
      '- ไม่เปิดฝา PSU เพื่อทำความสะอาดภายใน เพราะยังอาจมีประจุไฟฟ้าและเป็นส่วนที่ไม่ควรซ่อมเอง',
      '',
      '**Motherboard**',
      '- เป่าฝุ่นเบา ๆ รอบ Slot, Connector และ Heatsink',
      '- ตรวจรอยไหม้ บวม แตก หรือสิ่งแปลกปลอม',
      '',
      '**RAM**',
      '- ปิดเครื่องและถอด RAM ก่อนทำความสะอาด',
      '- เป่าฝุ่นที่ Slot และตัว RAM อย่างระมัดระวัง',
      '- ใส่กลับให้ Lock ครบทั้งสองด้าน',
      '',
      '**HDD / SSD**',
      '- ทำความสะอาดบริเวณรอบ Drive และ Connector',
      '- ตรวจสาย SATA หรือจุดยึด',
      '- หลีกเลี่ยงการกระแทก โดยเฉพาะ HDD ที่มีชิ้นส่วนเคลื่อนไหว',
      '',
      '**Monitor**',
      '- ปิดจอและถอดไฟ',
      '- ใช้ผ้านุ่มที่เหมาะกับหน้าจอ',
      '- ไม่ฉีดน้ำยาลงบนจอโดยตรง',
      '',
      '**Keyboard**',
      '- ปิด/ถอดการเชื่อมต่อ',
      '- เคาะหรือเป่าฝุ่นอย่างระมัดระวัง',
      '- เช็ดพื้นผิวและบริเวณปุ่ม',
      '',
      '**Mouse**',
      '- เช็ดตัวเมาส์',
      '- ทำความสะอาด Sensor และตรวจว่าพื้นผิวที่ใช้ไม่สกปรกเกินไป',
      '',
      '**Notebook**',
      '- ระวังฝาครอบ Flex Connector และสายแพ',
      '- ไม่ฝืนงัดชิ้นส่วน เพราะ Clip และ Connector แตกได้ง่าย'
    ].join("\n")),
  ],
  'Cables / Connectors': [
    topic('Cables / Connectors', [
      'สายหลวมทำให้เกิดอาการที่ดูเหมือนอุปกรณ์เสียได้ เช่น No Display, Storage ไม่พบ หรืออุปกรณ์ไม่ทำงาน',
      '',
      'ตรวจ:',
      '- 24-pin Motherboard',
      '- CPU Power',
      '- GPU Power',
      '- SATA Data / SATA Power',
      '- Front Panel',
      '- USB และ Display Cable',
      '- Notebook Flex/Connector',
      '',
      'หลักการคือ **ถอด-เสียบใหม่เฉพาะจุดที่สงสัย และต้องแน่ใจว่าต่อถูกช่อง**'
    ].join("\n")),
  ],
  'RAM': [
    topic('RAM', [
      'อาการที่เกี่ยวข้อง: No Boot, No Display, ค้าง, Restart',
      '',
      'วิธีตรวจ:',
      '1. ปิดเครื่องและถอดไฟ',
      '2. ถอด RAM และตรวจ Slot',
      '3. ใส่กลับให้ Lock',
      '4. ถ้ามีหลายแถว ทดลองทีละแถว',
      '5. ทดลอง Slot ที่คู่มือกำหนด',
      '6. เมื่อเครื่องบูตได้ ให้ใช้ Memory Test หากจำเป็น',
      '',
      'การทดสอบทีละแถวช่วยแยกได้ว่าอาการมาจาก RAM, Slot หรือการติดตั้ง'
    ].join("\n")),
  ],
  'Storage': [
    topic('Storage', [
      'ถ้า Drive ไม่พบ:',
      '1. ตรวจสาย/การติดตั้ง',
      '2. ตรวจ BIOS/UEFI',
      '3. ถ้า BIOS เห็นแต่ Windows ไม่เห็น ให้ตรวจ Disk Management',
      '4. ตรวจ Partition และสถานะ Drive',
      '5. ตรวจสุขภาพ Storage เมื่อมีอาการช้า ค้าง หรือเสียงผิดปกติ',
      '',
      'อย่ารีบ Format เพราะการ Format อาจทำให้ข้อมูลหาย'
    ].join("\n")),
  ],
  'CPU / Cooler': [
    topic('CPU / Cooler', [
      'ตรวจ:',
      '- พัดลม/ปั๊มทำงานหรือไม่',
      '- ฝุ่นอุดตันหรือไม่',
      '- Cooler ยึดแน่นหรือไม่',
      '- Thermal Paste อยู่ในสภาพเหมาะสมหรือไม่',
      '- Airflow ของ Case ดีหรือไม่',
      '- อุณหภูมิสูงผิดปกติหรือไม่',
      '',
      'ถ้า CPU ร้อนผิดปกติ ให้ตรวจจาก **พัดลม → ฝุ่น → การยึด Cooler → Thermal Paste → Airflow** ก่อนสรุปว่า CPU เสีย'
    ].join("\n")),
  ],
  'GPU': [
    topic('GPU', [
      'ตรวจ:',
      '- การ์ดเสียบ PCIe แน่นหรือไม่',
      '- GPU Power ต่อครบหรือไม่',
      '- Display Cable ต่อพอร์ตถูกหรือไม่',
      '- Driver ปกติหรือไม่',
      '- อุณหภูมิและพัดลมผิดปกติหรือไม่',
      '',
      'ถ้าจะเปลี่ยน GPU ต้องดู **PCIe, ขนาดการ์ด, PSU, Power Connector, CPU และพอร์ตจอ**'
    ].join("\n")),
  ],
  'PSU': [
    topic('PSU', [
      'ตรวจ:',
      '- ปลั๊กและ Power Cable',
      '- PSU Switch',
      '- 24-pin',
      '- CPU Power',
      '- GPU Power',
      '- อาการดับ/Restart โดยเฉพาะตอนโหลดสูง',
      '',
      'ถ้าสงสัย PSU เสีย ควรใช้เครื่องมือทดสอบหรือให้ผู้มีความรู้ตรวจ **ไม่ควรเปิด PSU เอง**'
    ].join("\n")),
  ],
  'Motherboard': [
    topic('Motherboard', [
      'ตรวจ:',
      '- Slot และ Connector',
      '- ฝุ่น',
      '- Error Indicator/Debug LED ถ้ามี',
      '- BIOS/UEFI',
      '- การตรวจพบ CPU, RAM และ Storage',
      '- รอยไหม้ บวม แตก หรือความเสียหายทางกายภาพ',
      '',
      'ถ้าอุปกรณ์หลายตัวผิดปกติพร้อมกัน ให้พิจารณา Motherboard หรือ PSU เป็นหนึ่งในสาเหตุ แต่ต้องมีหลักฐานก่อนเปลี่ยน'
    ].join("\n")),
  ],
  'Monitor': [
    topic('Monitor', [
      'ตรวจตามลำดับ:',
      '**Power → Input Source → Display Cable → Port → GPU/Integrated Graphics → Monitor**',
      '',
      'ถ้าจะเปลี่ยนจอ ดู:',
      '- ขนาด',
      '- Resolution',
      '- Refresh Rate',
      '- Panel',
      '- Ports',
      '- ความสามารถของ GPU ที่จะส่งภาพ'
    ].join("\n")),
  ],
  'Keyboard / Mouse': [
    topic('Keyboard / Mouse', [
      '**Keyboard:** ตรวจ USB/Bluetooth/Receiver, Battery, Port, Driver และทดลองเครื่องอื่น',
      '',
      '**Mouse:** ตรวจสาย/Receiver/Bluetooth, Battery, Sensor, พื้นผิว และทดลองเครื่องอื่น',
      '',
      'เริ่มจาก Connection ก่อน เพราะเป็นสาเหตุที่ตรวจได้ง่ายและไม่ต้องรื้อเครื่อง'
    ].join("\n")),
  ],
  'Notebook Hardware': [
    topic('Notebook Hardware', [
      'Notebook ต้องระวัง:',
      '- Battery',
      '- Flex Cable',
      '- Connector',
      '- สายลำโพง/จอ/Keyboard',
      '- ฝาครอบและ Clip',
      '- สกรูหลายขนาด',
      '',
      'ก่อนถอดควรจำตำแหน่งสกรูและ Connector และไม่ฝืนชิ้นส่วนที่ยังล็อกอยู่'
    ].join("\n")),
  ],
  'Replacement': [
    topic('Replacement', [
      'ขั้นตอนพื้นฐาน:',
      '1. ระบุอุปกรณ์ที่มีปัญหา',
      '2. ตรวจว่าอะไหล่รุ่นใหม่เข้ากันได้',
      '3. สำรองข้อมูลถ้าเกี่ยวข้องกับ Storage',
      '4. ปิดเครื่องและตัดไฟ',
      '5. ถอดอุปกรณ์เดิม',
      '6. ติดตั้งอุปกรณ์ใหม่',
      '7. ตรวจ Connector และการยึด',
      '8. เปิดเครื่องและตรวจ BIOS/UEFI หรือ Windows',
      '9. ทดสอบการใช้งานจริง'
    ].join("\n")),
  ],
  'Upgrade Hardware': [
    topic('RAM', [
      'ก่อนเพิ่ม RAM ต้องดู:',
      '- Capacity ที่ต้องการ',
      '- DDR รุ่นที่ Motherboard รองรับ',
      '- จำนวน Slot ที่เหลือ',
      '- ความจุสูงสุดที่ระบบรองรับ',
      '- ความเข้ากันได้ของ Module',
      '',
      'ตัวอย่าง: ถ้ามี RAM 8GB และต้องการ 16GB อาจเพิ่มอีก 8GB ได้ แต่ต้องตรวจว่าระบบรองรับ DDR และ Module แบบนั้นก่อน ไม่ใช่เห็นว่า "RAM 8GB" แล้วซื้ออะไรก็ได้',
      '',
      '**ขั้นตอน:** ตรวจสเปกเครื่อง → เลือก RAM ที่รองรับ → ปิดเครื่อง → ติดตั้ง → เข้า BIOS/Windows ตรวจความจุ → ทดสอบ'
    ].join("\n")),
    topic('Storage: HDD → SSD', [
      'ดู:',
      '- SATA หรือ NVMe',
      '- Form Factor',
      '- Slot/Port ที่เครื่องรองรับ',
      '- ความจุ',
      '- วิธีติดตั้ง Windows หรือย้ายข้อมูล',
      '',
      'ถ้าต้องการให้ Windows อยู่บน SSD อาจติดตั้ง Windows ใหม่หรือย้ายระบบเดิมตามวิธีที่เหมาะสม โดยต้องสำรองข้อมูลก่อน'
    ].join("\n")),
    topic('SSD เพิ่ม/เปลี่ยน', [
      'ต้องดู:',
      '- SATA SSD หรือ NVMe SSD',
      '- M.2 Slot รองรับ Interface อะไร',
      '- ขนาด/ความยาวที่รองรับ',
      '- Capacity',
      '- การจัดการ Partition หลังติดตั้ง',
      '',
      'จำไว้ว่า **M.2 คือรูปแบบทางกายภาพ ไม่ได้แปลว่า M.2 ทุกตัวเป็น NVMe**'
    ].join("\n")),
    topic('GPU', [
      'ก่อน Upgrade ต้องดู:',
      '- PCIe Slot',
      '- ขนาด GPU ว่าใส่ Case ได้',
      '- PSU Wattage',
      '- Power Connector',
      '- CPU ว่าเหมาะกับระดับ GPU หรือไม่',
      '- Monitor และพอร์ตที่ต้องใช้',
      '- Driver ที่รองรับ',
      '',
      '**ขั้นตอน:** ตรวจ Compatibility → ถอด GPU เดิม → ใส่ GPU ใหม่ → ต่อ Power → ต่อจอ → ติดตั้ง/ตรวจ Driver → ทดสอบ'
    ].join("\n")),
    topic('CPU', [
      'ต้องดู:',
      '- Socket',
      '- Motherboard Support',
      '- BIOS/UEFI Support',
      '- Cooler และความสามารถในการระบายความร้อน',
      '- PSU และกำลังไฟ',
      '- การใช้งานที่ต้องการ',
      '',
      'CPU ที่แรงกว่าไม่ได้แปลว่าใส่แทนกันได้ เพราะ Socket และ BIOS/UEFI อาจไม่รองรับ'
    ].join("\n")),
    topic('CPU Cooler', [
      'ต้องดู:',
      '- Socket Compatibility',
      '- ขนาด Cooler',
      '- พื้นที่ Case',
      '- ความสามารถในการระบายความร้อน',
      '- Fan/Pump Connector'
    ].join("\n")),
    topic('PSU', [
      'ถ้า Upgrade GPU/CPU แล้วกินไฟมากขึ้น ต้องตรวจ:',
      '- Wattage',
      '- Connector',
      '- คุณภาพและมาตรฐานของ PSU',
      '- ความต้องการไฟของระบบโดยรวม',
      '',
      'อย่าเลือกจาก Watt อย่างเดียว เพราะ Connector และคุณภาพก็สำคัญ'
    ].join("\n")),
    topic('Case / Airflow', [
      'ถ้าเปลี่ยนอุปกรณ์ที่ใหญ่ขึ้น ต้องตรวจ:',
      '- Motherboard Form Factor',
      '- ความยาว/ความสูง GPU',
      '- ความสูง CPU Cooler',
      '- ขนาด PSU',
      '- พื้นที่พัดลมและหม้อน้ำ',
      '- Airflow'
    ].join("\n")),
    topic('Notebook Upgrade', [
      'ให้ตรวจรุ่นเครื่องก่อนเสมอ เพราะบางรุ่น RAM บางส่วนหรือทั้งหมดบัดกรีบน Mainboard และบางรุ่นมี Slot สำหรับ RAM/Storage จำกัด'
    ].join("\n")),
  ],
  'Upgrade แบบคิดเป็นระบบ': [
    topic('Upgrade แบบคิดเป็นระบบ', [
      'ก่อนซื้ออุปกรณ์ ให้ตอบ 5 ข้อ:',
      '',
      '1. **ต้องการแก้ปัญหาอะไร?**',
      '2. **ชิ้นเดิมเป็นข้อจำกัดตรงไหน?**',
      '3. **เครื่องรองรับอะไรบ้าง?**',
      '4. **อุปกรณ์ใหม่ทำงานร่วมกับส่วนอื่นได้หรือไม่?**',
      '5. **หลัง Upgrade ต้องทดสอบอะไร?**',
      '',
      'ดังนั้น **Upgrade ที่ดี = แก้คอขวด + เข้ากันได้ + ใช้งานได้จริง** ไม่ใช่แค่ตัวเลขสเปกสูงขึ้น'
    ].join("\n")),
  ],
  'Post-Repair / Post-Upgrade Test': [
    topic('Post-Repair / Post-Upgrade Test', [
      'หลังเปลี่ยนหรือ Upgrade ให้ตรวจ:',
      '- Boot',
      '- BIOS/UEFI',
      '- RAM Capacity',
      '- Storage Detection',
      '- Display',
      '- Network',
      '- USB',
      '- Audio',
      '- Temperature',
      '- Device Manager',
      '- โปรแกรมหรือเกม/งานที่ต้องการใช้งาน',
      '',
      'ต้องยืนยันว่า **ปัญหาเดิมหาย และไม่มีปัญหาใหม่เกิดขึ้น**'
    ].join("\n")),
  ],
  'Verification': [
    topic('Verification', [
      'หลักฐานของการซ่อมหรือ Upgrade ไม่ใช่แค่ "เครื่องเปิดติด" แต่ต้องตรวจว่าอุปกรณ์ที่เปลี่ยนทำงานตามที่ต้องการจริง',
      '',
      'ตัวอย่าง:',
      '- เพิ่ม RAM → Windows เห็นความจุเพิ่มและใช้งานได้',
      '- เปลี่ยน SSD → BIOS/Windows เห็น Drive และทดสอบอ่านเขียนได้',
      '- เปลี่ยน GPU → มีภาพ Driver ปกติ และทดสอบงานกราฟิก',
      '- เปลี่ยน Cooler → อุณหภูมิเหมาะสมและพัดลมทำงาน'
    ].join("\n")),
  ],
};


const windowsInstallationSkillContent = {
  'Preparation': [
    topic('Preparation', 'เตรียม Computer, USB Flash Drive, Windows 11 Installation Media, Internet ตามขั้นตอน และ Backup ข้อมูลสำคัญ เพราะการติดตั้งใหม่อาจลบข้อมูล')
  ],
  'Windows Installation Media': [
    topic('Windows Installation Media', 'คือสื่อ เช่น USB ที่ใช้เริ่มกระบวนการติดตั้ง Windows และสามารถสร้างด้วยเครื่องมือจาก Microsoft')
  ],
  'Bootable USB': [
    topic('Bootable USB', 'USB ต้องสามารถ Boot ได้ หากไม่ได้ให้ตรวจการสร้าง USB และ Boot Menu/UEFI')
  ],
  'Boot Menu': [
    topic('Boot Menu', 'ใช้ Boot Menu ของเครื่องเลือก USB เป็นอุปกรณ์เริ่มระบบ')
  ],
  'BIOS / UEFI': [
    topic('BIOS / UEFI', 'ทำงานก่อน Operating System และใช้ตรวจ Boot Mode, Storage, Boot Order และ Secure Boot ตามข้อกำหนดของ Windows 11')
  ],
  'Windows Setup': [
    topic('Windows Setup', 'เลือกภาษา Keyboard เริ่ม Installation เลือกประเภทการติดตั้ง และเลือก Drive/Partition')
  ],
  'Disk / Partition': [
    topic('Disk / Partition', 'Drive คืออุปกรณ์เก็บข้อมูล, Partition คือส่วนที่แบ่งจาก Drive และ Unallocated Space คือพื้นที่ที่ยังไม่ได้จัดเป็น Partition\nต้องตรวจ Drive ให้ถูกตัวก่อนลบหรือสร้าง Partition เพราะการเลือกผิดอาจทำให้ข้อมูลหาย')
  ],
  'Installation': [
    topic('Installation', 'เลือกตำแหน่งติดตั้งที่ถูกต้องแล้วปล่อย Setup ทำงานและ Restart ตามขั้นตอน')
  ],
  'Post-Install': [
    topic('Post-Install', 'ตั้งค่า User, Network, Windows Update และ Driver')
  ],
  'Required Drivers': [
    topic('Required Drivers', 'ตรวจ Chipset, Graphics, Network, Audio และอุปกรณ์ที่จำเป็น')
  ],
  'Verification': [
    topic('Verification', 'ตรวจ Device Manager, Display, Network, Audio, Storage, USB และ Windows Update')
  ],
  'Common Troubleshooting': [
    topic('Common Troubleshooting', '-   USB Boot ไม่ได้: ตรวจ USB, Boot Menu และ UEFI -   Storage ไม่พบ: ตรวจ BIOS/UEFI, Connection และการตั้งค่าที่เกี่ยวข้อง -   Internet ไม่มี: ตรวจ Network Adapter และ Driver -   ไม่มีภาพ: ตรวจ Monitor, Cable, Graphics และ Driver')
  ],
};

const operatingSystemSkillContent = {
  'Operating System': [
    topic('Operating System', 'OS คือ Software หลักที่จัดการทรัพยากรของ Computer และเป็นตัวกลางระหว่าง User,\nProgram และ Hardware เช่น โปรแกรมสามารถขอใช้ Keyboard ผ่าน OS\nโดยไม่ต้องควบคุมวงจร Keyboard โดยตรง')
  ],
  'File / Folder': [
    topic('File / Folder', 'File คือข้อมูลที่จัดเก็บ เช่น เอกสารหรือรูปภาพ ส่วน Folder ใช้จัดกลุ่ม File และ Path\nบอกตำแหน่งของ File/Folder\n\nต้องทำได้: Copy, Move, Rename, Delete, สร้าง Folder และค้นหา File')
  ],
  'User / Permissions': [
    topic('User / Permissions', 'Administrator มีสิทธิ์จัดการระบบมากกว่า Standard User ส่วน Permission\nคือสิทธิ์ในการเข้าถึงหรือแก้ไขทรัพยากร เช่น File/Folder')
  ],
  'System Settings': [
    topic('System Settings', 'ควรรู้ Display, Sound, Network, Bluetooth, Accounts, Windows Update และ\nStorage')
  ],
  'System Information': [
    topic('System Information', 'ตรวจ CPU, RAM, Windows Version, System Type, Storage และ Device\nInformation เพื่อใช้ประกอบการแก้ปัญหา')
  ],
  'Driver': [
    topic('Driver', 'Driver คือ Software ที่ช่วยให้ Windows ติดต่อและควบคุม Hardware ได้ เช่น Network\nAdapter อาจมี Hardware ปกติแต่ใช้งานไม่ได้หาก Driver มีปัญหา')
  ],
  'Update / Reinstall / Rollback': [
    topic('Update / Reinstall / Rollback', 'Update ใช้ติดตั้ง Driver รุ่นใหม่, Reinstall ใช้ติดตั้งใหม่เมื่อ Driver มีปัญหา และ\nRollback ใช้ย้อนกลับเมื่อปัญหาเกิดหลัง Update')
  ],
  'Device Manager': [
    topic('Device Manager', 'ใช้ดู Hardware ที่ Windows ตรวจพบและสถานะของ Driver รวมถึง Unknown Device,\nError และอุปกรณ์ที่ถูก Disable')
  ],
  'Device Error': [
    topic('Device Error', 'ดูชื่ออุปกรณ์ → ดู Status/Error Code → ตรวจ Driver → Update/Reinstall/Rollback\nตามกรณี → Restart → ทดสอบ')
  ],
  'Verification': [
    topic('Verification', 'Device Manager ควรไม่มี Error และอุปกรณ์ต้องใช้งานจริงได้\n\nPractical Challenge\n\nหา Driver ผิดปกติ → ระบุอุปกรณ์ → วิเคราะห์ → แก้ Driver → Restart → ตรวจ Device\nManager → ทดสอบ')
  ]
};


const troubleshootingSkillContent = {
  'Fundamentals': [
    topic('Fundamentals', [
      'เริ่มจากสิ่งง่าย เช่น Power, Cable, Connection และ Setting ก่อนจะไปถึงการเปลี่ยน Hardware',
      '',
      'เหตุผลคือสิ่งง่ายตรวจได้เร็ว ปลอดภัย และอาจเป็นสาเหตุจริง การข้ามไปเปลี่ยนอะไหล่ทันทีทำให้เสียเวลาและอาจสร้างปัญหาใหม่',
    ].join('\n'))
  ],
  'Problem Identification': [
    topic('Problem Identification', [
      'ถาม:',
      '- อาการคืออะไร?',
      '- เกิดเมื่อไร?',
      '- เกิดทุกครั้งหรือบางครั้ง?',
      '- ก่อนเกิดปัญหามีการเปลี่ยนอะไรหรือไม่?',
      '- มี Error Message หรือไม่?',
      '',
      'การระบุอาการให้ชัดช่วยไม่ให้เราวินิจฉัยจากคำว่า "เครื่องเสีย" ซึ่งกว้างจนแทบไม่มีประโยชน์',
    ].join('\n'))
  ],
  'Information Gathering': [
    topic('Information Gathering', [
      'เก็บข้อมูล:',
      '- Hardware',
      '- Windows Version',
      '- Driver',
      '- Software',
      '- Network',
      '- Error Code',
      '- Device Status',
      '- สิ่งที่เพิ่งติดตั้ง/เปลี่ยน',
    ].join('\n'))
  ],
  'Hypothesis / Diagnosis': [
    topic('Hypothesis / Diagnosis', [
      'ตั้งสมมติฐานจากหลักฐาน เช่น:',
      '- สายหลวม',
      '- RAM มีปัญหา',
      '- Driver ผิดปกติ',
      '- Storage ไม่ถูกตรวจพบ',
      '- Network Configuration ผิด',
      '',
      'จากนั้นต้องเลือกการทดสอบที่สามารถแยกสมมติฐานได้',
    ].join('\n'))
  ],
  'Testing / Isolation': [
    topic('Testing / Isolation', [
      'ใช้หลัก:',
      '- เปลี่ยนทีละตัวแปร',
      '- ใช้อุปกรณ์ที่รู้ว่าดี',
      '- ทดลอง Port อื่น',
      '- ทดลองเครื่องอื่น',
      '- ถอดอุปกรณ์ที่ไม่จำเป็น',
      '- ตรวจ BIOS/UEFI เมื่อเหมาะสม',
      '',
      'เหตุผลที่ต้องเปลี่ยนทีละตัวแปร เพราะถ้าเปลี่ยนหลายอย่างพร้อมกัน เราจะไม่รู้ว่าตัวไหนเป็นสาเหตุหรือเป็นตัวที่แก้ปัญหา',
    ].join('\n'))
  ],
  'Hardware Troubleshooting': [
    topic('Hardware Troubleshooting', [
      'ลำดับพื้นฐาน:',
      '',
      '**Power → Cable → Connection → RAM → GPU → Storage → Motherboard/PSU**',
      '',
      'ลำดับนี้เป็นแนวทาง ไม่ใช่กฎตายตัว ต้องปรับตามอาการและหลักฐาน',
    ].join('\n'))
  ],
  'Windows / Driver': [
    topic('Windows / Driver', [
      'ตรวจ Device Manager, Driver, Windows Update, Settings และ Error Message',
      '',
      'ใช้ Restart, Rollback หรือ Reinstall ตามกรณี และดูว่าปัญหาเริ่มหลังการ Update หรือเปลี่ยน Driver หรือไม่',
    ].join('\n'))
  ],
  'Software': [
    topic('Software', [
      'ตรวจ:',
      '**Error → Compatibility → Dependency → Configuration → Permission → Update → Repair → Reset → Reinstall**',
      '',
      'เริ่มจากวิธีที่กระทบน้อยก่อน',
    ].join('\n'))
  ],
  'Network': [
    topic('Network', [
      'ใช้:',
      '',
      '**Adapter → Connection → IP → Subnet Mask → Gateway → DNS → Router → Internet**',
    ].join('\n'))
  ],
  'Solution / Verification': [
    topic('Solution / Verification', [
      'หลังแก้ต้อง:',
      '1. ทดสอบอาการเดิม',
      '2. ตรวจ Error ใหม่',
      '3. ตรวจระบบที่เกี่ยวข้อง',
      '4. ทดสอบการใช้งานจริง',
      '5. ยืนยันว่าไม่มีปัญหาใหม่',
      '',
      'คำว่า "หายแล้ว" ต้องมีหลักฐานรองรับ',
    ].join('\n'))
  ],
};

const softwareSkillContent = {
  'Software Types': [
    topic('Software Types', [
      '- **Operating System:** จัดการระบบและเป็นตัวกลางระหว่าง User, Program และ Hardware',
      '- **Application:** โปรแกรมที่ผู้ใช้ใช้ทำงาน เช่น เอกสาร ตารางคำนวณ Browser',
      '- **Utility:** เครื่องมือช่วยจัดการหรือดูแลระบบ',
      '- **Driver:** Software ที่ช่วยให้ OS ติดต่อ Hardware',
      '',
      'การแยกประเภทช่วยให้รู้ว่าเวลามีปัญหาควรเริ่มตรวจตรงไหน'
    ].join('\n'))
  ],
  'Installation': [
    topic('Installation', [
      'ขั้นตอนพื้นฐานคือ **ดาวน์โหลดจากแหล่งที่เชื่อถือได้ → ตรวจ Compatibility → ติดตั้ง → ตั้งค่า → ทดสอบ**',
      '',
      'ระหว่างติดตั้ง โปรแกรมอาจเพิ่มไฟล์, Shortcut, Service, Configuration หรือ Dependency ที่จำเป็นต่อการทำงาน',
      '',
      'ดังนั้น "ติดตั้งสำเร็จ" ไม่ได้แปลว่า "ใช้งานได้แน่นอน"'
    ].join('\n'))
  ],
  'Compatibility / Dependency': [
    topic('Compatibility / Dependency', [
      'ก่อนติดตั้งควรดู Windows Version, CPU Architecture, RAM/Storage, Driver และ Components ที่โปรแกรมต้องใช้',
      '',
      'บางโปรแกรมติดตั้งได้แต่เปิดไม่ได้ เพราะ Dependency ไม่ครบ, Driver มีปัญหา, Permission ไม่พอ หรือ Configuration ผิด'
    ].join('\n'))
  ],
  'Configuration': [
    topic('Configuration', [
      'ตั้งค่าภาษา Account Storage Network และ Preferences ตามชนิดของโปรแกรม',
      '',
      'ควรเปลี่ยนทีละค่าที่เกี่ยวข้อง เพื่อให้รู้ว่าการตั้งค่าใดทำให้เกิดปัญหา'
    ].join('\n'))
  ],
  'Office / Productivity': [
    topic('Office / Productivity', [
      'ตัวอย่าง Word Processor, Spreadsheet, Presentation, PDF Tools และ Browser โดยควรรู้การติดตั้ง เปิดใช้งาน ตั้งค่าพื้นฐาน Update และแก้ปัญหาทั่วไป'
    ].join('\n'))
  ],
  'Utilities': [
    topic('Utilities', [
      'เช่น File Compression, Backup, Disk Management และ Security Tools ควรเข้าใจหน้าที่ก่อนใช้ เพราะบางเครื่องมือสามารถเปลี่ยนแปลงข้อมูลหรือการตั้งค่าระบบได้'
    ].join('\n'))
  ],
  'Updates': [
    topic('Updates', [
      'Update ช่วยแก้ Bug ปัญหาความปลอดภัย เพิ่มความสามารถ และปรับ Compatibility แต่หลัง Update หากโปรแกรมมีปัญหา ควรเก็บ Error และพิจารณาว่าปัญหาเริ่มหลัง Update หรือไม่'
    ].join('\n'))
  ],
  'Uninstall': [
    topic('Uninstall', [
      'ถอนผ่าน Windows หรือ Uninstaller ของโปรแกรม การลบ Shortcut ไม่ได้แปลว่าโปรแกรมถูกถอนการติดตั้ง'
    ].join('\n'))
  ],
  'License Basics': [
    topic('License Basics', [
      'รู้จัก Freeware, Trial, Paid, Subscription และ License Key/Account และควรใช้ Software ตามเงื่อนไข License'
    ].join('\n'))
  ],
  'Program Errors': [
    topic('Program Errors', [
      'อาการที่พบบ่อย:',
      '- เปิดไม่ขึ้น',
      '- Crash',
      '- ค้าง',
      '- ทำงานผิดปกติ',
      '- Error Message',
      '',
      'ให้เก็บข้อความ Error ไว้ เพราะเป็นหลักฐานที่ช่วยหาสาเหตุได้'
    ].join('\n'))
  ],
  'Repair / Reset / Reinstall': [
    topic('Repair / Reset / Reinstall', [
      'ความหมายต่างกัน:',
      '- **Repair:** พยายามซ่อมไฟล์หรือส่วนประกอบของโปรแกรมโดยยังคงข้อมูล/การตั้งค่าบางส่วน',
      '- **Reset:** คืนค่าบางส่วนของโปรแกรมตามที่ระบบกำหนด ซึ่งอาจกระทบการตั้งค่า',
      '- **Reinstall:** ถอนและติดตั้งใหม่ เหมาะเมื่อการติดตั้งเดิมเสียหรือแก้ด้วยวิธีอื่นไม่ได้',
      '',
      'เริ่มจากวิธีที่กระทบข้อมูลและการตั้งค่าน้อยก่อน เช่น Restart → ตรวจ Update → Repair → Reset → Reinstall ตามกรณี'
    ].join('\n'))
  ],
  'Post-Fix Test': [
    topic('Post-Fix Test', [
      'หลังแก้ให้เปิดโปรแกรมและทดสอบ Function ที่เคยมีปัญหา พร้อมตรวจว่าไฟล์/ข้อมูลและการตั้งค่าที่จำเป็นยังใช้งานได้'
    ].join('\n'))
  ],
  'Practical Challenge': [
    topic('Practical Challenge', [
      'Install → Configure → Update → Test → จำลองปัญหา → เก็บ Error → วิเคราะห์ Compatibility/Dependency/Setting → Repair/Reset/Reinstall → Test ซ้ำ'
    ].join('\n'))
  ],
};

const modules = [
  {
    id: 'hardware', code: 'MODULE 01', name: 'Computer Hardware', shortName: 'COMPUTER\nHARDWARE', x: 50, y: 35,
    goal: 'รู้จักอุปกรณ์คอมพิวเตอร์ หน้าที่ คุณสมบัติ/สเปก และสามารถอธิบายความแตกต่างของอุปกรณ์แต่ละชนิดได้',
    skills: hardwareSkills,
    kind: 'module'
  },
  {
    id: 'assembly', code: 'MODULE 02', name: 'Computer Assembly', shortName: 'COMPUTER\nASSEMBLY', x: 77, y: 45,
    goal: 'สามารถถอดและประกอบคอมพิวเตอร์ได้อย่างถูกต้อง ปลอดภัย และเข้าใจว่าแต่ละชิ้นส่วนเชื่อมต่อกันอย่างไร',
    structure: 'Preparation → Components → Installation → Connection → First Boot → BIOS/UEFI → Verification → Practical Challenge',
    skills: assemblySkills,
    challenge: 'ประกอบคอมพิวเตอร์หนึ่งเครื่องจากชิ้นส่วนที่กำหนด แล้วอธิบายได้ว่าชิ้นส่วนแต่ละตัวคืออะไร ต่อเข้าที่ใด ทำไมต้องต่อแบบนั้น เปิดเครื่องแล้วควรตรวจอะไร และถ้าเปิดไม่ติดจะเริ่มตรวจจากตรงไหน',
    kind: 'module'
  },
  {
    id: 'maintenance', code: 'MODULE 03', name: 'Hardware Maintenance', shortName: 'HARDWARE\nMAINTENANCE', x: 87, y: 64,
    goal: 'สามารถตรวจสอบ ดูแล ซ่อม เปลี่ยน และอัปเกรดอุปกรณ์คอมพิวเตอร์เบื้องต้นได้',
    structure: 'Inspection → Cleaning → Diagnosis → Repair → Replacement → Upgrade → Testing → Verification → Practical Challenge',
    skills: createSkills('maintenance', [
      { title: 'Inspection ก่อนลงมือ', subtopics: maintenanceSkillContent['Inspection ก่อนลงมือ'] },
      { title: 'Cleaning', subtopics: maintenanceSkillContent['Cleaning'] },
      { title: 'Cables / Connectors', subtopics: maintenanceSkillContent['Cables / Connectors'] },
      { title: 'RAM', subtopics: maintenanceSkillContent['RAM'] },
      { title: 'Storage', subtopics: maintenanceSkillContent['Storage'] },
      { title: 'CPU / Cooler', subtopics: maintenanceSkillContent['CPU / Cooler'] },
      { title: 'GPU', subtopics: maintenanceSkillContent['GPU'] },
      { title: 'PSU', subtopics: maintenanceSkillContent['PSU'] },
      { title: 'Motherboard', subtopics: maintenanceSkillContent['Motherboard'] },
      { title: 'Monitor', subtopics: maintenanceSkillContent['Monitor'] },
      { title: 'Keyboard / Mouse', subtopics: maintenanceSkillContent['Keyboard / Mouse'] },
      { title: 'Notebook Hardware', subtopics: maintenanceSkillContent['Notebook Hardware'] },
      { title: 'Replacement', subtopics: maintenanceSkillContent['Replacement'] },
      { title: 'Upgrade Hardware', subtopics: maintenanceSkillContent['Upgrade Hardware'] },
      { title: 'Upgrade แบบคิดเป็นระบบ', subtopics: maintenanceSkillContent['Upgrade แบบคิดเป็นระบบ'] },
      { title: 'Post-Repair / Post-Upgrade Test', subtopics: maintenanceSkillContent['Post-Repair / Post-Upgrade Test'] },
      { title: 'Verification', subtopics: maintenanceSkillContent['Verification'] }
    ]),
    challenge: 'รับเครื่องที่มีอาการ → Inspection → Cleaning → Diagnosis → Repair/Replace/Upgrade → Test → Verification\n\nโจทย์ควรบังคับให้ผู้เรียนอธิบายด้วยว่า **ทำไมจึงเลือกชิ้นนั้น วิธีตรวจสอบคืออะไร และหลังทำแล้วใช้หลักฐานอะไรยืนยัน**',
    kind: 'module'
  },
  {
    id: 'windows-installation', code: 'MODULE 04', name: 'Windows Installation', shortName: 'WINDOWS\nINSTALLATION', x: 70, y: 85,
    goal: 'เข้าใจกระบวนการติดตั้ง Windows ตั้งแต่การเตรียมเครื่องและสื่อการติดตั้ง ไปจนถึงการตั้งค่าหลังติดตั้งและตรวจสอบระบบ',
    structure: 'Installation Preparation → Windows Installation Media → Boot & UEFI → Windows Setup → Disk & Partition → Windows Installation → Post-Installation Setup → Installation Verification → Installation Troubleshooting → Practical Challenge',
    skills: createSkills('windows-installation', [
      { title: 'Preparation', subtopics: windowsInstallationSkillContent['Preparation'] },
      { title: 'Windows Installation Media', subtopics: windowsInstallationSkillContent['Windows Installation Media'] },
      { title: 'Bootable USB', subtopics: windowsInstallationSkillContent['Bootable USB'] },
      { title: 'Boot Menu', subtopics: windowsInstallationSkillContent['Boot Menu'] },
      { title: 'BIOS / UEFI', subtopics: windowsInstallationSkillContent['BIOS / UEFI'] },
      { title: 'Windows Setup', subtopics: windowsInstallationSkillContent['Windows Setup'] },
      { title: 'Disk / Partition', subtopics: windowsInstallationSkillContent['Disk / Partition'] },
      { title: 'Installation', subtopics: windowsInstallationSkillContent['Installation'] },
      { title: 'Post-Install', subtopics: windowsInstallationSkillContent['Post-Install'] },
      { title: 'Required Drivers', subtopics: windowsInstallationSkillContent['Required Drivers'] },
      { title: 'Verification', subtopics: windowsInstallationSkillContent['Verification'] },
      { title: 'Common Troubleshooting', subtopics: windowsInstallationSkillContent['Common Troubleshooting'] },
    ]),
    challenge: 'Preparation → Boot Drive → Boot/UEFI → Windows Setup → Partition → Installation → Configuration → Verification → Troubleshooting',
    kind: 'module'
  },
  {
    id: 'operating-system-driver', code: 'MODULE 05', name: 'Operating System & Driver', shortName: 'OPERATING SYSTEM &\nDRIVER', x: 50, y: 94,
    goal: 'เข้าใจหน้าที่ของระบบปฏิบัติการ และสามารถจัดการ Driver และอุปกรณ์ใน Windows ได้',
    structure: 'Operating System Fundamentals → Windows Management → System Configuration → Driver → Device Manager → Update/Install/Rollback → Verification → Troubleshooting → Practical Challenge',
    skills: createSkills('operating-system-driver', [
      { title: 'Operating System', subtopics: operatingSystemSkillContent['Operating System'] },
      { title: 'File / Folder', subtopics: operatingSystemSkillContent['File / Folder'] },
      { title: 'User / Permissions', subtopics: operatingSystemSkillContent['User / Permissions'] },
      { title: 'System Settings', subtopics: operatingSystemSkillContent['System Settings'] },
      { title: 'System Information', subtopics: operatingSystemSkillContent['System Information'] },
      { title: 'Driver', subtopics: operatingSystemSkillContent['Driver'] },
      { title: 'Update / Reinstall / Rollback', subtopics: operatingSystemSkillContent['Update / Reinstall / Rollback'] },
      { title: 'Device Manager', subtopics: operatingSystemSkillContent['Device Manager'] },
      { title: 'Device Error', subtopics: operatingSystemSkillContent['Device Error'] },
      { title: 'Verification', subtopics: operatingSystemSkillContent['Verification'] },
    ]),
    challenge: 'กำหนดอุปกรณ์หนึ่งตัวที่มีปัญหา แล้ว ตรวจสอบ → หาเหตุผล → จัดการ Driver → ทดสอบ → Verify',
    kind: 'module'
  },
  {
    id: 'software', code: 'MODULE 06', name: 'Software', shortName: 'SOFTWARE', x: 30, y: 85,
    goal: 'สามารถติดตั้ง ตั้งค่า อัปเดต ถอนการติดตั้ง และแก้ปัญหา Software ที่จำเป็นต่อการใช้งานคอมพิวเตอร์ได้',
    structure: 'Software Fundamentals → Application Installation → Configuration → Office/Productivity Software → Utilities → Updates → Uninstall → Troubleshooting → Practical Challenge',
    skills: createSkills('software', [
      { title: 'Software Types', subtopics: softwareSkillContent['Software Types'] },
      { title: 'Installation', subtopics: softwareSkillContent['Installation'] },
      { title: 'Compatibility / Dependency', subtopics: softwareSkillContent['Compatibility / Dependency'] },
      { title: 'Configuration', subtopics: softwareSkillContent['Configuration'] },
      { title: 'Office / Productivity', subtopics: softwareSkillContent['Office / Productivity'] },
      { title: 'Utilities', subtopics: softwareSkillContent['Utilities'] },
      { title: 'Updates', subtopics: softwareSkillContent['Updates'] },
      { title: 'Uninstall', subtopics: softwareSkillContent['Uninstall'] },
      { title: 'License Basics', subtopics: softwareSkillContent['License Basics'] },
      { title: 'Program Errors', subtopics: softwareSkillContent['Program Errors'] },
      { title: 'Repair / Reset / Reinstall', subtopics: softwareSkillContent['Repair / Reset / Reinstall'] },
      { title: 'Post-Fix Test', subtopics: softwareSkillContent['Post-Fix Test'] }
    ]),
    challenge: 'ติดตั้งและตั้งค่า Software ที่กำหนด และแก้ปัญหาเบื้องต้นเมื่อโปรแกรมเปิดไม่ได้ ทำงานผิดปกติ แจ้ง Error ต้องอัปเดต หรือต้องถอนและติดตั้งใหม่',
    kind: 'module'
  },
  {
    id: 'network', code: 'MODULE 07', name: 'Network', shortName: 'NETWORK', x: 13, y: 64,
    goal: 'เข้าใจการเชื่อมต่อเครือข่าย สามารถตั้งค่า ตรวจสอบ แก้ปัญหา และใช้งานการแชร์ทรัพยากรในระบบเครือข่ายได้',
    structure: 'Network Fundamentals → LAN & Internet → Ethernet → Wi-Fi → Network Devices → IP Address & MAC Address → Network Configuration → File & Printer Sharing → Network Troubleshooting → Network Verification → Practical Challenge',
    skills: createSkills('network', [
      {
        title: 'Network',
        subtopics: [
          topic('Network', [
            'Network คือการเชื่อมต่ออุปกรณ์เพื่อสื่อสาร แลกเปลี่ยนข้อมูล และใช้ทรัพยากรร่วมกัน'
          ].join('\n'))
        ]
      },
      {
        title: 'LAN / Internet',
        subtopics: [
          topic('LAN / Internet', [
            'LAN คือเครือข่ายภายในพื้นที่ เช่น บ้านหรือห้องเรียน ส่วน Internet เชื่อมต่อเครือข่ายต่าง ๆ เข้าด้วยกัน',
            '',
            'ดังนั้น "ต่อ Wi-Fi ได้" ไม่ได้แปลว่า "มี Internet" เสมอไป เพราะ Computer อาจเชื่อม Router ได้ แต่ Router อาจไม่มีทางออกไป Internet'
          ].join('\n'))
        ]
      },
      {
        title: 'Ethernet',
        subtopics: [
          topic('Ethernet', [
            'การเชื่อมต่อ Network ผ่านสาย ตรวจ Cable, Port, Link Status และ Adapter'
          ].join('\n'))
        ]
      },
      {
        title: 'Wi-Fi',
        subtopics: [
          topic('Wi-Fi', [
            'ตรวจ Wi-Fi, SSID, Password, Signal, Adapter และ Router/Access Point'
          ].join('\n'))
        ]
      },
      {
        title: 'Network Devices',
        subtopics: [
          topic('Network Devices', [
            '- **Router:** เชื่อมและส่ง Traffic ระหว่าง Network',
            '- **Switch:** เชื่อมอุปกรณ์ใน Network เดียวกัน',
            '- **Access Point:** ให้บริการ Wi-Fi',
            '- **Network Adapter:** ทำให้ Computer เชื่อม Network ได้'
          ].join('\n'))
        ]
      },
      {
        title: 'ภาพการไหลของข้อมูลแบบง่าย',
        subtopics: [
          topic('ภาพการไหลของข้อมูลแบบง่าย', [
            '**Computer → Network Adapter → Switch/Access Point → Router/Gateway → Internet → Server**',
            '',
            'เมื่อข้อมูลตอบกลับ จะเดินทางย้อนกลับมาที่ Computer',
            '',
            'การเข้าใจเส้นทางนี้ช่วยให้รู้ว่าถ้าเสียตรงไหนควรตรวจจุดใดก่อน'
          ].join('\n'))
        ]
      },
      {
        title: 'IP Address',
        subtopics: [
          topic('IP Address แบบเข้าใจจริง', [
            'IP Address เปรียบเหมือน "ที่อยู่" ของอุปกรณ์ใน Network เพื่อให้อุปกรณ์รู้ว่าจะส่งข้อมูลไปหาใคร',
            '',
            'ตัวอย่างในบ้าน:',
            '- Computer: `192.168.1.20`',
            '- Phone: `192.168.1.21`',
            '- Router/Gateway: `192.168.1.1`',
            '',
            'อุปกรณ์ทั้งสามอยู่ใน Network เดียวกันได้ตาม Subnet Mask ที่กำหนด'
          ].join('\n'))
        ]
      },
      {
        title: 'Subnet Mask',
        subtopics: [
          topic('Subnet Mask', [
            'Subnet Mask ช่วยบอกว่า IP ส่วนไหนใช้ระบุ Network และส่วนไหนใช้ระบุอุปกรณ์ใน Network นั้น',
            '',
            'ตัวอย่าง `255.255.255.0` หรือ `/24` ในเครือข่ายแบบทั่วไป หมายความว่าอุปกรณ์ที่อยู่ในช่วง Network เดียวกันจะมีส่วน Network เหมือนกัน และเลขท้ายใช้แยกอุปกรณ์',
            '',
            'ไม่จำเป็นต้องท่องเลขอย่างเดียว แต่ต้องเข้าใจว่า **Subnet Mask ช่วยตัดสินว่าเป้าหมายอยู่ Network เดียวกันหรือควรส่งผ่าน Gateway**'
          ].join('\n'))
        ]
      },
      {
        title: 'Default Gateway',
        subtopics: [
          topic('Default Gateway', [
            'Gateway คือจุดที่ Computer ใช้ส่งข้อมูลออกจาก Network ของตัวเองไปยัง Network อื่น',
            '',
            'เช่น Computer ต้องการเข้า Internet มักส่งข้อมูลไปที่ Router ซึ่งทำหน้าที่เป็น Default Gateway',
            '',
            'ถ้า IP ของ Computer ถูกต้องแต่ Gateway ผิดหรือไม่มี อาจคุยกับอุปกรณ์ใน Network เดียวกันได้ แต่ไป Network อื่นไม่ได้'
          ].join('\n'))
        ]
      },
      {
        title: 'DNS',
        subtopics: [
          topic('DNS', [
            'DNS ช่วยแปลงชื่อ Domain ที่มนุษย์อ่านง่าย เช่น `example.com` ให้เป็นข้อมูลที่ใช้ค้นหา Server',
            '',
            'จึงเป็นไปได้ว่า:',
            '- Ping ไป IP ได้',
            '- แต่เปิดเว็บไซต์ด้วยชื่อไม่ได้',
            '',
            'ในกรณีนี้ DNS อาจเป็นหนึ่งในจุดที่ต้องตรวจ'
          ].join('\n'))
        ]
      },
      {
        title: 'DHCP',
        subtopics: [
          topic('DHCP', [
            'DHCP เป็นระบบที่ช่วยแจกค่าการตั้งค่า Network ให้เครื่องอัตโนมัติ เช่น IP Address, Subnet Mask, Gateway และ DNS',
            '',
            'ข้อดีคือผู้ใช้ไม่ต้องกรอกค่าเองทุกเครื่อง และลดโอกาสกำหนด IP ซ้ำ'
          ].join('\n'))
        ]
      },
      {
        title: 'Static IP',
        subtopics: [
          topic('Static IP', [
            'Static IP คือการกำหนดค่า IP เอง ต้องกำหนดให้ถูกทั้ง IP, Subnet Mask, Gateway และ DNS ตาม Network ที่ใช้งาน',
            '',
            'ถ้ากำหนดผิดอาจเกิด IP ซ้ำ, ติดต่อ Gateway ไม่ได้ หรือออก Internet ไม่ได้'
          ].join('\n'))
        ]
      },
      {
        title: 'MAC Address',
        subtopics: [
          topic('MAC Address', [
            'MAC Address เป็น Address ของ Network Interface ในระดับ Link Layer โดย Computer หนึ่งเครื่องอาจมีหลาย Interface และแต่ละ Interface อาจมี MAC ของตัวเอง'
          ].join('\n'))
        ]
      },
      {
        title: 'Network Configuration',
        subtopics: [
          topic('Network Configuration', [
            'จำความสัมพันธ์นี้:',
            '',
            '**IP = ที่อยู่เครื่อง → Subnet Mask = ขอบเขต Network → Gateway = ทางออกไป Network อื่น → DNS = ช่วยค้นหาที่อยู่จากชื่อ**',
            '',
            'DHCP มักแจกค่าทั้งหมดให้อัตโนมัติ ส่วน Static IP ต้องกำหนดเอง'
          ].join('\n'))
        ]
      },
      {
        title: 'File Sharing',
        subtopics: [
          topic('File Sharing', [
            'ทำให้ Computer อื่นเข้าถึง Folder ผ่าน Network ได้ ต้องตั้ง Sharing และ Permission ให้ถูกต้อง'
          ].join('\n'))
        ]
      },
      {
        title: 'Printer Sharing',
        subtopics: [
          topic('Printer Sharing', [
            'แชร์ Printer ผ่าน Network โดยตรวจ Printer, Sharing, Permission, Network และ Driver'
          ].join('\n'))
        ]
      },
      {
        title: 'Troubleshooting',
        subtopics: [
          topic('Troubleshooting', [
            'ใช้ลำดับ:',
            '',
            '**Adapter → Connection → IP → Gateway → DNS → Router → Internet**'
          ].join('\n'))
        ]
      },
      {
        title: 'กรณี Wi-Fi ต่อได้แต่ Internet ไม่ได้',
        subtopics: [
          topic('กรณี Wi-Fi ต่อได้แต่ Internet ไม่ได้', [
            '1. ตรวจ Adapter',
            '2. ตรวจ SSID/Connection',
            '3. ตรวจ IP',
            '4. ตรวจ Subnet Mask',
            '5. ตรวจ Gateway',
            '6. ทดสอบการติดต่อภายใน Network',
            '7. ตรวจ DNS',
            '8. ตรวจ Router',
            '9. ทดสอบ Internet',
            '',
            'ลำดับนี้ช่วยแยกปัญหาจากระดับเครื่องไปยังเครือข่ายภายนอก แทนการเดาสุ่ม'
          ].join('\n'))
        ]
      },
      {
        title: 'Verification',
        subtopics: [
          topic('Verification', [
            'ตรวจ Connection, IP, Subnet Mask, Gateway และ DNS แล้วทดสอบ Network, Website หรือ File/Printer Sharing ตามกรณี'
          ].join('\n'))
        ]
      }
    ]),
    principle: 'Connect → Configure → Communicate → Troubleshoot → Verify',
    challenge: 'กรณีเครื่องเชื่อมต่อ Wi-Fi ได้แต่ใช้งาน Internet ไม่ได้ ให้ตรวจสอบตั้งแต่: Network Adapter → Connection → IP Address → Gateway → DNS → Router → Internet → Verify',
    kind: 'module'
  },
  {
    id: 'troubleshooting', code: 'MODULE 08', name: 'Troubleshooting', shortName: 'TROUBLESHOOTING', x: 23, y: 45,
    goal: 'สามารถวิเคราะห์และแก้ปัญหาคอมพิวเตอร์อย่างเป็นระบบ โดยนำความรู้จาก Module 1–7 มาใช้ร่วมกัน',
    structure: 'Troubleshooting Fundamentals → Problem Identification → Information Gathering → Hypothesis & Diagnosis → Testing & Isolation → Hardware Troubleshooting → Windows & Driver Troubleshooting → Software Troubleshooting → Network Troubleshooting → Solution & Verification → Practical Challenge',
    skills: createSkills('troubleshooting', [
      { title: 'Fundamentals', subtopics: troubleshootingSkillContent['Fundamentals'] },
      { title: 'Problem Identification', subtopics: troubleshootingSkillContent['Problem Identification'] },
      { title: 'Information Gathering', subtopics: troubleshootingSkillContent['Information Gathering'] },
      { title: 'Hypothesis / Diagnosis', subtopics: troubleshootingSkillContent['Hypothesis / Diagnosis'] },
      { title: 'Testing / Isolation', subtopics: troubleshootingSkillContent['Testing / Isolation'] },
      { title: 'Hardware Troubleshooting', subtopics: troubleshootingSkillContent['Hardware Troubleshooting'] },
      { title: 'Windows / Driver', subtopics: troubleshootingSkillContent['Windows / Driver'] },
      { title: 'Software', subtopics: troubleshootingSkillContent['Software'] },
      { title: 'Network', subtopics: troubleshootingSkillContent['Network'] },
      { title: 'Solution / Verification', subtopics: troubleshootingSkillContent['Solution / Verification'] }
    ]),
    principle: 'อย่าเดา → หาหลักฐาน → ทดสอบ → ตัดสาเหตุ → แก้ → ทดสอบอีกครั้ง',
    challenge: '1. PC เปิดไม่ติด  2. Windows Boot ไม่ได้  3. Device Manager มีอุปกรณ์ผิดปกติ  4. โปรแกรมเปิดไม่ได้  5. ต่อ Wi-Fi ได้แต่ Internet ไม่ได้  6. Final Challenge: ให้เครื่องคอมพิวเตอร์หนึ่งเครื่องที่มีปัญหาโดยไม่บอกสาเหตุ แล้ววิเคราะห์ตั้งแต่ต้นจนจบ พร้อมอธิบายเหตุผลของแต่ละขั้นตอน',
    extra: {
      groups: [
        { title: 'Problem Identification', items: ['อะไรมีปัญหา', 'ปัญหาเกิดตรงไหน', 'เกิดเมื่อไหร่', 'เกิดตลอดหรือบางครั้ง', 'ก่อนเกิดปัญหามีการเปลี่ยนแปลงอะไรหรือไม่'] },
        { title: 'Information Gathering', items: ['ผู้ใช้งาน', 'Error Message', 'ไฟสถานะ', 'เสียงผิดปกติ', 'Device Manager', 'Event / Log', 'BIOS/UEFI', 'Network Settings', 'การเปลี่ยนแปลงล่าสุด'] },
        { title: 'ข้อควรระวัง', items: ['ไม่ควรเปลี่ยนหลายอย่างพร้อมกัน เพราะจะทำให้ไม่รู้ว่าการเปลี่ยนแปลงใดทำให้ปัญหาหายหรือเปลี่ยนไป'] }
      ],
      flows: [
        { label: 'เปิดเครื่องแล้วไม่มีภาพ', steps: ['Monitor', 'Cable', 'GPU', 'RAM', 'Motherboard', 'PSU'] },
        { label: 'PC เปิดไม่ติด', steps: ['ตรวจ PSU', 'ตรวจ Power Connector', 'ตรวจ RAM', 'ทดสอบทีละส่วน'] },
        { label: 'Windows Boot ไม่ได้', steps: ['Hardware', 'Boot Device', 'UEFI', 'Windows Recovery', 'Startup Repair', 'Recovery / Reinstall'] },
        { label: 'Hardware ใช้งานไม่ได้', steps: ['Device Manager', 'Device Status', 'Error Code', 'Driver', 'Update / Reinstall / Rollback', 'Test'] },
        { label: 'โปรแกรมมีปัญหา', steps: ['ระบุอาการ', 'Restart', 'ตรวจ Update', 'ตรวจ Compatibility', 'ตรวจ Permission', 'Repair', 'Reset', 'Reinstall', 'Verify'] },
        { label: 'Internet ใช้ไม่ได้', steps: ['Physical Connection', 'Network Adapter', 'IP Address', 'Gateway', 'DNS', 'Router', 'Internet'] }
      ],
      hardware: ['เปิดไม่ติด: Power, PSU, Power Cable, 24-pin, CPU Power, Power Button, Motherboard', 'เปิดติดแต่ไม่มีภาพ: Monitor, Display Cable, Input Source, GPU, RAM, Display Output', 'เครื่องร้อน: CPU Cooler, Fan, Thermal Paste, Airflow, Dust'],
      notes: ['ปัญหาโปรแกรมไม่ได้แปลว่า Software เป็นสาเหตุเสมอไป อาจมาจาก Windows, Driver, Hardware หรือ Network', 'ต้องแยกให้ออกระหว่าง Wi-Fi Connection มีปัญหา กับ Internet Connection มีปัญหา', 'Problem → Diagnosis → Solution → Test → Verify', 'หลังแก้ต้องตรวจว่า: อาการเดิมหายหรือไม่, Hardware ทำงานหรือไม่, Windows ทำงานหรือไม่, Software ทำงานหรือไม่, Network ทำงานหรือไม่, Restart แล้วปัญหากลับมาหรือไม่'],
      cases: [
        { title: 'PC เปิดไม่ติด', content: [
          '### อาการ',
          'กด Power แล้วเครื่องไม่มีอาการ หรือไม่มีพัดลม/ไฟตอบสนอง',
          '',
          '### Possible Causes',
          'Power, PSU Switch, Power Cable, 24-pin, CPU Power, Front Panel หรือ PSU/Motherboard',
          '',
          '### วิธีตรวจ',
          '**Power → PSU Switch → Power Cable → 24-pin → CPU Power → Front Panel Power Switch → PSU → Motherboard**',
          '',
          '### การตีความ',
          'ถ้าไฟเข้าระบบแต่กดแล้วไม่ทำงาน อาจต้องตรวจ Front Panel หรือ PSU ต่อ ถ้าสายหลวมแล้วเสียบใหม่และเครื่องกลับมาได้ หลักฐานชี้ไปที่ Connection มากกว่าอะไหล่เสีย',
          '',
          '### Verification',
          'กดเปิดซ้ำหลายครั้ง ตรวจ Boot และทดสอบการทำงานจริง',
        ].join('\n') },
        { title: 'เปิดเครื่องแต่ไม่มีภาพ', content: [
          '### อาการ',
          'เครื่องเปิด พัดลมทำงาน แต่ Monitor ขึ้น No Signal หรือไม่มีภาพ',
          '',
          '### Possible Causes',
          'Monitor, Input Source, Display Cable, Port, GPU, RAM, BIOS/UEFI หรือ Graphics',
          '',
          '### วิธีตรวจ',
          '**Monitor Power → Input → Display Cable → Port → GPU → RAM → BIOS/UEFI → Integrated Graphics ถ้ามี**',
          '',
          '### การตีความ',
          'ถ้าสลับสายหรือ Input แล้วภาพกลับมา แสดงว่าปัญหาอยู่ที่เส้นทางการแสดงผล ไม่จำเป็นต้องเปลี่ยน GPU',
          '',
          '### Verification',
          'เข้า Windows และทดสอบภาพ/Resolution/Refresh Rate',
        ].join('\n') },
        { title: 'Windows Boot ไม่ได้', content: [
          '### อาการ',
          'เปิดเครื่องได้แต่เข้า Windows ไม่สำเร็จ',
          '',
          '### Possible Causes',
          'Storage Detection, Boot Order, Boot Configuration, Windows, Storage Health หรือ Hardware ที่เพิ่งเปลี่ยน',
          '',
          '### วิธีตรวจ',
          '**Storage Detection → Boot Order → Boot Configuration → Windows Recovery → Storage Health → Hardware ที่เพิ่งเปลี่ยน**',
          '',
          '### การตีความ',
          'ถ้า BIOS/UEFI ยังไม่เห็น Storage ควรตรวจ Hardware/Connection ก่อน เพราะ Windows ไม่สามารถแก้ปัญหา Drive ที่ BIOS ยังมองไม่เห็นได้',
          '',
          '### Verification',
          'Boot เข้า Windows ได้และตรวจ Storage/Device Manager',
        ].join('\n') },
        { title: 'Hardware ใช้งานไม่ได้', content: [
          '### อาการ',
          'อุปกรณ์บางชิ้นทำงานไม่ได้ แม้ตัวเครื่องเปิดปกติ',
          '',
          '### วิธีตรวจ',
          '**Connection → Power → Device Manager → Driver → Windows Settings → Port/เครื่องอื่น**',
          '',
          '### การตีความ',
          'ถ้า Device Manager มี Error ให้ใช้ข้อมูลนั้นเป็นหลักฐานก่อนเปลี่ยน Hardware',
          '',
          '### Verification',
          'อุปกรณ์ต้องทำงานจริง ไม่ใช่แค่หายจาก Error ใน Device Manager',
        ].join('\n') },
        { title: 'โปรแกรมเปิดไม่ได้', content: [
          '### อาการ',
          'กดเปิดแล้วไม่ขึ้น Crash หรือมี Error',
          '',
          '### วิธีตรวจ',
          '**Error Message → Compatibility → Dependency → Update → Permission → Repair → Reset → Reinstall**',
          '',
          '### การตีความ',
          'ถ้า Repair แล้วเปิดได้ แสดงว่าปัญหาอาจอยู่ที่ไฟล์หรือส่วนประกอบของโปรแกรม ไม่จำเป็นต้อง Reinstall ทันที',
          '',
          '### Verification',
          'เปิดโปรแกรมและทดสอบ Function ที่เคยมีปัญหา',
        ].join('\n') },
        { title: 'Internet ใช้ไม่ได้', content: [
          '### อาการ',
          'Computer ต่อ Wi-Fi หรือสายได้ แต่เข้า Internet ไม่ได้',
          '',
          '### วิธีตรวจ',
          '**Network Adapter → Connection → IP → Subnet Mask → Gateway → DNS → Router → Internet Service**',
          '',
          '### การตีความ',
          'ถ้าได้ IP แต่ไม่มี Gateway อาจออกจาก Network ไม่ได้ ถ้า Gateway ใช้ได้แต่ชื่อเว็บไซต์แก้ไม่ได้ อาจต้องตรวจ DNS ถ้าหลายเครื่องใช้ Internet ไม่ได้พร้อมกัน ควรตรวจ Router/Internet Service ด้วย',
          '',
          '### Verification',
          'ทดสอบการเชื่อมต่อและเปิด Website หรือใช้บริการ Network ที่ต้องการจริง',
        ].join('\n') },
      ],
      finalChallenge: [
        'รับ Computer ที่มีปัญหาโดยไม่รู้สาเหตุ แล้วทำ:',
        '',
        '1. รับอาการ',
        '2. ระบุ Problem',
        '3. เก็บข้อมูล',
        '4. ตั้ง Hypothesis',
        '5. เลือกวิธี Test',
        '6. ทดสอบทีละสาเหตุ',
        '7. แยกสาเหตุ',
        '8. แก้ไข',
        '9. ทดสอบอาการเดิมอีกครั้ง',
        '10. ตรวจระบบส่วนอื่น',
        '11. ยืนยันว่าเครื่องกลับมาใช้งานได้',
        '',
        'สิ่งที่ต้องแสดงไม่ใช่แค่ "แก้ได้" แต่ต้องอธิบายได้ว่า:',
        '',
        '**อาการคืออะไร → หลักฐานคืออะไร → คิดว่าสาเหตุคืออะไร → ทดสอบอย่างไร → ผลเป็นอย่างไร → แก้อย่างไร → ยืนยันผลอย่างไร**'
      ].join('\n')
    },
    kind: 'module'
  }
];

const moduleById = new Map(modules.map((module) => [module.id, module]));
const itemById = new Map([...modules, ...modules.flatMap((module) => module.skills)].map((item) => [item.id, item]));
const state = { selectedModule: null, hasRendered: false, currentPage: null };
const appRoot = document.getElementById('app-root');
const bootScreen = document.getElementById('boot-screen');

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
}

function formatNodeLabel(label) {
  return escapeHTML(label).replace(/\n/g, '<br>');
}

function listMarkup(items, className = '') {
  return `<ul class="detail-list ${className}">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
}

function sequenceMarkup(value) {
  const parts = value.split(' → ');
  return `<ol class="sequence">${parts.map((part) => `<li><span>${escapeHTML(part)}</span></li>`).join('')}</ol>`;
}

function sectionMarkup(number, title, body, extraClass = '') {
  return `<section class="detail-section ${extraClass}">
    <h2><span>${number} //</span> ${escapeHTML(title)}</h2>
    <div class="section-rule"></div>
    ${body}
  </section>`;
}

function introPage() {
  return `<section class="page intro-page" aria-labelledby="intro-title">
    <div class="intro-shell">
      <p class="eyebrow">SYSTEM // PERSONAL COMPUTER LEARNING</p>
      <h1 class="intro-title" id="intro-title">Computer<br>Learning System</h1>
      <p class="intro-lead">ระบบการเรียนรู้คอมพิวเตอร์ส่วนบุคคลที่จัดองค์ความรู้เป็น Skill Tree เพื่อให้เรียนจากภาพรวมของระบบไปสู่ทักษะที่นำไปปฏิบัติได้จริง</p>
      <div class="hairline"></div>
      <section class="intro-profile" aria-label="ข้อมูลผู้เรียน">
        <div class="profile-item">
          <span class="technical-label">LEARNER</span>
          <p>นายนรภัทร ศรีสมุทร</p>
        </div>
        <div class="profile-item">
          <span class="technical-label">SUBJECT / GOAL</span>
          <p>การใช้งานระบบปฏิบัติการ<br>เตรียมความพร้อมสำหรับการสอบปฏิบัติ</p>
        </div>
      </section>
      <div class="intro-content">
        <section class="intro-section">
          <h2><span>01 //</span>CONCEPT</h2>
          <p>ผมมองว่าความรู้เกี่ยวกับคอมพิวเตอร์แต่ละส่วนไม่ได้แยกออกจากกัน แต่เชื่อมโยงและทำงานร่วมกันเป็นระบบเดียว ตั้งแต่ฮาร์ดแวร์ การประกอบและดูแลรักษา ระบบปฏิบัติการ ไดรเวอร์ ซอฟต์แวร์ เครือข่าย ไปจนถึงการแก้ไขปัญหา ดังนั้นการเรียนรู้จึงควรมองเห็นทั้งภาพรวมของระบบ และความสัมพันธ์ของแต่ละส่วนก่อนเจาะลึกลงไปในรายละเอียด</p>
        </section>
        <section class="intro-section">
          <h2><span>02 //</span>ORIGIN</h2>
          <p>เว็บไซต์นี้เกิดจากการได้รับโจทย์ให้ศึกษาความรู้เกี่ยวกับคอมพิวเตอร์ด้วยตนเอง ผมจึงนำเนื้อหาที่ต้องเรียนมาจัดระเบียบใหม่ โดยมองเนื้อหาทั้งหมดเป็นระบบเดียวกัน และนำมาแบ่งออกเป็น Module และ Skill เพื่อให้เห็นเส้นทางการเรียนรู้จากภาพรวมไปสู่ทักษะย่อยอย่างเป็นขั้นตอน</p>
        </section>
        <section class="intro-section">
          <h2><span>03 //</span>LEARNING APPROACH</h2>
          <p>ผมจัดเนื้อหาทั้งหมดเป็น Skill Tree โดยเริ่มจากภาพรวมของ Computer System แล้วแตกออกเป็นแต่ละ Module และ Skill ย่อย เพื่อให้เห็นความสัมพันธ์ของความรู้แต่ละส่วน สามารถเลือกเรียนจากหัวข้อที่ต้องการ และเจาะลึกลงไปถึงรายละเอียด รวมถึงนำความรู้ไปฝึกปฏิบัติจริง</p>
          <p>แนวคิดนี้ช่วยให้การเรียนไม่ได้เป็นเพียงการจำข้อมูลแยกเป็นเรื่อง ๆ แต่เป็นการเข้าใจว่าคอมพิวเตอร์แต่ละส่วนทำงานร่วมกันอย่างไร</p>
        </section>
        <section class="intro-section">
          <h2><span>04 //</span>PRIMARY GOAL</h2>
          <p>เว็บไซต์นี้สร้างขึ้นเพื่อเป็นพื้นที่สำหรับการเรียนรู้ด้วยตนเอง โดยรวบรวมความรู้ที่จำเป็นในการใช้งานและดูแลระบบคอมพิวเตอร์ จัดเรียงเป็นเส้นทางการเรียนรู้ที่สามารถศึกษาและฝึกปฏิบัติได้จริง เพื่อเตรียมความพร้อมสำหรับการสอบทั้งด้านความรู้และการปฏิบัติ</p>
        </section>
      </div>
      <div class="intro-actions">
        <a class="primary-button" href="#skill-tree" data-route="skill-tree">ACCESS SKILL TREE <span class="button-arrow" aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>`;
}

function treeNode(item, type) {
  const nodeClass = type === 'module' ? 'module' : 'skill-node';
  const action = type === 'module' ? `data-select-module="${item.id}"` : `data-open-detail="${item.id}"`;
  const visibility = '';
  const label = type === 'module' ? item.shortName : item.shortName;
  return `<button class="tree-node ${nodeClass}" id="node-${item.id}" type="button" style="--x:${item.x}%; --y:${item.y}%;" ${action} ${visibility} aria-label="${escapeHTML(item.title || item.name)}">
    <span class="node-name">${formatNodeLabel(label)}</span>
  </button>`;
}

function selectedModuleSkills() {
  if (!state.selectedModule || state.selectedModule === 'overview') return [];
  return moduleById.get(state.selectedModule)?.skills || [];
}

function focusPanelMarkup() {
  if (state.selectedModule === null) return '';

  if (state.selectedModule === 'overview') {
    return `<div class="tree-focus" id="tree-focus">
      <div>
        <span class="section-kicker">KNOWLEDGE MAP / OVERVIEW</span>
        <h2>COMPUTER SYSTEM</h2>
        <p>คอมพิวเตอร์เป็นระบบที่เกิดจากการทำงานร่วมกันของหลายส่วน ได้แก่ ฮาร์ดแวร์ การประกอบ การดูแลรักษา ระบบปฏิบัติการ ไดรเวอร์ ซอฟต์แวร์ และเครือข่าย แต่ละส่วนมีหน้าที่แตกต่างกันและต้องทำงานร่วมกันเพื่อให้คอมพิวเตอร์สามารถทำงานได้</p>
      </div>
    </div>`;
  }

  const module = itemById.get(state.selectedModule);
  const structure = module.structure ? `<div class="path-line">${module.structure.split(' → ').map((part) => `<span>${escapeHTML(part)}</span>`).join('')}</div>` : '';
  return `<div class="tree-focus" id="tree-focus">
    <div>
      <span class="section-kicker">${escapeHTML(module.code)} / ${module.skills.length} SKILLS</span>
      <h2>${escapeHTML(module.name)}</h2>
      <p>${escapeHTML(module.goal)}</p>
      ${structure}
      <div class="path-line"><span>เลือก Skill Node เพื่อเปิดรายละเอียด</span></div>
    </div>
    <button class="outline-button" type="button" data-open-detail="${module.id}">OPEN MODULE DETAIL <span class="button-arrow" aria-hidden="true">→</span></button>
  </div>`;
}

function treePage() {
  return `<section class="page tree-page" aria-labelledby="tree-title">
    <header class="tree-heading">
      <div>
        <p class="eyebrow">SYSTEM MAP // 08 MODULES</p>
        <h1 class="page-title" id="tree-title">Skill Tree</h1>
      </div>
      <p>เลือก Module เพื่อเปิดเส้นทางการเรียนรู้ หรือเลือก Skill ภายใน Computer Hardware เพื่ออ่านรายละเอียดตามข้อมูลที่จัดเตรียมไว้</p>
    </header>
    <div class="tree-key" aria-label="คำอธิบายสัญลักษณ์">
      <span><i class="key-root"></i> COMPUTER SYSTEM</span>
      <span><i></i> MODULE</span>
      <span><i class="key-active"></i> SELECTED / OPEN</span>
    </div>
    <div class="tree-viewport" aria-label="แผนผัง Skill Tree เลื่อนเพื่อสำรวจได้">
      <div class="tree-stage ${state.selectedModule && state.selectedModule !== 'overview' ? 'skills-open' : ''}" id="tree-stage">
        <svg class="tree-lines" id="tree-lines" aria-hidden="true"></svg>
        <button class="tree-node root" id="node-system-root" type="button" style="--x:50%; --y:65%;" data-select-root aria-label="Computer System">
          <span class="node-name">COMPUTER<br>SYSTEM</span>
        </button>
        ${modules.map((module) => treeNode(module, 'module')).join('')}
        <div id="tree-skill-slot">${selectedModuleSkills().map((skill) => treeNode(skill, 'skill')).join('')}</div>
      </div>
    </div>
    <div id="tree-focus-slot">${focusPanelMarkup()}</div>
  </section>`;
}

function relatedMarkup(item) {
  const module = moduleById.get(item.parent);
  const related = item.kind === 'skill'
    ? module.skills.filter((skill) => skill.id !== item.id)
    : modules.filter((relatedModule) => relatedModule.id !== item.id);
  const label = item.kind === 'skill' ? `RELATED ${module.name.toUpperCase()}` : 'RELATED MODULES';
  return `<aside class="related-panel" aria-label="หัวข้อที่เกี่ยวข้อง">
    <h2>${label}</h2>
    <nav class="related-list">
      ${related.map((relatedItem) => `<a href="#skill-detail/${relatedItem.id}" data-open-detail="${relatedItem.id}">${escapeHTML(relatedItem.title || relatedItem.name)}</a>`).join('')}
    </nav>
  </aside>`;
}

function extraTroubleshootingMarkup(extra) {
  const grouped = `<div class="two-column-list">${extra.groups.map((group) => `<div><p class="technical-label">${escapeHTML(group.title)}</p>${listMarkup(group.items)}</div>`).join('')}</div>`;
  const flows = extra.flows.map((flow) => `<div class="detail-section"><p class="technical-label">${escapeHTML(flow.label)}</p><div class="section-rule"></div>${sequenceMarkup(flow.steps.join(' → '))}</div>`).join('');
  const hardware = listMarkup(extra.hardware);
  const notes = listMarkup(extra.notes);

  const casesHtml = extra.cases ? `<div class="detail-topics">${extra.cases.map(c =>
    `<section class="detail-topic">
      <h3>${escapeHTML(c.title)}</h3>
      <p>${escapeHTML(c.content).replace(/\n/g, '<br>')}</p>
    </section>`
  ).join('')}</div>` : '';

  const finalChallengeHtml = extra.finalChallenge ? `<p>${escapeHTML(extra.finalChallenge).replace(/\n/g, '<br>')}</p>` : '';

  return `${sectionMarkup('05', 'การระบุปัญหาและเก็บข้อมูล', grouped)}
    <section class="detail-section"><h2><span>06 //</span> ลำดับการวิเคราะห์ตัวอย่าง</h2><div class="section-rule"></div><div class="detail-sections" style="margin-top:0">${flows}</div></section>
    ${sectionMarkup('07', 'Hardware Troubleshooting', hardware)}
    ${sectionMarkup('08', 'Solution & Verification', notes)}
    ${casesHtml ? sectionMarkup('09', 'Practical Troubleshooting Cases', casesHtml, 'detail-topics-section') : ''}
    ${finalChallengeHtml ? sectionMarkup('10', 'Final Practical Challenge', finalChallengeHtml) : ''}`;
}

function detailedTopicsMarkup(topics) {
  return topics.map((topic, index) => {
    const content = Array.isArray(topic.content) ? topic.content : [topic.content];
    return `<section class="detail-topic">
      <h3><span>${String(index + 1).padStart(2, '0')} //</span> ${escapeHTML(topic.title)}</h3>
      ${content.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}
    </section>`;
  }).join('');
}

function detailPage(item) {
  if (!item) return missingPage();

  const isDetailedSkill = item.kind === 'skill' && (item.parent === 'hardware' || item.parent === 'assembly' || item.parent === 'maintenance' || item.parent === 'windows-installation' || item.parent === 'operating-system-driver' || item.parent === 'software' || item.parent === 'network' || item.parent === 'troubleshooting');
  let sections = '';
  let meta = item.code;
  let summary = item.goal || item.summary || `Skill in Module ${moduleById.get(item.parent)?.name || ''}`;
  const detailSource = isDetailedSkill ? `CONTENT SOURCE // CONTENT PACK 0${item.parent === 'hardware' ? '1 — MODULE 1' : (item.parent === 'assembly' ? '2 — MODULE 2' : (item.parent === 'maintenance' ? '3 — MODULE 3' : (item.parent === 'windows-installation' ? '4 — MODULE 4' : (item.parent === 'operating-system-driver' ? '5 — MODULE 5' : (item.parent === 'software' ? '6 — MODULE 6' : (item.parent === 'network' ? '7 — MODULE 7' : '8 — MODULE 8'))))))}` : 'CONTENT SOURCE // MASTER_CONTENT.md';

  if (isDetailedSkill) {
    summary = item.subtopics[0]?.content || summary;
    sections = `${sectionMarkup('01', 'Module', `<p>${moduleById.get(item.parent)?.name}</p>`)}
      <section class="detail-section detail-topics-section">
        <h2><span>02 //</span> Subtopics & Detailed Content</h2>
        <div class="section-rule"></div>
        <div class="detail-topics">${detailedTopicsMarkup(item.subtopics)}</div>
      </section>`;
  } else if (item.kind === 'skill') {
    const module = moduleById.get(item.parent);
    const subtopics = item.subtopics.length
      ? listMarkup(item.subtopics)
      : '<p class="empty-status">NO SUBTOPICS CONFIGURED YET.</p>';
    sections = `${sectionMarkup('01', 'Module', `<p>${escapeHTML(module.name)}</p>`)}
      ${sectionMarkup('02', 'Subtopics', subtopics)}
      ${sectionMarkup('03', 'Detailed Content', '<p class="empty-status">DETAILED CONTENT WILL BE ADDED IN A FUTURE UPDATE.</p>', 'empty-section')}`;
  } else if (item.id === 'hardware') {
    sections = `${sectionMarkup('01', 'เป้าหมายการเรียนรู้', `<p>${escapeHTML(item.goal)}</p>`)}
      ${sectionMarkup('02', 'Hardware Skills 15 ชิ้น', listMarkup(item.skills.map((skill) => skill.title), 'two-column-list'))}
      ${sectionMarkup('03', 'ขอบเขตข้อมูลของอุปกรณ์แต่ละชิ้น', `<p>หัวข้ออุปกรณ์แต่ละชิ้นจะจัดเนื้อหาตามกรอบต่อไปนี้</p><div class="section-rule"></div>${listMarkup(hardwareCoverage, 'two-column-list')}`)}`;
  } else {
    const principle = item.principle ? sectionMarkup('03', 'หลักสำคัญ', `<p>${escapeHTML(item.principle)}</p>`) : '';
    const skillNumber = item.principle ? '04' : '03';
    const challengeNumber = item.principle ? '05' : '04';
    sections = `${sectionMarkup('01', 'เป้าหมายการเรียนรู้', `<p>${escapeHTML(item.goal)}</p>`)}
      ${sectionMarkup('02', 'โครงสร้างการเรียนรู้', sequenceMarkup(item.structure))}
      ${principle}
      ${sectionMarkup(skillNumber, 'ทักษะหลัก', listMarkup(item.skills.map((skill) => skill.title), 'two-column-list'))}
      ${sectionMarkup(challengeNumber, 'Practical Challenge', `<p>${escapeHTML(item.challenge)}</p>`)}
      ${item.id === 'troubleshooting' ? extraTroubleshootingMarkup(item.extra) : ''}`;
  }

  return `<section class="page detail-page" aria-labelledby="detail-title">
    <a class="detail-back" href="#skill-tree" data-route="skill-tree"><span aria-hidden="true">←</span> BACK TO SKILL TREE</a>
    <div class="detail-layout">
      ${relatedMarkup(item)}
      <article class="detail-content">
        <div class="detail-meta">${escapeHTML(meta)}</div>
        <h1 class="detail-title" id="detail-title">Skill Detail:<br>${escapeHTML(item.title || item.name)}</h1>
        <p class="detail-summary">${escapeHTML(summary)}</p>
        <span class="detail-source">${detailSource}</span>
        <div class="detail-sections">${sections}</div>
      </article>
    </div>
  </section>`;
}

function missingPage() {
  return `<section class="page error-page"><div class="error-card"><p class="eyebrow">CONTENT STATUS // NOT FOUND</p><h1>ไม่พบหัวข้อที่เลือก</h1><p>ไม่สามารถเปิดเนื้อหานี้ได้ กรุณากลับไปเลือกหัวข้อจาก Skill Tree</p><a class="primary-button" href="#skill-tree" data-route="skill-tree">BACK TO SKILL TREE <span class="button-arrow" aria-hidden="true">→</span></a></div></section>`;
}

function getRoute() {
  const path = window.location.hash.replace(/^#/, '');
  if (!path || path === 'introduction') return { page: 'introduction' };
  if (path === 'skill-tree') return { page: 'skill-tree' };
  if (path.startsWith('skill-detail/')) return { page: 'detail', id: path.slice('skill-detail/'.length) };
  return { page: 'missing' };
}

function updateNavigation(route) {
  const active = route.page === 'introduction' ? 'introduction' : 'skill-tree';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.toggleAttribute('aria-current', link.dataset.route === active);
    if (link.dataset.route !== active) link.removeAttribute('aria-current');
  });
}

function drawConnections() {
  const stage = document.getElementById('tree-stage');
  const svg = document.getElementById('tree-lines');
  if (!stage || !svg) return;

  const stageRect = stage.getBoundingClientRect();
  const centerOf = (id) => {
    const node = document.getElementById(`node-${id}`);
    if (!node) return null;
    const rect = node.getBoundingClientRect();
    return { x: rect.left - stageRect.left + rect.width / 2, y: rect.top - stageRect.top + rect.height / 2 };
  };
  const connections = modules.map((module) => ({ from: 'system-root', to: module.id, type: 'module' }));
  selectedModuleSkills().forEach((skill) => connections.push({ from: state.selectedModule, to: skill.id, type: 'skill' }));

  svg.setAttribute('viewBox', `0 0 ${stage.clientWidth} ${stage.clientHeight}`);
  svg.innerHTML = connections.map((connection) => {
    const from = centerOf(connection.from);
    const to = centerOf(connection.to);
    if (!from || !to) return '';
    const active = connection.to === state.selectedModule || connection.type === 'skill';
    const soft = state.selectedModule !== 'overview' && !active && connection.type === 'module';
    return `<path class="tree-edge ${connection.type === 'skill' ? 'skill-edge' : ''} ${active ? 'is-active' : ''} ${soft ? 'is-soft' : ''}" d="M ${from.x} ${from.y} L ${to.x} ${to.y}" />`;
  }).join('');
}

function updateTreeSelection() {
  const stage = document.getElementById('tree-stage');
  const focusSlot = document.getElementById('tree-focus-slot');
  if (!stage || !focusSlot) return;
  stage.classList.toggle('skills-open', Boolean(state.selectedModule && state.selectedModule !== 'overview'));
  document.querySelectorAll('.tree-node.module').forEach((node) => {
    const selected = node.id === `node-${state.selectedModule}`;
    node.classList.toggle('is-selected', selected);
    node.setAttribute('aria-pressed', String(selected));
  });
  const skillSlot = document.getElementById('tree-skill-slot');
  if (skillSlot) skillSlot.innerHTML = selectedModuleSkills().map((skill) => treeNode(skill, 'skill')).join('');
  document.getElementById('node-system-root')?.setAttribute('aria-pressed', String(state.selectedModule === 'overview'));
  focusSlot.innerHTML = focusPanelMarkup();
  drawConnections();
}

function resetPageScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function renderRoute() {
  const route = getRoute();
  const previousPage = state.currentPage;
  if (route.page === 'skill-tree' && previousPage && previousPage !== 'detail' && previousPage !== 'skill-tree') {
    state.selectedModule = null;
  }
  state.currentPage = route.page;
  resetPageScroll();
  updateNavigation(route);
  if (route.page === 'detail') {
    const item = itemById.get(route.id);
    if (item?.kind === 'skill') state.selectedModule = item.parent;
    if (item?.kind === 'module') state.selectedModule = item.id;
  }

  const render = () => {
    if (route.page === 'introduction') appRoot.innerHTML = introPage();
    else if (route.page === 'skill-tree') appRoot.innerHTML = treePage();
    else if (route.page === 'detail') appRoot.innerHTML = detailPage(itemById.get(route.id));
    else appRoot.innerHTML = missingPage();
    appRoot.classList.remove('is-leaving');
    requestAnimationFrame(() => {
      resetPageScroll();
      if (route.page === 'skill-tree') updateTreeSelection();
      else drawConnections();
    });
    state.hasRendered = true;
  };

  if (state.hasRendered) {
    appRoot.classList.add('is-leaving');
    window.setTimeout(render, 175);
  } else {
    render();
  }
}

function openDetail(id) {
  const item = itemById.get(id);
  if (!item) {
    window.location.hash = 'missing';
    return;
  }
  if (item.kind === 'skill') state.selectedModule = item.parent;
  if (item.kind === 'module') state.selectedModule = item.id;
  const selectedNode = document.getElementById(`node-${id}`);
  selectedNode?.classList.add('is-selected');
  window.setTimeout(() => { window.location.hash = `skill-detail/${id}`; }, 160);
}

document.addEventListener('click', (event) => {
  const routeLink = event.target.closest('[data-route]');
  if (routeLink) {
    event.preventDefault();
    window.location.hash = routeLink.dataset.route;
    return;
  }
  const moduleButton = event.target.closest('[data-select-module]');
  if (moduleButton) {
    state.selectedModule = moduleButton.dataset.selectModule;
    updateTreeSelection();
    return;
  }
  const rootButton = event.target.closest('[data-select-root]');
  if (rootButton) {
    state.selectedModule = 'overview';
    updateTreeSelection();
    return;
  }
  const detailLink = event.target.closest('[data-open-detail]');
  if (detailLink) {
    event.preventDefault();
    openDetail(detailLink.dataset.openDetail);
  }
});

window.addEventListener('hashchange', renderRoute);
window.addEventListener('resize', () => requestAnimationFrame(drawConnections));

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

if (!window.location.hash) window.location.hash = 'introduction';
else renderRoute();

window.setTimeout(() => bootScreen.classList.add('is-hidden'), 420);
