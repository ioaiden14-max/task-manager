import { useEffect, useState } from "react";

function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = [];

      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          duration: 5 + Math.random() * 5,
          delay: Math.random() * 5,
          size: 8 + Math.random() * 10,
        });
      }

      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return (
    <div className="petals">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Petals;