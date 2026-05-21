// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import icon1 from "../../../assets/icon_1.png";
import icon2 from "../../../assets/icon_2.png";
import icon3 from "../../../assets/icon_3.png";
import icon4 from "../../../assets/icon_4.png";
import icon5 from "../../../assets/icon_5.png";
import icon6 from "../../../assets/icon_6.png";

const FEATURES = [
  {
    id: 1,
    title: "Smart Asset Tracking",
    desc: "Monitor and manage all company assets in real time with complete visibility.",
    image: icon1,
  },
  {
    id: 2,
    title: "Automated Assignment Workflow",
    desc: "Streamline employee requests and HR approvals with automated workflows.",
    image: icon2,
  },
  {
    id: 3,
    title: "Real-Time Insights",
    desc: "Visual dashboards reveal asset usage, trends, and operational bottlenecks.",
    image: icon3,
  },
  {
    id: 4,
    title: "Multi-Company Support",
    desc: "Employees can affiliate with multiple companies seamlessly and securely.",
    image: icon4,
  },
  {
    id: 5,
    title: "Lifecycle Management",
    desc: "Track assignment, usage, return, and condition in one unified system.",
    image: icon5,
  },
  {
    id: 6,
    title: "Security & Role Control",
    desc: "Role-based access ensures secure HR control over all company assets.",
    image: icon6,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Feature = () => {
  return (
    <section className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Powerful Features for Modern HR Teams
          </h2>
          <p className="mt-3 text-gray-800">
            Everything you need to manage assets efficiently across your organization.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {FEATURES.map((f) => {
            return (
              <motion.div
                key={f.id}
                variants={item}
                whileHover={{ y: -6 }}
                className="p-5 bg-white border border-base-200 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-38 h-32 object-cover"
                />

                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;