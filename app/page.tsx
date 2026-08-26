"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  FlaskConical,
  Globe2,
  Menu,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    name: "Fin & Tube",
    desc: "High-performance condenser, evaporator and cooling coil solutions engineered for reliable thermal performance.",
    icon: Zap,
  },
  {
    name: "Bar & Plate",
    desc: "Efficient and compact cooling solutions for demanding industrial applications.",
    icon: Factory,
  },
  {
    name: "Micro Channels",
    desc: "Compact heat exchanger technology designed for high efficiency and reduced footprint.",
    icon: Wrench,
  },
  {
    name: "Complete HVAC System",
    desc: "Integrated HVAC solutions engineered for commercial and industrial applications.",
    icon: Globe2,
  },
  {
    name: "Refrigeration",
    desc: "Advanced refrigeration components and thermal solutions for reliable cooling.",
    icon: FlaskConical,
  },
  {
    name: "Technical Tubes",
    desc: "Precision manufactured tubes for HVAC, refrigeration and thermal applications.",
    icon: ShieldCheck,
  },
];

const features = [
  {
    icon: Factory,
    title: "Modern Manufacturing",
    desc: "Advanced manufacturing facilities designed for precision, efficiency and scalable production.",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    desc: "Continuous innovation supported by engineering expertise and dedicated R&D capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Global Quality Standards",
    desc: "Strong focus on quality, safety and manufacturing compliance across every product.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Reliable thermal solutions serving customers across domestic and international markets.",
  },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "CE Certified",
  "BIS Certified",
  "UL-207",
  "AHRI",
];

const stats = [
  {
    number: "2",
    label: "Manufacturing Facilities",
  },
  {
    number: "200+",
    label: "Customers",
  },
  {
    number: "1",
    label: "R&D Facility",
  },
  {
    number: "1500+",
    label: "Skilled Workforce",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

          <a href="#" className="flex flex-col">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              KRN
              <span className="ml-2 text-[#179DF8]">
                HEAT EXCHANGERS
              </span>
            </h2>

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Engineering Excellence
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a
              href="#about"
              className="transition-colors hover:text-[#179DF8]"
            >
              About
            </a>

            <a
              href="#products"
              className="transition-colors hover:text-[#179DF8]"
            >
              Products
            </a>

            <a
              href="#quality"
              className="transition-colors hover:text-[#179DF8]"
            >
              Quality
            </a>

            <a
              href="#contact"
              className="
                rounded-full
                bg-[#179DF8]
                px-6 py-3
                text-white
                shadow-lg
                shadow-[#179DF8]/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#078CE5]
                hover:shadow-xl
                hover:shadow-[#179DF8]/30
              "
            >
              Contact Us
            </a>
          </nav>

          <button className="md:hidden">
            <Menu className="text-slate-900" />
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative min-h-[760px] overflow-hidden bg-white pt-20">

        <div className="absolute -right-[150px] top-10 h-[600px] w-[600px] rounded-full bg-[#179DF8]/10 blur-[140px]" />

        <div className="absolute -left-[250px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#179DF8]/5 blur-[130px]" />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

          {/* LEFT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#179DF8]/20
                bg-[#179DF8]/10
                px-4 py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#179DF8]
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#179DF8]" />

              Welcome to KRN
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-950
                md:text-6xl
                lg:text-7xl
              "
            >
              Engineering
              <span className="block text-[#179DF8]">
                Thermal Excellence.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Advanced heat exchangers, cooling coils and HVAC &
              refrigeration solutions engineered for performance,
              precision and reliability.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#179DF8]
                  px-7 py-4
                  font-bold
                  text-white
                  shadow-xl
                  shadow-[#179DF8]/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#078CE5]
                  hover:shadow-[#179DF8]/30
                "
              >
                Explore Products

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-7 py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#179DF8]
                  hover:text-[#179DF8]
                  hover:shadow-lg
                "
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[38px] bg-[#F2FAFF] p-4 shadow-2xl shadow-[#179DF8]/10">

              <div className="relative h-[520px] overflow-hidden rounded-[30px]">

                <img
                  src="https://krnheatexchanger.com/wp-content/uploads/slider/cache/843801c099c1286a1bbc5cc5e5eb7edc/3.jpg"
                  alt="KRN Manufacturing"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

                  <p className="text-xs font-bold uppercase tracking-widest text-[#179DF8]">
                    Engineering Excellence
                  </p>

                  <p className="mt-2 text-xl font-black text-slate-950">
                    Built for Performance
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Modern manufacturing backed by advanced engineering.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-8
                -left-8
                hidden
                rounded-3xl
                bg-[#179DF8]
                p-6
                text-white
                shadow-2xl
                shadow-[#179DF8]/30
                md:block
              "
            >
              <Award size={28} />

              <p className="mt-3 text-xl font-black">
                Global Standards
              </p>

              <p className="mt-1 text-sm text-blue-100">
                Precision. Quality. Reliability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="border-y border-slate-100 bg-[#F7FCFF] px-5 py-12 lg:px-8">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl
                border
                border-[#179DF8]/10
                bg-white
                p-7
                text-center
                shadow-sm
                transition-shadow
                hover:shadow-xl
                hover:shadow-[#179DF8]/10
              "
            >
              <p className="text-4xl font-black text-[#179DF8]">
                {item.number}
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#179DF8]">
              About KRN
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Advanced thermal solutions for demanding industries.
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              KRN Heat Exchangers & Refrigeration Limited delivers
              high-performance thermal solutions for HVAC,
              refrigeration and industrial applications.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              With modern manufacturing capabilities, engineering
              expertise and strong quality standards, KRN focuses on
              building reliable products designed for long-term
              performance.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Comprehensive thermal product portfolio",
                "Customized engineering solutions",
                "International quality standards",
                "Advanced manufacturing technology",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#179DF8]/10">
                    <CheckCircle2
                      className="text-[#179DF8]"
                      size={18}
                    />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] bg-[#F3FAFF] p-4">

              <img
                src="https://krnheatexchanger.com/wp-content/uploads/slider/cache/843801c099c1286a1bbc5cc5e5eb7edc/3.jpg"
                alt="KRN Factory"
                className="
                  h-[520px]
                  w-full
                  rounded-[28px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />
            </div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="
                absolute
                -bottom-8
                left-5
                max-w-[280px]
                rounded-3xl
                bg-white
                p-6
                shadow-2xl
                shadow-[#179DF8]/15
                md:-left-8
              "
            >
              <Factory
                className="text-[#179DF8]"
                size={30}
              />

              <p className="mt-4 text-xl font-black">
                Built for Performance
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Modern manufacturing backed by engineering expertise
                and quality control.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="bg-[#F5FBFF] px-5 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#179DF8]">
              Why KRN
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Engineering capabilities that create value.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Combining manufacturing expertise, innovation and
              stringent quality standards to deliver reliable thermal
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-[28px]
                  border
                  border-slate-100
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#179DF8]/30
                  hover:shadow-2xl
                  hover:shadow-[#179DF8]/10
                "
              >
                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#179DF8]/10
                    text-[#179DF8]
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:bg-[#179DF8]
                    group-hover:text-white
                  "
                >
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black transition-colors group-hover:text-[#179DF8]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        id="products"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#179DF8]">
                Our Products
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Complete thermal solutions under one roof.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-500">
              Explore an extensive product portfolio designed for
              industrial, commercial and refrigeration applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    min-h-[340px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-slate-100
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#179DF8]/30
                    hover:shadow-2xl
                    hover:shadow-[#179DF8]/10
                  "
                >

                  <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#179DF8]/5 transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-[#179DF8]/10" />

                  <div className="relative flex items-center justify-between">

                    <span className="text-sm font-black text-[#179DF8]">
                      0{index + 1}
                    </span>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#179DF8]/10
                        text-[#179DF8]
                        transition-all
                        duration-300
                        group-hover:bg-[#179DF8]
                        group-hover:text-white
                      "
                    >
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="relative mt-16">

                    <h3 className="text-2xl font-black transition-colors group-hover:text-[#179DF8]">
                      {product.name}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-500">
                      {product.desc}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-900 transition-colors group-hover:text-[#179DF8]">

                      View Products

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Refrigerator Components",
              "Sheet Metal",
              "Tubings",
              "Bus AC",
            ].map((item) => (
              <motion.span
                key={item}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="
                  cursor-pointer
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-5 py-3
                  text-sm
                  font-bold
                  text-slate-600
                  transition-colors
                  hover:border-[#179DF8]
                  hover:text-[#179DF8]
                "
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}

      <section
        id="quality"
        className="bg-[#F5FBFF] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#179DF8]">
              Quality & Compliance
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Certified to global standards.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              KRN follows international standards across quality,
              environmental management, occupational safety and
              product compliance.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg shadow-[#179DF8]/5">

              <ShieldCheck
                className="text-[#179DF8]"
                size={36}
              />

              <p className="mt-4 text-xl font-black">
                Quality First
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                Precision manufacturing, rigorous testing and
                consistent quality control across every product.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  group
                  flex
                  min-h-[170px]
                  flex-col
                  justify-between
                  rounded-[26px]
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  hover:border-[#179DF8]/40
                  hover:shadow-xl
                  hover:shadow-[#179DF8]/10
                "
              >
                <ShieldCheck
                  className="
                    text-[#179DF8]
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                  size={27}
                />

                <div>
                  <p className="font-black text-slate-900">
                    {item}
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Certified
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY KRN ================= */}

      <section className="px-5 py-24 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[40px]
            bg-[#179DF8]
            px-6
            py-14
            text-white
            shadow-2xl
            shadow-[#179DF8]/20
            md:px-12
            lg:px-16
          "
        >

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">
                Why Choose KRN
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Built with precision.
                <br />
                Engineered for reliability.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Comprehensive Portfolio",
                "Customization Expertise",
                "Global Quality Standards",
                "Innovation & Technology",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    p-5
                    backdrop-blur
                    transition-colors
                    hover:bg-white/20
                  "
                >
                  <CheckCircle2 size={21} />

                  <p className="font-bold">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}

      <section
        id="contact"
        className="px-5 pb-24 lg:px-8"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[40px]
            border
            border-[#179DF8]/15
            bg-[#F4FAFF]
            px-6
            py-20
            text-center
            md:px-14
          "
        >

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#179DF8]/10 blur-[100px]" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#179DF8]/10 text-[#179DF8]">
              <Users size={30} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Looking for the right
              <span className="text-[#179DF8]">
                {" "}thermal solution?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              Connect with KRN to discuss customized heat exchanger,
              HVAC and refrigeration requirements.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="#"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#179DF8]
                  px-7 py-4
                  font-bold
                  text-white
                  shadow-xl
                  shadow-[#179DF8]/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#078CE5]
                "
              >
                Send an Enquiry

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://krnheatexchanger.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-7 py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#179DF8]
                  hover:text-[#179DF8]
                "
              >
                Visit Website

                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-100 bg-white px-5 py-10 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

          <div>
            <p className="text-lg font-black text-slate-950">
              KRN
              <span className="ml-2 text-[#179DF8]">
                Heat Exchangers
              </span>
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Engineering Efficiency. Delivering Excellence.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Modern Website UI Concept
          </p>
        </div>
      </footer>
    </main>
  );
}