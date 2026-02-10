
export interface PortfolioContent {
  professionalSummary: string;
  serviceOfferings: {
    title: string;
    description: string;
    category: 'Data' | 'Design' | 'Hybrid';
  }[];
}

export enum SkillType {
  DATA = 'DATA',
  DESIGN = 'DESIGN',
  HYBRID = 'HYBRID'
}
