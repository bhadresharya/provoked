'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { DAAS_BOARD } from '@/content/daasBoard';

const PHASES = ['create', 'hold-queue', 'to-active', 'hold-active', 'to-done', 'hold-done', 'clear'];

const PHASE_MS = {
  create: 1400,
  'hold-queue': 900,
  'to-active': 650,
  'hold-active': 1100,
  'to-done': 650,
  'hold-done': 1200,
  clear: 450,
};

function phaseToColumn(phase) {
  if (phase === 'create' || phase === 'hold-queue') return 'queue';
  if (phase === 'to-active' || phase === 'hold-active') return 'active';
  if (phase === 'to-done' || phase === 'hold-done') return 'done';
  return null;
}

function captionForPhase(phase, captions) {
  if (phase === 'create' || phase === 'hold-queue') return captions.create;
  if (phase === 'to-active' || phase === 'hold-active') return captions.active;
  if (phase === 'to-done' || phase === 'hold-done') return captions.done;
  return captions.create;
}

function BoardCard({ card, accent, isGhost, isTyping }) {
  return (
    <article
      className={`daas-board__card${isGhost ? ' daas-board__card--ghost' : ''}${
        isTyping ? ' daas-board__card--typing' : ''
      }`}
    >
      <div className="daas-board__card-top">
        <span className="daas-board__tag" style={{ '--tag-tint': accent }}>
          {card.tag}
        </span>
        <span className="daas-board__meta">{card.meta}</span>
      </div>
      {isTyping ? (
        <p className="daas-board__card-title daas-board__card-title--typing" aria-hidden="true">
          <span className="daas-board__typewriter">{card.title}</span>
          <span className="daas-board__caret" />
        </p>
      ) : (
        <h4 className="daas-board__card-title">{card.title}</h4>
      )}
      <div className="daas-board__card-foot">
        <span className="daas-board__avatar" aria-hidden="true" />
        <span className="daas-board__avatar daas-board__avatar--alt" aria-hidden="true" />
      </div>
    </article>
  );
}

export default function BoardPreview() {
  const {
    id,
    eyebrow,
    title,
    description,
    boardTitle,
    boardSubtitle,
    captions,
    columns,
    staticCards,
    animatedCard,
  } = DAAS_BOARD;

  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [phase, setPhase] = useState(reduceMotion ? 'hold-done' : 'create');
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '80px 0px', threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return undefined;

    const duration = PHASE_MS[phase] ?? 800;
    const timer = window.setTimeout(() => {
      const index = PHASES.indexOf(phase);
      const next = PHASES[(index + 1) % PHASES.length];
      if (next === 'create') setCycle((value) => value + 1);
      setPhase(next);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [phase, reduceMotion, inView]);

  const animatedColumn = reduceMotion ? 'done' : phaseToColumn(phase);
  const showAnimated = Boolean(animatedColumn);
  const isTyping = !reduceMotion && phase === 'create';
  const caption = captionForPhase(reduceMotion ? 'hold-done' : phase, captions);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="daas-section daas-board"
      aria-labelledby="daas-board-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-board__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-board-heading" className="daas-board__headline">
                {title}
              </h2>
              <p className="daas-board__lead">{description}</p>
            </header>

            <div className="daas-board__stage">
              <p className="daas-board__caption" aria-live="off">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={caption}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {caption}
                  </motion.span>
                </AnimatePresence>
              </p>

              <div className="daas-board__window" role="img" aria-label="Animated design request board">
                <div className="daas-board__chrome">
                  <div className="daas-board__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="daas-board__chrome-title">
                    <span className="daas-board__chrome-name">{boardTitle}</span>
                    <span className="daas-board__chrome-sep">/</span>
                    <span>{boardSubtitle}</span>
                  </div>
                </div>

                <div className="daas-board__toolbar" aria-hidden="true">
                  <span className="daas-board__view-pill">Board</span>
                  <span className="daas-board__view-muted">Table</span>
                  <span className="daas-board__view-muted">Timeline</span>
                  <span className="daas-board__toolbar-spacer" />
                  <span className="daas-board__filter">Filter</span>
                  <span className="daas-board__new">New</span>
                </div>

                <div className="daas-board__columns">
                  {columns.map((column) => {
                    const columnStatic = staticCards.filter((card) => card.column === column.id);
                    const showHero = showAnimated && animatedColumn === column.id;

                    return (
                      <div key={column.id} className="daas-board__column">
                        <div className="daas-board__column-head">
                          <span
                            className="daas-board__column-dot"
                            style={{ background: column.tint }}
                            aria-hidden="true"
                          />
                          <h3 className="daas-board__column-title">{column.title}</h3>
                          <span className="daas-board__column-count">
                            {columnStatic.length + (showHero ? 1 : 0)}
                          </span>
                        </div>

                        <div className="daas-board__column-body">
                          <AnimatePresence initial={false}>
                            {showHero ? (
                              <motion.div
                                key={`hero-${cycle}-${column.id}`}
                                className="daas-board__card-wrap daas-board__card-wrap--hero"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <BoardCard
                                  card={{
                                    ...animatedCard,
                                    meta:
                                      column.id === 'done'
                                        ? 'Delivered'
                                        : column.id === 'active'
                                          ? 'Due 48h'
                                          : animatedCard.meta,
                                  }}
                                  accent={column.tint}
                                  isTyping={isTyping}
                                />
                              </motion.div>
                            ) : null}
                          </AnimatePresence>

                          {columnStatic.map((card) => (
                            <div key={card.id} className="daas-board__card-wrap">
                              <BoardCard card={card} accent={column.tint} isGhost />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
