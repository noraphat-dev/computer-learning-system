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
    return {
      id: skill.id || `${moduleId}-skill-${String(index + 1).padStart(2, '0')}`,
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
  { id: 'cpu', title: 'CPU', x: 7, y: 8, subtopics: hardwareSkillContent.cpu },
  { id: 'motherboard', title: 'Motherboard / Mainboard', x: 20, y: 8, subtopics: hardwareSkillContent.motherboard },
  { id: 'ram', title: 'RAM', x: 33, y: 8, subtopics: hardwareSkillContent.ram },
  { id: 'hdd', title: 'HDD', x: 46, y: 8, subtopics: hardwareSkillContent.hdd },
  { id: 'ssd', title: 'SSD', x: 59, y: 8, subtopics: hardwareSkillContent.ssd },
  { id: 'gpu', title: 'GPU / Graphics Card', x: 72, y: 8, subtopics: hardwareSkillContent.gpu },
  { id: 'psu', title: 'PSU', x: 14, y: 17, subtopics: hardwareSkillContent.psu },
  { id: 'cpu-cooler', title: 'CPU Cooler', x: 28, y: 17, subtopics: hardwareSkillContent['cpu-cooler'] },
  { id: 'case', title: 'Case', x: 42, y: 17, subtopics: hardwareSkillContent.case },
  { id: 'monitor', title: 'Monitor', x: 56, y: 17, subtopics: hardwareSkillContent.monitor },
  { id: 'keyboard', title: 'Keyboard', x: 70, y: 17, subtopics: hardwareSkillContent.keyboard },
  { id: 'notebook-keyboard', title: 'Notebook Keyboard', x: 75, y: 25, subtopics: hardwareSkillContent['notebook-keyboard'] },
  { id: 'mouse', title: 'Mouse / Touchpad', x: 84, y: 17, subtopics: hardwareSkillContent.mouse },
  { id: 'network-adapter', title: 'Network Adapter', x: 25, y: 25, subtopics: hardwareSkillContent['network-adapter'] },
  { id: 'printer', title: 'Printer', x: 49, y: 25, subtopics: hardwareSkillContent.printer }
]);

const assemblySkillContent = {
  'preparation': [
    topic('Preparation', [
      'ตรวจอุปกรณ์ให้ครบและตรวจ Compatibility เช่น CPU กับ Motherboard, RAM กับระบบ,',
      'GPU กับ Case และ PSU กับกำลังไฟที่ต้องใช้'
    ])
  ],
  'safety-esd': [
    topic('Safety / ESD', [
      'ปิดเครื่องและถอดไฟ จับอุปกรณ์บริเวณขอบ ระวังไฟฟ้าสถิต และไม่ฝืนใส่อุปกรณ์',
      'หากตำแหน่งไม่ตรงให้หยุดตรวจ'
    ])
  ],
  'components': [
    topic('Components', [
      'เตรียม CPU, Cooler, RAM, Storage, Motherboard, PSU, GPU, Case และสายต่าง ๆ'
    ])
  ],
  'cpu': [
    topic('CPU', [
      'วาง CPU ให้ตรงเครื่องหมายบน Socket และล็อกกลไกให้ถูกต้อง'
    ])
  ],
  'cooler': [
    topic('Cooler', [
      'ติดตั้ง Cooler ให้แน่นพอดี ใช้ Thermal Paste และต่อ CPU_FAN'
    ])
  ],
  'ram': [
    topic('RAM', [
      'ใส่ RAM ลง Slot ที่ถูกต้องจน Lock'
    ])
  ],
  'storage': [
    topic('Storage', [
      'ติดตั้ง M.2 หรือ SATA ตามชนิด Storage'
    ])
  ],
  'motherboard': [
    topic('Motherboard', [
      'ตรวจ I/O Shield ถ้าจำเป็น ตรวจ Standoff แล้ววางและขัน Motherboard ให้ถูกตำแหน่ง'
    ])
  ],
  'psu': [
    topic('PSU', [
      'ยึด PSU และจัดสายเพื่อเตรียมเชื่อมต่อ'
    ])
  ],
  'gpu': [
    topic('GPU', [
      'ใส่ GPU ลง PCIe Slot ยึด Case และต่อ Power หากจำเป็น'
    ])
  ],
  'power-connector': [
    topic('Power Connector', [
      'ต้องรู้จัก 24-pin Motherboard, CPU Power, GPU Power และ SATA Power'
    ])
  ],
  'front-panel': [
    topic('Front Panel', [
      'ต่อ Power Switch, Reset Switch, Power LED และ HDD LED ตามคู่มือ Motherboard'
    ])
  ],
  'cable-management': [
    topic('Cable Management', [
      'จัดสายไม่ให้ขวางพัดลมและ Airflow และไม่ดึง Connector จนตึง'
    ])
  ],
  'pre-power-check': [
    topic('Pre-Power Check', [
      'ตรวจสายไฟ, 24-pin, CPU Power, RAM/GPU Lock, Cooler, Storage, Front',
      'Panel, Monitor และตรวจว่าไม่มีสกรูหรือโลหะหลงอยู่'
    ])
  ],
  'first-boot': [
    topic('First Boot', [
      'เปิดเครื่องและสังเกตพัดลม ไฟ/เสียง ภาพ และการเข้า BIOS/UEFI'
    ])
  ],
  'bios-uefi': [
    topic('BIOS / UEFI', [
      'ตรวจ CPU, RAM, Storage และ Boot Device'
    ])
  ],
  'post-build-verification': [
    topic('Post-Build Verification', [
      'หลังติดตั้ง Windows ตรวจ Device Manager, RAM, Storage, Network, USB, Audio',
      'และ Display แล้วทดสอบจริง'
    ])
  ],
  'no-boot': [
    topic('ถ้าไม่ Boot', [
      'ตรวจตามลำดับ **Power → PSU → 24-pin/CPU Power → RAM → GPU → Front Panel →',
      'BIOS/UEFI → อุปกรณ์ทีละชิ้น**'
    ])
  ],
};

const assemblySkills = createSkills('assembly', [
  { id: 'preparation', title: 'Preparation', x: 7, y: 8, subtopics: assemblySkillContent['preparation'] },
  { id: 'safety-esd', title: 'Safety / ESD', x: 20, y: 8, subtopics: assemblySkillContent['safety-esd'] },
  { id: 'components', title: 'Components', x: 33, y: 8, subtopics: assemblySkillContent['components'] },
  { id: 'cpu', title: 'CPU', x: 46, y: 8, subtopics: assemblySkillContent['cpu'] },
  { id: 'cooler', title: 'CPU Cooler', x: 59, y: 8, subtopics: assemblySkillContent['cooler'] },
  { id: 'ram', title: 'RAM', x: 72, y: 8, subtopics: assemblySkillContent['ram'] },
  { id: 'storage', title: 'Storage', x: 85, y: 8, subtopics: assemblySkillContent['storage'] },
  { id: 'motherboard', title: 'Motherboard', x: 14, y: 17, subtopics: assemblySkillContent['motherboard'] },
  { id: 'psu', title: 'PSU', x: 28, y: 17, subtopics: assemblySkillContent['psu'] },
  { id: 'gpu', title: 'GPU', x: 42, y: 17, subtopics: assemblySkillContent['gpu'] },
  { id: 'power-connector', title: 'Power Connector', x: 56, y: 17, subtopics: assemblySkillContent['power-connector'] },
  { id: 'front-panel', title: 'Front Panel', x: 70, y: 17, subtopics: assemblySkillContent['front-panel'] },
  { id: 'cable-management', title: 'Cable Management', x: 84, y: 17, subtopics: assemblySkillContent['cable-management'] },
  { id: 'pre-power-check', title: 'Pre-Power Check', x: 22, y: 26, subtopics: assemblySkillContent['pre-power-check'] },
  { id: 'first-boot', title: 'First Boot', x: 36, y: 26, subtopics: assemblySkillContent['first-boot'] },
  { id: 'bios-uefi', title: 'BIOS / UEFI', x: 50, y: 26, subtopics: assemblySkillContent['bios-uefi'] },
  { id: 'post-build-verification', title: 'Post-Build Verification', x: 64, y: 26, subtopics: assemblySkillContent['post-build-verification'] },
  { id: 'no-boot', title: 'No Boot Troubleshooting', x: 78, y: 26, subtopics: assemblySkillContent['no-boot'] },
]);


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
    skills: createSkills('maintenance', ['Inspection ก่อนลงมือ', 'Cleaning', 'Cables / Connectors', 'RAM', 'Storage', 'CPU / Cooler', 'GPU', 'PSU', 'Motherboard', 'Monitor', 'Keyboard / Mouse', 'Notebook Hardware', 'Replacement', { title: 'Upgrade Hardware', subtopics: ['RAM', 'HDD → SSD', 'SSD', 'GPU', 'CPU', 'CPU Cooler', 'PSU', 'Case / Airflow', 'Notebook Upgrade'] }, 'Upgrade แบบคิดเป็นระบบ', 'Post-Repair / Post-Upgrade Test', 'Verification']),
    challenge: 'ตรวจเครื่อง → ระบุปัญหาหรือสิ่งที่ควรปรับปรุง → เลือกวิธีแก้ → ลงมือปฏิบัติ → ทดสอบ → อธิบายผล',
    kind: 'module'
  },
  {
    id: 'windows-installation', code: 'MODULE 04', name: 'Windows Installation', shortName: 'WINDOWS\nINSTALLATION', x: 70, y: 85,
    goal: 'เข้าใจกระบวนการติดตั้ง Windows ตั้งแต่การเตรียมเครื่องและสื่อการติดตั้ง ไปจนถึงการตั้งค่าหลังติดตั้งและตรวจสอบระบบ',
    structure: 'Installation Preparation → Windows Installation Media → Boot & UEFI → Windows Setup → Disk & Partition → Windows Installation → Post-Installation Setup → Installation Verification → Installation Troubleshooting → Practical Challenge',
    skills: createSkills('windows-installation', ['Preparation', 'Windows Installation Media', 'Bootable USB', 'Boot Menu', 'BIOS / UEFI', 'Windows Setup', 'Disk / Partition', 'Installation', 'Post-Install', 'Required Drivers', 'Verification', 'Common Troubleshooting']),
    challenge: 'Preparation → Boot Drive → Boot/UEFI → Windows Setup → Partition → Installation → Configuration → Verification → Troubleshooting',
    kind: 'module'
  },
  {
    id: 'operating-system-driver', code: 'MODULE 05', name: 'Operating System & Driver', shortName: 'OPERATING SYSTEM &\nDRIVER', x: 50, y: 94,
    goal: 'เข้าใจหน้าที่ของระบบปฏิบัติการ และสามารถจัดการ Driver และอุปกรณ์ใน Windows ได้',
    structure: 'Operating System Fundamentals → Windows Management → System Configuration → Driver → Device Manager → Update/Install/Rollback → Verification → Troubleshooting → Practical Challenge',
    skills: createSkills('operating-system-driver', ['Operating System', 'File / Folder', 'User / Permissions', 'System Settings', 'System Information', 'Driver', 'Update / Reinstall / Rollback', 'Device Manager', 'Device Error', 'Verification']),
    challenge: 'กำหนดอุปกรณ์หนึ่งตัวที่มีปัญหา แล้ว ตรวจสอบ → หาเหตุผล → จัดการ Driver → ทดสอบ → Verify',
    kind: 'module'
  },
  {
    id: 'software', code: 'MODULE 06', name: 'Software', shortName: 'SOFTWARE', x: 30, y: 85,
    goal: 'สามารถติดตั้ง ตั้งค่า อัปเดต ถอนการติดตั้ง และแก้ปัญหา Software ที่จำเป็นต่อการใช้งานคอมพิวเตอร์ได้',
    structure: 'Software Fundamentals → Application Installation → Configuration → Office/Productivity Software → Utilities → Updates → Uninstall → Troubleshooting → Practical Challenge',
    skills: createSkills('software', ['Software Types', 'Installation', 'Compatibility / Dependency', 'Configuration', 'Office / Productivity', 'Utilities', 'Updates', 'Uninstall', 'License Basics', 'Program Errors', 'Repair / Reset / Reinstall', 'Post-Fix Test']),
    challenge: 'ติดตั้งและตั้งค่า Software ที่กำหนด และแก้ปัญหาเบื้องต้นเมื่อโปรแกรมเปิดไม่ได้ ทำงานผิดปกติ แจ้ง Error ต้องอัปเดต หรือต้องถอนและติดตั้งใหม่',
    kind: 'module'
  },
  {
    id: 'network', code: 'MODULE 07', name: 'Network', shortName: 'NETWORK', x: 13, y: 64,
    goal: 'เข้าใจการเชื่อมต่อเครือข่าย สามารถตั้งค่า ตรวจสอบ แก้ปัญหา และใช้งานการแชร์ทรัพยากรในระบบเครือข่ายได้',
    structure: 'Network Fundamentals → LAN & Internet → Ethernet → Wi-Fi → Network Devices → IP Address & MAC Address → Network Configuration → File & Printer Sharing → Network Troubleshooting → Network Verification → Practical Challenge',
    skills: createSkills('network', ['Network', 'LAN / Internet', 'Ethernet', 'Wi-Fi', 'Network Devices', 'ภาพการไหลของข้อมูลแบบง่าย', 'IP Address', 'Subnet Mask', 'Default Gateway', 'DNS', 'DHCP', 'Static IP', 'MAC Address', 'Network Configuration', 'File Sharing', 'Printer Sharing', 'Troubleshooting', 'กรณี Wi-Fi ต่อได้แต่ Internet ไม่ได้', 'Verification']),
    principle: 'Connect → Configure → Communicate → Troubleshoot → Verify',
    challenge: 'กรณีเครื่องเชื่อมต่อ Wi-Fi ได้แต่ใช้งาน Internet ไม่ได้ ให้ตรวจสอบตั้งแต่: Network Adapter → Connection → IP Address → Gateway → DNS → Router → Internet → Verify',
    kind: 'module'
  },
  {
    id: 'troubleshooting', code: 'MODULE 08', name: 'Troubleshooting', shortName: 'TROUBLESHOOTING', x: 23, y: 45,
    goal: 'สามารถวิเคราะห์และแก้ปัญหาคอมพิวเตอร์อย่างเป็นระบบ โดยนำความรู้จาก Module 1–7 มาใช้ร่วมกัน',
    structure: 'Troubleshooting Fundamentals → Problem Identification → Information Gathering → Hypothesis & Diagnosis → Testing & Isolation → Hardware Troubleshooting → Windows & Driver Troubleshooting → Software Troubleshooting → Network Troubleshooting → Solution & Verification → Practical Challenge',
    skills: createSkills('troubleshooting', ['Fundamentals', 'Problem Identification', 'Information Gathering', 'Hypothesis / Diagnosis', 'Testing / Isolation', 'Hardware Troubleshooting', 'Windows / Driver', 'Software', 'Network', 'Solution / Verification']),
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
      notes: ['ปัญหาโปรแกรมไม่ได้แปลว่า Software เป็นสาเหตุเสมอไป อาจมาจาก Windows, Driver, Hardware หรือ Network', 'ต้องแยกให้ออกระหว่าง Wi-Fi Connection มีปัญหา กับ Internet Connection มีปัญหา', 'Problem → Diagnosis → Solution → Test → Verify', 'หลังแก้ต้องตรวจว่า: อาการเดิมหายหรือไม่, Hardware ทำงานหรือไม่, Windows ทำงานหรือไม่, Software ทำงานหรือไม่, Network ทำงานหรือไม่, Restart แล้วปัญหากลับมาหรือไม่']
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
  return `${sectionMarkup('05', 'การระบุปัญหาและเก็บข้อมูล', grouped)}
    <section class="detail-section"><h2><span>06 //</span> ลำดับการวิเคราะห์ตัวอย่าง</h2><div class="section-rule"></div><div class="detail-sections" style="margin-top:0">${flows}</div></section>
    ${sectionMarkup('07', 'Hardware Troubleshooting', hardware)}
    ${sectionMarkup('08', 'Solution & Verification', notes)}`;
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

  const isDetailedSkill = item.kind === 'skill' && (item.parent === 'hardware' || item.parent === 'assembly');
  let sections = '';
  let meta = item.code;
  let summary = item.goal || item.summary || `Skill in Module ${moduleById.get(item.parent)?.name || ''}`;
  const detailSource = isDetailedSkill ? `CONTENT SOURCE // CONTENT PACK 0${item.parent === 'hardware' ? '1 — MODULE 1' : '2 — MODULE 2'}` : 'CONTENT SOURCE // MASTER_CONTENT.md';

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
