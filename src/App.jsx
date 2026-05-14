import { useState } from "react"
import { FaFacebookF } from "react-icons/fa6"
import { SiDiscord, SiInstagram, SiTiktok, SiZalo } from "react-icons/si"

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100093302792405",
    icon: FaFacebookF,
    brand: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/phusc_tran/",
    icon: SiInstagram,
    brand: "instagram",
  },
  {
    name: "Zalo",
    url: "https://zalo.me/0365386170",
    icon: SiZalo,
    brand: "zalo",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@fab_16023?_r=1&_t=ZS-96JxJQtRFoY",
    icon: SiTiktok,
    brand: "tiktok",
  },
  {
    name: "Discord",
    url: "https://discord.gg/MNqkWt35Te",
    icon: SiDiscord,
    brand: "discord",
  },
]

const projects = [
  {
    name: "Project 01 — Cinematic Review",
    role: "Biên kịch • Biên tập • Đạo diễn lồng tiếng",
    video: "Video giới thiệu / thumbnail dự án",
    link: "https://youtube.com",
    desc: "Một dự án review mang màu sắc điện ảnh, tập trung vào nhịp kể, cảm xúc và hình ảnh.",
  },
  {
    name: "Project 02 — Media Campaign",
    role: "Content Planner • Storyboard • Visual Concept",
    video: "Video chiến dịch / short-form content",
    link: "https://tiktok.com",
    desc: "Dự án truyền thông ngắn, tối ưu cho TikTok/Reels với hook nhanh và visual mạnh.",
  },
  {
    name: "Project 03 — Storytelling Series",
    role: "Narrator • Research • Creative Direction",
    video: "Video series kể chuyện",
    link: "https://youtube.com",
    desc: "Series nội dung kể chuyện, biến thông tin khô thành trải nghiệm dễ xem, dễ nhớ.",
  },
]

const clientFiles = [
  {
    client: "Khách hàng A",
    project: "Dự án 01 — Video Review",
    fileName: "final-video-review.mp4",
    type: "Video hoàn thiện",
    size: "1.2GB",
    status: "Ready",
    updated: "14/05/2026",
    link: "https://drive.google.com",
  },
  {
    client: "Khách hàng B",
    project: "Dự án 02 — Media Campaign",
    fileName: "media-pack.zip",
    type: "Source file + thumbnail",
    size: "850MB",
    status: "Ready",
    updated: "14/05/2026",
    link: "https://drive.google.com",
  },
  {
    client: "Khách hàng C",
    project: "Dự án 03 — Storytelling Series",
    fileName: "script-and-assets.zip",
    type: "Kịch bản + asset",
    size: "320MB",
    status: "Processing",
    updated: "Đang cập nhật",
    link: "#",
  },
]

function App() {
  const [activeTab, setActiveTab] = useState("home")

  const scrollTo = (id) => {
    setActiveTab(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="site">
      <nav className="navbar">
        <div className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-dot"></span>
          <span>LUMINE</span>
        </div>

        <div className="menu">
          {[
            ["home", "Trang chủ"],
            ["projects", "Dự án"],
            ["files", "Nhận file"],
            ["about", "Vai trò"],
            ["contact", "Liên hệ"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={activeTab === id ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="noise"></div>
        <div className="spotlight"></div>

        <div className="hero-content">
          <p className="eyebrow">MEDIA PROFILE / CINEMA STYLE</p>

          <h1>
            Lumine
            <span>Creative Media Portfolio</span>
          </h1>

          <p className="hero-desc">
            Người sáng tạo nội dung, kể chuyện, dựng video và xây dựng trải nghiệm truyền thông mang hơi hướng điện ảnh.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollTo("projects")} className="main-btn">
              Xem dự án
            </button>

            <button onClick={() => scrollTo("files")} className="ghost-btn">
              Nhận file
            </button>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">CURRENT MODE</p>
          <h3>Storytelling</h3>
          <p>Video • Media • Cinema • Content</p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <p className="eyebrow">SELECTED WORKS</p>
          <h2>3 dự án nổi bật</h2>
          <p>
            Khu vực quảng cáo những dự án đã thực hiện: video, link video, tên dự án và phần phụ trách.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.name}>
              <div className="video-box">
                <span>▶</span>
                <p>{project.video}</p>
              </div>

              <div className="project-info">
                <p className="project-number">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p className="role">{project.role}</p>
                <p className="desc">{project.desc}</p>

                <a href={project.link} target="_blank" rel="noreferrer">
                  Xem video →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="files" className="section delivery-section">
        <div className="delivery-shell">
          <div className="delivery-header">
            <div>
              <p className="eyebrow">CLIENT DELIVERY</p>
              <h2>Khu vực nhận file</h2>
              <p>
                Nơi khách hàng nhận video, source file, thumbnail, kịch bản hoặc tài liệu bàn giao sau khi dự án hoàn tất.
              </p>
            </div>

            <div className="secure-badge">
              <span></span>
              <div>
                <b>Secure Delivery</b>
                <p>File bàn giao dự án</p>
              </div>
            </div>
          </div>

          <div className="delivery-grid">
            {clientFiles.map((file, index) => (
              <div className="delivery-card" key={file.fileName}>
                <div className="delivery-card-top">
                  <div>
                    <p className="file-index">DELIVERY 0{index + 1}</p>
                    <h3>{file.project}</h3>
                  </div>

                  <span className={file.status === "Ready" ? "status ready" : "status processing"}>
                    {file.status === "Ready" ? "Sẵn sàng" : "Đang xử lý"}
                  </span>
                </div>

                <div className="file-preview">
                  <div className="download-icon">↓</div>
                  <div>
                    <p>{file.fileName}</p>
                    <span>{file.type}</span>
                  </div>
                </div>

                <div className="delivery-info">
                  <div>
                    <span>Khách hàng</span>
                    <p>{file.client}</p>
                  </div>

                  <div>
                    <span>Dung lượng</span>
                    <p>{file.size}</p>
                  </div>

                  <div>
                    <span>Cập nhật</span>
                    <p>{file.updated}</p>
                  </div>
                </div>

                <a
                  href={file.link}
                  target="_blank"
                  rel="noreferrer"
                  className={file.status === "Ready" ? "delivery-btn" : "delivery-btn disabled"}
                >
                  {file.status === "Ready" ? "Nhận file ngay →" : "File chưa sẵn sàng"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <p className="eyebrow">WHAT I DO</p>
          <h2>Vai trò của tôi</h2>
        </div>

        <div className="about-grid">
          <div>
            <h3>🎬 Video Direction</h3>
            <p>Lên mood, bố cục hình ảnh, nhịp dựng và cảm giác điện ảnh cho video.</p>
          </div>

          <div>
            <h3>✍️ Script Writing</h3>
            <p>Viết hook, kịch bản kể chuyện, lời dẫn và cấu trúc nội dung dễ giữ chân người xem.</p>
          </div>

          <div>
            <h3>📱 Social Media</h3>
            <p>Tối ưu nội dung cho TikTok, Reels, Shorts và các nền tảng truyền thông cá nhân.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">SOCIAL LINKS</p>
        <h2>Kết nối với Lumine</h2>

        <div className="socials">
          {socials.map((s) => {
            const Icon = s.icon

            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={`social-link ${s.brand}`}
                aria-label={`Lumine on ${s.name}`}
              >
                <span className="social-icon">
                  <Icon aria-hidden="true" />
                </span>
                {s.name}
              </a>
            )
          })}
        </div>
      </section>

      <footer>
  <p className="footer-label">Real name</p>

  <h2 className="footer-name">Trần Hoàng Phúc</h2>

  <a className="footer-email" href="mailto:hoangphuc8027@gmail.com">
    <span className="email-icon">@</span>

    <span className="email-content">
      <small>Email liên hệ</small>
      <b>hoangphuc8027@gmail.com</b>
    </span>
  </a>
</footer>
    </div>
  )
}

export default App
