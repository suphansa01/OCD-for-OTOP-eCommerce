import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href={
                      "https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    }
                    target="blank"
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-1-66.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                </h3>
                <p>
                  <Link
                    href={
                      "https://policywatch.thaipbs.or.th/article/environment-56"
                    }
                    target="blank"
                  >
                    การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                    การสร้างความพร้อมในการเปลี่ยนแปลงของสมาชิกในองค์การ
                    การสร้างวิสัยทัศน์
                    การแสวงหาแรงสนับสนุนในการเปลี่ยนแปลงจากกลุ่มผลประโยชน์
                  </Link>
                </p>
                <p></p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-67-71.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>
                  <Link
                    href={"https://today.line.me/th/v2/article/PGjJezj"}
                    target="blank"
                  >
                    ในโลกปัจจุบัน เรากำลังเผชิญกับ Disruption
                    คือการเปลี่ยนแปลงอย่างฉับพลันและพลิกโฉม ในหลากหลายมิติ
                    สร้างผลกระทบทั้งในระดับ Global และ Local
                  </Link>
                </p>
                <p>
                  กระแสดิสรัปชันเขย่าโลก
                  เกิดการเปลี่ยนแปลงอย่างฉับพลันในหลายมิติ
                  ในขณะที่สังคมไทยกำลังเร่งเข้าสู่สังคมสูงวัย
                  แต่คนในสังคมยังไม่เข้าใจมากพอว่าจะเกิดอะไรขึ้น "นพ.วิจารณ์
                  พานิช" แนะ 5 กลยุทธ์รับสถานการณ์ ทุกฝ่ายต้องร่วมมือกัน
                  เพราะไม่ใช่เรื่องของผู้สูงอายุ แต่เป็นเรื่องของทุกคน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-72-75.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={"https://today.line.me/th/v2/article/YaXWyej"}
                    target="blankhttps://today.line.me/th/v2/article/YaXWyej"
                  >
                    เข้าสู่การเปลี่ยนแปลง สร้างสรรค์พื้นที่
                    ขับเคลื่อนอนาคตด้วยพลังแห่งนวัตกรรม
                  </Link>
                </p>
                <p>
                  เข้าสู่การเปลี่ยนแปลง สร้างสรรค์พื้นที่สำหรับทุกคน
                  เพื่อขับเคลื่อนอนาคตด้วยพลังแห่งนวัตกรรม
                  การเปลี่ยนผ่านสู่ดิจิทัล หรือ Digital Transformation (DX)
                  คือการเพิ่มประสิทธิภาพของข้อมูลและทรัพยากรทางบุคลากร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-76-78.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://www.salika.co/2024/10/07/etda-nstda-ai-for-organization-usage-2024/"
                    }
                    target="blank"
                  >
                    ETDA จับมือ สวทช. เปิดผลการศึกษาล่าสุด ชี้ประเทศไทยปรับใช้
                    AI ในองค์กร เพิ่มขึ้นต่อเนื่อง
                    สอดรับแผนปฏิบัติการขับเคลื่อนประเทศด้วย AI
                  </Link>
                </p>
                <p>
                  เปิดเผยถึง 5
                  เกณฑ์สำคัญที่ใช้ในการประเมินความพร้อมขององค์กรในการปรับใช้ AI
                  ในองค์กร
                  และนำไปสู่แนวทางการส่งเสริมให้เกิดการประยุกต์ใช้งานเทคโนโลยี
                  AI ในภาคธุรกิจ/ อุตสาหกรรม ที่สอดคล้องกับบริบทของประเทศไทย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-79-82.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://www.nectec.or.th/news/news-pr-news/smc-openhouse2024.html"
                    }
                    target="blank"
                  >
                    เปิดบ้าน SMC 2024! เผยผลสำเร็จ 1 ปี
                    ยกระดับโรงงานด้วยเทคโนโลยี ลดต้นทุน-พลังงาน
                    เพิ่มประสิทธิภาพการผลิต พร้อมเดินหน้าภารกิจปี 68
                    หนุนใช้ดิจิทัลปั้นอุตสาหกรรม 4.0 อย่างยั่งยืน
                  </Link>
                </p>
                <p>
                  ศูนย์นวัตกรรมการผลิตยั่งยืน หรือ SMC (Sustainable
                  Manufacturing Center)
                  ภายใต้เมืองนวัตกรรมระบบอัตโนมัติหุ่นยนต์และอิเล็กทรอนิกส์อัจฉริยะ
                  (ARIPOLIS) ในเขตนวัตกรรมระเบียงเศรษฐกิจพิเศษภาคตะวันออก
                  (Eastern Economic Corridor of Innovation: EECi)
                  หน่วยงานภายใต้สังกัดสำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ
                  (สวทช.) กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.)
                  ร่วมกับ พันธมิตรภาคอุตสาหกรรม
                  จัดกิจกรรมเปิดบ้านศูนย์นวัตกรรมการผลิตยั่งยืน (SMC Open House
                  2024) ภายใต้แนวคิด “เทคโนโลยีดิจิทัล
                  เปลี่ยนอุตสาหกรรมสู่อนาคตที่ยั่งยืน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-83-85.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href={
                      "https://themomentum.co/ruleoflaw-civil-disobedience/"
                    }
                    target="blank"
                  >
                    อารยะขัดขืนและการต่อต้านด้วยสันติวิธี:
                    เมื่อภาคประชาชนเคลื่อนไหวโดยปราศจากความรุนแรง
                  </Link>
                </p>
                <p>
                  “การฝ่าฝืนต่อกฎหมายด้วยมโนธรรมสำนึก
                  ซึ่งกระทำอย่างเปิดเผยในที่สาธารณะ
                  โดยไม่ใช้ความรุนแรงและเป็นการกระทำในเชิงการเมืองที่มุ่งหมายจะให้เกิดการเปลี่ยนแปลงในกฎหมายหรือนโยยายของรัฐบาล
                  ทั้งยังรวมไปถึงการละเมิดกฎหมายซึ่งไม่มีข้อบกพร่องเกี่ยวกับความเป็นธรรมของตัวกฎหมายเอง
                  แต่อาจละเมิดกฎหมายนี้เพื่อเรียกร้องความสนใจต่อกฎหมายฉบับอื่นๆ
                  ที่ไม่เป็นธรรม”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-86-89.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  <Link
                    href={
                      "https://www.thansettakij.com/business/economy/606177"
                    }
                    target="blank"
                  >
                    เจาะลึกนโยบายรัฐบาล “รื้อระบบราชการไทย”
                    ต้านโกง-ลดไซส์-ใช้งบน้อยฯ
                  </Link>
                </p>
                <p>
                  รัฐบาลแพทองธาร ชินวัตร วางนโยบาย
                  “การปฏิรูประบบราชการและกองทัพ” ครั้งใหญ่ มุ่งสู่การเป็น
                  Digital Government ใช้งบฯน้อยที่สุดแต่มีประสิทธิภาพมากที่สุด
                  จะมีการลดขนาดองค์กร ต่อต้านการทุจริตคอร์รัปชัน
                  และกระจายอำนาจสู่ท้องถิ่น ยกระดับบริการภาครัฐตอบโจทย์ประชาชน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-90-92.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  <Link
                    href={"https://www.infoquest.co.th/2024/408832"}
                    target="blank"
                  >
                    <ol></ol>
                    <li>
                      1. องค์ประกอบที่เป็นรูปธรรม (A Cognitive Vision)
                      เน้นผลลัพธ์และวิธีการทำให้เกิดผลลัพธ์
                    </li>
                    <li>
                      2. องค์ประกอบด้านอารมณ์ (An Affective Component)
                      การจูงใจคนและทำให้เกิดความมุ่งมั่น
                    </li>
                    <li>
                      3. ความจำเป็นในการเปลี่ยนแปลง (Why the Change is
                      needed/The Problem)
                    </li>
                    <li>
                      4. ผลลัพธ์ที่เกิดจากการเปลี่ยนแปลง (The aim of the
                      change/The Solution)
                    </li>
                    <li>5. สถานะในอนาคตที่ต้องการ (Desired Future State)</li>
                  </Link>
                </p>
                <p>
                  เปิดวิสัยทัศน์ เลขากกพ. คนใหม่
                  มุ่งสร้างเสถียรภาพราคาพลังงาน-เพิ่มขีดความสามารถแข่งขัน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-93-98.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <li>1. การชี้นำโดยผู้นำ (Leader-dominated Approach)</li>
                  <li>2. การให้แนวทาง (Pump-priming Approach)</li>
                  <li>3. การอำนวยการ (Facilitation Approach)</li>
                </p>
                <p>
                  <Link
                    href={
                      "https://workpointtoday.com/ai-750156-2/#google_vignette"
                    }
                    target="blank"
                  >
                    ใช้ AI อย่างมีกลยุทธ์!! “วิทยาลัยนวัตกรรม ม.ธรรมศาสตร์”
                    พาติดตาม “องค์กรและ CIO ติดอาวุธอย่างไรในวันที่ AI
                    เป็นทรัพยากรหลัก"
                  </Link>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-99-102.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders)
                </h3>
                <p>
                  <li>
                    1.
                    การแจกแจงผู้มีส่วนได้ส่วนเสียทั้งที่เป็นกลุ่มบุคคลที่เกี่ยวข้องกับองค์การโดยตรง
                  </li>
                  <li>2. การประเมินศักยภาพของผู้มีส่วนได้ส่วนเสีย</li>
                  <li>3. การตรวจสอบประวัติ</li>
                  <li>
                    4.
                    การประเมินผลประโยชน์ของผู้มีส่วนได้ส่วนเสียแต่ละกลุ่มที่ได้รับผลกระทบจากการเปลี่ยนแปลง
                  </li>
                  <li>
                    5.
                    ระบุกลุ่มผู้มีส่วนได้ส่วนเสียที่น่าจะได้รับผลกระทบให้ชัดเจน
                  </li>
                </p>
                <p>
                  <Link
                    href={
                      "https://www.ghbank.co.th/information/stakeholders/policy/stakeholder-management-policy/"
                    }
                    target="blank"
                  >
                    นโยบายด้านการบริหารจัดการผู้มีส่วนได้ส่วนเสีย
                  </Link>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-103-106.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders)
                </h3>
                <p>
                  <Link
                    href={
                      "https://www.wearecp.com/true-building-esg-driven-society19/"
                    }
                    target="blank"
                  >
                    How To Drive ESG เป็นหนึ่งในชุดบทความที่นำเสนอภายใต้ซีรีส์
                    “สร้างสังคมฉุกคิดด้วย…ESG”
                    บอกเล่ากระบวนการดำเนินธุรกิจอย่างยั่งยืนบนหลักการ ESG
                    ของบริษัทจดทะเบียน
                    โดยรวบรวมเพื่อสร้างชุดข้อมูลการตระหนักรู้ของการประกอบธุรกิจในวิถี
                    ESG ที่จะเป็นภูมิคุ้มกันสำคัญขององค์กร
                    ท่ามกลางการเปลี่ยนแปลงที่เร็วยากจะคาดเดา
                    และการมุ่งสู่การพัฒนาอย่างยั่งยืนของโลก
                  </Link>
                </p>
                <p>
                  ความท้าทายในการขับเคลื่อนงานด้านความยั่งยืนของ “ทรู”
                  ด้วยการใช้ “นวัตกรรม” ยกระดับเป้าหมายการพัฒนาที่ยั่งยืน
                  พร้อมกับการติดปีกความยั่งยืนให้องค์กรในเครือ
                  และได้รับรางวัลความยั่งยืนระดับโลก DJSI Gold Class 4
                  ปีต่อเนื่อง และรางวัลด้านความยั่งยืนภายในประเทศ “CP for
                  Sustainability Awards 2021”
                  ในฐานะแบบอย่างด้านการจัดการนวัตกรรมและการศึกษา
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-107-110.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  <Link
                    href={
                      "https://www.thaigov.go.th/news/contents/details/92607"
                    }
                    target="blaank"
                  >
                    <li>
                      1. ประธานเจ้าหน้าที่บริหาร
                      หรือผู้บังคับบัญชาที่รับผิดชอบกิจกรรมการเปลี่ยนแปลง
                    </li>
                    <li>
                      2.
                      ผู้จัดการโครงการที่ได้รับมอบหมายกรณีพิเศษให้ประสานงานการเปลี่ยนแปลง
                    </li>
                    <li>
                      3.
                      ผู้ดำรงตำแหน่งผู้จัดการอย่างเป็นทางการตามโครงสร้างขององค์การ
                    </li>
                    <li>
                      4.
                      ตัวแทนของกลุ่มบุคคลที่ได้รับผลกระทบจากการเปลี่ยนแปลงซึ่งจะเข้าร่วมบริหารโครงการ
                    </li>
                    <li>
                      5. ผู้ที่มีภาวะผู้นำ ที่ได้รับความเชื่อถือและความไว้วางใจ
                    </li>
                    <li>
                      6.
                      พนักงานที่เป็นตัวแทนของหน่วยงานและลำดับชั้นการบังคับบัญชา
                    </li>
                    <li>
                      7. Kitchen Cabinet
                      คือผู้ที่ประธานเจ้าหน้าที่บริหารมักขอคำปรึกษาและไว้วางใจให้รับผิดชอบกิจกรรมที่เกี่ยวข้องกับการเปลี่ยนแปลง
                    </li>
                  </Link>
                </p>
                <p></p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-111-114.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum)</h3>
                <p>
                  <li>
                    1.
                    การดำเนินเปลี่ยนแปลงทำให้เกิดค่าใช้จ่ายอย่างหลีกเลี่ยงไม่ได้
                  </li>
                  <li>2. การพัฒนาสมรรถนะและทักษะที่จำเป็นต่อการเปลี่ยนแปลง</li>
                  <li>3. การส่งเสริมให้พนักงานแสดงพฤติกรรมใหม่</li>
                </p>
                <p>
                  <Link
                    href={"https://www.thairath.co.th/news/politic/2813903"}
                    target="blank"
                  >
                    นายกฯ อิ๊งค์ แถลงนโยบายรัฐบาล
                    ยันเดินหน้าดิจิทัลวอลเล็ต-จะปรับโครงสร้างภาษีครั้งใหญ่
                  </Link>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_project-115-119.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="images/change/change_project-115-119.pdf"
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
