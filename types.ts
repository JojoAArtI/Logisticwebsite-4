
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum BotStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING'
}
