import React, { useEffect, useState } from 'react';

// Simple SVG gate component
const Gate = ({ type, x, y, active }) => {
  const colors = {
    default: '#ccc',
    active: '#4caf50',
  };
  return (
    <g>
      <rect x={x} y={y} width={60} height={40} rx={10} fill={active ? colors.active : colors.default} stroke="#333" />
      <text x={x + 30} y={y + 25} textAnchor="middle" fontSize="18" fill="#222">{type}</text>
    </g>
  );
};

const LogicGateVisualizer = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);
  const [operation, setOperation] = useState('add');

  // Load WASM
  useEffect(() => {
    const go = new window.Go();
    WebAssembly.instantiateStreaming(fetch('/arithmetic.wasm'), go.importObject).then((result) => {
      go.run(result.instance);
    });
  }, []);

  // Step-by-step animation logic
  useEffect(() => {
    let timer;
    if (step < 3) {
      timer = setTimeout(() => setStep(step + 1), 1000);
    } else {
      // Call WASM function
      if (window.wasmAdd && window.wasmSub) {
        const res = operation === 'add' ? window.wasmAdd(a, b) : window.wasmSub(a, b);
        setResult(res);
      }
    }
    return () => clearTimeout(timer);
  }, [step, a, b, operation]);

  // Gate activation per step
  const gates = [
    { type: 'NAND', x: 20, y: 40, active: step >= 1 },
    { type: operation === 'add' ? 'XOR' : 'XOR', x: 120, y: 40, active: step >= 2 },
    { type: operation === 'add' ? 'AND' : 'Borrow', x: 220, y: 40, active: step >= 3 },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Logic Gate Visualizer</h2>
      <div>
        <label>
          A:
          <input type="number" min="0" max="1" value={a} onChange={e => {setA(Number(e.target.value)); setStep(0); setResult(null);}} />
        </label>
        <label style={{ marginLeft: 20 }}>
          B:
          <input type="number" min="0" max="1" value={b} onChange={e => {setB(Number(e.target.value)); setStep(0); setResult(null);}} />
        </label>
        <select value={operation} onChange={e => {setOperation(e.target.value); setStep(0); setResult(null);}} style={{ marginLeft: 20 }}>
          <option value="add">Addition</option>
          <option value="sub">Subtraction</option>
        </select>
      </div>
      <svg width={320} height={120} style={{ marginTop: 30 }}>
        {gates.map((gate, idx) => (
          <Gate key={idx} {...gate} />
        ))}
        {/* Wires */}
        <line x1={80} y1={60} x2={120} y2={60} stroke="#333" strokeWidth={2} />
        <line x1={180} y1={60} x2={220} y2={60} stroke="#333" strokeWidth={2} />
      </svg>
      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <strong>Result: </strong> {result}
        </div>
      )}
      <div style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
        Step: {step < 3 ? step + 1 : 'Done'}
      </div>
    </div>
  );
};

export default LogicGateVisualizer;
