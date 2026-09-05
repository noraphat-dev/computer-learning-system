# MODULE 8: TROUBLESHOOTING

## เป้าหมาย

วิเคราะห์ปัญหาจากอาการจริง หาสาเหตุ แก้ไข และยืนยันผลอย่างเป็นระบบ

## หลักการสำคัญ

**อย่าเดา → หาหลักฐาน → ตั้งสมมติฐาน → ทดสอบ → ตัดสาเหตุ → แก้ → ทดสอบอีกครั้ง**

Troubleshooting ที่ดีไม่ใช่การเปลี่ยนอะไหล่ไปเรื่อย ๆ จนเครื่องกลับมาใช้ได้ แต่ต้องอธิบายได้ว่า **ทำไมจึงสงสัยจุดนั้น และผลการทดสอบบอกอะไร**

### 1. Fundamentals

เริ่มจากสิ่งง่าย เช่น Power, Cable, Connection และ Setting ก่อนจะไปถึงการเปลี่ยน Hardware

เหตุผลคือสิ่งง่ายตรวจได้เร็ว ปลอดภัย และอาจเป็นสาเหตุจริง การข้ามไปเปลี่ยนอะไหล่ทันทีทำให้เสียเวลาและอาจสร้างปัญหาใหม่

### 2. Problem Identification

ถาม:
- อาการคืออะไร?
- เกิดเมื่อไร?
- เกิดทุกครั้งหรือบางครั้ง?
- ก่อนเกิดปัญหามีการเปลี่ยนอะไรหรือไม่?
- มี Error Message หรือไม่?

การระบุอาการให้ชัดช่วยไม่ให้เราวินิจฉัยจากคำว่า "เครื่องเสีย" ซึ่งกว้างจนแทบไม่มีประโยชน์

### 3. Information Gathering

เก็บข้อมูล:
- Hardware
- Windows Version
- Driver
- Software
- Network
- Error Code
- Device Status
- สิ่งที่เพิ่งติดตั้ง/เปลี่ยน

### 4. Hypothesis / Diagnosis

ตั้งสมมติฐานจากหลักฐาน เช่น:
- สายหลวม
- RAM มีปัญหา
- Driver ผิดปกติ
- Storage ไม่ถูกตรวจพบ
- Network Configuration ผิด

จากนั้นต้องเลือกการทดสอบที่สามารถแยกสมมติฐานได้

### 5. Testing / Isolation

ใช้หลัก:
- เปลี่ยนทีละตัวแปร
- ใช้อุปกรณ์ที่รู้ว่าดี
- ทดลอง Port อื่น
- ทดลองเครื่องอื่น
- ถอดอุปกรณ์ที่ไม่จำเป็น
- ตรวจ BIOS/UEFI เมื่อเหมาะสม

เหตุผลที่ต้องเปลี่ยนทีละตัวแปร เพราะถ้าเปลี่ยนหลายอย่างพร้อมกัน เราจะไม่รู้ว่าตัวไหนเป็นสาเหตุหรือเป็นตัวที่แก้ปัญหา

### 6. Hardware Troubleshooting

ลำดับพื้นฐาน:

**Power → Cable → Connection → RAM → GPU → Storage → Motherboard/PSU**

ลำดับนี้เป็นแนวทาง ไม่ใช่กฎตายตัว ต้องปรับตามอาการและหลักฐาน

### 7. Windows / Driver

ตรวจ Device Manager, Driver, Windows Update, Settings และ Error Message

ใช้ Restart, Rollback หรือ Reinstall ตามกรณี และดูว่าปัญหาเริ่มหลังการ Update หรือเปลี่ยน Driver หรือไม่

### 8. Software

ตรวจ:
**Error → Compatibility → Dependency → Configuration → Permission → Update → Repair → Reset → Reinstall**

เริ่มจากวิธีที่กระทบน้อยก่อน

### 9. Network

ใช้:

**Adapter → Connection → IP → Subnet Mask → Gateway → DNS → Router → Internet**

### 10. Solution / Verification

หลังแก้ต้อง:
1. ทดสอบอาการเดิม
2. ตรวจ Error ใหม่
3. ตรวจระบบที่เกี่ยวข้อง
4. ทดสอบการใช้งานจริง
5. ยืนยันว่าไม่มีปัญหาใหม่

คำว่า "หายแล้ว" ต้องมีหลักฐานรองรับ

# PRACTICAL TROUBLESHOOTING CASES

## Case 1: PC เปิดไม่ติด

### อาการ
กด Power แล้วเครื่องไม่มีอาการ หรือไม่มีพัดลม/ไฟตอบสนอง

### Possible Causes
Power, PSU Switch, Power Cable, 24-pin, CPU Power, Front Panel หรือ PSU/Motherboard

### วิธีตรวจ
**Power → PSU Switch → Power Cable → 24-pin → CPU Power → Front Panel Power Switch → PSU → Motherboard**

### การตีความ
ถ้าไฟเข้าระบบแต่กดแล้วไม่ทำงาน อาจต้องตรวจ Front Panel หรือ PSU ต่อ ถ้าสายหลวมแล้วเสียบใหม่และเครื่องกลับมาได้ หลักฐานชี้ไปที่ Connection มากกว่าอะไหล่เสีย

### Verification
กดเปิดซ้ำหลายครั้ง ตรวจ Boot และทดสอบการทำงานจริง

## Case 2: เปิดเครื่องแต่ไม่มีภาพ

### อาการ
เครื่องเปิด พัดลมทำงาน แต่ Monitor ขึ้น No Signal หรือไม่มีภาพ

### Possible Causes
Monitor, Input Source, Display Cable, Port, GPU, RAM, BIOS/UEFI หรือ Graphics

### วิธีตรวจ
**Monitor Power → Input → Display Cable → Port → GPU → RAM → BIOS/UEFI → Integrated Graphics ถ้ามี**

### การตีความ
ถ้าสลับสายหรือ Input แล้วภาพกลับมา แสดงว่าปัญหาอยู่ที่เส้นทางการแสดงผล ไม่จำเป็นต้องเปลี่ยน GPU

### Verification
เข้า Windows และทดสอบภาพ/Resolution/Refresh Rate

## Case 3: Windows Boot ไม่ได้

### อาการ
เปิดเครื่องได้แต่เข้า Windows ไม่สำเร็จ

### Possible Causes
Storage Detection, Boot Order, Boot Configuration, Windows, Storage Health หรือ Hardware ที่เพิ่งเปลี่ยน

### วิธีตรวจ
**Storage Detection → Boot Order → Boot Configuration → Windows Recovery → Storage Health → Hardware ที่เพิ่งเปลี่ยน**

### การตีความ
ถ้า BIOS/UEFI ยังไม่เห็น Storage ควรตรวจ Hardware/Connection ก่อน เพราะ Windows ไม่สามารถแก้ปัญหา Drive ที่ BIOS ยังมองไม่เห็นได้

### Verification
Boot เข้า Windows ได้และตรวจ Storage/Device Manager

## Case 4: Hardware ใช้งานไม่ได้

### อาการ
อุปกรณ์บางชิ้นทำงานไม่ได้ แม้ตัวเครื่องเปิดปกติ

### วิธีตรวจ
**Connection → Power → Device Manager → Driver → Windows Settings → Port/เครื่องอื่น**

### การตีความ
ถ้า Device Manager มี Error ให้ใช้ข้อมูลนั้นเป็นหลักฐานก่อนเปลี่ยน Hardware

### Verification
อุปกรณ์ต้องทำงานจริง ไม่ใช่แค่หายจาก Error ใน Device Manager

## Case 5: โปรแกรมเปิดไม่ได้

### อาการ
กดเปิดแล้วไม่ขึ้น Crash หรือมี Error

### วิธีตรวจ
**Error Message → Compatibility → Dependency → Update → Permission → Repair → Reset → Reinstall**

### การตีความ
ถ้า Repair แล้วเปิดได้ แสดงว่าปัญหาอาจอยู่ที่ไฟล์หรือส่วนประกอบของโปรแกรม ไม่จำเป็นต้อง Reinstall ทันที

### Verification
เปิดโปรแกรมและทดสอบ Function ที่เคยมีปัญหา

## Case 6: Internet ใช้ไม่ได้

### อาการ
Computer ต่อ Wi-Fi หรือสายได้ แต่เข้า Internet ไม่ได้

### วิธีตรวจ
**Network Adapter → Connection → IP → Subnet Mask → Gateway → DNS → Router → Internet Service**

### การตีความ
ถ้าได้ IP แต่ไม่มี Gateway อาจออกจาก Network ไม่ได้ ถ้า Gateway ใช้ได้แต่ชื่อเว็บไซต์แก้ไม่ได้ อาจต้องตรวจ DNS ถ้าหลายเครื่องใช้ Internet ไม่ได้พร้อมกัน ควรตรวจ Router/Internet Service ด้วย

### Verification
ทดสอบการเชื่อมต่อและเปิด Website หรือใช้บริการ Network ที่ต้องการจริง

# FINAL PRACTICAL CHALLENGE

รับ Computer ที่มีปัญหาโดยไม่รู้สาเหตุ แล้วทำ:

1. รับอาการ
2. ระบุ Problem
3. เก็บข้อมูล
4. ตั้ง Hypothesis
5. เลือกวิธี Test
6. ทดสอบทีละสาเหตุ
7. แยกสาเหตุ
8. แก้ไข
9. ทดสอบอาการเดิมอีกครั้ง
10. ตรวจระบบส่วนอื่น
11. ยืนยันว่าเครื่องกลับมาใช้งานได้

สิ่งที่ต้องแสดงไม่ใช่แค่ "แก้ได้" แต่ต้องอธิบายได้ว่า:

**อาการคืออะไร → หลักฐานคืออะไร → คิดว่าสาเหตุคืออะไร → ทดสอบอย่างไร → ผลเป็นอย่างไร → แก้อย่างไร → ยืนยันผลอย่างไร**

# FINAL PRACTICAL CHALLENGE

รับ Computer ที่มีปัญหาโดยไม่รู้สาเหตุ แล้วทำ:

1. รับอาการ
2. ระบุ Problem
3. เก็บข้อมูล
4. ตั้ง Hypothesis
5. เลือกวิธี Test
6. ทดสอบทีละสาเหตุ
7. แยกสาเหตุ
8. แก้ไข
9. ทดสอบอาการเดิมอีกครั้ง
10. ตรวจระบบส่วนอื่น
11. ยืนยันว่าเครื่องกลับมาใช้งานได้

สิ่งที่ต้องแสดงไม่ใช่แค่ "แก้ได้" แต่ต้องอธิบายได้ว่า:

**อาการคืออะไร → หลักฐานคืออะไร → คิดว่าสาเหตุคืออะไร → ทดสอบอย่างไร → ผลเป็นอย่างไร → แก้อย่างไร → ยืนยันผลอย่างไร**
