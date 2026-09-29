'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getHobbyThumbnailSrc } from '@/features/hobby/lib/get-hobby-thumbnail-src';

const HERO_COLLAGE = [
  { id: 'climbing', className: 'left-0 top-10 w-56 -rotate-6' },
  { id: 'reading', className: 'right-4 top-0 w-60 rotate-3' },
  { id: 'pottery', className: 'bottom-0 left-24 w-64 rotate-1' },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const item = shouldReduceMotion ? {} : itemVariants;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid items-center gap-12 py-12 md:py-16 lg:grid-cols-2 lg:py-20"
    >
      <div>
        <motion.p
          variants={item}
          className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
        >
          Find a hobby that fits you
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink-950 md:text-5xl lg:text-6xl"
        >
          나에게 맞는 <span className="text-primary">취미</span>,
          <br />
          지금 바로 발견하세요
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base text-ink-500 md:text-lg"
        >
          운동부터 지능, 예술까지. 마음이 끌리는 카테고리부터 부담 없이 둘러보고
          새로운 취미의 시작점을 찾아보세요.
        </motion.p>
        <motion.div variants={item} className="mt-8">
          <Button
            asChild
            size="lg"
            className="min-h-12 gap-2 rounded-full px-7 text-base"
          >
            <a href="#hobbies">
              취미 둘러보기
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </Button>
        </motion.div>
        <motion.p
          variants={item}
          className="mt-10 whitespace-nowrap text-lg text-ink-700"
        >
          <span className="text-2xl font-bold text-primary">18</span>가지 취미
          <span className="mx-3 text-line-200">|</span>
          <span className="text-2xl font-bold text-primary">3</span>개 카테고리
        </motion.p>
      </div>

      <motion.div
        variants={item}
        aria-hidden
        className="relative hidden h-[420px] lg:block"
      >
        {HERO_COLLAGE.map(({ id, className }) => (
          <div
            key={id}
            className={`absolute aspect-[4/3] overflow-hidden rounded-2xl border-4 border-surface-0 shadow-lg ${className}`}
          >
            <Image
              src={getHobbyThumbnailSrc({ id })}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};
