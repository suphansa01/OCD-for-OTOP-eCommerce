import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <p className="lead">การวินิจฉัยระบบองค์การภาครัฐ</p>
              <p>
                <strong>ทฤษฎีระบบ (System Theory)</strong>
              </p>
              <p>
                ทฤษฎีระบบ (System Theory)
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อนมีองค์ประกอบพื้นฐาน
                ดังนี้{" "}
                <ol style={{ listStyleType: "decimal" }} className="ml-3">
                  <li>
                    องค์การเป็นหน่วย (Entity) ที่ไม่แตกต่างจากระบบอื่น ซึ่งมี
                    Input คือวัตถุดิบ ความสามารถของพนักงานและเงินทุน
                    Transformation Process กระบวนการขององค์การ Output คือสินค้า
                    ข้อมูล บริการ Stakeholders ที่เกิดจากกระบวนการขององค์การ
                  </li>
                  <li>
                    สภาพแวดล้อมและขอบเขตขององค์การ(Environment and Boundaries)
                    องค์การมีลักษณะเปิดหรือปิด ดำรงอยู่ในสิ่งแวดล้อม (ลูกค้า
                    พันธมิตร คู่แข่ง แนวโน้มต่างๆ)
                    ที่เป็นประโยชน์หรือโทษต่อองค์การ เปลี่ยนแปลงช้าหรือเร็ว
                    ระบบต่างๆ ล้วนอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    และตรงกันข้ามก็ส่งผลกระทบต่อสิ่งแวดล้อมรอบข้าง
                  </li>
                  <li>
                    ทุกส่วนเกี่ยวข้องกัน (All Parts Related)
                    ทุกส่วนของระบบมีความเกี่ยวข้องกัน
                    ถ้าส่วนใดส่วนหนึ่งเปลี่ยนแปลง ส่วนอื่นจะเปลี่ยนแปลงตาม
                    คือได้รับผลกระทบ
                  </li>
                  <li>
                    ข้อมูลป้อนกลับ (Feed-backs) องค์การได้รับข้อมูลป้อนกลับของ
                    Outputs จากสิ่งแวดล้อม ข้อมูลปรากฏอยู่ในหลายรูปแบบ เช่น
                    ผลการให้บริการจากหน่วยงานภาครัฐ ผลประกอบการ
                    ปฏิสัมพันธ์ที่เกิดกับองค์การอื่น
                  </li>
                  <li>
                    ภายในระบบมีปฏิสัมพันธ์กัน (Systems Within Systems)
                    ประกอบด้วย
                    <ul style={{ listStyleType: "square" }} className="ml-3">
                      <li>ระดับบุคคล</li>
                      <li> ระดับกลุ่ม</li>
                      <li> ระหว่างกลุ่ม</li>
                      <li> ระดับองค์การ</li>
                    </ul>
                  </li>
                </ol>
              </p>
              {/* <p className="lead">การวินิจฉัยระบบองค์การภาครัฐ</p> */}
              <p>
                <strong>ทฤษฎีระบบ สามารถสรุปได้ดังนี้</strong>
              </p>
              <p>
                ทฤษฎีระบบ สามารถสรุปได้ดังนี้
                <ol style={{ listStyleType: "decimal" }} className="ml-3">
                  <li>
                    องค์การเป็นระบบที่มีขอบเขต Inputs วัตถุดิบ Suppliers
                    เงินทุน/แหล่งทุน ความสามารถของพนักงาน ผู้ถือหุ้น
                    นโยบายของรัฐบาล และกฎระเบียบต่างๆ Throughputs/Transformation
                    Process คือกระบวนการทำงาน กระบวนการแปลง Inputs เป็น Outputs
                    Outputs คือสิ้นค้า บริการ ข้อมูล ฯลฯ
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การทำหน้าที่ในลักษณะที่สอดประสานกัน
                    เพื่อให้บรรลุเป้าหมายขององค์การ
                    ทุกส่วนของระบบล้วนมีความเกี่ยวข้องกัน
                    เมื่อส่วนใดส่วนหนึ่งถูกเปลี่ยนแปลง ส่วนอื่นๆ
                    ก็จะได้รับผลกระทบ
                  </li>
                  <li>
                    กระบวนการภายในองค์การ จำเป็นต่อประสิทธิภาพและประสิทธิผล
                    รวมทั้งความสำเร็จขององค์การ กระบวนการผลิต ซึ่งรวบรวมและแปลง
                    Inputs เป็น Outputs กระบวนการสังคม
                    เกี่ยวข้องกับบุคคลและกลุ่มต่างๆ จนทำให้เกิดบรรทัดฐาน
                    และกระบวนการตอบสนองความต้องการของแต่ละบุคคล
                    ซึ่งมีอิทธิพลต่อความรู้สึกและความมุ่งมั่นของมนุษย์
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การ
                    เป็นหน่วยหนึ่งอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    ที่สามารถส่งผลกระทบทั้งด้านบวกและลบต่อหน่วยนั้นๆ
                  </li>
                  <li>
                    องค์การได้รับข้อมูลป้อนกลับ (Feedback) เกี่ยวกับ Outputs
                    ของตนจากสิ่งแวดล้อม
                    ซึ่งช่วยให้องค์การสามารถดำเนินการเปลี่ยนแปลงต่างๆ
                    เพื่อให้การตอบสนองต่อสิ่งแวดล้อมดีขึ้น
                    โดยข้อมูลป้อนกลับจากลูกค้าเป็นสิ่งที่จำเป็นต่อความสำเร็จในระยะยาวขององค์การมากที่สุด
                  </li>
                </ol>
                <p>
                  <strong>การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model</strong>
                </p>
                <ol>
                  <li>
                    {" "}
                    1. ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission) มีความชัดเจน
                    ได้รับการยอมรับจากพนักงานหรือไม่
                  </li>

                  <li>
                    2. โครงสร้าง (Structure) กิจกรรม/งานต่างๆ ถูกแบ่งในลักษณะใด
                    ช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                  </li>
                  <li>
                    3. ความสัมพันธ์ (Relationships)
                    การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่
                    หรือก่อให้เกิดความขัดแย้งอย่างไร
                    และจัดการกับความขัดแย้งนั้นอย่างไร
                  </li>
                  <li>
                    4. รางวัล (Rewards)
                    มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่
                    หรือมีมาตรการลงโทษอย่างไร
                  </li>
                  <li>
                    5. การนำ (Leadership) นำการขับเคลื่อนองค์การ
                    มีหน้าที่กำกับติดตามความเป็นไป
                    หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน
                  </li>
                  <li>
                    6. กลไกที่จำเป็น (Helpful Mechanism) องค์การมีเครื่องมือ
                    หรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                    อย่างเพียงพอหรือไม่
                  </li>
                  <li>7. ข้อดี ข้อเสียของ Model </li>
                  <li>ข้อดี คือเป็น Model ที่เข้าใจง่าย </li>
                  <li>
                    ข้อเสีย เป็นการวินิจฉัยระบบที่ขาดความรอบด้าน
                    เนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจน
                    รวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม
                  </li>
                </ol>
                <p>
                  <strong>
                    การวินิจฉัยระบบด้วยการวิเคราะห์ข้อมูล Big Data
                  </strong>
                </p>
                <ol>
                  การวิเคราะห์ข้อมูล Big Data เพื่อการตัดสินใจ และการพัฒนา AI
                  ในหน่วยงานภาครัฐ
                  <li>
                    เป็นการวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data)
                    ซึ่งเป็นข้อมูลจากการรายงานผลตัวชี้วัดของหน่วยงานภาครัฐและเอกชน
                    เช่น ตัวชี้วัดความยากจนและการกระจายรายได้
                  </li>
                  <li>
                    แล้วนำมาวิเคราะห์ Visualization
                    เปรียบเทียบแนวโน้มระหว่างปีและระหว่างประเทศ และวิเคราะห์
                    Multiple Regression เพื่อการพยากรณ์หรือประมาณการ
                    เพื่อนำผลการวิเคราะห์มาใช้พัฒนาองค์การ/ประเมินนโยบายสาธารณะ/ปรับปรุงการทำงานของหน่วยงานภาครัฐ
                  </li>
                  <li>ประเภทของข้อมูล Big Data</li>
                  <li>Structured Data (ข้อมูลที่มีโครงสร้าง)</li>
                  <li>Unstructured Data ข้อมูลที่ไร้โครงสร้าง</li>
                  <li>Semi Structured Data ข้อมูลกึ่งโครงสร้าง</li>
                </ol>
              </p>
              <p>
                Montegeraliquam sed pede in cursus praesenec vestas rhoncus wisi
                at wisi. Condisseloborttis enim et ipsum mauristie id felit
                adipiscipit ac auctortorttitor sempor. Vitantesqueat sempus non
                sed et mus sit vivamus purus netus hendiment. Pretiuma diam et
                id tempus dolor por wisi sed volutpat facilisi.
              </p>
              <p>
                <p>
                  <strong>
                    ลักษณะของข้อมูล Big Data 4 Vs:
                    Volume-Velocity-Variety-Veracity
                  </strong>
                </p>
                <li>1. Volume ข้อมูลที่มีปริมาณมากมหาศาล</li>
                <li>2. Velocity ข้อมูลมีอัตราการเปลี่ยนแปลงแบบ Real-time</li>
                <li>3. Variety ข้อมูลที่มีความหลากหลายและซับซ้อน</li>
                <li>4. Veracity ข้อมูลที่มีความไม่ชัดเจน</li>
                <ol>ข้อมูล Big Data เกิดขึ้นได้อย่างไร </ol>
                <li>Big Dataเกิดจากพฤติกรรมมนุษย์</li>
                <li>Shopping/ทำกิจกรรมต่างๆ </li>
                <li>การไปหาหมอ เพื่อรักษาพยาบาล</li>
                <li>Big Data เกิดจาก Machine </li>
                <li>Sensor การตรวจวัดอุณหภูมิ</li>
                <li>การตรวจวัดอากาศ PM2.5</li>
                <ol>เทคโนโลยี Quantum computer จะส่งผลกระทบกับอะไรบ้าง</ol>
                <li>1. ความปลอดภัยในโลกดิจิตอล (Online security)</li>
                <li>2. การพัฒนายา (Drug development)</li>
                <li>
                  3. การทำนายสภาพอากาศ และภัยพิบัติทางธรรมชาติที่แม่นยำมากขึ้น
                </li>
                <li>4. การควบคุมจราจร (Traffic control)</li>
                <li>
                  5. Blockchain การพัฒนา Quantum Computers
                  ส่งผลให้เกิดความเสี่ยงในการเข้ารหัสข้อมูล
                </li>
                <li>
                  6. War พัฒนาอาวุธ หรือใช้ล้วงข้อมูลลับทางทหาร/ทางความมั่นคง
                </li>
              </p>
              <p>การวินิจฉัยระบบด้วย Nadler and Tushman’s Congruence Model</p>
              <ol>
                <li>
                  เป็นเครื่องมือวินิจฉัยระบบที่ตั้งอยู่บนพื้นฐานทฤษฎี Open
                  Systems อธิบายว่าประสิทธิผลขององค์การเกิดจากความสอดคล้อง
                  (Congruency) ขององค์ประกอบต่างๆ ขององค์การ
                </li>
                <li>บริบทและสภาพแวดล้อม Context (Inputs)</li>
                <li>
                  สิ่งแวดล้อม
                  ทรัพยากรและประวัติศาสตร์เป็นปัจจัยที่มีอิทธิพลต่อการกำหนดกลยุทธ์ของแต่ละองค์การเป็นแนวทางที่องค์การใช้ในการกำหนดกลยุทธ์
                  และองค์การเป็นเสมือนวิธีการ (Means) ที่ทำให้กลยุทธ์บรรลุผล
                </li>
                <li>โมเดลความสอดคล้องในสิ่งแวดล้อม Congruence Model</li>
                <li>คือปัจจัยต่างๆ ภายนอกขององค์การ เช่น ปัจจัย</li>
                <li>ด้านเศรษฐกิจ</li>
                <li>ด้านสังคม</li>
                <li>ด้านกฎหมายและการเมือง</li>
                <li>ด้านเทคโนโลยี</li>
                <li>
                  ส่วนทรัพยากร คือ ทรัพย์สินขององค์การทั้งที่จับต้องได้
                  (Tangible) และจับต้องไม่ได้ (Intangible) เช่น เงินทุน
                  เครื่องหมายการค้า และสิทธิบัตร
                </li>
                <li>กระบวนการเปลี่ยนแปลงขององค์การ (Transformation Process)</li>
                <li>
                  คือกระบวนการทำงาน/ขับเคลื่อนขององค์การ
                  ทำหน้าที่ขับเคลื่อนกลยุทธ์เพื่อให้เกิด Outputs ที่คาดหวัง
                  ซึ่งประกอบด้วยผลลัพธ์สำหรับองค์การ กลุ่ม และบุคคล
                </li>
                <li>Transformation Process: กระบวนการเปลี่ยนผ่าน ประกอบด้วย</li>
                <li>
                  1. Task (Work) หมายถึง กิจกรรมต่างๆ
                  และงานประจำวันที่องค์การจะต้องทำ
                </li>
                <li>
                  2. Individual (People) หมายถึง ทักษะ ความต้องการ
                  และความคาดหวังของบุคลากร
                </li>
                <li>
                  3. Formal Organization Arrangement หมายถึง โครงสร้าง กระบวนการ
                  และวิธีการทำงาน
                </li>
                <li>
                  4. Informal Organization หมายถึง ค่านิยม ความเชื่อ
                  และพฤติกรรมที่ไม่ได้ประกาศอย่างเป็นทางการ
                </li>
                <li>
                  ค่านิยม คือสิ่งที่นิยมยึดถือประจำใจ (ขยัน ขี้เกียจ
                  อยากรวยทางลัดแต่ไม่ทำงาน เป็นต้น)
                </li>
                <li>การวินิจฉัยระบบด้วย Congruence Model มี 8 ขั้นตอนคือ</li>
                <li>
                  1. Identifying Symptoms: การแจงแจงรายละเอียดต่างๆ
                  ของสถานการณ์ที่บ่งชี้ว่า องค์การกำลังมีปัญหา
                </li>
                <li>
                  2. Specify Input: การวิเคราะห์รายละเอียดทีสำคัญของสิ่งแวดล้อม
                  ทรัพยากร ประวัติศาสตร์และกลยุทธ์ของ องค์การ
                </li>
                <li>
                  3. Identify Output: การรวบรวมข้อมูลเกี่ยว Output
                  ขององค์การที่เป็น Output ที่แท้จริงและ Output
                  ที่องค์การคาดหวัง
                </li>
                <li>
                  4. Identify Problems: วิเคราะห์ช่องว่าง (Gap) ระหว่าง Output
                  ที่แท้จริงและที่คาดหวัง
                  รวมทั้งผลกระทบของความแตกต่างที่มีผลต่อการประกอบการขององค์การ
                </li>
                <li>
                  5. Describe the Organizational Components:
                  รวบรวมข้อมูลเกี่ยวกับองค์ประกอบทั้ง 4 ขององค์การ อย่างไรก็ตาม
                  บางปัญหาอาจไม่ได้มีสาเหตุมาจากองค์ประกอบดังกล่าว
                  แต่อาจเกิดจากกลยุทธ์ขององค์การ
                </li>
                <li>
                  6. Assess Congruence: ประเมินความสอดคล้องขององค์ประกอบต่างๆ
                  ขององค์การ
                </li>
                <li>
                  7. Generate Hypotheses:
                  เชื่อมโยงผลการวิเคราะห์ความสอดคล้องกับผลการวิเคราะห์ปัญหา
                  เพื่อค้นหาปัจจัยหลักที่ต้องการเปลี่ยนแปลง
                </li>
                <li>
                  8. Identify Action Steps: กำหนดวิธีการช่วยบรรเทาหรือแก้ปัญหา
                </li>
              </ol>
            </div>
          </div>
          <p>
            การวินิจฉัยระบบด้วย Star Model
            <ol>
              Star Model อธิบายว่าองค์การจะมีประสิทธิผลสูงสุด
              เมื่อองค์ประกอบหลักขององค์การมีความสอดคล้องกัน
              แนวทางการวินิจฉัยระบบ Star Model มีความคล้ายคลึงกับการวินิจฉัยระบบ
              Congruence Model
              <li>
                การวิเคราะห์องค์ประกอบหลักขององค์การที่นำเสนอใน Star Model
                มีรายละเอียดดังนี้
              </li>
              <li>
                1. Strategy (กลยุทธ์) หากขาดกลยุทธ์
                หรือกลยุทธ์ไม่มีความชัดเจนเพียงพอ หรือไม่ได้รับการยอมรับ
                จะก่อให้เกิดความสับสน เช่น องค์การขาดทิศทางในการพัฒนา
                และการกระทำที่ไร้ทิศทางของบุลากร/ฝ่าย
                จะส่งผลให้องค์การก้าวไปในทิศทางที่แตกต่างกัน
              </li>
              <li>
                2. Structure (โครงสร้าง)
                หากโครงสร้างองค์การไม่สอดคล้องกับกลยุทธ์ เช่น พันธกิจหนึ่งๆ
                ในแผนกกลยุทธ์
                ขาดการมอบหมายอย่างชัดเจนจะทำให้เกิดความขัดแย้งระหว่างหน่วยงาน
                และเกิดการไร้ประสิทธิภาพในการใช้ทรัพยากรและการดำเนินการ
              </li>
              <li>
                3. กระบวนการและความสามารถในการประสานข้ามหน่วยงาน (Processes and
                Lateral Capability)
                หากขาดการพัฒนากลไกสำหรับการประสานระหว่างหน่วยงาน
                โดยเฉพาะหน่วยงานที่มีพันธกิจคาบเกี่ยวหรือต่อเนื่องกัน
                การปฏิบัติงานต่างๆ ก็จะเกิดความไม่ราบรื่น เช่น
                เกิดความล่าช้าในการตัดสินใจ เกิดความล่าช้าในการพัฒนานวัตกรรม
                การแบ่งปันข้อมูลและถ่ายทอดวิธีปฏิบัติที่ดีเลิศ (Best Practice)
                ระหว่างหน่วยงานทำได้ยาก
              </li>
              <li>
                4. การให้รางวัล (Reward Systems) หากตัวชี้วัด (Indicators)
                หรือสิ่งที่องค์การวัดและรางวัลขององค์การไม่ส่งเสริมการบรรลุผลเป้าหมาย
                เช่น ให้ความสำคัญกับการขาด ลา มาสาย
                และอายุงานของบุคลากรมากกว่าการวัดและให้รางวัลกับผลงาน
                หรือพฤติกรรมการปฏิบัติงานที่สอดคล้องกับแผนกลยุทธ์
                และลักษณะของงานในโครงสร้างขององค์การก็จะไม่ได้ผลลัพธ์ตามต้องการ
              </li>
              <li>
                5. การบริหารจัดการคน (People Practices)
                หากพนักงานไม่ได้รับการพัฒนาศักยภาพและขาดอิสระในการปฏิบัติงาน
                รวมทั้งวิธีปฏิบัติต่างๆ
                เกี่ยวข้องกับการบริหารทรัพยากรมนุษย์ไม่อยู่ในลักษณะที่สอดคล้องกับกลยุทธ์ขององค์การ
                เช่น องค์การที่แข่งขันด้วยความแตกต่างของผลิตภัณฑ์
                ไม่ส่งเสริมให้พนักงานมีความคิดสร้างสรรค์
                และไม่เปิดโอกาสให้พนักงานมีอิสระในการทดลองทำสิ่งใหม่ๆ
                องค์การนั้นๆ
                ย่อมไม่สามารถพัฒนาผลิตภัณฑ์ให้มีความโดดเด่นเหนือคู่แข่ง
              </li>
            </ol>
          </p>
          <p>
            กลยุทธ์การแข่งขันตามแนวคิดของ Michael E. Porter
            <ol>
              <li>
                1. Cost Leadership
                กลยุทธ์ผู้นำด้านต้นทุนต่ำ-กลยุทธ์การขายสินค้า/บริการในราคาที่ต่ำกว่าคู่แข่งให้กับผู้บริโภคขนาดใหญ่
                เช่น การประหยัดขนาด (Economy of
                Scale)-องค์การที่เลือกใช้กลยุทธ์นี้ต้องพยายามให้การปฏิบัติงานต่างๆ
                เป็นไปอย่างมีประสิทธิภาพสูงสุด มุ่งลดต้นทุนตลอดเวลา
                ควบคุมค่าใช้จ่ายอย่างเคร่งครัด
              </li>
              <li>
                2. Differentiation กลยุทธ์สร้างความแตกต่าง
                -เป็นกลยุทธ์การขายสินค้า/บริการ
                ที่มีความแตกต่างจากคู่แข่งให้กับผู้บริโภคในตลาดขนาดใหญ่โดยความแตกต่างนี้
                อาจหมายถึง ความยืดหยุ่นของผลิตภัณฑ์ ความง่ายในการบำรุงรักษา
                ความประหยัดเชื้อเพลิงความง่ายในการติดตั้ง บริการดี
                รูปลักษณะที่สวยงาม ระยะเวลารับประกันที่ยาวนานกว่า ความทนทาน
                ความง่ายในการใช้งาน
              </li>
              <li>
                3. Cost Focus
                กลยุทธ์ต้นทุนต่ำในตลาดขนาดเล็กเป็นกลยุทธ์ที่มุ่งตอบสนองความต้องการของลูกค้าเฉพาะกลุ่มการขายสินค้า/บริการในราคาที่ต่ำ
                ซึ่งความต้องการของลูกค้ากลุ่มดังกล่าว
                มักถูกผู้ประกอบการรายอื่นมองข้าม
              </li>
              <li>
                4. Differentiation
                กลยุทธ์สร้างความแตกต่างในตลาดขนาดเล็ก-เป็นกลยุทธ์ที่มุ่งตอบสนองความต้องการของผู้บริโภคกลุ่มหนึ่งๆ
                โดยองค์การที่เลือกใช้กลยุทธ์นี้ต้องพยายามค้นหาความต้องการของผู้บริโภคในตลาดเป้าหมายดังกล่าว
                ซึ่งถูกละเลยโดยผู้ประกอบการรายอื่น
              </li>
            </ol>
          </p>
          <p>
            Shared Values
            <ol>
              Shared Values
              ค่านิยมที่ดำรงอยู่ภายในองค์การหมายถึงสิ่งที่สมาชิกในองค์การเห็นร่วมกันว่าดี
              -ค่านิยมเป็นองค์ประกอบหนึ่งของวัฒนธรรมองค์การ
              ที่สามารถครอบงำความเชื่อ
              และชี้นำพฤติกรรมการทำงานของสมาชิกในองค์การ
              ค่านิยมมักเกิดการปลูกฝังต่อๆ
              กันมาของผู้นำองค์การนั้นๆค่านิยมที่สอดคล้องกับกลยุทธ์ของผู้นำด้านต้นทุนต่ำและกลยุทธ์ต้นทุนต่ำในตลาดขนาดเล็ก
              ได้แก่
              <li>1. การใช้ทรัพยากรอย่างคุ้มค่า</li>
              <li>2. ความภักดีต่อองค์การ </li>
              <li>3. การทุ่มเทการทำงานหนัก</li>
              <li>
                4.
                การให้ความสำคัญกับการลดของเสียค่านิยมที่สอดคล้องกับกลยุทธ์สร้างความแตกต่างและกลยุทธ์สร้างความแตกต่างในตลาดขนาดเล็ก
                ได้แก่การพัฒนาอย่างต่อเนื่อง การริเริ่มและทดลองทำสิ่งใหม่ๆ
                การใส่ใจให้บริการ และการกระจายอำนาจ
              </li>
            </ol>
          </p>
          <p>
            Structure
            <ol>
              โครงสร้างองค์การ หรือ Structure ของ 7S Model
              <li>
                หมายถึงการแบ่งองค์การออกเป็นหน่วยย่อยๆ
                และการประสานกิจการของหน่วยงานย่อยเหล่านั้น เช่น การผลิต การตลาด
                การขาย การบริการหลังการขาย งานด้านบัญชี งานธุรการ เป็นต้น
              </li>
            </ol>
          </p>
          <p>
            โครงสร้างองค์การที่เป็นทางการอาจอยู่ในลักษณะต่างๆ ดังนี้
            <ol>
              1. Simple Structure โครงสร้างแบบง่าย มี 2 ระดับ
              คือระดับบังคับบัญชาและระดับปฏิบัติการ
              <li>
                ระดับบังคับบัญชามีเพียง 1 ตำแหน่ง คือเจ้าของกิจการ หรือผู้จัดการ
              </li>
              <li>ส่วนพนักงานทั้งหมดอยู่ในระดับปฏิบัติการ</li>
              <li>
                โครงสร้างแบบง่าย ไม่ได้จำแนกหน้าที่ต่างๆ เช่น งานด้านบัญชี
                การขาย หรือทรัพยากรมนุษย์ เป็นต้น
                พนักงานแต่ละคนจึงอาจทำงานซ้ำซ้อน
              </li>
            </ol>
          </p>
          <ol>
            ข้อดีข้อเสียของโครงสร้างแบบง่าย
            <li>
              ข้อดี คือมีความยืดหยุ่นสูง
              รวมทั้งทำให้องค์การสามารถสื่อสารและตัดสินใจได้อย่างรวดเร็ว
              โครงสร้างนี้เหมาะสำหรับกิจการที่เพิ่งก่อตั้ง
              หรือกิจการขนาดเล็กที่มีพนักงานจำนวนน้อย
            </li>
            <li>
              ข้อเสีย เมื่อองค์การมีพนักงานจำนวนมากขึ้น
              เจ้าของกิจการหรือผู้จัดการเพียงคนเดียวจะไม่สามารถบังคับบัญชาพนักงานทั้งหมดได้อย่างทั่วถึง
            </li>
          </ol>
          <ol>
            2. Functional Structure โครงสร้างที่แบ่งตามหน้าที่
            <li>
              เป็นโครงสร้างที่แยกงานหรือหน้าที่ต่างๆ ออกจากกัน
              โครงสร้างองค์การแบบนี้ประกอบด้วยหน่วยงานย่อยๆ
              ที่รับผิดชอบงานเฉพาะด้าน เช่น แผนกบัญชี แผนกการขาย
              แผนกทรัพยากรมนุษย์ เป็นต้น
            </li>
            <li>ข้อดีของโครงสร้างที่แบ่งตามหน้าที่</li>
            <li>
              บุคลากรในแต่ละหน่วยงานมีความเชียวชาญเฉพาะด้าน
              การปฏิบัติงานจึงเกิดประสิทธิภาพสูง
              การจัดโครงสร้างลักษณะนี้ทำให้การใช้ทรัพยากรเป็นไปอย่างคุ้มค่า
              เนื่องจากไม่เกิดความซ้ำซ้อนของงานด้านต่างๆ
            </li>
            <li>ส่วนข้อเสีย คือ</li>
            <li>
              อาจทำให้เกิดปัญหาการประสานงานข้ามหน่วย
              เนื่องจากแต่ละหน่วยมุ่งปฏิบัติงานในความรับผิดชอบให้บรรลุเป้าหมายของหน่วยตน
              อีกทั้งบุคลากรที่มีความเชียวชาญเฉพาะด้านอาจไม่เข้าใจและไม่ให้ความร่วมมือกับหน่วยอื่นๆ
              อย่างเพียงพอ
            </li>
          </ol>
          <ol>
            3. โครงสร้างที่แบ่งตามผลิตภัณฑ์/ที่ตั้งตามภูมิศาสตร์/ลูกค้า
            (Divisional Structure)
            <li>
              เป็นโครงสร้างที่ประกอบด้วยหน่วยย่อยๆ ที่แบ่งตามผลิตภัณฑ์ เช่น
              แผนกคอมพิวเตอร์ แบ่งตามที่ตั้งภูมิศาสตร์ เช่น สาขากรุงเทพฯ
              สาขาสกลนคร เป็นต้น แบ่งตามประเภทลูกค้า เช่น แผนกลูกค้าอุตสาหกรรม
              แผนกลูกค้าองค์การ
            </li>
            <li>
              ข้อดีของโครงสร้างที่แบ่งตามผลิตภัณฑ์/ที่ตั้งทางภูมิศาสตร์/ลูกค้า
            </li>
            <li>ช่วยลดปัญหาที่เกิดจากการประสานงานข้ามหน่วยงาน</li>
            <li>ข้อเสีย</li>
            <li>
              เกิดความสินเปลืองในการใช้ทรัพยากร
              เนื่องจากทุกหน่วยงานประกอบด้วยบุคลากรที่ปฏิบัติหน้าทีที่เหมือนกัน
            </li>
          </ol>
          <p>
            สรุปความสอดคล้องระหว่างโครงสร้างองค์การกับผลิตภัณฑ์ขององค์การในหัวข้อ
            Strategy มีรายเอียดดังนี้
            <ol>
              1. โครงสร้างองค์การแบบง่าย
              <li>
                ข้อดี เหมาะสำหรับองค์การที่เพิ่งก่อตั้ง หรือองค์การที่มีขนาดเล็ก
                ทำให้การสื่อสารและการตัดสินใจเรื่องต่างๆ เป็นไปอย่างรวดเร็ว
              </li>
              <li>
                ข้อเสีย แต่หากขนาดขององค์การใหญ่ขึ้น
                พนักงานจำนวนมากขึ้นที่อยู่ภายใต้การบังคับบัญชาของเจ้าของกิจการหรือผู้จัดการเพียงคนเดียวจะทำให้
                Span of Control ของโครงสร้างกว้างขึ้น
                ซึ่งจะทำให้เกิดปัญหาการบังคับบัญชาพนักงานไม่ทั่วถึง
              </li>
            </ol>
          </p>
          <ol>
            2. โครงสร้างองค์การที่แบ่งตามผลิตภัณฑ์/พื้นที่ทางภูมิศาสตร์/ลูกค้า
            <li>
              ข้อดี
              เหมาะสำหรับองค์การขนาดใหญ่ที่ดำเนินธุรกิจที่เกี่ยวข้องกับผลิตภัณฑ์จำนวนมากในหลายอุตสาหกรรมจำหน่ายผลิตภัณฑ์หนึ่งๆ
              ให้กับลูกค้าหลายประเภท หรือในภูมิภาคต่างๆ
            </li>
            <li>
              ข้อเสีย บุคลากรที่รับผิดชอบด้านหนึ่งๆ
              อาจไม่สามารถสนับสนุนผลิตภัณฑ์ทั้งหมดขององค์การที่อยู่ในอุตสาหกรรมที่แตกต่างกันได้อย่างมีประสิทธิภาพ
            </li>
            <li>
              ข้อเสีย บุคลากรที่รับผิดชอบด้านหนึ่งๆ
              อาจไม่สามารถสนับสนุนผลิตภัณฑ์ทั้งหมดขององค์การที่อยู่ในอุตสาหกรรมที่แตกต่างกันได้อย่างมีประสิทธิภาพ
            </li>
            <li>
              การวิเคราะห์โครงสร้างองค์การ นอกจากจะวิเคราะห์โครงสร้างแบบง่าย
              และโครงสร้างแบบแบ่งตามผลิตภัณฑ์/พื้นที่ทางภูมิศาสตร์/ลูกค้าแล้ว
              ยังต้องวิเคราะห์โครงสร้างแบบรวมศูนย์และแบบกระจายอำนาจควบคู่ไปด้วย
            </li>
          </ol>
          <p>
            Systems:ระบบ/ ขั้นตอนการดำเนินงาน
            <li>
              Mechanism:กลไก/การจัดสรรทรัพยากรเพื่อขับเคลื่อนขั้นตอนการดำเนินงาน
            </li>
            <li>Process:กระบวนการ/กิจกรรที่ดำเนินการอย่างเป็นขั้นตอน</li>
            <li>
              การวินิจฉัยระบบ (Systems) หรือรบบต่างๆ ขององค์การ หมายถึง
              ขั้นตอนการปฏิบัติงานที่มีการกำหนดอย่างชัดเจนตามโครงสร้างองค์การ
              เช่น แผนกบัญชี แผนกทรัพยากรมนุษย์ แผนกผลิต แผนกบริการ
              ซึ่งองค์ประกอบของระบบ ประกอบด้วย ปัจจัยนำเข้า กระบวนการ ผลผลิต
              และข้อมูลป้อนกลับซึ่งมีความสัมพันธ์เชื่อมโยงกัน
            </li>
            <li>
              กลไก (Mechanism) หมายถึง
              สิ่งที่ทำให้ระบบมีการขับเคลื่อนหรือดำเนินอยู่ได้
              โดยมีการจัดสรรทรัพยากร มีการจัดองค์การ หน่วยงาน
              หรือกลุ่มบุคคลเป็นผู้ดำเนินงาน
            </li>
            <li>
              กระบวนการ (Process) หมายถึง
              กิจกรรมที่ดำเนินการอย่างเป็นขั้นตอนของแต่ละหน่วย
              และประสานกันเป็นลำดับภายในระบบ
            </li>
            <li>ความสัมพันธ์ระหว่างระบบ กลไก และกระบวนการ</li>
            <li>ระบบ ขั้นตอน/มาตรการการป้องกันการแพร่ระบาดของโควิด-19</li>
            <li>
              กลไก การใช้ทรัพยากร คน งบประมาณ
              ในการขับเคลื่อนขั้นตอน/มาตรการการป้องกันการแพร่ระบาดของโควิด-19
            </li>
            <li>
              กระบวนการ จัดกิจกรรม/โครงการ เพื่อป้องกันการแพร่ระบาดของโควิด-19
            </li>
          </p>
          <p>
            การวินิจฉัยระบบ (Systems)
            <ol>
              การวินิจฉัย Systems หรือระบบต่างๆ ขององค์การ
              <li>
                คือการรวบรวมข้อมูลและพิจารณาผลงานต่างๆ
                ตามที่ปรากฏในผังโครงสร้างองค์การทีละหน่วย เช่น แผนกบัญชี
                แผนกทรัพยากรมนุษย์ แผนกผลิต แผนกบริการ โดยมีรายละเอียดดังนี้
              </li>
              <li>1. หน่วยนั้นๆ ปฏิบัติงานในความรับผิดชอบครบถ้วนหรือไม่</li>
              <li>
                แผนกบรรจุหีบห่อมีหน้าที่ตรวจสอบคุณภาพของสินค้าสำเร็จรูปก่อนที่จะบรรจุสินค้าลงในหีบห่อ
                ตรวจสอบคุณภาพของสินค้าทุกชิ้นตามที่ได้รับอบหมายหรือไม่
              </li>
              <li>
                2. คุณภาพผลงานของหน่วยงานนั้นๆ
                สอดคล้องกับความคาดหวังขององค์การหรือไม่
              </li>
              <li>
                แผนทรัพยากรมนุษย์สามารถสรรหาและคัดเลือกบุคลากรได้ทันกับความต้องการขององค์การหรือไม่
                ปริมาณของเสียในฝ่ายผลิตสูงเกินกว่าเกณฑ์มาตรฐานหรือไม่
                หน่วยงานหนึ่งๆ ทำงานเสร็จตามกำหนดเวลาหรือไม่ และงานหนึ่งๆ
                ทำเสร็จสมบูรณ์ในครั้งแรกหรือไม่
              </li>
              <li>
                3. วิธีปฏิบัติต่างๆ
                ก่อให้เกิดหรือจะก่อให้เกิดปัญหากับองค์การหรือไม่
              </li>
              <li>
                ฝ่ายทรัพยากรมนุษย์ใช้เกณฑ์ที่สามารถสะท้อนผลงานที่แท้จริงในการประเมินผลการปฏิบัติงานหรือไม่
                และให้รางวัลพนักงานตามคุณภาพของผลงานหรือไม่
              </li>
            </ol>
          </p>

          {/* <div id="navigation">
      <p>
        <strong>Navigation Here</strong>
      </p>
      <ul>
        <li>
          <a href="http://www.free-css.com/">Free CSS Templates</a>
        </li>
        <li>
          <a href="http://www.free-css.com/free-css-layouts.php">
            Free CSS Layouts
          </a>
        </li>
      </ul>
    </div> */}
          {/* <div id="extra">
      <p>
        <strong>More stuff here.</strong>
      </p>
      <p>
        sit malesuada lacus pellus parturpiscing. Pellenterdumat maecenatoque
        cras a magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
        eget temper lacus vestibus velit lacus venean. Magnaipsum tellus morbi
        leo aliquat nulla convallis pellentesque.
      </p>
    </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}
