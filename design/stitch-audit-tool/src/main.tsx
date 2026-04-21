import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'

const stitchImages = [
  "blog.png", "briefing.png", "dashboard.png", "interaction_sub_flows_alerts_logic.png",
  "lightcraft_roar_the_den_dashboard.png", "lightcraft_roar_the_primal_collective_hub.png",
  "logo.png", "master_manifest_the_primal_blueprint_v2.0_zero_distortion.png",
  "nexus_hub_code_export_obsidian_dark.png", "nexus_hub_obsidian_dark_final_crystallization.png",
  "obsidian_dashboard_crm_management.png", "portfolio.png",
  "primal_marketplace_lightcraft_roar_final_crystallization.png", "quoting.png",
  "system_resonance_the_artisanal_pulse_lightcraft_roar.png", "the_apex_immersive_portfolio.png",
  "the_apex_vision_help_center.png", "the_checkout_primal_transaction.png",
  "the_creative_hub_worker_dashboard.png", "the_den_command_center.png",
  "the_den_treasury_tokens.png", "the_echo_code_export_final_crystallization.png",
  "the_echo_social_sharing_viral_tools.png", "the_echo_social.png", "the_echo_viral_dynamics_team_buys.png",
  "the_echo_viral_engine_final_crystallization.png", "the_echo_viral_hunt_team_buy_dynamics.png",
  "the_hunt_s_success_lightcraft_roar_variation_1.png", "the_hunt_s_success_obsidian_dark_variation_1.png",
  "the_hunt_shopping_cart_wishlist.png", "the_journal_illustrative_edition.png",
  "the_journal_multimedia_blog.png", "the_journal_obsidian_roar_article.png",
  "the_marketplace_primal_light_edition.png", "the_media_territory_press_kit_news_nexus.png",
  "the_media_territory.png", "the_pride_membership_registration_nudge.png",
  "the_pride_watch_companion_experience.png", "the_primal_hub_universal_induction_sitemap.png",
  "the_roar_portal_interactive_briefing.png", "the_sub_apex_tiered_subscription_plans.png",
  "the_territory_client_portal_reservations.png", "the_territory_client_portal.png",
  "the_vault_service_marketplace_quoting.png", "the_vault_service_marketplace.png",
  "the_worker_s_den_lightcraft_roar_variation_1.png"
];

const App = () => {
  return (
    <div className="min-h-screen p-12 font-sans">
      <header className="mb-20 space-y-4 border-b border-white/10 pb-12">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter text-pink-500">Stitch Visual Audit</h1>
        <p className="text-white/40 text-xl font-light">Standalone Quality Assurance Tool // {stitchImages.length} Identified Assets</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {stitchImages.map((img, i) => (
          <motion.div 
            key={img}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="group"
          >
            <div className="aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 relative group-hover:border-pink-500/50 transition-all shadow-2xl">
              <img 
                src={`/assets/stitch/${img}`} 
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" 
                alt={img} 
              />
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="mt-6 px-2 flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-pink-500">{img.replace('.png', '').replace(/_/g, ' ')}</p>
                <p className="text-[8px] uppercase font-bold text-white/20 mt-1">Ref: Cloud-Stitch-API</p>
              </div>
              <a 
                href={`/assets/stitch/${img}`} 
                target="_blank" 
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
