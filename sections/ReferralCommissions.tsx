"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

const ReferralCommissions = () => {

  const router = useRouter()
  
  return (
    <div className="px-6 lg:px-12 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Referral Commissions</h1>
          <p className="text-slate-400 text-sm">Earn rewards by inviting participants and upgrading your NFT</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Table Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4 text-cyan-400">How It Works</h2>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              To receive referral rewards, you need to mint your unique NFT, invite a participant via your referral
              link, and improve two types of parameters: referral commission and monthly stamp limit.
            </p>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Your commission depends on the level of your NFT and the volume of your referral. An example of the
              percentage deductions is shown in the table below.
            </p>

            <h3 className="text-base font-semibold mb-3 text-magenta-400">Commission by Tier</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-2 px-3 text-sm font-semibold text-slate-300">Tier</th>
                    <th className="text-right py-2 px-3 text-sm font-semibold text-slate-300">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "Tier 1", rate: "0.4%" },
                    { tier: "Tier 2", rate: "0.4%" },
                    { tier: "Tier 3", rate: "0.4%" },
                    { tier: "Tier 4", rate: "0.4%" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="py-1.5 px-3 text-sm text-slate-300">{row.tier}</td>
                      <td className="py-1.5 px-3 text-sm text-right font-mono text-cyan-400">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Info Box */}
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mt-[86px]">
              <p className="text-xs text-cyan-300">
                <span className="font-semibold">Maximum reward:</span> 1.6% for tier 4 with cumulative earnings from all
                tiers (0.4% × 4 = 1.6%)
              </p>
            </div>
          </div>

          {/* Animation Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4 text-magenta-400">Referral NFT System</h2>

            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950/50 to-magenta-900/20 rounded-2xl blur-2xl"></div>
              <video
                src="/images/referral-animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-full object-contain rounded-xl"
              />
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">
              Mint your unique NFT to unlock referral rewards and multi-tier commissions
            </p>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">4 Tiers</div>
            <p className="text-xs text-slate-400">Referral Levels</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-magenta-400 text-xl font-bold mb-1">0.4% Each</div>
            <p className="text-xs text-slate-400">Commission Rate</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">1.6% Max</div>
            <p className="text-xs text-slate-400">Total Reward</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralCommissions
