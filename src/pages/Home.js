import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}           // Starting state
      animate={{ opacity: 1 }}           // Ending state
      transition={{ duration: 0.5 }}     // Duration of the transition
    >
      <h1>Welcome to My Portfolio</h1>
      <p>This is where I showcase my projects and skills.</p>
    </motion.div>
  );
}

export default Home;
