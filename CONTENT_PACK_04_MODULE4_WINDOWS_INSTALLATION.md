# MODULE 4: WINDOWS INSTALLATION

## เป้าหมาย

เตรียม USB และติดตั้ง Windows 11 พร้อมตรวจสอบระบบหลังติดตั้งได้

### Preparation

เตรียม Computer, USB Flash Drive, Windows 11 Installation Media, Internet
ตามขั้นตอน และ Backup ข้อมูลสำคัญ เพราะการติดตั้งใหม่อาจลบข้อมูล

### Windows Installation Media

คือสื่อ เช่น USB ที่ใช้เริ่มกระบวนการติดตั้ง Windows และสามารถสร้างด้วยเครื่องมือจาก
Microsoft

### Bootable USB

USB ต้องสามารถ Boot ได้ หากไม่ได้ให้ตรวจการสร้าง USB และ Boot Menu/UEFI

### Boot Menu

ใช้ Boot Menu ของเครื่องเลือก USB เป็นอุปกรณ์เริ่มระบบ

### BIOS / UEFI

ทำงานก่อน Operating System และใช้ตรวจ Boot Mode, Storage, Boot Order และ
Secure Boot ตามข้อกำหนดของ Windows 11

### Windows Setup

เลือกภาษา Keyboard เริ่ม Installation เลือกประเภทการติดตั้ง และเลือก
Drive/Partition

### Disk / Partition

Drive คืออุปกรณ์เก็บข้อมูล, Partition คือส่วนที่แบ่งจาก Drive และ Unallocated Space
คือพื้นที่ที่ยังไม่ได้จัดเป็น Partition

ต้องตรวจ Drive ให้ถูกตัวก่อนลบหรือสร้าง Partition เพราะการเลือกผิดอาจทำให้ข้อมูลหาย

### Installation

เลือกตำแหน่งติดตั้งที่ถูกต้องแล้วปล่อย Setup ทำงานและ Restart ตามขั้นตอน

### Post-Install

ตั้งค่า User, Network, Windows Update และ Driver

### Required Drivers

ตรวจ Chipset, Graphics, Network, Audio และอุปกรณ์ที่จำเป็น

### Verification

ตรวจ Device Manager, Display, Network, Audio, Storage, USB และ Windows
Update

### Common Troubleshooting

-   USB Boot ไม่ได้: ตรวจ USB, Boot Menu และ UEFI
-   Storage ไม่พบ: ตรวจ BIOS/UEFI, Connection และการตั้งค่าที่เกี่ยวข้อง
-   Internet ไม่มี: ตรวจ Network Adapter และ Driver
-   ไม่มีภาพ: ตรวจ Monitor, Cable, Graphics และ Driver

### Practical Challenge

สร้าง USB Windows 11 → Boot → ติดตั้ง → Driver → Verification

------------------------------------------------------------------------
