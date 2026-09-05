# MODULE 6: SOFTWARE

## เป้าหมาย

ติดตั้ง ตั้งค่า Update ถอนการติดตั้ง และแก้ปัญหา Software พื้นฐานได้

### Software Types

- **Operating System:** จัดการระบบและเป็นตัวกลางระหว่าง User, Program และ Hardware
- **Application:** โปรแกรมที่ผู้ใช้ใช้ทำงาน เช่น เอกสาร ตารางคำนวณ Browser
- **Utility:** เครื่องมือช่วยจัดการหรือดูแลระบบ
- **Driver:** Software ที่ช่วยให้ OS ติดต่อ Hardware

การแยกประเภทช่วยให้รู้ว่าเวลามีปัญหาควรเริ่มตรวจตรงไหน

### Installation

ขั้นตอนพื้นฐานคือ **ดาวน์โหลดจากแหล่งที่เชื่อถือได้ → ตรวจ Compatibility → ติดตั้ง → ตั้งค่า → ทดสอบ**

ระหว่างติดตั้ง โปรแกรมอาจเพิ่มไฟล์, Shortcut, Service, Configuration หรือ Dependency ที่จำเป็นต่อการทำงาน

ดังนั้น "ติดตั้งสำเร็จ" ไม่ได้แปลว่า "ใช้งานได้แน่นอน"

### Compatibility / Dependency

ก่อนติดตั้งควรดู Windows Version, CPU Architecture, RAM/Storage, Driver และ Components ที่โปรแกรมต้องใช้

บางโปรแกรมติดตั้งได้แต่เปิดไม่ได้ เพราะ Dependency ไม่ครบ, Driver มีปัญหา, Permission ไม่พอ หรือ Configuration ผิด

### Configuration

ตั้งค่าภาษา Account Storage Network และ Preferences ตามชนิดของโปรแกรม

ควรเปลี่ยนทีละค่าที่เกี่ยวข้อง เพื่อให้รู้ว่าการตั้งค่าใดทำให้เกิดปัญหา

### Office / Productivity

ตัวอย่าง Word Processor, Spreadsheet, Presentation, PDF Tools และ Browser โดยควรรู้การติดตั้ง เปิดใช้งาน ตั้งค่าพื้นฐาน Update และแก้ปัญหาทั่วไป

### Utilities

เช่น File Compression, Backup, Disk Management และ Security Tools ควรเข้าใจหน้าที่ก่อนใช้ เพราะบางเครื่องมือสามารถเปลี่ยนแปลงข้อมูลหรือการตั้งค่าระบบได้

### Updates

Update ช่วยแก้ Bug ปัญหาความปลอดภัย เพิ่มความสามารถ และปรับ Compatibility แต่หลัง Update หากโปรแกรมมีปัญหา ควรเก็บ Error และพิจารณาว่าปัญหาเริ่มหลัง Update หรือไม่

### Uninstall

ถอนผ่าน Windows หรือ Uninstaller ของโปรแกรม การลบ Shortcut ไม่ได้แปลว่าโปรแกรมถูกถอนการติดตั้ง

### License Basics

รู้จัก Freeware, Trial, Paid, Subscription และ License Key/Account และควรใช้ Software ตามเงื่อนไข License

### Program Errors

อาการที่พบบ่อย:
- เปิดไม่ขึ้น
- Crash
- ค้าง
- ทำงานผิดปกติ
- Error Message

ให้เก็บข้อความ Error ไว้ เพราะเป็นหลักฐานที่ช่วยหาสาเหตุได้

### Repair / Reset / Reinstall

ความหมายต่างกัน:
- **Repair:** พยายามซ่อมไฟล์หรือส่วนประกอบของโปรแกรมโดยยังคงข้อมูล/การตั้งค่าบางส่วน
- **Reset:** คืนค่าบางส่วนของโปรแกรมตามที่ระบบกำหนด ซึ่งอาจกระทบการตั้งค่า
- **Reinstall:** ถอนและติดตั้งใหม่ เหมาะเมื่อการติดตั้งเดิมเสียหรือแก้ด้วยวิธีอื่นไม่ได้

เริ่มจากวิธีที่กระทบข้อมูลและการตั้งค่าน้อยก่อน เช่น Restart → ตรวจ Update → Repair → Reset → Reinstall ตามกรณี

### Post-Fix Test

หลังแก้ให้เปิดโปรแกรมและทดสอบ Function ที่เคยมีปัญหา พร้อมตรวจว่าไฟล์/ข้อมูลและการตั้งค่าที่จำเป็นยังใช้งานได้

### Practical Challenge

Install → Configure → Update → Test → จำลองปัญหา → เก็บ Error → วิเคราะห์ Compatibility/Dependency/Setting → Repair/Reset/Reinstall → Test ซ้ำ
