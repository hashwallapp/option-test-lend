"use client"

import { FC } from "react"
import { ArrowLeft, ChevronRight, Zap, Shield, Wallet, Download, CheckCircle, ExternalLink } from "lucide-react"

const WalletCreation: FC<{ setCurrentView?: (v: string) => void }> = ({ setCurrentView }) => {
  const wallets = [
    {
      name: "Tonkeeper",
      url: "https://tonkeeper.com",
      description: "Most popular TON wallet with a clean interface",
    },
    {
      name: "Wallet ",
      url: "https://wallet.tg/ton",
      description: "Telegram-integrated wallet for seamless mobile trading",
    },
    {
      name: "MyTonWallet",
      url: "https://mytonwallet.io",
      description: "Web-based wallet with advanced features",
    },
  ]

  return (
    <div className="px-6 lg:px-12 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <button
          onClick={() => setCurrentView?.("home")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Creating a Wallet</h1>
          <p className="text-slate-400 text-sm">Set up your TON wallet to start trading on Ton4U</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Instructions Section */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-semibold flex-shrink-0">
                  1
                </span>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Choose a Wallet</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    To work on the platform, you need to create any non-custodial wallet on the TON network and top up
                    its TON balance. Detailed instructions for installing and configuring wallets can be found on their
                    official websites.
                  </p>
                </div>
              </div>

              {/* Wallet Options */}
              <div className="space-y-2 mt-3">
                {wallets.map((wallet, index) => (
                  <a
                    key={index}
                    href={wallet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {wallet.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">{wallet.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-sm font-semibold flex-shrink-0">
                  2
                </span>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Recommended Setup</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We recommend using a separate wallet for trading with a saved seed phrase and no password for
                    signing transactions. This saves time when opening trades.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Recommendation */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-cyan-400">Best Choice: Wallet</h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The wallet imported into Telegram — <strong>Wallet</strong> — works especially well. It natively
                    integrated in Telegram - no extra download, just type "@Wallet" in global search and set up your
                    wallet with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-purple-400">Quick Setup Guide</h2>

            <div className="flex-1 flex flex-col justify-between space-y-4">
              {/* Visual Steps */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Download Wallet</p>
                    <p className="text-xs text-slate-400">Choose from Tonkeeper, Wallet, or MyTonWallet</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Create & Secure</p>
                    <p className="text-xs text-slate-400">Set up your wallet and save your seed phrase</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fund Your Wallet</p>
                    <p className="text-xs text-slate-400">Add TON to your wallet balance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Start Trading</p>
                    <p className="text-xs text-slate-400">Connect to Ton4U and begin trading</p>
                  </div>
                </div>
              </div>

              {/* MOVED: Additional Info Cards */}
              <div className="grid grid-cols-3 gap-2 py-2">
                <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-lg font-bold">3</div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Wallets</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-center">
                  <div className="text-purple-400 text-lg font-bold">Safe</div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Control</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-lg font-bold text-nowrap">0.24 TON</div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Min Bal</p>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-xs text-cyan-300">
                  <span className="font-semibold flex items-center gap-1 mb-1 text-cyan-400">
                    <Shield className="w-3 h-3" /> Security Tip:
                  </span>
                  Never share your seed phrase with anyone. Keep it stored safely offline in a place only you can access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCreation