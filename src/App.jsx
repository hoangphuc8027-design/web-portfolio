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

const featuredPhotos = [
  {
    title: "Sakura Gate",
    image: "/gallery/photo-01.jpeg",
    location: "Yamagata Castle, Japan",
    capturedAt: "13/04/2024 • 11:57",
    specs: "70mm • f/5 • ISO 125 • 1/800s",
  },
  {
    title: "Spring Horizon",
    image: "/gallery/photo-02.jpeg",
    location: "Yamagata Castle, Japan",
    capturedAt: "13/04/2024 • 12:11",
    specs: "55mm • f/6.3 • ISO 200 • 1/500s",
  },
  {
    title: "Pink Fortress",
    image: "/gallery/photo-03.jpeg",
    location: "Yamagata Castle, Japan",
    capturedAt: "13/04/2024 • 12:03",
    specs: "85mm • f/6.3 • ISO 125 • 1/800s",
  },
  {
    title: "Snowfall Alley",
    image: "/gallery/photo-04.jpeg",
    location: "Higashine, Japan",
    capturedAt: "08/01/2024 • 09:56",
    specs: "50mm • f/6.3 • ISO 125 • 1/100s",
  },
  {
    title: "Spring Riverside",
    image: "/gallery/photo-05.jpg",
    location: "Higashine, Japan",
    capturedAt: "04/05/2023 • 10:48",
    specs: "22mm • f/9 • ISO 160 • 1/400s",
  },
  {
    title: "High School Student",
    image: "/gallery/photo-06.jpg",
    location: "Quang Trung High School",
    capturedAt: "17/05/2026 • 9:00",
    specs: "70mm • f/2.8 • ISO 500 • 1/640s",
  },
]

const featuredVideos = [
  {
    title: "Video tự quay dựng 01",
    role: "Quay • Dựng • Color",
    link: "#",
    status: "Chưa gắn link",
  },
  {
    title: "Video tự quay dựng 02",
    role: "Quay • Dựng • Storytelling",
    link: "#",
    status: "Chưa gắn link",
  },
]

const developmentProject = {
  title: "Pixel World Online",
  image: "/gallery/pixel-world-ultimate-bundle.png",
  status: "Đang phát triển",
  type: "Game pixel online",
  server: "Máy chủ Việt Nam",
  budget: "~120.000.000vnđ",
  description:
    "Dự án game pixel online đang được phát triển với định hướng máy chủ Việt Nam, tối ưu cộng đồng người chơi trong nước và mở rộng nội dung theo từng giai đoạn.",
}

const clientFiles = [
  {
    client: "No Name",
    project: "No content",
    fileName: "No source",
    type: "Chưa có sẵn",
    size: "~ ~",
    status: "Processing",
    updated: "14/05/2026",
    link: "https://drive.google.com",
    password: "lumine2026",
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
    password: "lumine2026",
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
    password: "lumine2026",
  },
]

const visibleClientFiles = clientFiles.slice(0, 1)

function App() {
  const [activeTab, setActiveTab] = useState("home")
  const [activeDelivery, setActiveDelivery] = useState(null)
  const [deliveryPassword, setDeliveryPassword] = useState("")
  const [deliveryError, setDeliveryError] = useState("")

  const scrollTo = (id) => {
    setActiveTab(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const openDeliveryGate = (file) => {
    if (file.status !== "Ready") return

    setActiveDelivery(file)
    setDeliveryPassword("")
    setDeliveryError("")
  }

  const closeDeliveryGate = () => {
    setActiveDelivery(null)
    setDeliveryPassword("")
    setDeliveryError("")
  }

  const unlockDelivery = (event) => {
    event.preventDefault()

    if (!activeDelivery) return

    if (deliveryPassword.trim() !== activeDelivery.password) {
      setDeliveryError("Mật khẩu chưa đúng. Vui lòng thử lại.")
      return
    }

    window.open(activeDelivery.link, "_blank", "noopener,noreferrer")
    closeDeliveryGate()
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

      <section id="home" className="development-hero">
        <div className="development-copy">
          <p className="eyebrow">PROJECT IN DEVELOPMENT</p>
          <h1>{developmentProject.title}</h1>
          <p className="development-desc">{developmentProject.description}</p>

          <div className="development-stats">
            <div>
              <span>Trạng thái</span>
              <b>{developmentProject.status}</b>
            </div>
            <div>
              <span>Loại dự án</span>
              <b>{developmentProject.type}</b>
            </div>
            <div>
              <span>Sever</span>
              <b>{developmentProject.server}</b>
            </div>
            <div>
              <span>Kinh Phí</span>
              <b>{developmentProject.budget}</b>
            </div>
          </div>

          <div className="hero-actions">
            <button onClick={() => scrollTo("projects")} className="main-btn">
              Xem thêm dự án
            </button>

            <button onClick={() => scrollTo("contact")} className="ghost-btn">
              Liên hệ hợp tác
            </button>
          </div>
        </div>

        <div className="development-visual">
          <img
            src={developmentProject.image}
            alt="Pixel World Ultimate Bundle preview"
            onError={(event) => event.currentTarget.remove()}
          />
          <div className="development-badge">
            <span></span>
            <b>{developmentProject.status}</b>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="noise"></div>
        <div className="spotlight"></div>

        <div className="hero-content">
          <p className="eyebrow">MEDIA PROFILE / CINEMA STYLE</p>

          <h1>
            <span className="hero-title-main">Lumine</span>
            <span className="hero-owner">Trần Phusc</span>
            <span className="hero-subtitle">Creative Media Portfolio</span>
          </h1>

          <p className="hero-desc">
            Người sáng tạo nội dung, dựng video và xây dựng trải nghiệm truyền thông.
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
          <p className="eyebrow">FEATURED GALLERY</p>
          <h2>Visual Stories</h2>
          <p>
            Selected photos with locations, capture time and camera settings.
          </p>
        </div>

        <div className="photo-gallery">
          {featuredPhotos.map((photo, index) => (
            <article className="photo-card" key={photo.title}>
              <div className="photo-frame">
                <img
                  src={photo.image}
                  alt={photo.title}
                  onError={(event) => event.currentTarget.remove()}
                />
              </div>

              <div className="photo-info">
                <p className="project-number">PHOTO 0{index + 1}</p>
                <h3>{photo.title}</h3>

                <div className="photo-meta">
                  <div>
                    <span>Địa điểm</span>
                    <p>{photo.location}</p>
                  </div>
                  <div>
                    <span>Thời gian</span>
                    <p>{photo.capturedAt}</p>
                  </div>
                  <div>
                    <span>Thông số</span>
                    <p>{photo.specs}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="video-showcase">
          {featuredVideos.map((video, index) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className={video.link === "#" ? "video-slot disabled" : "video-slot"}
            >
              <span>▶</span>
              <div>
                <p>VIDEO 0{index + 1}</p>
                <h3>{video.title}</h3>
                <small>{video.role}</small>
              </div>
              <b>{video.status}</b>
            </a>
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
            {visibleClientFiles.map((file, index) => (
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

                <button
                  type="button"
                  onClick={() => openDeliveryGate(file)}
                  className={file.status === "Ready" ? "delivery-btn" : "delivery-btn disabled"}
                >
                  {file.status === "Ready" ? "Nhận file ngay →" : "File chưa sẵn sàng"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeDelivery && (
        <div className="password-overlay" role="dialog" aria-modal="true">
          <form className="password-modal" onSubmit={unlockDelivery}>
            <button
              type="button"
              className="password-close"
              onClick={closeDeliveryGate}
              aria-label="Đóng"
            >
              ×
            </button>

            <p className="eyebrow">SECURE ACCESS</p>
            <h3>Nhập mật khẩu nhận file</h3>
            <p>
              File: <b>{activeDelivery.fileName}</b>
            </p>

            <label htmlFor="delivery-password">Mật khẩu</label>
            <input
              id="delivery-password"
              type="password"
              value={deliveryPassword}
              onChange={(event) => {
                setDeliveryPassword(event.target.value)
                setDeliveryError("")
              }}
              autoFocus
              placeholder="Nhập mật khẩu khách hàng"
            />

            {deliveryError && <span className="password-error">{deliveryError}</span>}

            <button type="submit" className="password-submit">
              Mở link Drive
            </button>
          </form>
        </div>
      )}

      <section id="about" className="section about">
        <div>
          <p className="eyebrow">WHAT I DO</p>
          <h2>Vai trò của tôi</h2>
        </div>

        <div className="about-grid">
          <div>
            <h3>🎬 Video Direction</h3>
            <p>Lên ý tưởng, biên kịch và hậu kỳ, storytelling.</p>
          </div>

          <div>
            <h3>🤖 AI Creative</h3>
            <p>AI tool, automation workflows và ứng dụng AI vào quy trình sản xuất nội dung media.</p>
          </div>

          <div>
            <h3>📱 Social Media</h3>
            <p>Tối ưu nội dung cho TikTok, Reels, Shorts và các nền tảng truyền thông cá nhân.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">SOCIAL LINKS</p>
        <h2>Liên hệ với tôi</h2>

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
