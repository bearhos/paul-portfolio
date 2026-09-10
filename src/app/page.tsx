import {
  ArrowUpRightIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadSimpleIcon,
  CodeIcon,
  DeviceMobileIcon,
  MapPinIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  AtomIcon,
  GitBranchIcon,
  LightningIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Navigation } from "@/components/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { PixelOrb } from "@/components/pixel-orb";
import {
  profile,
  projects,
  additionalWork,
  experience,
  stackGroups,
} from "@/content/portfolio";

const strengthIcons = [
  DeviceMobileIcon,
  GitBranchIcon,
  LightningIcon,
  UsersThreeIcon,
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="shell">
        <section id="home" className="intro-section" aria-label="Introduction">
          <div className="intro-bento">
            <div className="card hero-copy">
              <p className="greeting">
                <span className="greeting-line" />
                Hey, I’m Phước.
              </p>
              <h1>
                Thoughtful code.
                <br />
                <span>Real-world impact.</span>
              </h1>
              <p className="hero-description">
                Senior React Native engineer turning complex ideas into mobile
                experiences that feel simple.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View selected work <ArrowDownIcon size={18} />
                </a>
                <a
                  className="button button-secondary"
                  href={profile.cv}
                  download="Pham-Hai-Phuoc-CV.pdf"
                  aria-label="Download my CV (PDF)"
                >
                  Download my CV <DownloadSimpleIcon size={18} aria-hidden />
                </a>
                <a
                  className="hero-social"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Phước on LinkedIn (opens in new tab)"
                >
                  <LinkedinLogoIcon size={24} weight="regular" />
                </a>
              </div>
            </div>
            <div className="card hero-art">
              <PixelOrb />
              <div className="art-top">
                <AtomIcon size={20} />
                <span>Crafted for mobile</span>
              </div>
              <div className="art-bottom">
                <span>
                  A native feel.
                  <br />A thoughtful build.
                </span>
              </div>
            </div>
            <div className="card current-card">
              <div className="current-label">
                <span className="status-dot" />
                Currently building at
              </div>
              <div className="current-company">
                SCEX <span className="current-badge">Current</span>
              </div>
              <p>Senior React Native Engineer</p>
            </div>
            <div className="card focus-card">
              <span className="mini-label">My sweet spot</span>
              <h2>Mobile. Realtime. Fintech.</h2>
              <p>From the first interaction to the final release.</p>
              <div className="focus-icons" aria-hidden>
                <DeviceMobileIcon size={20} />
                <GitBranchIcon size={20} />
                <LightningIcon size={20} />
              </div>
            </div>
            <div className="card since-card">
              <span className="mini-label">Writing the next chapter</span>
              <div className="since-year">
                Since 2021<span>↗</span>
              </div>
              <p>Building, learning, shipping.</p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="work-section section-space"
          aria-labelledby="work-title"
        >
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Selected work</span>
              <h2 id="work-title">
                From idea to everyday use<span>.</span>
              </h2>
              <p>
                A few products I’ve helped build, improve, and bring to life.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ProjectGallery projects={projects} additional={additionalWork} />
          </Reveal>
        </section>

        <section
          id="experience"
          className="experience-section section-space"
          aria-labelledby="experience-title"
        >
          <Reveal className="experience-layout">
            <div className="experience-intro">
              <h2 id="experience-title">
                A little more
                <br />
                with every chapter<span>.</span>
              </h2>
              <p>
                From my first mobile feature to leading teams. Each product has
                shaped the way I think and build.
              </p>
              <div className="about-note">
                <CodeIcon size={25} />
                <p>
                  I care about what’s under the hood as much as what’s on the
                  screen.
                </p>
              </div>
              <div className="education">
                <span className="mini-label">The foundation</span>
                <h3>Bachelor of Information Technology</h3>
                <p>
                  UEF, Ho Chi Minh City
                  <br />
                  2018 - 2022
                </p>
              </div>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article
                  className={`timeline-item${job.current ? " current" : ""}`}
                  key={job.company}
                >
                  <div className="timeline-point" />
                  <div className="job-header">
                    <h3>{job.company}</h3>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <p className="job-role">{job.role}</p>
                  <p className="job-summary">{job.summary}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="stack"
          className="stack-section section-space"
          aria-labelledby="stack-title"
        >
          <Reveal>
            <div className="section-heading">
              <h2 id="stack-title">
                Good tools. Better judgment<span>.</span>
              </h2>
              <p>
                The technologies I work with, and the thinking I bring to them.
              </p>
            </div>
          </Reveal>
          <Reveal className="stack-layout">
            <div className="card stack-card">
              {stackGroups.map((group) => (
                <div className="stack-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="stack-tags">
                    {group.items.map((item) => (
                      <span key={item}>
                        {item === "React Native" && <AtomIcon size={17} />}
                        {item === "Next.js" && (
                          <span className="next-logo" aria-hidden>
                            N
                          </span>
                        )}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="principles">
              <h3>More than a tech stack.</h3>
              {[
                {
                  title: "Built to grow",
                  text: "Clear architecture and components that the next developer can understand.",
                },
                {
                  title: "Connected by design",
                  text: "Thoughtful SDK integrations, real-time services, and reliable state management.",
                },
                {
                  title: "Ready for real life",
                  text: "Attention to render performance, edge cases, and the release process.",
                },
                {
                  title: "Better, together",
                  text: "Code reviews, mentoring, and close collaboration with product teams.",
                },
              ].map((item, i) => {
                const Icon = strengthIcons[i];
                return (
                  <div className="principle" key={item.title}>
                    <span className="principle-icon">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section
          id="contact"
          className="contact-section section-space"
          aria-labelledby="contact-title"
        >
          <Reveal>
            <div className="card contact-card">
              <div className="contact-copy">
                <span className="eyebrow">Let’s connect</span>
                <h2 id="contact-title">
                  Great things start
                  <br />
                  with a conversation<span>.</span>
                </h2>
                <p>
                  Have an interesting idea, a technical challenge,
                  <br className="desktop-break" /> or just want to say hello?
                  I’d love to hear it.
                </p>
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}`}
                >
                  Start a conversation <ArrowUpRightIcon size={19} />
                </a>
              </div>
              <div className="contact-details">
                <EnvelopeSimpleIcon size={36} weight="thin" />
                <a className="email-address" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
                <div className="contact-detail-footer">
                  <span>
                    <MapPinIcon size={16} />
                    Ho Chi Minh City, Vietnam
                  </span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRightIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer shell">
        <a href="#home" className="wordmark" aria-label="phuoc. Back to top">
          phuoc<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Phạm Hải Phước</p>
        <a href="#home" className="back-to-top">
          Back to top <ArrowRightIcon size={15} />
        </a>
      </footer>
    </>
  );
}
