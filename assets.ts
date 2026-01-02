
import { View } from './types';

// L'URL exacte de ton dossier sur Google Cloud Storage
const BASE_GCS_URL = "https://storage.googleapis.com/novelec_assets/MF%20PROD/";

/**
 * Utilitaire pour générer proprement les URLs
 */
const getAsset = (path: string) => `${BASE_GCS_URL}${path}`;

export const ASSETS = {
  // Images des prestations - Sélection thématique haute qualité optimisée
  PRESTATIONS: {
    // SPECTACLES : Image de scène silhouette (impact fort)
    SPECTACLES: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", 
    COACHING: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80", 
    // ATELIER : Travail de troupe et mise en scène
    ATELIER: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80", 
    ANIMATION: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80", 
    VOIX_OFF: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80", 
    // STAGES : Nouveau visuel - Immersion et perfectionnement (Microphone Pro / Studio)
    STAGES: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80", 
  },

  // Saison 2026 - Liens GCS fournis
  SHOWS_2026: [
    { id: "pop", url: getAsset("POP%20S26.webp"), title: "Rois & Reines de la Pop" },
    { id: "girls", url: getAsset("GIRLS%20S26.webp"), title: "Music's Girls" },
    { id: "coco", url: getAsset("COCO%20S26.webp"), title: "COCO" },
    { id: "curie", url: getAsset("MARIE%20S26.webp"), title: "Marie Curie" },
    { id: "boogie", url: getAsset("BOOGIE%20S26.webp"), title: "Boogie Wonderland" },
    { id: "exploratrices", url: getAsset("EXP%20S26.webp"), title: "Nouvelles Exploratrices" },
  ],

  // Partenaires
  PARTNERS: [
    getAsset("Partenaire%201.webp"),
    getAsset("Partenaire%202.webp"),
    getAsset("Partenaire%203.webp"),
    getAsset("Partenaire%204.webp"),
    getAsset("Partenaire%205.webp"),
    getAsset("Partenaire%206.webp"),
    getAsset("Partenaire%207.webp"),
  ],

  // Historique des spectacles - Mises à jour avec les nouveaux liens directs
  HISTORY: {
    FEVER: getAsset("SPETACLES/_coaching-vocal-drome-ardeche__Affiche-groupe-fever-1.webp"),
    SUPER60: getAsset("SPETACLES/_spectacles__Affiche_spectacle_super_60_TOP_90_MF_PROD-e1745354500563.webp"),
    SUPERSTARS: getAsset("SPETACLES/affiche__superstars-1-768x1086.webp"),
    NOEL: getAsset("SPETACLES/_spectacles__Affiche-livre-brise-de-noel-724x1024.webp"),
    CABARET: getAsset("SPETACLES/_creation-spectacle__Affiche-Magic-Cabaret-.webp"),
    LOLA: getAsset("SPETACLES/_spectacles__Affiche-lola-disco-724x1024.webp"),
    VOLEUR: getAsset("SPETACLES/_spectacles__Affiche_Le_voleur_de_Noel_MF_PROD-724x1024.webp"),
    HEROINES: getAsset("SPETACLES/_spectacles__Affiche-les-supers-heroines-et-la-potion-de-noel-1-731x1024.webp"),
    ZAPPING: getAsset("SPETACLES/_creation-spectacle__Affiche-Zapping-Folies.webp"),
    MUSIQUE: getAsset("SPETACLES/_creation-spectacle__Affiche-Musique-je-vous-aime-2-.webp")
  },

  // Photos de Mikaël & Équipe
  BIO: {
    MIKAEL_PORTRAIT: getAsset("Photo%20a%20propos%20Mikael.webp"),
    MIKAEL_STAGE: getAsset("bio/mikael_action.webp"),
  },

  /**
   * GÉNÉRATION AUTOMATIQUE DE LA GALERIE (50 IMAGES)
   */
  GALLERY: Array.from({ length: 50 }, (_, i) => getAsset(`galerie/photo-${i + 1}.webp`))
};
