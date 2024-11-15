import { useEffect } from "react";
import particlesConfig from "../../assets/particles.json";
import styles from "./Particles.module.css"

function Particles() {
  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {

        window.particlesJS("particles-js", particlesConfig, () => {
          console.log("callback - particles.js config loaded");
        });
      } else {
        console.log("particles.js não foi carregado corretamente.");
      }
    };
    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={styles.particlesContainer} id="particles-js"></div>
    </>
  );
}

export default Particles;
