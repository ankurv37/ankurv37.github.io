import React, { useEffect, useState } from 'react';

// SVG gate component
const Gate = ({ type, x, y, active }) => {
  const colors = {
    XOR: '#e573b7',
    AND: '#64b5f6',
    OR: '#b39ddb',
    default: '#ccc',
    active: '#4caf50',
  };
  return (
    <g>
      <rect x={x} y={y} width={60} height={40} rx={10} fill={active ? colors.active : colors[type] || colors.default} stroke="#333" />
      <text x={x + 30} y={y + 25} textAnchor="middle" fontSize="18" fill="#222">{type}</text>
    </g>
  );
};

const FullAdderVisualizer = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [cin, setCin] = useState(0);
  const [sum, setSum] = useState(0);
  const [carry, setCarry] = useState(0);
  const [step, setStep] = useState(0);

  // Load WASM and define adder logic
  useEffect(() => {
    if (!window.Go) return;
    const go = new window.Go();
    WebAssembly.instantiateStreaming(fetch('/arithmetic.wasm'), go.importObject).then((result) => {
      go.run(result.instance);
    });
  }, []);

  // Step-by-step animation logic
  useEffect(() => {
    let timer;
    if (step < 5) {
      timer = setTimeout(() => setStep(step + 1), 900);
    } else {
      // Use Go WASM if available, else JS fallback
      if (window.wasmAdd) {
        // Full adder: sum = a XOR b XOR cin, carry = (a AND b) OR (cin AND (a XOR b))
        const abXor = window.wasmAdd(a, b) % 2;
        setSum((abXor ^ cin) % 2);
        setCarry(((a & b) | (cin & abXor)) % 2);
      } else {
        const abXor = a ^ b;
        setSum(abXor ^ cin);
        setCarry((a & b) | (cin & abXor));
      }
    }
    return () => clearTimeout(timer);
  }, [step, a, b, cin]);

  // Gate activation per step
  const gates = [
    { type: 'XOR', x: 100, y: 40, active: step >= 1 },
    { type: 'XOR', x: 250, y: 40, active: step >= 2 },
    { type: 'AND', x: 100, y: 120, active: step >= 3 },
    { type: 'AND', x: 250, y: 120, active: step >= 4 },
    { type: 'OR', x: 400, y: 120, active: step >= 5 },
  ];

  // Wire coordinates for SVG
  const wires = [
    // Inputs to first XOR
    { x1: 40, y1: 60, x2: 100, y2: 60, active: step >= 1 }, // A
    { x1: 40, y1: 100, x2: 100, y2: 60, active: step >= 1 }, // B
    // First XOR to second XOR
    { x1: 160, y1: 60, x2: 250, y2: 60, active: step >= 2 },
    // Cin to second XOR
    { x1: 40, y1: 140, x2: 250, y2: 60, active: step >= 2 },
    // First AND
    { x1: 40, y1: 60, x2: 100, y2: 140, active: step >= 3 }, // A
    { x1: 40, y1: 100, x2: 100, y2: 140, active: step >= 3 }, // B
    // Second AND
    { x1: 40, y1: 140, x2: 250, y2: 140, active: step >= 4 }, // Cin
    { x1: 160, y1: 60, x2: 250, y2: 140, active: step >= 4 }, // abXor
    // OR gate
    { x1: 160, y1: 140, x2: 400, y2: 140, active: step >= 5 }, // AND1
    { x1: 310, y1: 140, x2: 400, y2: 140, active: step >= 5 }, // AND2
    // Outputs
    { x1: 310, y1: 60, x2: 480, y2: 60, active: step >= 5 }, // SUM
    { x1: 460, y1: 140, x2: 480, y2: 140, active: step >= 5 }, // CARRY
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Full Adder Circuit Visualizer</h2>
      <div style={{ marginBottom: 20 }}>
        <label>
          A:
          <input type="number" min="0" max="1" value={a} onChange={e => {setA(Number(e.target.value)); setStep(0);}} />
        </label>
        <label style={{ marginLeft: 20 }}>
          B:
          <input type="number" min="0" max="1" value={b} onChange={e => {setB(Number(e.target.value)); setStep(0);}} />
        </label>
        <label style={{ marginLeft: 20 }}>
          Cin:
          <input type="number" min="0" max="1" value={cin} onChange={e => {setCin(Number(e.target.value)); setStep(0);}} />
        </label>
      </div>
      <svg width={520} height={200} style={{ background: '#222', borderRadius: 10 }}>
        {/* Inputs */}
        <circle cx={40} cy={60} r={10} fill="#e53935" />
        <circle cx={40} cy={100} r={10} fill="#e53935" />
        <circle cx={40} cy={140} r={10} fill="#e53935" />
        {/* Gates */}
        {gates.map((gate, idx) => (
          <Gate key={idx} {...gate} />
        ))}
        {/* Wires */}
        {wires.map((wire, idx) => (
          <line key={idx} x1={wire.x1} y1={wire.y1} x2={wire.x2} y2={wire.y2} stroke={wire.active ? '#ff1744' : '#555'} strokeWidth={3} />
        ))}
        {/* Outputs */}
        <circle cx={480} cy={60} r={10} fill="#e53935" />
        <text x={500} y={65} fill="#fff" fontSize={16}>SUM</text>
        <circle cx={480} cy={140} r={10} fill="#e53935" />
        <text x={500} y={145} fill="#fff" fontSize={16}>CARRY</text>
      </svg>
      <div style={{ marginTop: 20, color: '#fff', fontSize: 18 }}>
        <strong>SUM:</strong> {sum} &nbsp; <strong>CARRY:</strong> {carry}
      </div>
      <div style={{ marginTop: 10, fontSize: 14, color: '#aaa' }}>
        Step: {step < 5 ? step + 1 : 'Done'}
      </div>
    </div>
  );
};

export default FullAdderVisualizer;
