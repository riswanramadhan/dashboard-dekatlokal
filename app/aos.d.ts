declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    easing?: string;
    delay?: number | ((index: number) => number);
  }

  export function init(options?: AOSOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}
