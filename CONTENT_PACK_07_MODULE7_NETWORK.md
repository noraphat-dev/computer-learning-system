# MODULE 7: NETWORK

## เป้าหมาย

เข้าใจ Network พื้นฐาน ตั้งค่า ตรวจ IP และแก้ปัญหาเบื้องต้นได้

### Network

Network คือการเชื่อมต่ออุปกรณ์เพื่อสื่อสาร แลกเปลี่ยนข้อมูล และใช้ทรัพยากรร่วมกัน

### LAN / Internet

LAN คือเครือข่ายภายในพื้นที่ เช่น บ้านหรือห้องเรียน ส่วน Internet เชื่อมต่อเครือข่ายต่าง ๆ เข้าด้วยกัน

ดังนั้น "ต่อ Wi-Fi ได้" ไม่ได้แปลว่า "มี Internet" เสมอไป เพราะ Computer อาจเชื่อม Router ได้ แต่ Router อาจไม่มีทางออกไป Internet

### Ethernet

การเชื่อมต่อ Network ผ่านสาย ตรวจ Cable, Port, Link Status และ Adapter

### Wi-Fi

ตรวจ Wi-Fi, SSID, Password, Signal, Adapter และ Router/Access Point

### Network Devices

- **Router:** เชื่อมและส่ง Traffic ระหว่าง Network
- **Switch:** เชื่อมอุปกรณ์ใน Network เดียวกัน
- **Access Point:** ให้บริการ Wi-Fi
- **Network Adapter:** ทำให้ Computer เชื่อม Network ได้

### ภาพการไหลของข้อมูลแบบง่าย

**Computer → Network Adapter → Switch/Access Point → Router/Gateway → Internet → Server**

เมื่อข้อมูลตอบกลับ จะเดินทางย้อนกลับมาที่ Computer

การเข้าใจเส้นทางนี้ช่วยให้รู้ว่าถ้าเสียตรงไหนควรตรวจจุดใดก่อน

## IP Address แบบเข้าใจจริง

IP Address เปรียบเหมือน "ที่อยู่" ของอุปกรณ์ใน Network เพื่อให้อุปกรณ์รู้ว่าจะส่งข้อมูลไปหาใคร

ตัวอย่างในบ้าน:
- Computer: `192.168.1.20`
- Phone: `192.168.1.21`
- Router/Gateway: `192.168.1.1`

อุปกรณ์ทั้งสามอยู่ใน Network เดียวกันได้ตาม Subnet Mask ที่กำหนด

### Subnet Mask

Subnet Mask ช่วยบอกว่า IP ส่วนไหนใช้ระบุ Network และส่วนไหนใช้ระบุอุปกรณ์ใน Network นั้น

ตัวอย่าง `255.255.255.0` หรือ `/24` ในเครือข่ายแบบทั่วไป หมายความว่าอุปกรณ์ที่อยู่ในช่วง Network เดียวกันจะมีส่วน Network เหมือนกัน และเลขท้ายใช้แยกอุปกรณ์

ไม่จำเป็นต้องท่องเลขอย่างเดียว แต่ต้องเข้าใจว่า **Subnet Mask ช่วยตัดสินว่าเป้าหมายอยู่ Network เดียวกันหรือควรส่งผ่าน Gateway**

### Default Gateway

Gateway คือจุดที่ Computer ใช้ส่งข้อมูลออกจาก Network ของตัวเองไปยัง Network อื่น

เช่น Computer ต้องการเข้า Internet มักส่งข้อมูลไปที่ Router ซึ่งทำหน้าที่เป็น Default Gateway

ถ้า IP ของ Computer ถูกต้องแต่ Gateway ผิดหรือไม่มี อาจคุยกับอุปกรณ์ใน Network เดียวกันได้ แต่ไป Network อื่นไม่ได้

### DNS

DNS ช่วยแปลงชื่อ Domain ที่มนุษย์อ่านง่าย เช่น `example.com` ให้เป็นข้อมูลที่ใช้ค้นหา Server

จึงเป็นไปได้ว่า:
- Ping ไป IP ได้
- แต่เปิดเว็บไซต์ด้วยชื่อไม่ได้

ในกรณีนี้ DNS อาจเป็นหนึ่งในจุดที่ต้องตรวจ

### DHCP

DHCP เป็นระบบที่ช่วยแจกค่าการตั้งค่า Network ให้เครื่องอัตโนมัติ เช่น IP Address, Subnet Mask, Gateway และ DNS

ข้อดีคือผู้ใช้ไม่ต้องกรอกค่าเองทุกเครื่อง และลดโอกาสกำหนด IP ซ้ำ

### Static IP

Static IP คือการกำหนดค่า IP เอง ต้องกำหนดให้ถูกทั้ง IP, Subnet Mask, Gateway และ DNS ตาม Network ที่ใช้งาน

ถ้ากำหนดผิดอาจเกิด IP ซ้ำ, ติดต่อ Gateway ไม่ได้ หรือออก Internet ไม่ได้

### MAC Address

MAC Address เป็น Address ของ Network Interface ในระดับ Link Layer โดย Computer หนึ่งเครื่องอาจมีหลาย Interface และแต่ละ Interface อาจมี MAC ของตัวเอง

## Network Configuration

จำความสัมพันธ์นี้:

**IP = ที่อยู่เครื่อง → Subnet Mask = ขอบเขต Network → Gateway = ทางออกไป Network อื่น → DNS = ช่วยค้นหาที่อยู่จากชื่อ**

DHCP มักแจกค่าทั้งหมดให้อัตโนมัติ ส่วน Static IP ต้องกำหนดเอง

### File Sharing

ทำให้ Computer อื่นเข้าถึง Folder ผ่าน Network ได้ ต้องตั้ง Sharing และ Permission ให้ถูกต้อง

### Printer Sharing

แชร์ Printer ผ่าน Network โดยตรวจ Printer, Sharing, Permission, Network และ Driver

### Troubleshooting

ใช้ลำดับ:

**Adapter → Connection → IP → Gateway → DNS → Router → Internet**

### กรณี Wi-Fi ต่อได้แต่ Internet ไม่ได้

1. ตรวจ Adapter
2. ตรวจ SSID/Connection
3. ตรวจ IP
4. ตรวจ Subnet Mask
5. ตรวจ Gateway
6. ทดสอบการติดต่อภายใน Network
7. ตรวจ DNS
8. ตรวจ Router
9. ทดสอบ Internet

ลำดับนี้ช่วยแยกปัญหาจากระดับเครื่องไปยังเครือข่ายภายนอก แทนการเดาสุ่ม

### Verification

ตรวจ Connection, IP, Subnet Mask, Gateway และ DNS แล้วทดสอบ Network, Website หรือ File/Printer Sharing ตามกรณี

### Practical Challenge

เชื่อม Network → ตรวจ IP/MAC → อธิบาย Subnet/Gateway/DNS → ตั้ง Sharing → จำลองปัญหา → วิเคราะห์ → แก้ → ทดสอบ
