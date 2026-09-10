"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  XIcon,
  CodeIcon,
  DeviceMobileIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import type { Project } from "@/content/portfolio";

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "doxa-web" && project.screenshot)
    return (
      <div className="project-art doxa-art">
        <Image
          className="website-preview"
          src={project.screenshot}
          alt="Doxa website sign-in page with a forest background and email and Google sign-in options"
          width={1040}
          height={650}
          unoptimized
        />
      </div>
    );
  if ((project.id === "scex" || project.id === "danz") && project.screenshot)
    return (
      <div className={`project-art supplied-art ${project.id}-art`}>
        {project.id === "danz" && (
          <div className="supplied-cover-label" aria-hidden="true">
            <span>Danz People</span>
            <strong>{"Find your\nnext class."}</strong>
          </div>
        )}
        <Image
          className="supplied-preview"
          src={project.screenshot}
          alt={
            project.id === "scex"
              ? "Official SCEX Trading Simulator App Store preview showing its portfolio and market interface"
              : "Danz People app preview showing dance classes and instructors"
          }
          width={project.id === "scex" ? 222 : 166}
          height={project.id === "scex" ? 480 : 296}
          unoptimized
        />
      </div>
    );
  if (project.id === "acb" && project.screenshot)
    return (
      <div className="project-art acb-art">
        <Image
          className="acb-preview"
          src={project.screenshot}
          alt="Official ACB ONE App Store preview showing the digital banking home screen"
          width={392}
          height={696}
          unoptimized
        />
      </div>
    );
  return (
    <div className={`project-art ${project.id}-art`}>
      <div className="app-identity">
        {project.icon && (
          <Image
            src={project.icon}
            unoptimized
            alt={`${project.name} app icon`}
            width={70}
            height={70}
          />
        )}
        <span>
          {project.id === "sync"
            ? "A world of\nconversation."
            : "Your people.\nYour privacy."}
        </span>
      </div>
      {project.screenshot && (
        <Image
          className="app-preview"
          src={project.screenshot}
          unoptimized
          alt={`${project.name} public App Store preview`}
          width={240}
          height={480}
          sizes="(max-width: 767px) 160px, 220px"
        />
      )}
    </div>
  );
}

export function ProjectGallery({
  projects,
  additional,
}: {
  projects: Project[];
  additional: Project[];
}) {
  const [selected, setSelected] = useState<Project | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  return (
    <Dialog.Root
      open={selected !== null}
      onOpenChange={(value) => {
        if (!value) setSelected(null);
      }}
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card project-${project.id}`}
            key={project.id}
          >
            <ProjectVisual project={project} />
            <div className="project-info">
              <div className="project-heading">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>
                    <button
                      className="project-open"
                      onClick={(event) => {
                        opener.current = event.currentTarget;
                        setSelected(project);
                      }}
                      aria-label={`View ${project.name} project details`}
                      aria-haspopup="dialog"
                    >
                      {project.name}
                    </button>
                  </h3>
                </div>
                <span className="round-arrow">
                  <ArrowUpRightIcon size={23} />
                </span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.url && project.cardLinkLabel && (
                <a
                  className="project-store-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name}: ${project.cardLinkLabel} (opens in new tab)`}
                >
                  {project.cardLinkLabel}
                  <ArrowUpRightIcon size={16} aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="additional-work">
        <span className="muted">Also built</span>
        {additional.map((project) => (
          <button
            onClick={(event) => {
              opener.current = event.currentTarget;
              setSelected(project);
            }}
            key={project.id}
            aria-haspopup="dialog"
          >
            {project.id === "doxa-web" ? (
              <CodeIcon size={19} />
            ) : (
              <DeviceMobileIcon size={19} />
            )}
            {project.name}
            <ArrowUpRightIcon size={16} />
          </button>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content
          className="project-dialog"
          aria-describedby="project-description"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus();
          }}
        >
          {selected && (
            <>
              <Dialog.Close asChild>
                <button
                  className="icon-button dialog-close"
                  aria-label="Close project details"
                >
                  <XIcon size={22} />
                </button>
              </Dialog.Close>
              <span className="eyebrow">{selected.category}</span>
              <Dialog.Title>{selected.name}</Dialog.Title>
              <Dialog.Description id="project-description">
                {selected.overview ?? selected.description}
              </Dialog.Description>
              <div className="dialog-role">
                <span>My role</span>
                <strong>{selected.role}</strong>
              </div>
              {selected.contributions.length > 0 && (
                <>
                  <h3>What I contributed</h3>
                  <ul className="contribution-list">
                    {selected.contributions.map((text) => (
                      <li key={text}>
                        <CheckIcon size={18} aria-hidden />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="tags">
                {selected.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {selected.url && (
                <a
                  className="button button-primary dialog-link"
                  href={selected.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selected.linkLabel ?? "View on App Store"}
                  <ArrowUpRightIcon size={18} />
                </a>
              )}
              {selected.note && <p className="project-note">{selected.note}</p>}
              <Dialog.Close asChild>
                <button className="back-link">
                  Back to selected work <ArrowRightIcon size={17} />
                </button>
              </Dialog.Close>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
