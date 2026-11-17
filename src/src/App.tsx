
import { useState } from "react";
import {
  Rocket,
  Wallet,
  ShieldCheck,
  Coins,
  Globe,
  ArrowRight,
  CheckCircle2,
  Copy
} from "lucide-react";

export default function App() {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("1000000000");
  const [network, setNetwork] = useState("GIWA Sepolia");
  const [created, setCreated] = useState(false);

  return (
    <main className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Rocket size={22} /></div>
          <div>
            <h2>Ammora</h2>
            <span>LAUNCH STUDIO</span>
          </div>
        </div>

        <nav>
          <div className="nav-item active"><Rocket size={18} /> Token Studio</div>
          <div className="nav-item"><Wallet size={18} /> Wallet</div>
          <div className="nav-item"><ShieldCheck size={18} /> Security</div>
        </nav>

        <div className="sidebar-bottom">
          <span className="online-dot"></span>
          Testnet environment
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">AMMORA PROTOCOL</span>
            <h1>Launch Studio</h1>
          </div>
          <div className="network"><span></span>{network}</div>
        </header>

        <section className="hero">
          <div>
            <span className="hero-label">YOUR TOKEN. YOUR VISION.</span>
            <h2>Build something<br /><span>extraordinary.</span></h2>
            <p>Create and configure your token launch in one simple workspace.</p>
          </div>
          <div className="hero-art"><Coins size={100} strokeWidth={1} /></div>
        </section>

        <div className="section-heading">
          <div>
            <span className="eyebrow">CONFIGURATION</span>
            <h2>Token details</h2>
          </div>
          <span className="step">STEP 01 / 03</span>
        </div>

        <div className="workspace">
          <div className="form-card">
            <label>Token name</label>
            <input
              placeholder="e.g. Ammora Token"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
            />

            <label>Token symbol</label>
            <input
              placeholder="e.g. AMR"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            />

            <label>Total supply</label>
            <input
              type="number"
              value={supply}
              onChange={(e) => setSupply(e.target.value)}
            />

            <label>Blockchain network</label>
            <select value={network} onChange={(e) => setNetwork(e.target.value)}>
              <option>GIWA Sepolia</option>
              <option>Ethereum Sepolia</option>
            </select>

            <button
              className="create-button"
              onClick={() => setCreated(true)}
              disabled={!tokenName.trim() || !symbol.trim() || !supply || Number(supply) <= 0}
            >
              Generate launch preview <ArrowRight size={18} />
            </button>

            {created && (
              <div className="success">
                <CheckCircle2 size={18} />
                Preview generated locally. No token has been deployed.
              </div>
            )}
          </div>

          <div className="preview-card">
            <span className="eyebrow">LIVE PREVIEW</span>
            <div className="token-icon"><Coins size={32} /></div>
            <h3>{tokenName || "Your Token"}</h3>
            <span className="token-symbol">{symbol || "SYMBOL"}</span>
            <div className="preview-divider"></div>
            <div className="preview-row"><span>Total supply</span><strong>{Number(supply || 0).toLocaleString("en-US")}</strong></div>
            <div className="preview-row"><span>Network</span><strong>{network}</strong></div>
            <div className="preview-row"><span>Deployment</span><strong className="pending">Not deployed</strong></div>
            <div className="security-note"><ShieldCheck size={17} /> Review your configuration before deployment.</div>
          </div>
        </div>

        <footer>
          <span>AMMORA LAUNCH STUDIO</span>
          <span>Built for the onchain ecosystem <Globe size={14} /></span>
        </footer>
      </section>
    </main>
  );
}
